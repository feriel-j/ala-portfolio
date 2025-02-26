import React, { useContext, useState } from "react";
import { refContext } from "../layouts/MainLayout";
import ExecuteScrollComponent from "../../../utils/ExecuteScrollComponent";
import Input from "../../../components/inputs/Input";
import emailjs from "@emailjs/browser";
import "../../../_dist/ContactUs.css";
import ButtonPrimary from "../../../components/ButtonPrimary";
import Message from "../../../components/messages/Message";
import useFormValidation from "../../../hooks/UseValidationForm";
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

interface ContactUsProps extends React.HTMLAttributes<HTMLFormElement> {
  id?: string;
}
const ContactUs = ({ ...props }: ContactUsProps) => {
  const myTopRef = useContext(refContext);

  const [sendMessage, setSendMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Use the custom hook
  const { errors, setErrors, validateField, validateForm } =
    useFormValidation();

  const handleChange = (field: keyof typeof sendMessage, value: string) => {
    setSendMessage((prevState) => ({ ...prevState, [field]: value }));
  };

  //email js

  const [hasShowResult, setHasShowresult] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  // Handle blur (validate on blur)
  const handleBlur = (field: keyof typeof sendMessage) => {
    const error = validateField(field, sendMessage[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };
  const handleClearErrors = () => {
    setErrors({
      name: "",
      email: "",
      message: "",
    });
  };
  //onSubmit dunction ------------------------------

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the entire form
    const isFormValid = validateForm(sendMessage);

    if (!isFormValid) {
      console.log("Form has errors. Submission blocked.");
      return;
    }

    const formElement = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        formElement,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setErrorMessage(false);
        },
        (error) => {
          console.log(error.text);
          setErrorMessage(true);
        }
      );

    setHasShowresult(true);

    setTimeout(() => {
      setHasShowresult(false);
    }, 3000);
    formElement.reset();
    setSendMessage({
      name: "",
      email: "",
      message: "",
    });
    handleClearErrors;
  };

  return (
    <form
      {...props} tabIndex={0} noValidate
      onSubmit={sendEmail}
      className="contact-up-container"
      onBlur={() => handleClearErrors()}>
      <Input
        type="text"
        placeholder="name"
        name="name"
        value={sendMessage.name}
        onBlur={() => handleBlur("name")}
        onChange={(e: InputChangeEvent) => {
          e.stopPropagation();
          handleChange("name", e.target.value);
        }}
      />
      {errors.name && <Message type="warning">{errors.name}</Message>}{" "}
      <Input
        type="email"
        placeholder="email"
        name="email"
        value={sendMessage.email}
        onBlur={() => handleBlur("email")}
        onChange={(e: InputChangeEvent) => {
          e.stopPropagation();
          handleChange("email", e.target.value);
        }}
      />
      {errors.email && <Message type="warning">{errors.email}</Message>}
      <textarea
        rows={10}
        className="contact-textarea"
        placeholder="message"
        value={sendMessage.message}
        name="message"
        onBlur={() => handleBlur("email")}
        onChange={(e: TextAreaChangeEvent) => {
          e.stopPropagation();
          handleChange("message", e.target.value);
        }}
      />
      {errors.message && <Message type="warning">{errors.message}</Message>}
      <ButtonPrimary
        disabled={hasShowResult ? true : false}
        className={`contact-submit-button ${hasShowResult ? "disabled" : ""}`}
        type="submit">
        Send Message
      </ButtonPrimary>
      {hasShowResult ? (
        errorMessage ? (
          <Message type="error">Form has errors. Submission blocked.</Message>
        ) : (
          <Message type="success">
            Your message has been successfully sent.{" "}
          </Message>
        )
      ) : null}
      <ExecuteScrollComponent scrollRef={myTopRef} />
    </form>
  );
};

export default ContactUs;
