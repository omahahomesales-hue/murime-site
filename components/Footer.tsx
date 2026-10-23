import { site } from "@/content/site";

export function Footer() {
  const { contact, social } = site;
  return (
    <footer className="site-footer">
      <div className="contact-grid">
        <div>
          <h2>Address</h2>
          <p>{contact.address}</p>
        </div>
        <div>
          <h2>Phone</h2>
          <p><a href={`tel:${contact.phone.replace(/\D/g, "")}`}>{contact.phone}</a></p>
        </div>
        <div>
          <h2>Email</h2>
          <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        </div>
        <div>
          <h2>Connect</h2>
          <p className="social">
            <a href={social.facebook} target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-2.8 0-4.5 1.9-4.5 4.7V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8Z" /></svg>
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4V9.5Z" /></svg>
            </a>
          </p>
        </div>
      </div>
      <p className="copyright">&copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
    </footer>
  );
}
