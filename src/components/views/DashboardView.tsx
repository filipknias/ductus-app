import { modules } from "@/data/app-data";
import ModuleCard from "@/components/app/ModuleCard";
import { useStore } from "@/store/useStore";
import ModuleContent from "@/components/app/ModuleContent";
import SchoolExperienceForm from "@/components/forms/SchoolExperienceForm";

export default function DashboardView() {
    const { statuses, activeModuleIndicator } = useStore();

    const activeModule = modules.find((module) => module.stepIndicator === activeModuleIndicator);
    if (!activeModule) return null;

    return (
        <section className="relative py-12 md:py-24 overflow-hidden h-full">
            <img className="hidden md:block absolute top-24 left-24 z-10 animate-spinStar" src="/blink-star.png" alt=""/>
            <img className="hidden md:block absolute top-64 -right-18 z-10 w-28 lg:w-auto animate-movePlanet" src="/alien-fly.png" alt=""/>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-160 h-160 bg-gradient-to-t from-blue-500 to-darkBlue-900 rounded-full filter blur-4xl"></div>
            <div className="absolute top-1/2 left-80 transform -translate-y-1/2 w-160 h-160 bg-gradient-to-t from-violet-500 to-darkBlue-900 rounded-full filter blur-4xl"></div>
            <div className="relative px-36 h-full flex flex-col justify-center">
                <div className="flex flex-wrap -m-4 relative">
                    <div className="w-full lg:w-7/12 p-4">
                        <div className="flex flex-wrap -mx-4">
                            {modules.map((module) => (
                                <div className="w-full lg:w-1/3 px-4 mb-12 flex justify-center" key={module.stepIndicator}>
                                    <ModuleCard 
                                        moduleIcon={module.moduleIcon}
                                        moduleName={module.moduleName}
                                        status={statuses[module.stepIndicator]}
                                        stepIndicator={module.stepIndicator}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 p-4">
                        <ModuleContent moduleName={activeModule.moduleName}>
                            {activeModuleIndicator === 1 && <SchoolExperienceForm />}
                        </ModuleContent>
                    </div>
                </div>
            </div>
        </section>
    )
}
