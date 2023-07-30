import React from 'react';
import './BackToTop.css';
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function BackToTop() {

    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            }
            else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTop && (
                <button style={{ position: "fixed", bottom: "50px", right: "50px", height: "40px", width: "40px" }} className="bg-dark text-light pb-2 fw-bold" onClick={scrollUp}><AiOutlineArrowUp /></button>
            )}
        </div>
    );
}

export default BackToTop