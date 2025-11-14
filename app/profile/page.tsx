import ProfileScreen from "@/components/Screen/Desktop/ProfileScreen";
import Header from "@/components/Common/Header"

export default function ProfilePage() {
    return (
        <>
            <Header />
            <main className="w-full py-16 min-h-screen bg-backgroundV1">
                <ProfileScreen />
            </main>
        </>
    );
}