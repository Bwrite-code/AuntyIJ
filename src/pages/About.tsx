import React from 'react';
import { useTheme } from '../theme';

const About = () => {
  const { colors } = useTheme();

  const styles = {
    main: {
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center' as 'center',
      padding: '4rem 2rem',
      backgroundImage: 'url(https://via.placeholder.com/1500x400)',
      backgroundSize: 'cover',
      color: '#fff',
      borderRadius: '8px',
    },
    headerTitle: {
      fontSize: '3rem',
      margin: 0,
    },
    headerSubtitle: {
      fontSize: '1.2rem',
      margin: '1rem 0 0',
    },
    chefImage: {
      width: '350px',
      height: '358px',
      borderRadius: '50%',
      objectFit: 'cover' as 'cover',
      marginBottom: '1rem',
      display: 'block',
      margin: '0 auto',
    },
    section: {
      margin: '4rem 0',
    },
    sectionTitle: {
      textAlign: 'center' as 'center',
      fontSize: '2.5rem',
      color: colors.primary,
      marginBottom: '2rem',
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6',
      color: colors.text,
    },
    teamContainer: {
      display: 'flex',
      justifyContent: 'center' as 'center',
      gap: '2rem',
      flexWrap: 'wrap' as 'wrap',
    },
    teamMember: {
      textAlign: 'center' as 'center',
      maxWidth: '200px',
    },
    teamImage: {
      width: '180px',
      height: '180px',
      borderRadius: '50%',
      objectFit: 'cover' as 'cover',
      marginBottom: '1rem',
    },
    teamName: {
      fontSize: '1.4rem',
      margin: '0.5rem 0 0',
      color: colors.primary,
    },
    teamRole: {
      fontSize: '1.2rem',
      color: colors.text,
    },
    valuesContainer: {
      display: 'flex',
      justifyContent: 'space-around' as 'space-around',
      gap: '2rem',
      flexWrap: 'wrap' as 'wrap',
    },
    valueCard: {
      flex: 1,
      minWidth: '250px',
      padding: '2rem',
      border: `1px solid ${colors.primary}`,
      borderRadius: '8px',
      textAlign: 'center' as 'center',
    },
    valueTitle: {
      fontSize: '1.5rem',
      color: colors.primary,
      marginBottom: '1rem',
    },
    ctaSection: {
      textAlign: 'center' as 'center',
      padding: '4rem 2rem',
      backgroundColor: colors.primary,
      color: '#fff',
      borderRadius: '8px',
    },
    ctaTitle: {
      fontSize: '2rem',
      margin: 0,
    },
    ctaButton: {
      marginTop: '1.5rem',
      padding: '1rem 2rem',
      fontSize: '1.2rem',
      backgroundColor: '#fff',
      color: colors.primary,
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
    }
  };

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <img src="/chef.png" alt="Aunty IJ Chef" style={styles.chefImage} />
        <h1 style={styles.headerTitle}>Aunty IJ Kitchen</h1>
        <p style={styles.headerSubtitle}>Deliciously Crafted, Passionately Served.</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <div style={styles.content}>
          <p>
            Founded in 2023, Aunty IJ started as a small food truck with a big dream: to share our love for authentic, home-style cooking with the world. We believe that food is more than just sustenance; it's a way to connect, to share, and to create memories.
          </p>
          <p>
            Word of our delicious meals spread quickly, and soon our little truck became a local favorite. We've since grown into a beloved restaurant, but our core values remain the same. Every dish we serve is a piece of our story, crafted with the same love and care as those first meals.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <div style={styles.content}>
          <p>
            Our mission is to provide an exceptional dining experience by offering high-quality, flavorful food in a warm and welcoming environment. We are dedicated to sustainability, community, and the simple joy of sharing a good meal.
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Meet the Team</h2>
        <div style={styles.teamContainer}>
          <div style={styles.teamMember}>
            <img src="https://www.eomega.org/sites/default/files/styles/scale_and_crop_425x425/public/media/Ndidi-Okonkwo-Nwuneli_600x600.jpg?itok=MMNmx3O5" alt="Team Member 1" style={styles.teamImage} />
            <h3 style={styles.teamName}>Jane Doe</h3>
            <p style={styles.teamRole}>Founder & Head Chef</p>
          </div>
          <div style={styles.teamMember}>
            <img src="https://th.bing.com/th/id/R.746aca807e629edcdc6da041f8e2d5ed?rik=0xCfT1XC6dSkeg&pid=ImgRaw&r=0" alt="Team Member 2" style={styles.teamImage} />
            <h3 style={styles.teamName}>John Smith</h3>
            <p style={styles.teamRole}>Operations Manager</p>
          </div>
          <div style={styles.teamMember}>
            <img src="https://static01.nyt.com/images/2016/12/04/fashion/04adichie/04adichie-superJumbo.jpg?quality=90&auto=webp" alt="Team Member 3" style={styles.teamImage} />
            <h3 style={styles.teamName}>Emily White</h3>
            <p style={styles.teamRole}>Marketing Director</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Values</h2>
        <div style={styles.valuesContainer}>
          <div style={styles.valueCard}>
            <h3 style={styles.valueTitle}>Quality</h3>
            <p>We are committed to using the finest ingredients and upholding the highest standards in every dish we create.</p>
          </div>
          <div style={styles.valueCard}>
            <h3 style={styles.valueTitle}>Community</h3>
            <p>We believe in building strong relationships with our customers, our suppliers, and our local community.</p>
          </div>
          <div style={styles.valueCard}>
            <h3 style={styles.valueTitle}>Passion</h3>
            <p>Our love for food and hospitality drives us to create unforgettable experiences for our guests.</p>
          </div>
        </div>
      </section>

      <section style={styles.ctaSection}>
        <h2 style={styles.ctaTitle}>Join Our Team</h2>
        <p style={{ fontSize: '1.2rem' }}>
  We're always looking for passionate people to join the Foody family. If you share our love for great food and hospitality, we'd love to hear from you.</p> <br />
        
        <a href="/careers" style={styles.ctaButton}>View Open Positions</a>
      </section>
    </main>
  );
};

export default About;