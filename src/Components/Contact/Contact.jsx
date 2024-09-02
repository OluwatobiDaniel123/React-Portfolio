import React, { useRef } from "react";
import "./Contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessageLine } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qh08omd",
        "template_icla7gq",
        form.current,
        "uDj1nlX9BVEqunnYs"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully...");
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get in Torch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>danieloluwatobi765@gmail.com</h5>
            <a target="_blank" href="mailto:danieloluwatobi765@gmail.com">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <RiMessageLine className="contact_option-icon" />
            <h4>Messager</h4>
            <h5>Oluwatobi Daniel</h5>
            <a target="_blank" href="https://m.me/Oluwatobidaniel">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+234 810 9830 746</h5>
            <a
              target="_blank"
              href="https://api.watsapp.com/send?phone+2348109830746"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            rows="7"
            name="message"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
