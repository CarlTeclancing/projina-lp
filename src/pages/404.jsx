import React from "react";
import { Link } from "react-router-dom";
import "../styles/notFoundStyles.css";

const NotFound = () => {
  return (
    <main className="notfound-page">
      <div className="notfound-blob notfound-blob-1" aria-hidden="true" />
      <div className="notfound-blob notfound-blob-2" aria-hidden="true" />
      <div className="notfound-blob notfound-blob-3" aria-hidden="true" />

      <div className="notfound-center">
        <span className="notfound-badge">Error 404</span>

        <div className="notfound-hero-row">
          <span className="notfound-code">404</span>

          <svg className="notfound-mag" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="40" cy="40" r="26" stroke="#263348" strokeWidth="6" />
            <circle cx="40" cy="40" r="20" fill="#d5dde8" />
            <ellipse cx="33" cy="33" rx="7" ry="4.5" fill="#eaf0f7" opacity=".9" transform="rotate(-30 33 33)" />
            <line x1="60" y1="60" x2="83" y2="83" stroke="#263348" strokeWidth="7" strokeLinecap="round" />
            <line x1="61" y1="59" x2="74" y2="72" stroke="#7a8fa8" strokeWidth="3" strokeLinecap="round" opacity=".55" />
            <circle cx="40" cy="40" r="20" stroke="#263348" strokeWidth="1.5" opacity=".12" />
          </svg>
        </div>

        <div className="notfound-divider" aria-hidden="true" />
        <p className="notfound-subtitle">Page Not Found</p>

        <p className="notfound-desc">
          The page you're looking for may have been moved, renamed, or is temporarily
          unavailable. Double-check the URL or head back home.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="btn btn-primary">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Back to home
          </Link>
          <Link to="/contact-us" className="btn btn-secondary">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            Get help
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;