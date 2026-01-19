'use client';

const Footer = () => {
  return (
    <footer
      className="py-8 relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <p className="mb-2" style={{ color: 'var(--accent-color)' }}>
            © 2025 Shalini M. All rights reserved.
          </p>
          <p
            className="text-sm"
            style={{ color: 'var(--accent-color)', opacity: 0.8 }}
          >
            Built with Next.js, React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
