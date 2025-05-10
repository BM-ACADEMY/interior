import React from "react";

const ScrollToTop = () => {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
    };

    return (
        <button className="scroltop" onClick={handleScrollTop}>
            <span className="fa fa-angle-up relative" id="btn-vibrate" />
        </button>
    );
};

export default ScrollToTop;
