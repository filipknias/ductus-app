import { hobbies } from "@/data/app-data";
import { useStore } from "@/store/useStore";
import clsx from "clsx";
import PrimaryButton from "@/components/app/PrimaryButton";

export default function HobbiesForm() {
    const { 
        updateProvidedData, 
        providedData, 
        setActiveModuleIndicator,
        updateModulesStatuses,
        setProgressModuleIndicator,
    } = useStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setActiveModuleIndicator(4);
        setProgressModuleIndicator(5);
        updateModulesStatuses({
            3: "completed",
            4: "in-progress",
        });
    };
    
    const handleHobbyClick = (hobby: string) => {
        if (providedData.personality.includes(hobby)) {
            updateProvidedData("hobbies", providedData.hobbies.filter((h) => h !== hobby));
        } else {
            updateProvidedData("hobbies", [...providedData.hobbies, hobby]);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-8 text-lg font-medium text-white">
                Wybierz swoje zainteresowania
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
                {hobbies.map((hobby) => (
                    <button
                        type="button"
                        key={hobby} 
                        className={clsx(
                            "rounded-xl cursor-pointer px-4 py-1 font-medium text-white border border-transparent hover:border-white",
                            providedData.hobbies.includes(hobby) ? "bg-deep-blue" : "bg-white/10",
                        )}
                        onClick={() => handleHobbyClick(hobby)}
                    >
                        {hobby}
                    </button>
                ))}
            </div>
            <PrimaryButton>Zapisz dane</PrimaryButton>
        </form>
    )
}
