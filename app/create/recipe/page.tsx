import Header from "@/components/Common/Header"
import CreateRecipeScreen from '@/components/Screen/Desktop/CreateRecipeScreen';

export default function SearchPage() {
    return (
        <>
            <Header />
            <main className="w-full py-16 min-h-screen bg-backgroundV1">
                <CreateRecipeScreen />
            </main>
        </>
    );
}