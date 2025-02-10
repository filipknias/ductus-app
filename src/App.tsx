import { useStore } from "@/store/useStore";
import DashboardView from "@/components/views/DashboardView";
import SummaryView from "@/components/views/SummaryView";

export default function App() {
    const { activeView } = useStore();
    
    return (
        <section className="relative py-12 md:py-24 overflow-hidden h-full">
            <img className="hidden md:block absolute top-24 left-24 z-10 animate-spinStar" src="/blink-star.png" alt=""/>
            <img className="hidden md:block absolute top-64 -right-18 z-10 w-28 lg:w-auto animate-movePlanet" src="/alien-fly.png" alt=""/>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-160 h-160 bg-gradient-to-t from-blue-500 to-darkBlue-900 rounded-full filter blur-4xl"></div>
            <div className="absolute top-1/2 left-80 transform -translate-y-1/2 w-160 h-160 bg-gradient-to-t from-violet-500 to-darkBlue-900 rounded-full filter blur-4xl"></div>
            <div className="px-36 h-full flex flex-col justify-center">
                {activeView === "dashboard" && <DashboardView />}
                {activeView === "summary" && <SummaryView />}
            </div>
        </section>
    )
}
