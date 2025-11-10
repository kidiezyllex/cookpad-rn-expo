import Header from "@/components/Common/Header"
import SearchScreen from "@/components/Screen/SearchScreen"

export default function SearchPage() {
    return (
        <>
            <Header />
            <main className="w-full py-16 min-h-screen bg-backgroundV1">
                <SearchScreen />
            </main>
        </>
    );
}