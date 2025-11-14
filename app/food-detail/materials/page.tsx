import RecipeScreen from '@/components/Screen/Desktop/RecipeScreen';
import Header from "@/components/Common/Header";

export default function FoodMaterialsPage() {
    return (
        <>
            <Header />
            <main className="w-full py-16 min-h-screen bg-backgroundV1">
                <RecipeScreen />
            </main>
        </>
    );
}