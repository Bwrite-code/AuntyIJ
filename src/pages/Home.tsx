
import { useTheme } from '../theme';

const Home = () => {
  const { colors } = useTheme();
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <section style={{ margin: '2rem 0', padding: '2rem', background: colors.neutral, borderRadius: '1rem' }}>
        <img src="/chef.png" alt="Aunty IJ Chef" style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem' }} />
        <h1 style={{ color: colors.primary, fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to Aunty IJ Kitchen!</h1>
        <p style={{ color: colors.text, fontSize: '1.2rem', marginBottom: '2rem' }}>
          Discover delicious meals, fast delivery, and a taste of something special.
        </p>
        <button style={{ background: colors.cta, color: colors.text, padding: '1rem 2rem', border: 'none', borderRadius: '2rem', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>
          Order Now
        </button>
      </section>
      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ color: colors.accent }}>About Aunty IJ Kitchen</h2>
        <p style={{ color: colors.text, maxWidth: 600, margin: '1rem auto' }}>
          Aunty IJ brings you the best of local and international cuisine, delivered fresh to your door. Our mission is to make every meal memorable, with quality ingredients and a passion for great food.
        </p>
      </section>
    </main>
  );
};

export default Home;
