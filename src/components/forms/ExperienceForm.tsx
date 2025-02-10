import { useStore } from "@/store/useStore"
import PrimaryButton from "@/components/app/PrimaryButton";

export default function ExperienceForm() {
    const { 
        updateProvidedData, 
        providedData, 
        setActiveModuleIndicator,
        updateModulesStatuses,
    } = useStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setActiveModuleIndicator(5);
        updateModulesStatuses({
            4: "completed",
            5: "in-progress",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="block mb-4 text-lg font-medium text-white" htmlFor="experience">Napisz coś o swoim doświadczeniu</label>
            <textarea 
                className="block w-full py-2 px-4 mb-8 text-lg placeholder-gray-600 text-gray-200 border border-gray-700 rounded-lg bg-gray-800 outline-none focus:border-violet-600 resize-none" 
                placeholder="Napisz coś o swoim doświadczeniu"
                id="experience"
                value={providedData.experience}
                onChange={(e) => updateProvidedData("experience", e.target.value)}
                rows={5}
                required
            ></textarea>
            <PrimaryButton>Zapisz dane</PrimaryButton>
        </form>
    )
}
