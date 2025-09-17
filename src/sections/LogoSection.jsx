import { logoIconsList } from "../constants"

const LogoIcon = ({ icon}) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    )

}
const LogoSection = () => {
    return (
        <div className="md:my-20 my-10 relative">
            <div className="flex flex-col items-center text-5xl">🛠️
                <h1 className="font-semibold md:text-4xl text-4xl text-center">My Workbench Tools</h1>
            </div>
            <div className="gradient-edge"/>
            <div className="gradient-edge"/>
            <div className="marquee h-30">
                <div className="marquee-box md:gap-12 gap-5">
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon}/>
                    ))}
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LogoSection