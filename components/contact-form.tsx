// Netlify-backed inquiry form. The data-netlify attributes, the hidden
// form-name field, and the field names are preserved from the original site so
// the existing Netlify Forms endpoint keeps working — only the styling changed.
export function ContactForm({
  eyebrow = "Private Inquiry",
  title = "Tell us what kind of companion you're hoping for",
  description = "Share your ideal size, color, city, and timing. We'll guide you toward the most fitting current or upcoming puppy.",
  buttonLabel = "Send Inquiry",
  formName = "puppy-inquiry"
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  formName?: string;
}) {
  return (
    <section className="block form-block">
      <div className="block-eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p style={{ marginBottom: 22, maxWidth: 560 }}>{description}</p>
      <form className="form" name={formName} method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value={formName} />
        <p hidden>
          <label>
            Do not fill this out: <input name="bot-field" />
          </label>
        </p>
        <div className="form-row split">
          <div className="form-row">
            <label htmlFor={`${formName}-name`}>Full name</label>
            <input id={`${formName}-name`} name="name" type="text" autoComplete="name" />
          </div>
          <div className="form-row">
            <label htmlFor={`${formName}-email`}>Email</label>
            <input id={`${formName}-email`} name="email" type="email" autoComplete="email" />
          </div>
        </div>
        <div className="form-row split">
          <div className="form-row">
            <label htmlFor={`${formName}-phone`}>Phone</label>
            <input id={`${formName}-phone`} name="phone" type="tel" autoComplete="tel" />
          </div>
          <div className="form-row">
            <label htmlFor={`${formName}-city`}>Preferred city</label>
            <input id={`${formName}-city`} name="city" type="text" />
          </div>
        </div>
        <div className="form-row split">
          <div className="form-row">
            <label htmlFor={`${formName}-color`}>Preferred color</label>
            <input id={`${formName}-color`} name="preferredColor" type="text" />
          </div>
          <div className="form-row">
            <label htmlFor={`${formName}-gender`}>Preferred gender</label>
            <input id={`${formName}-gender`} name="preferredGender" type="text" />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor={`${formName}-message`}>Message</label>
          <textarea
            id={`${formName}-message`}
            name="message"
            placeholder="Tell us about the lifestyle, size, or temperament you have in mind"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          {buttonLabel}
        </button>
      </form>
    </section>
  );
}
