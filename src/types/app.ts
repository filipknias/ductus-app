export type Status = "in-progress" | "locked" | "completed";

export type Module = {
    stepIndicator: number;
    moduleName: string;
    moduleIcon: string;
}