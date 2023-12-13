import { Link } from "react-router-dom";
import Header from "src/components/Header"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faQuestion } from '@fortawesome/free-solid-svg-icons';
import avt from 'src/assets/Images/avatar.png';

const Profile = () => {
  return (
    <div className="flex relative flex-col text-center items-center">
      <Header />
      <div className="w-full mt-[100px] flex justify-around mb-[40px]">
        <div className="w-[251px] h-fit py-[20px] bg-white rounded-[10px] border-2 border-blue-900 flex-col justify-center items-center gap-[20px] flex">
          <img className="w-[100px] h-[100px] bg-red-300 rounded-[50px] border border-blue-900 justify-end items-center flex" src={avt} />
          <div className="text-center text-blue-900 text-[17px] font-bold font-['Montserrat']">Drennan</div>
          <button className="bg-gray-300 rounded-md justify-center items-center flex">
            <div className="px-[20px] py-[10px] text-blue-600 text-base font-bold font-['Roboto'] leading-normal">Information</div>
          </button>
        </div>
        {/* <div className="flex gap-2.5 bg-zinc-100 rounded-[25px] shadow border-2 border-blue-900 relative flex-col text-center " >
        <div className="text-center text-blue-900 text-4xl font-bold font-['Montserrat'] capitalize pt-[40px]">Contract</div>
        <div className="w-[400px] h-[50px] relative flex text-left ml-[40px] mr-[40px] gap-6">
          <div className="left-0 top-0 absolute text-blue-900 text-[20px] font-semibold font-['Montserrat']">Name</div>
          <input className="w-[400px] h-[50px] left-0 top-[38px] absolute bg-white pl-[20px] pr-[20px] rounded-[15px] border-2 border-zinc-500" placeholder="Mehrabbozorgi"/>
        </div>
        <div className="w-[400px] h-[50px] relative flex text-left ml-[40px] mr-[40px] mt-[20px] gap-6">
          <div className="left-0 top-0 absolute text-blue-900 text-[20px] font-semibold font-['Montserrat']">Address</div>
          <input className="w-[400px] h-[50px] left-0 top-[38px] absolute bg-white pl-[20px] pr-[20px] rounded-[15px] border-2 border-zinc-500" placeholder="33062 Zboncak isle"/>
        </div>
        <div className="w-[400px] h-[50px] relative flex text-left ml-[40px] mr-[40px] mt-[20px] gap-6">
          <div className="left-0 top-0 absolute text-blue-900 text-[20px] font-semibold font-['Montserrat']">Phone Number</div>
          <input className="w-[400px] h-[50px] left-0 top-[38px] absolute bg-white pl-[20px] pr-[20px] rounded-[15px] border-2 border-zinc-500" placeholder="58077.79"/>
        </div>
        <div className="w-[400px] h-[50px] relative flex text-left ml-[40px] mr-[40px] mt-[20px] gap-6">
          <div className="left-0 top-0 absolute text-blue-900 text-[20px] font-semibold font-['Montserrat']">Email</div>
          <input className="w-[400px] h-[50px] left-0 top-[38px] absolute bg-white pl-[20px] pr-[20px] rounded-[15px] border-2 border-zinc-500" placeholder="Mehrabbozorgi.business@gmail.com"/>
        </div>
        <div className="w-[400px] h-[50px] relative flex text-left ml-[40px] mr-[40px] mt-[20px] gap-6">
          <div className="left-0 top-0 absolute text-blue-900 text-[20px] font-semibold font-['Montserrat']">Insurance Type</div>
          <input className="w-[400px] h-[50px] left-0 top-[38px] absolute bg-white pl-[20px] pr-[20px] rounded-[15px] border-2 border-zinc-500" placeholder="Health insurance"/>
        </div>
        <div className="w-[400px] h-[50px] relative flex text-left ml-[40px] mr-[40px] mt-[20px] gap-6">
          <div className="left-0 top-0 absolute text-blue-900 text-[20px] font-semibold font-['Montserrat']">Duration</div>
          <input className="w-[400px] h-[50px] left-0 top-[38px] absolute bg-white pl-[20px] pr-[20px] rounded-[15px] border-2 border-zinc-500" placeholder="5 years"/>
        </div>
        <div className="w-[400px] h-[50px] relative items-center flex text-left ml-[40px] mr-[40px] mt-[20px] mb-[50px] gap-6">
          <input type="checkbox"/>
          <div className="text-center">
            <span className="text-neutral-900 font-medium font-['Montserrat']">I agree to the </span>
            <Link to={'/terms'} className="text-blue-900 font-normal font-['Montserrat']">contract terms</Link>
          </div>
        </div>
        <div className="absolute right-[40px] bottom-[20px] w-44 h-[50px] px-16 py-4 bg-blue-900 rounded-[25px] shadow border-2 justify-center items-center gap-2.5 flex">
          <div className="text-white text-lg font-semibold font-['Montserrat']">Send</div>
        </div>
      </div> */}
        <div className="w-fit h-fit rounded-[25px] mr-[200px] border-2 border-blue-900 flex-col justify-center items-center gap-2.5 flex">
          <div className="h-[120px] w-full justify-between items-center flex px-[30px] pt-[40px] pb-[20px]">
            <div className="h-[53px] text-blue-900 text-[40px] font-semibold font-['Roboto']">Edit profile</div>
            <div className="w-[80px] h-[80px] relative">
              <img className="w-[80px] h-[80px] left-0 top-0 absolute rounded-[500px]" src={avt} />
              <FontAwesomeIcon icon={faPencil} className="w-[20px] h-[20px] left-[50px] top-[0px] px-[5px] py-[5px] text-white absolute bg-blue-900 rounded-[50px]" />
            </div>
          </div>
          <div className="w-full h-fit px-[30px] justify-between flex pb-[20px]">
            <div className="h-fit flex flex-col gap-[15px] justify-start items-start">
              <div className="text-blue-900 text-xl font-semibold font-['Roboto']">First Name</div>
              <input className="w-[200px] h-[50px] bg-white rounded-[25px] border-2 border-zinc-500 text-zinc-500 text-lg font-medium font-['Roboto'] px-[20px]" placeholder="Mehrab" />
            </div>
            <div className="h-fit flex flex-col gap-[15px] justify-start items-start">
              <div className="text-blue-900 text-xl font-semibold font-['Roboto'] left-0 top-0">Last Name</div>
              <input className="w-[200px] h-[50px] bg-white rounded-[25px] border-2 border-zinc-500 text-zinc-500 text-lg font-medium font-['Roboto'] px-[20px]" placeholder="Bozorgi" />
            </div>
          </div>
          <div className="flex-col px-[30px] justify-center items-start gap-[15px] flex pb-[20px]">
            <div className="text-blue-900 text-xl font-semibold font-['Roboto']">Email</div>
            <input className="w-[500px] h-[50px] bg-white rounded-[25px] border-2 border-zinc-500 text-zinc-500 text-lg font-medium font-['Roboto'] px-[20px]" placeholder="Mehrabbozorgi.business@gmail.com" />
          </div>
          <div className="flex-col px-[30px] justify-center items-start gap-[15px] flex pb-[20px]">
            <div className="text-blue-900 text-xl font-semibold font-['Roboto']">Address</div>
            <input className="w-[500px] h-[50px] bg-white rounded-[25px] border-2 border-zinc-500 text-zinc-500 text-lg font-medium font-['Roboto'] px-[20px]" placeholder="33062 Zboncak isle" />
          </div>
          <div className="flex-col px-[30px] justify-center items-start gap-[15px] flex pb-[20px]">
            <div className="text-blue-900 text-xl font-semibold font-['Roboto']">Contact Number</div>
            <input className="w-[500px] h-[50px] bg-white rounded-[25px] border-2 border-zinc-500 text-zinc-500 text-lg font-medium font-['Roboto'] px-[20px]" placeholder="58077.79" />
          </div>
          <div className="h-fit justify-end items-end gap-10 flex mb-[40px]">
            <button className="py-[10px] w-[160px] bg-red-600 bg-opacity-30 rounded-[25px] border border-red-600 justify-center items-center gap-2.5 flex">
              <span className="text-white text-lg font-semibold font-['Montserrat']">Cancel</span>
            </button>
            <button className="py-[10px] w-[160px] bg-green-400 bg-opacity-30 rounded-[25px] border border-green-400 justify-center items-center gap-2.5 flex">
              <span className="text-black text-lg font-semibold font-['Montserrat']">Save</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-[20px] justify-center items-center flex bg-white">
      </div>
      <Link to={'/support'} className="w-[50px] h-[50px] flex justify-center items-center absolute right-[60px] bottom-[40px] bg-blue-900 rounded-[50px]">
        <FontAwesomeIcon icon={faQuestion} className="text-2xl text-white" />
      </Link>
    </div>
  );
}

export default Profile
