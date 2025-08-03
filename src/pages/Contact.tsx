import React, { useState } from 'react';
import { useTheme } from '../theme';

const Contact = () => {
  const { colors } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const styles = {
    main: {
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center' as 'center',
      marginBottom: '3rem',
    },
    title: {
      fontSize: '3rem',
      color: colors.primary,
    },
    subtitle: {
      fontSize: '1.2rem',
      color: colors.text,
    },
    container: {
      display: 'flex',
      gap: '3rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    formContainer: {
      flex: 2,
      padding: '2rem',
      border: `1px solid ${colors.primary}`,
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },
    infoContainer: {
      flex: 1,
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      gap: '1.5rem',
    },
    input: {
      padding: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '1rem',
    },
    textarea: {
      padding: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '1rem',
      minHeight: '150px',
    },
    submitButton: {
      padding: '1rem',
      backgroundColor: colors.primary,
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1.2rem',
      cursor: 'pointer',
    },
    infoSection: {
      marginBottom: '2rem',
    },
    infoTitle: {
      fontSize: '1.5rem',
      color: colors.primary,
      marginBottom: '1rem',
    },
    infoText: {
      fontSize: '1.1rem',
      color: colors.text,
      margin: '0.5rem 0',
    },
    socialLinks: {
        display: 'flex',
        gap: '1rem',
    },
    socialIcon: {
        width: '40px',
        height: '40px',
    }
  };

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>We'd love to hear from you! Whether you have a question, a suggestion, or just want to say hello, feel free to reach out.</p>
      </header>

      <div style={styles.container}>
        <div style={styles.formContainer}>
          <h2>Send us a Message</h2>
          <form style={styles.form} onSubmit={handleSubmit}>
            <input style={styles.input} type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
            <input style={styles.input} type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
            <textarea style={styles.textarea} name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required />
            <button style={styles.submitButton} type="submit">Submit</button>
          </form>
        </div>
        <div style={styles.infoContainer}>
          <div style={styles.infoSection}>
            <h3 style={styles.infoTitle}>Contact Information</h3>
            <p style={styles.infoText}><strong>Email:</strong> idowuibitayo@protonmail.com</p>
            <p style={styles.infoText}><strong>Phone:</strong> (234) 9120744751</p>
            <p style={styles.infoText}><strong>Address:</strong> 123 Main Street, Lagos, Nigeria</p>
          </div>
          <div style={styles.infoSection}>
            <h3 style={styles.infoTitle}>Follow Us</h3>
            <div style={styles.socialLinks}>
                <a href="https://www.facebook.com/share/169RbJMv7o/"><img src="https://www.svgrepo.com/show/169503/facebook.svg" alt="Facebook" style={styles.socialIcon}/></a>
                <a href="https://wa.me/message/WRKVTQEHQOJQB1"><img src="https://tse1.mm.bing.net/th/id/OIP.a9WBL-AqvyzWKI5fZTkXcgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Whatsapp" style={styles.socialIcon}/></a>
                
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;