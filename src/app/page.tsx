import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full bg-black">
      <div className="flex flex-col w-[1280px] h-[832px] bg-white">
        <div className="w-[1280px] h-[88px] bg-gray-300 mt-0 ml-0"></div>

        <div className="flex flex-row justify-evenly items-center h-[744px]">
          <div className="flex flex-col justify-evenly mt-[-90px] w-[50%] h-[400px]">
            <h1 className="font-inter font-bold text-[44px] leading-[53px] w-[548px] h-[51px] ml-[20px]">
              Welcome To Our Website
            </h1>

            <p className="w-[571px] h-[156px] font-inter font-[400] text-[32px] leading-10 text-slate-600 ml-[20px] mt-[-10px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard
            </p>

            <button className="w-[237px] h-[66px] bg-black text-white font-inter font-[400] text-[28px] lead-[33.89px] mt-[35px] ml-[20px]">
              Contact US
            </button>
          </div>

          <Image
            className="mt-[-70px]"
            src="/blackpicture.png"
            width={502}
            height={465}
            alt="black picture"
          />
        </div>
      </div>
    </div>
  );
}
