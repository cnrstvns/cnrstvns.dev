import * as React from 'react';
import NextHead from 'next/head';
import { GoogleFonts } from 'next-google-fonts';
import PropTypes from 'prop-types';

const Head = ({ children, title }) => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      <title>{title}</title>

      {children}
    </NextHead>
  </>
);

Head.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

Head.defaultProps = {
  children: <></>,
};

export default Head;
