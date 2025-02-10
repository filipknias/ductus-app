import PrimaryButton from "@/components/app/PrimaryButton";
import { characterTraits } from "@/data/app-data";
import { useStore } from "@/store/useStore";
import clsx from "clsx";

export default function PersonalityForm() {
    const { 
        updateProvidedData, 
        providedData, 
        setActiveModuleIndicator,
        updateModulesStatuses,
    } = useStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setActiveModuleIndicator(3);
        updateModulesStatuses({
            2: "completed",
            3: "in-progress",
        });
    };
    
    const handleCharacterClick = (character: string) => {
        if (providedData.personality.includes(character)) {
            updateProvidedData("personality", providedData.personality.filter((p) => p !== character));
        } else {
            updateProvidedData("personality", [...providedData.personality, character]);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="mb-8 text-lg font-medium text-white">
                Wybierz cechy charakteru pasujace do twojej osobowości
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
                {characterTraits.map((character) => (
                    <button
                        type="button"
                        key={character} 
                        className={clsx(
                            "rounded-xl cursor-pointer px-4 py-1 font-medium text-white border border-transparent hover:border-white",
                            providedData.personality.includes(character) ? "bg-deep-blue" : "bg-white/10",
                        )}
                        onClick={() => handleCharacterClick(character)}
                    >
                        {character}
                    </button>
                ))}
            </div>
            <PrimaryButton>Zapisz dane</PrimaryButton>
        </form>
    )
}
