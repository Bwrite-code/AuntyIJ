import React from 'react';
import { useTheme } from '../theme';

const Loyalty = () => {
  const { colors } = useTheme();

  const styles = {
    main: {
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center' as 'center',
      padding: '4rem 4rem',
      backgroundImage: 'url(https://thumbs.dreamstime.com/b/glass-freshly-squeezed-summer-fruit-juice-splash-flying-out-glass-freshly-squeezed-summer-fruit-juice-splash-274418173.jpg)',
      backgroundSize: 'cover',
      color: '#fff',
      borderRadius: '8px',
    },
    headerTitle: {
      fontSize: '3.5rem',
      margin: 0,
    },
    headerSubtitle: {
      fontSize: '1.5rem',
      margin: '1rem 0 0',
    },
    section: {
      margin: '4rem auto',
      maxWidth: '1000px',
      textAlign: 'center' as 'center',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      color: colors.primary,
      marginBottom: '2rem',
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      textAlign: 'center' as 'center',
    },
    benefitCard: {
      padding: '2rem',
      border: `1px solid ${colors.primary}`,
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },
    benefitIcon: {
      width: '80px',
      height: '80px',
      marginBottom: '1rem',
    },
    benefitTitle: {
      fontSize: '1.5rem',
      color: colors.primary,
      margin: '0 0 0.5rem',
    },
    howItWorks: {
        display: 'flex',
        justifyContent: 'space-around' as 'space-around',
        gap: '2rem',
        marginTop: '3rem',
    },
    step: {
        maxWidth: '300px',
    },
    stepNumber: {
        fontSize: '2rem',
        fontWeight: 'bold' as 'bold',
        color: colors.primary,
    },
    ctaSection: {
      marginTop: '4rem',
      padding: '3rem',
      backgroundColor: colors.primary,
      color: '#fff',
      borderRadius: '8px',
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
    },
  };

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Aunty IJ Rewards</h1>
        <p style={styles.headerSubtitle}>Join our loyalty program and get rewarded for your love of food.</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.howItWorks}>
            <div style={styles.step}>
                <div style={styles.stepNumber}>1</div>
                <h3>Sign Up</h3>
                <p>Create an account and instantly become a Foody Rewards member. It's free and only takes a minute!</p>
            </div>
            <div style={styles.step}>
                <div style={styles.stepNumber}>2</div>
                <h3>Earn Points</h3>
                <p>Earn points for every dollar you spend at any of our locations. The more you dine, the more you earn.</p>
            </div>
            <div style={styles.step}>
                <div style={styles.stepNumber}>3</div>
                <h3>Get Rewards</h3>
                <p>Redeem your points for exclusive rewards, like free meals, discounts, and special offers.</p>
            </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Member Benefits</h2>
        <div style={styles.benefitsGrid}>
          <div style={styles.benefitCard}>
            <img src="https://th.bing.com/th/id/OIP.eot2S1L-TBvo6p3UOc6ZhgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Points Icon" style={styles.benefitIcon} />
            <h3 style={styles.benefitTitle}>Earn Points</h3>
            <p>Get 10 points for every $1 spent. Rack them up and redeem for your favorite dishes.</p>
          </div>
          <div style={styles.benefitCard}>
            <img src="https://heritagecctx.com/wp-content/uploads/2018/10/Roof-Referral-Rewards-555x333.png" alt="Referral Rewards Icon" style={styles.benefitIcon} />
            <h3 style={styles.benefitTitle}>Referral Rewards</h3>
            <p>Invite a friend and earn bonus points or a free item when they sign up.</p>
          </div>
          <div style={styles.benefitCard}>
            <img src="https://tse1.mm.bing.net/th/id/OIP.ZHYnUIB3zmHlML-8F6XpvAAAAA?w=471&h=626&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Exclusive Offers Icon" style={styles.benefitIcon} />
            <h3 style={styles.benefitTitle}>Exclusive Offers</h3>
            <p>Receive members-only promotions, early access to new menu items, and more.</p>
          </div>
        </div>
      </section>

      <section style={{...styles.section, ...styles.ctaSection}}>
        <h2>Ready to Join?</h2>
        <p style={{ fontSize: '1.2rem' }}>Sign up for our loyalty program and start earning rewards on your next visit!</p><br />
        
        <a href="/auth" style={styles.ctaButton}>Sign Up Now</a>
      </section>
    </main>
  );
};

export default Loyalty;