import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme';
import { blogPosts } from '../blogData';

const Blog = () => {
  const { colors } = useTheme();

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
      fontSize: '1.5rem',
      color: colors.text,
    },
    featuredPost: {
      marginBottom: '4rem',
      textAlign: 'justify' as 'justify',
      fontSize: '1.2rem',
    },
    featuredImage: {
      width: '100%',
      maxHeight: '400px',
      objectFit: 'cover' as 'cover',
      borderRadius: '8px',
      marginBottom: '1.5rem',
    },
    featuredTitle: {
      fontSize: '2.5rem',
      color: colors.primary,
    },
    postMeta: {
      fontSize: '1rem',
      color: colors.text,
      marginBottom: '1rem',
    },
    postGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    postCard: {
      border: `1px solid ${colors.primary}`,
      borderRadius: '8px',
      overflow: 'hidden',
    },
    postImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover' as 'cover',
    },
    postContent: {
      padding: '1.5rem',
    },
    postTitle: {
      fontSize: '1.5rem',
      color: colors.primary,
      margin: '0 0 0.5rem',
    },
    readMore: {
      marginTop: '1rem',
      color: colors.primary,
      textDecoration: 'none',
      fontWeight: 'bold' as 'bold',
    },
  };

  const [featured, ...otherPosts] = blogPosts;

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>Aunty IJ's Blog</h1>
        <p style={styles.subtitle}>Stories from our kitchen, culinary tips, and news from the Foody family.</p>
      </header>

      {/* Featured Post */}
      <section style={styles.featuredPost}>
        <Link to={`/blog/${featured.slug}`}><img src={featured.image} alt={featured.title} style={styles.featuredImage} /></Link>
        <h2 style={styles.featuredTitle}><Link to={`/blog/${featured.slug}`} style={{color: colors.primary, textDecoration: 'none'}}>{featured.title}</Link></h2>
        <p style={styles.postMeta}>By {featured.author} on {featured.date}</p>
        <p>{featured.excerpt}</p>
        <Link to={`/blog/${featured.slug}`} style={styles.readMore}>Read More &raquo;</Link>
      </section>

      {/* Other Posts */}
      <section>
        <div style={styles.postGrid}>
          {otherPosts.map(post => (
            <div key={post.title} style={styles.postCard}>
              <Link to={`/blog/${post.slug}`}><img src={post.image} alt={post.title} style={styles.postImage} /></Link>
              <div style={styles.postContent}>
                <h3 style={styles.postTitle}><Link to={`/blog/${post.slug}`} style={{color: colors.primary, textDecoration: 'none'}}>{post.title}</Link></h3>
                <p style={styles.postMeta}>By {post.author} on {post.date}</p>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} style={styles.readMore}>Read More &raquo;</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;