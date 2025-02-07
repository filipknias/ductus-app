import GraduationImage from "@/assets/graduation-image.png";
import GameArea from "@/components/GameArea";
import StepsSlider from "@/components/StepsSlider";

export default function App() {
  return (
    <div className="container mx-auto px-4 py-4 h-screen relative">
        <img className="absolute right-0 top-24 h-40 rotate-16" src={GraduationImage} alt="graduation-image" />
        <div className="flex flex-col items-center h-full">
            <GameArea />
            <StepsSlider />
        </div>
    </div>
  )
}
