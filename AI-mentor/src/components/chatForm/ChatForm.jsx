const ChatForm = () => {
    return (
        <>
            <section className="p-5">
                <form action="" method="" className="border border-primary rounded p-2">
                    <fieldset>
                        <legend className="text-center">¿En que puedo ayudarte?</legend>
                        <section><label htmlFor="preg" className="form-label">Escribe tu pregunta:</label>
                            <input type="text" name="pregunta" id="preg" className="form-control" />
                        </section>
                        <section>
                            <input type="submit" value="Preguntar" className="btn btn-primary form-control mt-2" />
                        </section>
                    </fieldset>
                </form>
            </section>
        </>
    );
};

export default ChatForm;