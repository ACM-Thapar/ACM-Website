import React, { Fragment } from "react";
import SEO from "../../Components/SEO";
import { BlogData } from "../../data.mjs";
import Dots from "../../Components/dots/Dots";
import styles from './Blogs.module.css';
import { Link } from 'react-router-dom';
import { BlogThemeProvider, useBlogTheme } from './BlogThemeContext';
import BlogThemeToggle from './BlogThemeToggle';

const BlogsContent = () => {
    const blogs = BlogData.blogs;
    const { theme } = useBlogTheme();

    // Format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    // Apply theme to body
    React.useEffect(() => {
        document.body.setAttribute('data-blog-theme', theme);
        return () => {
            document.body.removeAttribute('data-blog-theme');
        };
    }, [theme]);

    return (
        <Fragment>
            <SEO title="Blogs" description="Discover the latest insights, tutorials, and stories from the ACM Thapar community." />
            <section id={styles.blogs} data-blog-theme={theme}>
                <div className={styles.maincontent}>
                    <div className={styles.upperpart}>
                        <div>
                            <h3 className={styles.headline}>
                                Blogs
                            </h3>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <BlogThemeToggle />
                            <div className={styles.circles}>
                                <Dots />
                            </div>
                        </div>
                    </div>
                    
                    <p className={styles.description}>
                        Discover the latest insights, tutorials, and stories from the ACM Thapar community. 
                        Learn about tech trends, member experiences, and innovative projects.
                    </p>

                    {/* Blog Cards */}
                    <div className={styles.blogCards}>
                        {blogs.map((blog) => (
                            <Link 
                                to={`/blogs/${blog.slug}`} 
                                key={blog.id}
                                className={styles.blogCard}
                            >
                                <h2 className={styles.blogTitle}>{blog.title}</h2>
                                <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                                <div className={styles.blogMeta}>
                                    <span className={styles.blogDate}>{formatDate(blog.date)}</span>
                                    <span className={styles.blogSeparator}>•</span>
                                    <span className={styles.blogReadTime}>{blog.readTime}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

const Blogs = () => {
    return (
        <BlogThemeProvider>
            <BlogsContent />
        </BlogThemeProvider>
    );
};

export default Blogs;

