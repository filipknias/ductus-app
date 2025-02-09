import { Status } from "@/types/app";
import clsx from "clsx";

type Props = {
    stepIndicator: number;
    moduleName: string;
    moduleIcon: string;
    status: Status;
};

export default function ModuleCard({ stepIndicator, moduleName, status, moduleIcon }: Props) {
    return (
        <button className="flex flex-col items-center cursor-pointer hover:-translate-y-4 transition duration-250">
            <img className="h-36 mb-4" src={moduleIcon} alt={moduleName} />
            <div className="bg-white/10 rounded-2xl py-1 px-4 shadow-md shadow-aqua-blue mb-4">
                <h3 className="font-medium text-lg text-white whitespace-nowrap">{stepIndicator}. {moduleName}</h3>
            </div>
            <div className={clsx(
                    "rounded-2xl py-0.5 px-3", 
                    status === "in-progress" && "bg-deep-blue", 
                    status === "completed" && "bg-lime-green", 
                    status === "locked" && "bg-gray-500")}
            >
                <span className="text-sm text-white">{status}</span>
            </div>
        </button>
    )
}
