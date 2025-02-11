type Props = {
    moduleName: string;
    children: React.ReactNode;
};

export default function ModuleContent({ children, moduleName }: Props) {
    return (
        <div className="bg-white/10 rounded-2xl px-6 md:px-12 py-16 shadow-md shadow-deep-blue h-full">
            <h2 className="text-center text-2xl md:text-4xl text-white font-medium mb-12">{moduleName}</h2>
            {children}
        </div>
    )
}
