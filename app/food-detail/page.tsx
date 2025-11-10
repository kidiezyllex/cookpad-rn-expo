import Header from "@/components/Common/Header";
import FoodDetailScreen from "@/components/Screen/FoodDetailScreen";

export default function FoodDetailPage() {
    return (
        <>
            <Header />
            <main className="w-full py-16 min-h-screen bg-backgroundV1">
                <FoodDetailScreen />
            </main>
        </>
    );
}