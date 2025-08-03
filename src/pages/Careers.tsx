import React from 'react';
import { useTheme } from '../theme';

const jobOpenings = [
  {
    title: 'Head Chef',
    location: 'Lagos, Nigeria',
    description: 'We are looking for a passionate and experienced Head Chef to lead our kitchen team. You will be responsible for creating innovative menus, managing kitchen staff, and ensuring the highest quality of our dishes.',
  },
  {
    title: 'Marketing Manager',
    location: 'Abuja, Nigeria',
    description: 'Join our marketing team to help spread the word about Foody. You will develop and execute marketing campaigns, manage our social media presence, and drive customer engagement.',
  },
  {
    title: 'Server',
    location: 'Ikere-Ekiti, Nigeria',
    description: 'We are seeking friendly and enthusiastic servers to provide an excellent dining experience for our guests. You will take orders, serve food and drinks, and ensure customer satisfaction.',
  },
];

const Careers = () => {
  const { colors } = useTheme();

  const styles = {
    main: {
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center' as 'center',
      padding: '4rem 2rem',
      backgroundImage: 'url(data:image/jpeg;base64,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)',
      backgroundSize: 'cover',
      color: '#fff',
      borderRadius: '8px',
    },
    headerTitle: {
      fontSize: '4rem',
      margin: 0,
    },
    headerSubtitle: {
      fontSize: '1.5rem',
      margin: '1rem 0 0',
      color: '#fff',
    },
    section: {
      margin: '4rem auto',
      maxWidth: '1000px',
    },
    sectionTitle: {
      textAlign: 'justify' as 'justify',
      fontSize: '2.5rem',
      color: colors.primary,
      marginBottom: '2rem',
    },
    jobListings: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      gap: '1.5rem',
    },
    jobCard: {
      padding: '2rem',
      border: `1px solid ${colors.primary}`,
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },
    jobTitle: {
      fontSize: '1.8rem',
      color: colors.primary,
      margin: '0 0 0.5rem',
    },
    jobLocation: {
      fontSize: '1.1rem',
      color: colors.text,
      marginBottom: '1rem',
    },
    jobDescription: {
      fontSize: '1rem',
      lineHeight: '1.6',
    },
    applyButton: {
      marginTop: '1.5rem',
      padding: '0.8rem 1.5rem',
      backgroundColor: colors.primary,
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
    },
    cultureSection: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center' as 'center',
    },
    cultureImage: {
        width: '50%',
        borderRadius: '8px',
    }
  };

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Join Our Team</h1>
        <p style={styles.headerSubtitle}>Become a part of Aunty IJ family and help us create amazing dining experiences.</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Work at Aunty IJ?</h2>
        <div style={styles.cultureSection}>
            <img src="https://counseal.com/app/uploads/2023/11/counseal-food-business-A-group-picture-of-chefs-or-a-chef-with-other-businessmen-1-1024x576.jpg" alt="Aunty IJ Team" style={styles.cultureImage}/>
            <div>
                <p style={{ textAlign: 'justify' }}>At Aunty IJ, we believe that our team is our greatest asset. We foster a collaborative and supportive environment where everyone has the opportunity to grow and succeed. We are passionate about food, hospitality, and creating a positive impact in our community.</p>
                <p style={{ textAlign: 'justify' }}>We offer competitive salaries, comprehensive benefits, and opportunities for professional development. If you are a dedicated and enthusiastic individual with a love for the culinary world, we would love to have you on our team.</p>
            </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Open Positions</h2>
        <div style={styles.jobListings}>
          {jobOpenings.map(job => (
            <div key={job.title} style={styles.jobCard}>
              <h3 style={styles.jobTitle}>{job.title}</h3>
              <p style={styles.jobLocation}>{job.location}</p>
              <p style={styles.jobDescription}>{job.description}</p>
              <a href="mailto:idowuibitayo@protonmail.com?subject=Application for ${job.title}" style={styles.applyButton}>
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Careers;