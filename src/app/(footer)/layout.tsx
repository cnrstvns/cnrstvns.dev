import { Footer } from '@/components/shared/Footer';
import React, { PropsWithChildren } from 'react';

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
