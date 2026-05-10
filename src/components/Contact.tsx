import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    const hasNameError = name.trim() === '';
    const hasEmailError = email.trim() === '';
    const hasMessageError = message.trim() === '';

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);

    if (hasNameError || hasEmailError || hasMessageError) {
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(
      "service_wa9zikj",
      "template_r08hlzs",
      templateParams,
      "7dGqTUTWOM-GPyo7Z"
    )
      .then(() => {
        setSent(true);
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setSent(false), 5000);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send email");
      });
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <span className="section-label">04 — Contact</span>
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <div className="contact-social-links">
            <a href="https://github.com/Rasib03" target="_blank" rel="noreferrer" aria-label="GitHub" className="contact-social-link">
              <GitHubIcon />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/rasib03/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="contact-social-link">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:rasib@example.com" aria-label="Email" className="contact-social-link">
              <EmailIcon />
              <span>Email</span>
            </a>
          </div>

          {sent && (
            <div className="success-banner">
              ✅ Message sent! I'll get back to you soon.
            </div>
          )}

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={sendEmail}
          >
            <div className='form-flex'>
              <TextField
                required
                id="contact-name"
                variant="outlined"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="contact-email"
                variant="outlined"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="contact-message"
              variant="outlined"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;