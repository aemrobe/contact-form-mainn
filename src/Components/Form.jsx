import Consent from "./Consent";
import InputControl from "./InputControl";
import Message from "./Message";
import QueryTypeInputControl from "./QueryTypeInputControl";
import SubmitBtn from "./SubmitBtn";
import { useError } from "../Context/ErrorContext";
import { useInputValue } from "../Context/InputValueContext";
import styles from "./Form.module.css";

function Form() {
  // Errors
  const {
    errorFirstName,
    setErrorFirstName,
    errorLastName,
    setErrorLastName,
    errorEmail,
    setErrorEmail,
    setErrorQueryType,
    setErrorMessage,
    setErrorConsent,
  } = useError();

  // InputValues and SuccessState
  const {
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
  } = useInputValue();

  // Validators
  function validateRequired(value) {
    return value === "" ? "This field is required" : null;
  }

  const validateEmail = function (value) {
    return /^([a-zA-Z\d'.-]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/.test(
      value
    )
      ? null
      : "Please enter a valid email address";
  };

  const validateQueryType = function () {
    return !queryType ? "Please select a query type" : null;
  };

  const validateConsent = function () {
    return !consent
      ? "To submit this form, please consent to be contacted"
      : null;
  };

  //A function which applies a set of validators on an input value
  function validateField(validators, value) {
    for (const validator of validators) {
      const error = validator(value);

      if (error) return error;
    }

    return null;
  }

  //Fields
  const fields = [
    {
      value: firstName,
      validators: [validateRequired],
      setError: setErrorFirstName,
    },
    {
      value: lastName,
      validators: [validateRequired],
      setError: setErrorLastName,
    },
    {
      value: email,
      validators: [validateRequired, validateEmail],
      setError: setErrorEmail,
    },
    {
      value: queryType,
      validators: [validateQueryType],
      setError: setErrorQueryType,
    },
    {
      value: message,
      validators: [validateRequired],
      setError: setErrorMessage,
    },
    {
      value: consent,
      validators: [validateConsent],
      setError: setErrorConsent,
    },
  ];

  const handleFormSubmit = function (e) {
    const formError = [];

    e.preventDefault();

    for (const field of fields) {
      console.log("field", field);
      const fieldError = validateField(field.validators, field.value);

      if (fieldError) {
        field.setError(fieldError);
        formError.push(fieldError);
      } else {
        field.setError("");
      }
    }

    if (formError.length === 0) {
      setSuccessState(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setQueryType(null);
      setMessage("");
      setConsent(false);
    } else {
      setSuccessState(false);
    }
  };

  return (
    <form
      action="#"
      onSubmit={handleFormSubmit}
      className={`${successState && "margin-top-0"}`}
    >
      <h1 className="karla-bold">Contact Us</h1>
      {/* Name Field */}
      <div className={`${styles["input-control-wrapper"]}`}>
        <InputControl
          inputValue={firstName}
          setInputValue={setFirstName}
          error={errorFirstName}
          type={"first-name"}
        />
        <InputControl
          inputValue={lastName}
          setInputValue={setLastName}
          error={errorLastName}
          type={"last-name"}
        />
      </div>
      {/* Email Address */}
      <InputControl
        inputValue={email}
        setInputValue={setEmail}
        error={errorEmail}
        type={"email-address"}
      />
      {/* Query Type */}
      <QueryTypeInputControl />
      {/* Message */}
      <Message />
      {/*Consent*/}
      <Consent />
      {/* Submit button */}
      <SubmitBtn />
    </form>
  );
}

export default Form;
