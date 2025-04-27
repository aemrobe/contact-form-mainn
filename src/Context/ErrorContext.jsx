import { createContext, useContext, useState } from "react";

const ErrorContext = createContext();

function ErrorProvider({ children }) {
  //Errors
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorQueryType, setErrorQueryType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorConsent, setErrorConsent] = useState("");

  return (
    <ErrorContext.Provider
      value={{
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
    </ErrorContext.Provider>
  );
}

function useError() {
  const context = useContext(ErrorContext);

  if (context === undefined)
    throw new Error("you are using form value outside of fthe form provider");

  return context;
}

export { ErrorProvider, useError };
