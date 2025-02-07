import MainBackground1 from "@/assets/game-board-background.webp";

export default function GameArea() {
    return (
        <div className="relative rounded-3xl overflow-hidden mb-4">
            <img className="w-full" src={MainBackground1} alt="background" />
            <div className="absolute bottom-52 right-72">
                <button className="w-12 h-12 rounded-full bg-deep-blue flex items-center justify-center text-white font-semibold text-xl select-none border-4 border-white/50 cursor-pointer hover:-translate-y-2 transition duration-250">1</button>
            </div>
            <div className="absolute bottom-102 right-76">
                <button className="w-12 h-12 rounded-full bg-deep-blue flex items-center justify-center text-white font-semibold text-xl select-none border-4 border-white/50 cursor-pointer hover:-translate-y-2 transition duration-250">2</button>
            </div>
            <div className="absolute top-102 left-68">
                <button className="w-12 h-12 rounded-full bg-deep-blue flex items-center justify-center text-white font-semibold text-xl select-none border-4 border-white/50 cursor-pointer hover:-translate-y-2 transition duration-250">3</button>
            </div>
            <div className="absolute top-88 left-86">
                <button className="w-12 h-12 rounded-full bg-deep-blue flex items-center justify-center text-white font-semibold text-xl select-none border-4 border-white/50 cursor-pointer hover:-translate-y-2 transition duration-250">4</button>
            </div>
            <div className="absolute top-64 left-68">
                <button className="w-12 h-12 rounded-full bg-deep-blue flex items-center justify-center text-white font-semibold text-xl select-none border-4 border-white/50 cursor-pointer hover:-translate-y-2 transition duration-250">5</button>
            </div>
            <div className="absolute top-36 left-76">
                <button className="w-12 h-12 rounded-full bg-deep-blue flex items-center justify-center text-white font-semibold text-xl select-none border-4 border-white/50 cursor-pointer hover:-translate-y-2 transition duration-250">6</button>
            </div>
        </div>
    )
}
