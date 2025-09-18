import { socialImgs } from "../constants"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <a href="/">Get Connect with Me!</a>
                </div>
                <div className="socials">
                    {socialImgs.map((img) =>(
                        <a className="icon" target="_blank" href={img.url}>
                            <img src={img.imgPath} alt="" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer