import { Link } from "react-router-dom";
import Header from "src/components/Header"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const Request = () => {
  return (
    <div className="flex relative flex-col text-center items-center">
    <Header/>
    <div className="inline-flex gap-2.5 bg-zinc-100 rounded-[25px] mb-[40px] shadow border-2 border-blue-900 mt-[80px] relative flex-col text-center " >
        <div className="text-center text-blue-900 text-4xl font-bold font-['Montserrat'] capitalize pt-[40px]">Request</div>
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
        <div className="w-[400px] h-[220px] relative flex text-left ml-[40px] mr-[40px] mt-[20px] mb-[70px] gap-6">
            <div className="left-0 top-0 absolute text-blue-900 text-[20px] font-semibold font-['Montserrat']">Insurance Type</div>
            <input className="w-[400px] h-[150px] left-0 top-[38px] absolute bg-white pl-[20px] pr-[20px] rounded-[15px] border-2 border-zinc-500" placeholder="Health insurance"/>
        </div>
        <div className="absolute right-[40px] bottom-[20px] w-44 h-[50px] px-16 py-4 bg-blue-900 rounded-[25px] shadow border-2 justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-lg font-semibold font-['Montserrat']">Send</div>
        </div>
    </div>
    <div className="w-full flex mt-[20px] justify-center items-center flex bg-white">

      {/* <Slider/> */}
    </div>
    <Link to={'/support'} className="w-[50px] h-[50px] flex justify-center items-center absolute right-[60px] bottom-[40px] bg-blue-900 rounded-[50px]">
        <FontAwesomeIcon icon={faQuestion} className="text-2xl text-white"/>
    </Link>
  </div>
  );
}

export default Request
