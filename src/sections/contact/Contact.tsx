import React from "react";
import { Container } from "../../components/Container";
import { ScrollSnapWrapper } from "../../components/ScrollSnapWrapper";
import { useForm, CardElement, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xnqyzayg");

  if (state.succeeded) {
    return <div>Payment has been handled successfully!</div>;
  }
  return (
    <ScrollSnapWrapper>
      {" "}
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({ name: "mike" });
          }}
        >
          <div>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
          </div>
          <div>
            <label htmlFor="messsage">Message</label>
            <textarea id="messsage" name="message" rows={4} />
          </div>

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Handling payment..." : "Pay"}
          </button>
        </form>
      </Container>
    </ScrollSnapWrapper>
  );
};
