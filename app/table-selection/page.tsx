import TableSelection from '@/components/Screen/TableSelection';
import Header from "@/components/Common/Header";
import { Suspense } from 'react';

export default function SettingPage() {
    return (
        <>
            <Header />
            <main className="w-full py-16 min-h-screen bg-backgroundV1">
                <Suspense fallback={null}>
                    <TableSelection />
                </Suspense>
            </main>
        </>
    );
}