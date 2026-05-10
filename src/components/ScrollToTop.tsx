import React, { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`scroll-to-top${visible ? ' visible' : ''}`}
            onClick={scrollUp}
            aria-label="Scroll to top"
        >
            <KeyboardArrowUpIcon />
        </button>
    );
}

export default ScrollToTop;
