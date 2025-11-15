import { icons } from "@/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import BackHeader from "@/components/Common/BackHeader";

const securityOptions = [
  {
    id: 1,
    title: "Đổi mật khẩu",
    icon: icons.lockIcon,
    hasToggle: false,
    route: '/(auth)/change-password',
  },
  {
    id: 2,
    title: "Đồng bộ Face /Touch ID",
    icon: icons.faceIcon,
    hasToggle: true,
    route: '',
  },
];

const SecurityOption = ({ option }: { option: typeof securityOptions[0] }) => {
  const [isEnabled, setIsEnabled] = useState(option.id === 2);
  const router = useRouter();

  return (
    <button
      onClick={option.hasToggle ? undefined : () => router.push(option.route)}
      className="flex-row justify-between items-center min-h-10 gap-2 py-2 bg-transparent border-none p-0 cursor-pointer w-full"
    >
      <Image
        src={option.icon}
        alt={option.title}
        width={100}
        height={100}
        quality={100}
        draggable={false}
        className="object-contain h-6 w-auto"
      />
      <span className="flex-1 font-bold text-black text-base text-left">
        {option.title}
      </span>
      {option.hasToggle ? (
        <label className="relative inline-block w-11 h-6">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={(e) => setIsEnabled(e.target.checked)}
            className="opacity-0 w-0 h-0"
          />
          <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors ${isEnabled ? 'bg-[#E36137]' : 'bg-[#E5E5E5]'
            }`}>
            <span className={`absolute h-5 w-5 rounded-full bg-white transition-transform ${isEnabled ? 'translate-x-5' : 'translate-x-0.5'
              } top-0.5`} />
          </span>
        </label>
      ) : (
        <span className="text-[#2D2D2D] text-xl">›</span>
      )}
    </button>
  );
};

const MobileSecurityScreen = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-backgroundV1">
      <BackHeader
        headerTitle="Bảo mật"
        onPress={() => router.back()}
      />

      <div className="flex-1 overflow-y-auto pb-30 px-4 pt-8">
        <div className="w-full">
          {securityOptions.map((option) => (
            <SecurityOption key={option.id} option={option} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileSecurityScreen;
