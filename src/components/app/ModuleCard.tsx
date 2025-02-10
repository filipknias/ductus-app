import { statusLabels } from "@/data/app-data";
import { Status } from "@/types/app";
import clsx from "clsx";

type Props = {
    stepIndicator: number;
    moduleName: string;
    moduleIcon: string;
    status: Status;
    onClick: () => void;
};

export default function ModuleCard({ stepIndicator, moduleName, status, moduleIcon, onClick }: Props) {
    return (
        <button 
            onClick={status !== "locked" ? onClick : undefined} 
            className={clsx("flex flex-col items-center transition duration-250 relative group", status !== "locked" && "cursor-pointer hover:-translate-y-4")}
        >
            {status === "locked" && (
                <>
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 hidden group-hover:block">
                        <div className="bg-black/80 px-4 py-1 text-sm font-medium text-white whitespace-nowrap rounded-xl">Ukończ poprzedni poziom, aby odblokować ten!</div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="rounded-full bg-gray-500/70 flex items-center justify-center w-72 h-72">
                            <img className="h-24" src="/lock-icon.png" alt="lock-icon" />
                        </div>
                    </div>
                </>
            )}
            <img className="h-36 mb-4" src={moduleIcon} alt={moduleName} />
            <div className={clsx(
                    "bg-white/10 rounded-2xl py-1 px-4 shadow-md mb-4", 
                    status === "in-progress" && "shadow-deep-blue", 
                    status === "completed" && "shadow-lime-green",
                    status === "locked" && "shadow-gray-500")}
            >
                <h3 className="font-medium text-lg text-white whitespace-nowrap">{stepIndicator}. {moduleName}</h3>
            </div>
            <div className={clsx(
                    "rounded-2xl py-0.5 px-3", 
                    status === "in-progress" && "bg-deep-blue", 
                    status === "completed" && "bg-lime-green", 
                    status === "locked" && "bg-gray-500")}
            >
                <span className={clsx("text-sm", status === "completed" ? "text-black" : "text-white")}>{statusLabels[status]}</span>
            </div>
        </button>
    )
}
