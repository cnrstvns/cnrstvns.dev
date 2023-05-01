import { Footer } from '@/components/shared/Footer';
import React, { type PropsWithChildren } from 'react';

export default function FooterLayout({ children }: PropsWithChildren) {
  return (
    <div>
      {/* Main content */}
      {children}

      {/* Footer */}
      <Footer />
    </div>
  );
}
