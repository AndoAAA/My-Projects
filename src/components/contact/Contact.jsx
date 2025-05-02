import { useState } from "react";
import { Box, Typography, Link, TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import emailjs from "@emailjs/browser";

const contactLinks = [
  {
    icon: <EmailIcon fontSize="large" aria-hidden="true" />,
    label: "Email",
    link: "mailto:tarverdyan070@gmail.com",
  },
  {
    icon: <LinkedInIcon fontSize="large" aria-hidden="true" />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/andranik-tarverdyan-04a356319/",
  },
  {
    icon: <GitHubIcon fontSize="large" aria-hidden="true" />,
    label: "GitHub",
    link: "https://github.com/AndoAAA",
  },
];

const gradientBackground =
  "linear-gradient(to right, rgba(25, 55, 109, 1), #5663a7)";
const buttonBackground =
  "linear-gradient(0deg, rgba(25, 55, 109, 0.2) 0%, rgba(25, 55, 109, 1) 100%)";
const hoverBackground =
  "linear-gradient(0deg, rgba(25, 55, 109, 0.2) 0%, #6f8bbd 100%)";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessageStatus(""); // Resetting status message before submitting

    try {
      await emailjs.send(
        "service_mo2qbbv",
        "template_dyqb11p",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "W_R8qr82NdANY4Wtl"
      );

      setMessageStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setMessageStatus("Failed to send message. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        padding: "80px 5%",
        textAlign: "center",
        background: gradientBackground,
        color: "white",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          marginBottom: "20px",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Contact Me
      </Typography>
      <Typography variant="h6" sx={{ color: "white", marginBottom: "40px" }}>
        Feel free to reach out anytime!
      </Typography>

      {/* Contact Links */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {contactLinks.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            underline="none"
            aria-label={`Visit my ${item.label}`}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "15px 25px",
              borderRadius: "10px",
              background: buttonBackground,
              color: "white",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
              boxShadow: "0 6px 12px rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 12px 24px rgba(255, 255, 255, 0.2)",
                background: hoverBackground,
              },
            }}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </Box>

      {/* Success/Error Message */}
      {messageStatus && (
        <Typography
          variant="h6"
          sx={{
            color: messageStatus.includes("success") ? "green" : "red",
            marginBottom: "20px",
          }}
        >
          {messageStatus}
        </Typography>
      )}

      {/* Contact Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          maxWidth: "500px",
          margin: "0 auto",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          sx={{ background: "white", borderRadius: "5px" }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          sx={{ background: "white", borderRadius: "5px" }}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={Boolean(errors.message)}
          helperText={errors.message}
          sx={{ background: "white", borderRadius: "5px" }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          sx={{
            background: buttonBackground,
            color: "white",
            padding: "12px 30px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            "&:hover": {
              background: hoverBackground,
              transform: "scale(1.05)",
            },
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;
