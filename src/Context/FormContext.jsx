import { createContext, useContext, useState } from "react";

const FormContext = createContext();

function FormProvider({ children }) {
  const [successState, setSuccessState] = useState(false);
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorQueryType, setErrorQueryType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorConsent, setErrorConsent] = useState("");

  return (
    <FormContext.Provider
      value={{
        successState,
        setSuccessState,
        errorFirstName,
        setErrorFirstName,
        errorLastName,
        setErrorLastName,
        errorEmail,
        setErrorEmail,
        errorQueryType,
        setErrorQueryType,
        errorMessage,
        setErrorMessage,
        errorConsent,
        setErrorConsent,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormContext);

  if (context === undefined)
    throw new Error("you are using form value outside of fthe form provider");

  return context;
}

export { FormProvider, useForm };
