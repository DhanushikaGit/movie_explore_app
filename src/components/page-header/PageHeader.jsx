import React from 'react';
import './page-header.scss';

// Use a fallback image path or handle missing image gracefully
import bg from '../../assets/footer-bg.jpg';

const PageHeader = ({ children }) => {
    return (
        <div
            className="page-header"
            style={{
                backgroundImage: bg ? `url(${bg})` : 'none',
                backgroundColor: bg ? 'transparent' : '#f5f5f5', // Fallback background color
            }}
        >
            <h2>{children}</h2>
        </div>
    );
};

export default PageHeader;