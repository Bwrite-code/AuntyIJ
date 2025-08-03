
import { useTheme } from '../theme';

const Home = () => {
  const { colors } = useTheme();

  const styles = {
    main: {
      textAlign: 'center' as 'center',
    },
    heroSection: {
      margin: '1rem 0',
      padding: '1.5rem',
      background: colors.neutral,
      borderRadius: '1rem',
    },
    chefImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      objectFit: 'cover' as 'cover',
      marginBottom: '1rem',
    },
    heroTitle: {
      color: colors.primary,
      marginBottom: '1rem',
      lineHeight: 1.2,
    },
    heroSubtitle: {
      color: colors.text,
      marginBottom: '2rem',
      lineHeight: 1.4,
    },
    ctaButton: {
      background: colors.cta,
      color: colors.text,
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '2rem',
      fontWeight: 'bold' as 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      width: '100%',
      maxWidth: '200px',
    },
    aboutSection: {
      marginTop: '2rem',
    },
    aboutTitle: {
      color: colors.accent,
      marginBottom: '1rem',
    },
    aboutText: {
      color: colors.text,
      maxWidth: '600px',
      margin: '1rem auto',
      lineHeight: 1.6,
    },
  };

  // Media query styles
  const mediaStyles = `
    @media (min-width: 768px) {
      .hero-section {
        margin: 2rem 0 !important;
        padding: 2rem !important;
      }
      .chef-image {
        width: 200px !important;
        height: 200px !important;
      }
      .hero-title {
        font-size: 2.5rem !important;
      }
      .hero-subtitle {
        font-size: 1.2rem !important;
      }
      .cta-button {
        width: auto !important;
        padding: 1rem 2rem !important;
        font-size: 1.1rem !important;
      }
      .about-section {
        margin-top: 3rem !important;
      }
      .about-title {
        font-size: 2rem !important;
      }
    }
    
    @media (min-width: 1024px) {
      .chef-image {
        width: 250px !important;
        height: 250px !important;
      }
      .hero-title {
        font-size: 3rem !important;
      }
    }
    
    @media (max-width: 480px) {
      .hero-title {
        font-size: 1.8rem !important;
      }
      .hero-subtitle {
        font-size: 1rem !important;
      }
      .about-title {
        font-size: 1.5rem !important;
      }
      .about-text {
        font-size: 0.9rem !important;
      }
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>
      <main className="container responsive-padding" style={styles.main}>
        <section className="hero-section" style={styles.heroSection}>
          <img 
            src="/chef.png" 
            alt="Aunty IJ Chef" 
            className="chef-image responsive-avatar" 
            style={styles.chefImage} 
          />
          <h1 className="hero-title responsive-title" style={styles.heroTitle}>
            Welcome to Aunty IJ Kitchen!
          </h1>
          <p className="hero-subtitle responsive-subtitle" style={styles.heroSubtitle}>
            Discover delicious meals, fast delivery, and a taste of something special.
          </p>
          <button className="cta-button responsive-button" style={styles.ctaButton}>
            Order Now
          </button>
        </section>
        
        <section className="about-section responsive-margin" style={styles.aboutSection}>
          <h2 className="about-title" style={styles.aboutTitle}>
            About Aunty IJ Kitchen
          </h2>
          <p className="about-text" style={styles.aboutText}>
            Aunty IJ brings you the best of local and international cuisine, delivered fresh to your door. 
            Our mission is to make every meal memorable, with quality ingredients and a passion for great food.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
