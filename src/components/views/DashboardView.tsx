import { modules } from "@/data/app-data";
import ModuleCard from "@/components/app/ModuleCard";
import { useStore } from "@/store/useStore";
import ModuleContent from "@/components/app/ModuleContent";
import SchoolExperienceForm from "@/components/forms/SchoolExperienceForm";
import PersonalityForm from "@/components/forms/PersonalityForm";
import HobbiesForm from "@/components/forms/HobbiesForm";
import AspirationsForm from "@/components/forms/AspirationsForm";
import ExperienceForm from "@/components/forms/ExperienceForm";
import PreferencesForm from "@/components/forms/PreferencesForm";
import PrimaryButton from "@/components/app/PrimaryButton";
import ProgressIndicator from "@/components/app/ProgressIndicator";

export default function DashboardView() {
    const { 
        statuses, 
        activeModuleIndicator, 
        setActiveModuleIndicator,
        setActiveView,
    } = useStore();

    const activeModule = modules.find((module) => module.stepIndicator === activeModuleIndicator);
    if (!activeModule) return null;

    const showSummaryView = Object.values(statuses).every((status) => status === "completed");

    return (
        <div className="flex flex-wrap -m-12 relative">
            <div className="w-full xl:w-7/12 p-12 order-2 xl:order-1">
                <div className="flex flex-wrap -mx-4 mb-8">
                    {modules.map((module) => (
                        <div className="w-full xl:w-1/3 px-4 mb-24 flex justify-center" key={module.stepIndicator}>
                            <ModuleCard
                                onClick={() => setActiveModuleIndicator(module.stepIndicator)}
                                moduleIcon={module.moduleIcon}
                                moduleName={module.moduleName}
                                status={statuses[module.stepIndicator]}
                                stepIndicator={module.stepIndicator}
                            />
                        </div>
                    ))}
                </div>
                <ProgressIndicator />
            </div>
            <div className="w-full xl:w-5/12 p-12 order-1 xl:order-2">
                <ModuleContent moduleName={showSummaryView ? "Podsumowanie" : activeModule.moduleName}>
                    {showSummaryView ? (
                        <div>
                            <img className="mb-8 mx-auto h-32" src="/summary-image.png" alt="check-icon" />
                            <p className="font-medium text-lg text-white text-center max-w-lg mx-auto mb-8">
                                Gratulacje! Twója podróż dobiegła końca! Sprawdź swoje rekomendacje w podsumowaniu !
                            </p>
                            <PrimaryButton 
                                className="max-w-sm mx-auto block"
                                onClick={() => setActiveView("summary")}
                            >
                                Zobacz podsumowanie
                            </PrimaryButton>
                        </div>
                    ) : (
                        <>
                            {activeModuleIndicator === 1 && <SchoolExperienceForm />}
                            {activeModuleIndicator === 2 && <PersonalityForm />}
                            {activeModuleIndicator === 3 && <HobbiesForm />}
                            {activeModuleIndicator === 4 && <ExperienceForm />}
                            {activeModuleIndicator === 5 && <AspirationsForm />}
                            {activeModuleIndicator === 6 && <PreferencesForm />}
                        </>
                    )}
                </ModuleContent>
            </div>
        </div>
    )
}
