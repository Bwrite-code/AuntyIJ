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
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center' as 'center',
      marginBottom: '2rem',
    },
    title: {
      color: colors.primary,
    },
    subtitle: {
      color: colors.text,
      lineHeight: 1.6,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    formContainer: {
      padding: '1.5rem',
      border: `1px solid ${colors.primary}`,
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      marginBottom: '2rem',
    },
    infoContainer: {
      padding: '1rem',
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
      width: '100%',
      boxSizing: 'border-box' as 'border-box',
    },
    textarea: {
      padding: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '1rem',
      minHeight: '120px',
      width: '100%',
      boxSizing: 'border-box' as 'border-box',
      resize: 'vertical' as 'vertical',
    },
    submitButton: {
      padding: '1rem',
      backgroundColor: colors.primary,
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1.1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    infoSection: {
      marginBottom: '2rem',
    },
    infoTitle: {
      fontSize: '1.3rem',
      color: colors.primary,
      marginBottom: '1rem',
    },
    infoText: {
      fontSize: '1rem',
      color: colors.text,
      margin: '0.5rem 0',
      lineHeight: 1.5,
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap' as 'wrap',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      transition: 'transform 0.3s ease',
    },
  };

  // Media query styles
  const mediaStyles = `
    @media (min-width: 768px) {
      .contact-container {
        display: flex !important;
        gap: 3rem !important;
      }
      .form-container {
        flex: 2 !important;
        padding: 2rem !important;
        margin-bottom: 0 !important;
      }
      .info-container {
        flex: 1 !important;
      }
      .contact-title {
        font-size: 2.5rem !important;
      }
      .contact-subtitle {
        font-size: 1.2rem !important;
      }
      .contact-header {
        margin-bottom: 3rem !important;
      }
      .textarea-field {
        min-height: 150px !important;
      }
      .submit-button {
        font-size: 1.2rem !important;
      }
      .info-title {
        font-size: 1.5rem !important;
      }
      .info-text {
        font-size: 1.1rem !important;
      }
    }
    
    @media (min-width: 1024px) {
      .contact-title {
        font-size: 3rem !important;
      }
    }
    
    @media (max-width: 480px) {
      .contact-title {
        font-size: 2rem !important;
      }
      .contact-subtitle {
        font-size: 1rem !important;
      }
      .form-container {
        padding: 1rem !important;
      }
      .social-icon:hover {
        transform: scale(1.1) !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>
      <main className="container responsive-padding" style={styles.main}>
        <header className="contact-header" style={styles.header}>
          <h1 className="contact-title responsive-title" style={styles.title}>Contact Us</h1>
          <p className="contact-subtitle responsive-subtitle" style={styles.subtitle}>
            We'd love to hear from you! Whether you have a question, a suggestion, or just want to say hello, feel free to reach out.
          </p>
        </header>

        <div className="contact-container responsive-flex" style={styles.container}>
          <div className="form-container" style={styles.formContainer}>
            <h2>Send us a Message</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
              <input 
                style={styles.input} 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
              <input 
                style={styles.input} 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
              />
              <textarea 
                className="textarea-field"
                style={styles.textarea} 
                name="message" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleInputChange} 
                required 
              />
              <button className="submit-button responsive-button" style={styles.submitButton} type="submit">
                Submit
              </button>
            </form>
          </div>
          
          <div className="info-container" style={styles.infoContainer}>
            <div style={styles.infoSection}>
              <h3 className="info-title" style={styles.infoTitle}>Contact Information</h3>
              <p className="info-text" style={styles.infoText}>
                <strong>Email:</strong> idowuibitayo@protonmail.com
              </p>
              <p className="info-text" style={styles.infoText}>
                <strong>Phone:</strong> (234) 9120744751
              </p>
              <p className="info-text" style={styles.infoText}>
                <strong>Address:</strong> 123 Main Street, Lagos, Nigeria
              </p>
            </div>
            
            <div style={styles.infoSection}>
              <h3 className="info-title" style={styles.infoTitle}>Follow Us</h3>
              <div style={styles.socialLinks}>
                <a href="https://www.facebook.com/share/169RbJMv7o/">
                  <img 
                    src="https://www.svgrepo.com/show/169503/facebook.svg" 
                    alt="Facebook" 
                    className="social-icon"
                    style={styles.socialIcon}
                  />
                </a>
                <a href="https://wa.me/message/WRKVTQEHQOJQB1">
                  <img 
                    src="https://tse1.mm.bing.net/th/id/OIP.a9WBL-AqvyzWKI5fZTkXcgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" 
                    alt="Whatsapp" 
                    className="social-icon"
                    style={styles.socialIcon}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
