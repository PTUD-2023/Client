import Header from "src/components/Header"

const Contract = () => {
  return (
  <div className="flex relative flex-col text-center items-center">
    <Header/>
    <div className="inline-flex gap-2.5 bg-zinc-100 rounded-[25px] shadow border-2 border-blue-900 mt-[80px] relative flex-col text-center " >
      <div className="text-center text-blue-900 text-4xl font-bold font-['Montserrat'] capitalize pt-[40px]">Contract</div>
      <div className="w-[400px] h-[70px] relative flex text-left ml-[40px] mr-[40px] gap-6">
        <div className="left-0 top-0 absolute text-blue-900 text-[20px] font-semibold font-['Montserrat']">Name</div>
        <input className="w-[400px] h-[50px] left-0 top-[38px] absolute bg-white pl-[20px] pr-[20px] rounded-[15px] border-2 border-zinc-500" placeholder="Mehrabbozorgi"/>
      </div>
      <div className="w-[400px] h-[70px] relative flex text-left ml-[40px] mr-[40px] mt-[20px] gap-6">
        <div className="left-0 top-0 absolute text-blue-900 text-[20px] font-semibold font-['Montserrat']">Address</div>
        <input className="w-[400px] h-[50px] left-0 top-[38px] absolute bg-white pl-[20px] pr-[20px] rounded-[15px] border-2 border-zinc-500" placeholder="33062 Zboncak isle"/>
      </div>
      <div className="w-[400px] h-[70px] relative flex text-left ml-[40px] mr-[40px] mt-[20px] gap-6">
        <div className="left-0 top-0 absolute text-blue-900 text-[20px] font-semibold font-['Montserrat']">Phone Number</div>
        <input className="w-[400px] h-[50px] left-0 top-[38px] absolute bg-white pl-[20px] pr-[20px] rounded-[15px] border-2 border-zinc-500" placeholder="58077.79"/>
      </div>
      <div className="w-[400px] h-[70px] relative flex text-left ml-[40px] mr-[40px] mt-[20px] gap-6">
        <div className="left-0 top-0 absolute text-blue-900 text-[20px] font-semibold font-['Montserrat']">Email</div>
        <input className="w-[400px] h-[50px] left-0 top-[38px] absolute bg-white pl-[20px] pr-[20px] rounded-[15px] border-2 border-zinc-500" placeholder="Mehrabbozorgi.business@gmail.com"/>
      </div>
      <div className="w-[400px] h-[70px] relative flex text-left ml-[40px] mr-[40px] mt-[20px] gap-6">
        <div className="left-0 top-0 absolute text-blue-900 text-[20px] font-semibold font-['Montserrat']">Insurance Type</div>
        <input className="w-[400px] h-[50px] left-0 top-[38px] absolute bg-white pl-[20px] pr-[20px] rounded-[15px] border-2 border-zinc-500" placeholder="Health insurance"/>
      </div>
      <div className="w-[400px] h-[70px] relative flex text-left ml-[40px] mr-[40px] mt-[20px] gap-6">
        <div className="left-0 top-0 absolute text-blue-900 text-[20px] font-semibold font-['Montserrat']">Duration</div>
        <input className="w-[400px] h-[50px] left-0 top-[38px] absolute bg-white pl-[20px] pr-[20px] rounded-[15px] border-2 border-zinc-500" placeholder="5 years"/>
      </div>
      <div className="w-[400px] h-[70px] relative items-center flex text-left ml-[40px] mr-[40px] mt-[20px] mb-[70px] gap-6">
        <input type="checkbox"/>
        <div className="text-center">
          <span className="text-neutral-900 text-sm font-medium font-['Montserrat']">I agree to the </span>
          <span className="text-blue-900 text-sm font-normal font-['Montserrat']">contract terms</span>
        </div>
      </div>
      <div className="absolute right-[40px] bottom-[20px] w-44 h-[50px] px-16 py-4 bg-blue-900 rounded-[25px] shadow border-2 justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-lg font-semibold font-['Montserrat']">Send</div>
      </div>
    </div>
    <div className="w-full flex mt-[20px] justify-center items-center flex bg-white">

      {/* <Slider/> */}
    </div>
  </div>
  );
}

export default Contract
