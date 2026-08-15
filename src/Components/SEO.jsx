import React from 'react';
import { Helmet } from 'react-helmet-async';
import logo from '../assets/Images/logo.png';

const SEO = ({ title, description, image, url }) => {
  const siteTitle = 'ACM Thapar';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'A vibrant community of tech enthusiasts, dedicated to exploring, tackling and connecting with all things tech.';
  const metaDescription = description || defaultDescription;
  // Use a default image if none is provided. Ensure you use an absolute URL in production.
  const metaImage = image || logo;
  const siteUrl = url || 'https://acm.thapar.edu'; // Update this to actual production URL

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;
