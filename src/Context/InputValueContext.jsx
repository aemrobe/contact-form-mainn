import { createContext, useContext, useState } from "react";

const InputValueContext = createContext();

const InputValueProvider = function ({ children }) {
  // Success State
  const [successState, setSuccessState] = useState(false);

  //Input Values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState(null);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  return (
    <InputValueContext.Provider
      value={{
        successState,
        setSuccessState,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        queryType,
        setQueryType,
        message,
        setMessage,
        consent,
        setConsent,
      }}
    >
      {children}
    </InputValueContext.Provider>
  );
};

const useInputValue = function () {
  const context = useContext(InputValueContext);

  if (context === undefined)
    throw new Error(
      "You're using inputvaluecontext outside of inputvalue provider"
    );

  return context;
};

export { InputValueProvider, useInputValue };
