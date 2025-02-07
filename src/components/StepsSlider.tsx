import { useStore } from "@/store/useStore";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StepsSlider() {
    const { currentStep, updateCurrentStep } = useStore();
    
    return (
        <div className="flex items-center justify-between w-full max-w-2xl">
            <button onClick={() => updateCurrentStep(currentStep - 1)} className="w-14 h-14 rounded-full bg-white/50 flex items-center justify-center cursor-pointer transition duration-250 border-4 border-deep-blue/50">
                <div className="w-12 h-12 rounded-full bg-deep-blue flex items-center justify-center text-white font-semibold text-xl select-none">
                    <ChevronLeft />
                </div>
            </button>
            <div className="overflow-hidden">
                <div style={{ transform: `translateX(-${(currentStep-1) * 100.5}%)` }} className="whitespace-nowrap transition-transform duration-400 ease-in-out">
                    <div className="inline-block w-full">
                        <div className="w-96 h-40 bg-deep-blue border-4 border-white/50 flex items-center justify-center rounded-lg px-8 py-4">
                            <span className="text-white font-semibold text-lg">1. Doświadczenie szkolne</span>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => updateCurrentStep(currentStep + 1)} className="w-14 h-14 rounded-full bg-white/50 flex items-center justify-center cursor-pointer transition duration-250 border-4 border-deep-blue/50">
                <div className="w-12 h-12 rounded-full bg-deep-blue flex items-center justify-center text-white font-semibold text-xl select-none">
                    <ChevronRight />
                </div>
            </button>
        </div>
    )
}
