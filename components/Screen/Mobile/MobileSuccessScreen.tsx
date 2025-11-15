import { images } from '@/constants';
import { useSuccessStore } from '@/store/successStore';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const MobileSuccessScreen = () => {
    const { successTitle, successDesc, resetSuccess, successRedirect } = useSuccessStore();
    const hasRedirectedRef = useRef(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();

    const handleRedirect = () => {
        if (!hasRedirectedRef.current) {
            hasRedirectedRef.current = true;
            resetSuccess();
            router.replace(successRedirect as any);
        }
    };

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            handleRedirect();
        }, 4000);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [successRedirect, router]);

    return (
        <button 
            onClick={handleRedirect}
            className="flex-1 w-full h-full bg-transparent border-none p-0 cursor-pointer"
        >
            <div className='flex flex-col min-h-screen bg-backgroundV1'>
                <div className='flex flex-col min-h-screen bg-backgroundV1'>
                    {/* Main Content */}
                    <div className="mt-32 gap-14 px-4 flex flex-col justify-center items-center">
                        <Image
                            src={images.registerSuccess}
                            alt="Success"
                            width={200}
                            height={200}
                            quality={100}
                            draggable={false}
                            className="object-contain w-50 h-50"
                        />
                        <div className="gap-2 flex flex-col justify-start items-center">
                            <span className="font-medium leading-loose text-center text-black text-xl">
                                {successTitle || 'Đăng ký thành công!'}
                            </span>
                            <span className="px-4 leading-normal text-center text-textNeutralV1 text-base">
                                {successDesc || 'Bạn đã đăng ký thành công, vui lòng đăng nhập với tài khoản mới của bạn.'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default MobileSuccessScreen;
