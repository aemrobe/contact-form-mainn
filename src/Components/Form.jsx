import { useRef, useState } from "react";
import Consent from "./Consent";
import InputControl from "./InputControl";
import Message from "./Message";
import QueryTypeInputControl from "./QueryTypeInputControl";
import SubmitBtn from "./SubmitBtn";
import { useForm } from "../Context/FormContext";

function Form() {
  // Errors
  const {
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
  } = useForm();

  //Elements
  const FirstNameEl = useRef(null);
  const LastNameEl = useRef(null);
  const EmailEl = useRef(null);
  const MessageEl = useRef(null);

  //Radio Buttons
  const GeneralEnquiryOption = useRef(null);
  const SupportRequestOption = useRef(null);

  //CheckBox
  const ConsetCheckBox = useRef(null);

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
    const isOption1Checked = GeneralEnquiryOption.current.checked;
    const isOption2Checked = SupportRequestOption.current.checked;

    return !isOption1Checked && !isOption2Checked
      ? "Please select a query type"
      : null;
  };

  const validateConsent = function () {
    const checkBoxChecked = ConsetCheckBox.current.checked;

    console.log("checkbox", checkBoxChecked);

    return !checkBoxChecked
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

  const handleFormSubmit = function (e) {
    const formError = [];

    e.preventDefault();

    const fields = [
      {
        element: FirstNameEl.current,
        validators: [validateRequired],
        setError: setErrorFirstName,
      },
      {
        element: LastNameEl.current,
        validators: [validateRequired],
        setError: setErrorLastName,
      },
      {
        element: EmailEl.current,
        validators: [validateRequired, validateEmail],
        setError: setErrorEmail,
      },
      {
        element: GeneralEnquiryOption,
        validators: [validateQueryType],
        setError: setErrorQueryType,
      },
      {
        element: MessageEl.current,
        validators: [validateRequired],
        setError: setErrorMessage,
      },
      {
        element: ConsetCheckBox,
        validators: [validateConsent],
        setError: setErrorConsent,
      },
    ];

    for (const field of fields) {
      console.log("field", field);
      const fieldError = validateField(field.validators, field.element.value);

      if (fieldError) {
        field.setError(fieldError);
        formError.push(fieldError);
      } else {
        field.setError("");
      }
    }

    if (formError.length === 0) {
      setSuccessState(true);
    } else {
      setSuccessState(false);
    }
  };

  return (
    <form action="#" onSubmit={handleFormSubmit}>
      <h1 className="karla-bold">Contact Us</h1>
      {/* Name Field */}
      <div>
        <InputControl
          error={errorFirstName}
          type={"first-name"}
          element={FirstNameEl}
        />
        <InputControl
          error={errorLastName}
          type={"last-name"}
          element={LastNameEl}
        />
      </div>
      {/* Email Address */}
      <InputControl
        error={errorEmail}
        type={"email-address"}
        element={EmailEl}
      />
      {/* Query Type */}
      <QueryTypeInputControl
        error={errorQueryType}
        general={GeneralEnquiryOption}
        support={SupportRequestOption}
      />
      {/* Message */}
      <Message element={MessageEl} error={errorMessage} />
      {/*Consent*/}
      <Consent element={ConsetCheckBox} error={errorConsent} />
      {/* Submit button */}
      <SubmitBtn />
    </form>
  );
}

export default Form;
