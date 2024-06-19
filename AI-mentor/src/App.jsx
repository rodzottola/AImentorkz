import "bootstrap/dist/css/bootstrap.min.css";
import ChatForm from "./components/chatForm/ChatForm";
import FootPage from "./components/footPage/FootPage";
import HeaderPage from "./components/headerPage/HeaderPage";

const App = () => {

  return (
    <>
      <HeaderPage />
      <ChatForm />
      <FootPage />
    </>
  );
};

export default App;