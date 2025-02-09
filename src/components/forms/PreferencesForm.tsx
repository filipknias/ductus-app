import { useStore } from "@/store/useStore"
import PrimaryButton from "@/components/app/PrimaryButton";

export default function PreferencesForm() {
    const { 
        updateProvidedData, 
        providedData, 
        updateModulesStatuses,
        setProgressModuleIndicator,
    } = useStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setProgressModuleIndicator(6);
        updateModulesStatuses({
            6: "completed",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="block mb-4 text-lg font-medium text-white" htmlFor="preferences">Napisz coś o swoich preferencjach dotyczacych uniwersytetu</label>
            <textarea 
                className="block w-full py-2 px-4 mb-8 text-lg placeholder-gray-600 text-gray-200 border border-gray-700 rounded-lg bg-gray-800 outline-none focus:border-violet-600 resize-none" 
                placeholder="Napisz coś o swoich preferencjach dotyczacych uniwersytetu"
                id="preferences"
                value={providedData.preferences}
                onChange={(e) => updateProvidedData("preferences", e.target.value)}
                rows={5}
                required
            ></textarea>
            <PrimaryButton>Zapisz dane</PrimaryButton>
        </form>
    )
}
