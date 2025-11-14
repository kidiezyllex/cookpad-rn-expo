import { images } from '@/constants';
import Image from 'next/image';

export default function Loading() {
    return (
        <div
            className="w-full min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${images.personalChestBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="flex flex-col items-center space-y-4">
                <Image
                    src={images.logo}
                    alt="Logo"
                    width={80}
                    height={80}
                    className="mb-4 animate-pulse"
                />
            </div>
        </div>
    );
}
