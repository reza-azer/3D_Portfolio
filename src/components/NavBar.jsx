import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
    const [blur, setBlur] = useState(0);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Get hero section height (or fallback to 500px)
            const hero = document.getElementById("Hero") || document.getElementById("hero");
            const heroHeight = hero ? hero.offsetHeight : 500;
            const scrollY = window.scrollY;
            // Blur: max 24px, min 0px
            const maxBlur = 24;
            const minBlur = 0;
            // Opacity: max 0.7, min 0
            const maxOpacity = 0.7;
            const minOpacity = 0;
            // Calculate progress (0 at top, 1 at heroHeight)
            const progress = Math.min(scrollY / heroHeight, 1);
            setBlur(minBlur + (maxBlur - minBlur) * progress);
            setOpacity(minOpacity + (maxOpacity - minOpacity) * progress);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // set initial state
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navStyle = {
        background: `rgba(20, 20, 20, ${opacity})`,
        backdropFilter: `blur(${blur}px) saturate(180%)`,
        WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
        borderBottom: opacity > 0.05 ? "1px solid rgba(255,255,255,0.08)" : "none",
        boxShadow: opacity > 0.05 ? "0 2px 16px 0 rgba(0,0,0,0.08)" : "none",
        transition: "background 0.3s, backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s"
    };

    return (
        <header className="navbar" style={navStyle}>
            <div className="inner">
                <a className="logo" href="#hero">
                    <img src="/images/MyLogo.png" alt="rezafahalafi" />
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* REPLACE THIS BUTTON WITH THE ANIMATED BUTTON */}
                <a href="#contact" className="contact-btn">
                    <div className="inner">
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar