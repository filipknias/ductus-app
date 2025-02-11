import { modules } from "@/data/app-data";
import { useStore } from "@/store/useStore"
import clsx from "clsx";
import { useMemo } from "react";

const totalModules = modules.length;

export default function ProgressIndicator() {
    const { statuses } = useStore();

    const progressPercent = useMemo(() => {
        const completedModlues = Object.values(statuses).filter((status) => status === "completed").length;
        return (completedModlues / totalModules) * 100;
    }, [statuses]);

    return (
        <>
            <div className={clsx("rounded-full w-56 h-3 border mx-auto mb-4", progressPercent === 100 ? "border-lime-green" : "border-white")}>
                <div className={clsx("h-full", progressPercent === 100 ? "bg-lime-green" : "bg-white")} style={{ width: `${progressPercent}%` }}></div>
            </div>
            <p className="text-white font-medium text-center">{Math.floor(progressPercent)}%</p>
        </>
    )
}