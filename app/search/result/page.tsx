import Header from "@/components/Common/Header"
import SearchResultsScreen from '@/components/Screen/Desktop/SearchResultsScreen';
import { Suspense } from 'react';

export default function SearchResultsPage() {
    return (
        <>
            <Header />
            <main className="w-full py-16 min-h-screen bg-backgroundV1">
                <Suspense fallback={null}>
                    <SearchResultsScreen />
                </Suspense>
            </main>
        </>
    );
}