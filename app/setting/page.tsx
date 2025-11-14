import Header from "@/components/Common/Header";
import SettingScreen from "@/components/Screen/Desktop/SettingScreen";

export default function SettingPage() {
    return (
        <>
            <Header />
            <main className="w-full py-16 min-h-screen bg-backgroundV1">
                <SettingScreen />
            </main>
        </>
    );
}