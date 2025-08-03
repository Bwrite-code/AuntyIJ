import React from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../theme';
import { blogPosts } from '../blogData';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { colors } = useTheme();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const styles = {
    main: {
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      textAlign: 'center' as 'center',
      marginBottom: '2rem',
    },
    title: {
      fontSize: '3rem',
      color: colors.primary,
    },
    meta: {
      fontSize: '1rem',
      color: colors.text,
      marginBottom: '2rem',
    },
    image: {
      width: '100%',
      maxHeight: '400px',
      objectFit: 'cover' as 'cover',
      borderRadius: '8px',
      marginBottom: '2rem',
    },
    content: {
      lineHeight: '1.8',
      fontSize: '1.1rem',
    },
  };

  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.title}>{post.title}</h1>
        <p style={styles.meta}>By {post.author} on {post.date}</p>
      </header>
      <img src={post.image} alt={post.title} style={styles.image} />
      <div style={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
};

export default BlogPostPage;
