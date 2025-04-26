import Footer from "./Components/Footer";
import Form from "./Components/Form";
import SuccessMessage from "./Components/SuccessMessage";
import { useForm } from "./Context/FormContext";

function App() {
  const { successState } = useForm();

  return (
    <>
      {successState && <SuccessMessage />}
      <Form />
      <Footer />
    </>
  );
}

export default App;
