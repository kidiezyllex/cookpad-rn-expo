'use client';

import Header from '@/components/Common/Header';
import Loading from '@/components/Common/Loading';
import useMobile from '@/hooks/useMobile';
import CreateRecipeScreen from '@/components/Screen/Desktop/CreateRecipeScreen';

export default function CreateRecipePage() {
    const { isMobile, isLoading } = useMobile();
    if (isLoading) {
        return <Loading />;
    }

    return (
        isMobile ? (<MobileCreateRecipeScreen />) : (<>
            <Header />
            <main className="w-full py-16 min-h-screen bg-backgroundV1">
                <CreateRecipeScreen />
            </main>
        </>
        ))
}
