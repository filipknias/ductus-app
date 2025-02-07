import { STEPS } from '@/data/steps';
import { Step } from '@/types/shared';
import { create } from 'zustand';

interface Store {
    currentStep: number;
    maxSteps: number;
    steps: Step[];
    updateCurrentStep: (step: number) => void;
}

export const useStore = create<Store>()((set) => ({
    currentStep: 1,
    maxSteps: STEPS.length,
    steps: STEPS,

    updateCurrentStep: (step: number) => {
        set((state) => ({ ...state, currentStep: step }));
    },
}));