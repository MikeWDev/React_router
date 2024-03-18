export default function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form>
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
      </form>
    </div>
  );
}
