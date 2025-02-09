import { useStore } from "@/store/useStore";
import DashboardView from "@/components/views/DashboardView";

export default function App() {
    const { activeView } = useStore();
    
    return (
        <>
            {activeView === "dashboard" && <DashboardView />}
        </>
    )
}
