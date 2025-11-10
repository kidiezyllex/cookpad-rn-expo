
import Header from "@/components/Common/Header"
import PersonalChestScreen from "@/components/Screen/PersonalChestScreen";

export default function CreateRecipePage() {
    return (
        <>
            <Header />
            <main className="w-full py-16 min-h-screen bg-backgroundV1">
                <PersonalChestScreen />
            </main>
        </>
    );
}