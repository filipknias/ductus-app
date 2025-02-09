import { useStore } from "@/store/useStore"
import PrimaryButton from "@/components/app/PrimaryButton";

export default function AspirationsForm() {
    const { 
        updateProvidedData, 
        providedData, 
        setActiveModuleIndicator,
        updateModulesStatuses,
        setProgressModuleIndicator,
    } = useStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setActiveModuleIndicator(6);
        setProgressModuleIndicator(5);
        updateModulesStatuses({
            5: "completed",
            6: "in-progress",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="block mb-4 text-lg font-medium text-white" htmlFor="personality">Napisz coś o swoich aspiracjach</label>
            <textarea 
                className="block w-full py-2 px-4 mb-8 text-lg placeholder-gray-600 text-gray-200 border border-gray-700 rounded-lg bg-gray-800 outline-none focus:border-violet-600 resize-none" 
                placeholder="Napisz coś o swoich aspiracjach"
                id="personality"
                value={providedData.aspirations}
                onChange={(e) => updateProvidedData("aspirations", e.target.value)}
                rows={5}
                required
            ></textarea>
            <PrimaryButton>Zapisz dane</PrimaryButton>
        </form>
    )
}
