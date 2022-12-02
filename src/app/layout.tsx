import React, { ReactNode } from 'react';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <body className="bg-neutral-900">{children}</body>

      {/* Footer */}
      <Footer />
    </html>
  );
}
