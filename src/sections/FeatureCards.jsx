import { abilities } from "../constants";
import SpotlightCard from '../components/SpotlightCard';

const FeatureCards = () => {
    return (
        <div className="w-full padding-x-lg">
            <div className="mx-auto grid-3-cols">
                {abilities.map(({ imgPath, title, desc})=>(
                    <SpotlightCard key={title} className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.69)">
                        <div className="size-14 flex items-center justify-center rounded full">
                            <h3 className="text-3xl">{imgPath}</h3>
                            {/* <img src={imgPath} alt={title}/> */}
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                        <p className="text-white-50 text-md">{desc}</p>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
}

export default FeatureCards;
