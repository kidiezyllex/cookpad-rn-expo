import TableSelection from '@/components/Screen/TableSelection';
import Header from "@/components/Common/Header";

export default function SettingPage() {
    return (
        <>
            <Header />
            <main className="w-full py-16 min-h-screen bg-backgroundV1">
                <TableSelection />
            </main>
        </>
    );
}