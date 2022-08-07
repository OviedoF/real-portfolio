import React, { useState, useEffect } from 'react';

export default function ScrollIndicator() {
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height= document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled =(winScroll/height)*100;
        setScrollTop(scrolled)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className="progressMainWrapper">
        <div className='progressMainStyle' style={{ width: `${scrollTop}%` }}>

        </div>

        <style jsx>{`
        .progressMainWrapper{
            height:5px;
            position:fixed;
            top:0;
            left:0;
            z-index:9999999999999;
            width:100%;
        }

        .progressMainStyle{
            height:100%;
            background-color: var(--color-vl);
            width:0%;
            transition: all 0s;
        }
        `}</style>
    </div>
  )
}
