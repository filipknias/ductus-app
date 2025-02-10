import { Module } from "@/types/app";

export const modules: Module[] = [
    {
        stepIndicator: 1,
        moduleName: "Doświadczenie szkolne",
        moduleIcon: "/step1.png",
    },
    {
        stepIndicator: 2,
        moduleName: "Osobowość",
        moduleIcon: "/step2.png",
    },
    {
        stepIndicator: 3,
        moduleName: "Zainteresowania",
        moduleIcon: "/step3.png",
    },
    {
        stepIndicator: 4,
        moduleName: "Doświadczenie",
        moduleIcon: "/step4.png",
    },
    {
        stepIndicator: 5,
        moduleName: "Aspiracje",
        moduleIcon: "/step5.png",
    },
    {
        stepIndicator: 6,
        moduleName: "Preferencje",
        moduleIcon: "/step6.png",
    },
];

export const characterTraits = [
    "ambitny",
    "analityczny",
    "kreatywny",
    "zdyscyplinowany",
    "niezależny",
    "towarzyski",
    "żądny przygód",
    "praktyczny",
    "ciekawy",
    "lider",
];

export const hobbies = [
    "czytanie",
    "rysowanie",
    "fotografia",
    "programowanie",
    "gotowanie",
    "podróżowanie",
    "gra na instrumentach",
    "sport",
    "gry komputerowe",
    "pisanie",
];

export const statusLabels = {
    "in-progress": "W trakcie",
    "locked": "Zablokowany",
    "completed": "Ukończono",
};