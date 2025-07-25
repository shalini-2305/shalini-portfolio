'use client';

const Footer = () => {
  return (
    <div
      className="py-8 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#311e25' }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-2" style={{ color: 'var(--accent-color)' }}>
            © 2025 Shalini M. All rights reserved.
          </p>
          <p
            className="text-sm"
            style={{ color: 'var(--accent-color)', opacity: 0.8 }}
          >
            Built with Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
