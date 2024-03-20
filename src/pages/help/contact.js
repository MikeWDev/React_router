import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact" />
      <div className="contact-field">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
      </div>
      <div className="contact-field">
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
      </div>
      <button>Submit</button>
      {data && data.error && <p>{data.error}</p>}
      <Form />
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  if (submission.message.lenght < 10) {
    return { error: "Message must be over 10 chatacters long " };
  }
  return redirect("/");
};
