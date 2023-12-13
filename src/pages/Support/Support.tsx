import { Link } from "react-router-dom";
import Header from "src/components/Header"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import logo from 'src/assets/svg/logo.svg';

function Support() {
    return (<div>
        <div className="w-fit h-fit bg-zinc-100 rounded-[15px] shadow border-2 border-blue-900 justify-start items-start gap-2.5 flex flex-col">
            <div className="pt-[10px] px-[20px] justify-center items-center gap-[20px] flex">
                <img className="w-[50px] h-[50px] rounded-[50px] border border-blue-900" src={logo} />
                <div className="text-blue-900 text-2xl font-black font-['Roboto']">Admin</div>
            </div>
            <div className="flex w-full justify-center items-center"><div className="w-[360px] h-[0px] border-[1px] border-blue-900"></div></div>
            <span className="px-[20px] py-[8px] bg-blue-900 rounded-[25px] justify-center items-center flex text-white text-[20px] font-normal font-['Roboto'] tracking-wide">Hello!</span>
            <div className="flex-col justify-center items-center gap-2.5 flex">
                <div className="w-[390px] h-10 relative">
                    <div className="w-[390px] h-10 left-0 top-0 absolute bg-blue-900 rounded-[25px]" />
                    <div className="left-[14px] top-[8px] absolute text-white text-[20px] font-normal font-['Roboto']">Can you help me with the contract issue?</div>
                </div>
            </div>
            <div className="px-7 py-2 bg-neutral-200 rounded-[25px] justify-center items-center gap-2.5 flex">
                <div className="text-zinc-800 text-[20px] font-normal font-['Roboto'] tracking-wide">Hey There!</div>
            </div>
            <div className="px-[29px] py-2 bg-neutral-200 rounded-[25px] justify-center items-center gap-2.5 flex">
                <div className="text-zinc-800 text-[20px] font-normal font-['Roboto'] tracking-wide">How are you?</div>
            </div>
            <div className="h-fit w-[360px] mx-[20px] mb-[20px] relative bg-gray-200 rounded-[15px] border-2 border-blue-900 justify-center items-center gap-[34px] flex select-none">
                <textarea
                    className="h-[50px] py-[10px] focus:outline-none bg-transparent text-black text-opacity-50 text-lg font-normal font-['Roboto'] resize-none"
                    placeholder="Enter message..."
                    style={{ overflow: 'hidden' }}
                ></textarea>
                <button>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-2xl text-black" />
                </button>
            </div>
        </div>
    </div>);
}

export default Support;