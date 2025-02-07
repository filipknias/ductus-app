export type Status = "active" | "locked" | "completed" | "default";

export type Step = {
    number: number;
    name: string;
    status: Status;
}