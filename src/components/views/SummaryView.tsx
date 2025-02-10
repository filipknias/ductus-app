import ModuleContent from "@/components/app/ModuleContent";
import { useStore } from "@/store/useStore";
import PrimaryButton from "@/components/app/PrimaryButton";

export default function SummaryView() {
    const { providedData } = useStore();

    return (
        <div className="flex flex-wrap -m-12 relative">
            <div className="w-full lg:w-1/2 p-12">
                <h2 className="font-medium text-3xl text-white mb-12">Podsumowanie</h2>
                <div className="overflow-x-auto mb-16">
                    <table className="table-auto text-white w-full min-w-max">
                        <thead>
                            <tr className="border-b border-gray-100 border-opacity-20">
                                <th className="pb-4 pr-6 text-left">
                                    <span className="font-medium text-gray-200 tracking-tight">Nazwa</span>
                                </th>
                                <th className="pb-4 px-6 text-left">
                                    <span className="font-medium text-gray-200 tracking-tight">Twoja odpowiedź</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-100/20">
                                <td className="px-6 py-8">
                                    <span className="text-xl font-medium text-white">Doświadczenie szkolne</span>
                                </td>
                                <td className="px-6 py-8">
                                    <span className="text-xl font-medium text-white">{providedData.schoolExperience}</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100/20">
                                <td className="px-6 py-8">
                                    <span className="text-xl font-medium text-white">Osobowość</span>
                                </td>
                                <td className="px-6 py-8">
                                    <div className="flex flex-wrap gap-2">
                                        {providedData.personality.map((p) => (
                                            <div key={p} className="rounded-xl px-4 py-1 font-medium text-white bg-deep-blue text-sm">{p}</div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100/20">
                                <td className="px-6 py-8">
                                    <span className="text-xl font-medium text-white">Zainteresowania</span>
                                </td>
                                <td className="px-6 py-8">
                                    <div className="flex flex-wrap gap-2">
                                        {providedData.hobbies.map((h) => (
                                            <div key={h} className="rounded-xl px-4 py-1 font-medium text-white bg-deep-blue text-sm">{h}</div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100/20">
                                <td className="px-6 py-8">
                                    <span className="text-xl font-medium text-white">Doświadczenie</span>
                                </td>
                                <td className="px-6 py-8">
                                    <span className="text-xl font-medium text-white">{providedData.experience}</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100/20">
                                <td className="px-6 py-8">
                                    <span className="text-xl font-medium text-white">Aspiracje</span>
                                </td>
                                <td className="px-6 py-8">
                                    <span className="text-xl font-medium text-white">{providedData.aspirations}</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100/20">
                                <td className="px-6 py-8">
                                    <span className="text-xl font-medium text-white">Preferencje</span>
                                </td>
                                <td className="px-6 py-8">
                                    <span className="text-xl font-medium text-white">{providedData.preferences}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-12">
                <ModuleContent moduleName="Propozycje programu studiów">
                    <PrimaryButton className="max-w-sm mx-auto block">Pobierz rekomendacje AI</PrimaryButton>
                </ModuleContent>
            </div>
        </div>
    )
}
