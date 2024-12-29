import CardQuest from "../components/cardQuest/CardQuest";
import { useEffect, useState } from "react";

const Questions = () => {

    const [preguntas, setPreguntas] = useState([]);

    const obtenerPreguntas = async () => {
        const preguntasApi = await fetch('http://localhost:3000/api/preguntas');
        const data = await preguntasApi.json();
        console.log(data.preguntas);
        setPreguntas(data.preguntas);
    };
    useEffect(() => {

        obtenerPreguntas();
    }, [])

    return (
        <>
            {
                preguntas.map((pregunta) =>
                    <CardQuest titulo={pregunta.preguntaUsuario} contenido={pregunta.respuestaIA} key={pregunta._id} />
                )
            }
        </>
    );
};

export default Questions;