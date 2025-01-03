// const ChatForm = () => {
//     return (
//         <>
//             <section className="p-5">
//                 <form action="" method="" className="border border-primary rounded p-2">
//                     <fieldset>
//                         <legend className="text-center">¿En que puedo ayudarte?</legend>
//                         <section><label htmlFor="preg" className="form-label">Escribe tu pregunta:</label>
//                             <input type="text" name="pregunta" id="preg" className="form-control" />
//                         </section>
//                         <section>
//                             <input type="submit" value="Preguntar" className="btn btn-primary form-control mt-2" />
//                         </section>
//                     </fieldset>
//                 </form>
//             </section>
//         </>
//     );
// };

// export default ChatForm;

import React, { useState } from "react";

const ChatForm = () => {
    const [pregunta, setPregunta] = useState(""); // Estado para la pregunta
    const [respuesta, setRespuesta] = useState(null); // Estado para la respuesta
    const [error, setError] = useState(null); // Estado para errores

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evitar que la página se recargue
        setError(null); // Limpiar errores previos
        setRespuesta(null); // Limpiar respuesta previa

        try {
            const response = await fetch("https://aimentor-back.onrender.com/api/preguntas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ pregunta }), // Enviar la pregunta al backend
            });

            const data = await response.json();

            if (response.ok) {
                setRespuesta(data.respuestaIA); // Mostrar la respuesta obtenida
            } else {
                setError(data.error || "Error al obtener la respuesta."); // Manejar errores
            }
        } catch (err) {
            setError("Error al conectarse al servidor."); // Manejar errores de conexión
        }
    };

    return (
        <section className="p-5">
            <form onSubmit={handleSubmit} className="border border-primary rounded p-2">
                <fieldset>
                    <legend className="text-center">¿En qué puedo ayudarte?</legend>
                    <section>
                        <label htmlFor="preg" className="form-label">Escribe tu pregunta:</label>
                        <input
                            type="text"
                            name="pregunta"
                            id="preg"
                            className="form-control"
                            value={pregunta} // Enlazar el estado
                            onChange={(e) => setPregunta(e.target.value)} // Actualizar el estado
                            required
                        />
                    </section>
                    <section>
                        <input
                            type="submit"
                            value="Preguntar"
                            className="btn btn-primary form-control mt-2"
                        />
                    </section>
                </fieldset>
            </form>
            {respuesta && (
                <div className="mt-3 alert alert-success">
                    <strong>Respuesta:</strong> {respuesta}
                </div>
            )}
            {error && (
                <div className="mt-3 alert alert-danger">
                    <strong>Error:</strong> {error}
                </div>
            )}
        </section>
    );
};

export default ChatForm;
