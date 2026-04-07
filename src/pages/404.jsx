import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import "../styles/notFoundStyles.css";

const NotFound = () => {
    return (
        <main className="notfound-page">
            <section className="notfound-card">
                <div className="notfound-ring notfound-ring-1" />
                <div className="notfound-ring notfound-ring-2" />
                <div className="notfound-ring notfound-ring-3" />

                <div className="notfound-hero">
                    <span className="notfound-code">404</span>
                    <div className="notfound-icon">
                        <HiOutlineSearch size={36} />
                    </div>
                </div>

                <h1>Page not found</h1>
                <p>
                    The page you’re looking for might have been moved, renamed, or
                    is temporarily unavailable. Try going back home or contact us
                    if you need help.
                </p>

                <div className="notfound-actions">
                    <Link to="/" className="btn btn-primary">
                        Back to home
                    </Link>
                    <Link to="/contact-us" className="btn btn-secondary">
                        Contact support
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default NotFound;