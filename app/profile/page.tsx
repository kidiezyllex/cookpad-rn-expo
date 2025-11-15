"use client";
import ProfileScreen from "@/components/Screen/Desktop/ProfileScreen";
import Header from "@/components/Common/Header"
import useMobile from "@/hooks/useMobile";
import Loading from "@/components/Common/Loading";
import MobileProfileScreen from "@/components/Screen/Mobile/MobileProfileScreen";

export default function ProfilePage() {
    const { isLoading, isMobile } = useMobile();
    if (isLoading) {
        return <Loading />;
    }
    return isMobile ? <MobileProfileScreen /> : (
        <>
            <Header />
            <main className="w-full py-16 min-h-screen bg-backgroundV1">
                <ProfileScreen />
            </main>
        </>
    );
}