import { modules } from '@/data/app-data';
import { Status } from '@/types/app';
import { create } from 'zustand';

type ProvidedData = {
    schoolExperience: string;
    personality: string[];
    hobbies: string[];
    experience: string;
    aspirations: string;
    preferences: string;
};

type ActiveView = "dashboard" | "summary";

type Store = {
    // values
    activeModuleIndicator: number;
    statuses: Record<number, Status>;
    activeView: ActiveView;
    providedData: ProvidedData;
    // setters
    setActiveModuleIndicator: (stepIndicator: number) => void;
    updateModulesStatuses: (updateStatusesObj: Record<number, Status>) => void;
    updateProvidedData: (dataKey: keyof ProvidedData, updatedData: string|string[]) => void;
    setActiveView: (view: ActiveView) => void;
}

export const useStore = create<Store>()((set) => ({
    activeModuleIndicator: 1,
    statuses: modules.reduce((obj, module) => {
        if (module.stepIndicator === 1) {
            return { ...obj, [module.stepIndicator]: "in-progress" };
        }
        return { ...obj, [module.stepIndicator]: "locked" };
    }, {}),
    activeView: "dashboard",
    providedData: {
        schoolExperience: "",
        personality: [],
        hobbies: [],
        experience: "",
        aspirations: "",
        preferences: "",
    },

    setActiveModuleIndicator: (stepIndicator: number) => {
        set({ activeModuleIndicator: stepIndicator });
    },

    updateModulesStatuses: (updateStatusesObj: Record<number, Status>) => {
        set((state) => ({
            statuses: {
               ...state.statuses,
               ...updateStatusesObj,
            },
        }));
    },

    updateProvidedData: (dataKey: keyof ProvidedData, updatedData: string|string[]) => {
        set((state) => ({
            providedData: {
                ...state.providedData,
                [dataKey]: updatedData,
            },
        }));
    },

    setActiveView: (view: ActiveView) => {
        set({ activeView: view });
    },
}));