import InputControl from "./InputControl";

function Form() {
  <div>
    Contact Us First Name This field is required Last Name This field is
    required Email Address Please enter a valid email address This field is
    required Query Type General Enquiry Support Request Please select a query
    type Message This field is required I consent to being contacted by the team
    To submit this form, please consent to being contacted Submit Message Sent!
    Thanks for completing the form. We'll be in touch soon!
  </div>;
  return (
    <form action="#">
      <h1 className="karla-bold">Contact Us</h1>

      {/* Name Field */}
      <div>
        <InputControl type={"first-name"} />
        <InputControl type={"last-name"} />
      </div>

      {/* Email Address */}
      <InputControl type={"email-address"} />

      {/* Query Type */}
      <div className="input-control">
        <label htmlFor="support">
          Query Type <span>*</span>
        </label>

        <div>
          <span>
            <input
              type="radio"
              name="Query Type"
              value="Support Request"
              id="support"
            />
            <label htmlFor="support">Support Request</label>
          </span>

          <span>
            <input
              type="radio"
              name="Query Type"
              id="general"
              value="General Enquiry"
            />
            <label htmlFor="general">General Enquiry</label>
          </span>
        </div>
      </div>

      {/* Message */}
      <InputControl type={"message"} />

      {/*Consent*/}
      <div>
        <input type="checkbox" name="" id="accept" />
        <label htmlFor="accept">
          I consent to being contracted by the team
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
