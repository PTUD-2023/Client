import Header from "src/components/Header"
import banner from 'src/assets/Images/banner.png'
import Slider from "src/components/Slider";

const Home = () => {
  return (
  <div className="flex relative flex-col">
    <Header/>
    <div className="w-[458px] h-[253px] relative flex flex-col mt-[80px] ml-[60px]">
      <div className="w-[458px] h-[253px] left-0 top-0 absolute opacity-95 bg-white rounded-[10px] border-2 border-blue-900 border-opacity-20" />
      <div className="w-[60px] left-[11px] top-[12px] absolute flex items-center text-center justify-between">
          <div className="w-[10px] h-[10px] bg-green-700 rounded-full flex pr-[10px]" />
          <div className="w-[38px] text-center text-black text-[12px] font-normal font-['Montserrat'] leading-normal">Activated</div>
      </div>
      <div className="w-[265px] h-[127px] left-[97px] top-[34px] absolute flex-col justify-start items-center gap-2.5 inline-flex">
          <div className="text-center text-black text-lg font-medium font-['Montserrat'] leading-normal">Welcome To Your Dashboard</div>
          <div className="text-center text-blue-600 text-xl font-bold font-['Montserrat'] leading-normal">2883 - 7829 - 9201 - 101</div>
          <div className="text-center text-neutral-900 text-sm font-light font-['Montserrat'] leading-normal">Member ID</div>
          <button className="w-[197px] h-6 rounded-[5px] border border-blue-900 border-opacity-20 flex-col justify-center items-center inline-flex">
            <div className="text-center text-blue-600 text-opacity-70 text-xs font-medium font-['Montserrat'] leading-normal">View your member Card</div>
          </button>
      </div>
    </div>
    <div className="w-full flex mt-[20px] justify-center items-center flex bg-white">
      {/* <Slider/> */}
    </div>
  </div>
  );
}

export default Home
