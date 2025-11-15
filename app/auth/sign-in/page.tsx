"use client";

import Loading from "@/components/Common/Loading";
import LogInScreen from "@/components/Screen/Desktop/LogInScreen";
import MobileLogInScreen from "@/components/Screen/Mobile/MobileLogInScreen";
import useMobile from "@/hooks/useMobile";

export default function SettingPage() {
    const { isLoading, isMobile } = useMobile();
    if (isLoading) {
        return <Loading />;
    }
    return isMobile ? <MobileLogInScreen /> : <LogInScreen />;
}