import Footer from "./Components/Footer";
import Form from "./Components/Form";
import SuccessMessage from "./Components/SuccessMessage";
import { ErrorProvider } from "./Context/ErrorContext";
import { useInputValue } from "./Context/InputValueContext";

function App() {
  const { successState } = useInputValue();

  return (
    <main>
      {successState && <SuccessMessage />}
      <ErrorProvider>
        <Form />
        <Footer />
      </ErrorProvider>
    </main>
  );
}

export default App;
