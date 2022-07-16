const newMessage = {
    message:"new Message",
    title: "Hola"
};

const getMessage = () => {
    return "Soy un H1"
}

export const FirstApp = () => {

  return (
    <>
        <h1>{getMessage()}</h1>
        <code>{JSON.stringify(newMessage)}</code>
        <p>Soy un subtitulo</p>
    </>
  )
}
