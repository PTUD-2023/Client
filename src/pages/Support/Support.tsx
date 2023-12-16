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
            <div className = "h-[300px] w-full overflow-y-auto flex flex-col justify-end">
                <span className="w-fit max-w-[300px] h-fit px-[20px] py-[8px] bg-blue-900 mb-[10px] rounded-[25px] justify-center items-center flex text-white text-[20px] font-normal font-['Roboto'] tracking-wide">Hello!</span>
                <span className="w-fit max-w-[300px] h-fit px-[20px] py-[8px] bg-blue-900 mb-[10px] rounded-[25px] justify-center items-center flex text-white text-[20px] font-normal font-['Roboto'] tracking-wide">Can you help me with the contract issue?</span>
                <span className="w-fit max-w-[300px] h-fit px-[20px] py-[8px] text-zinc-800 justify-start items-center float-wight flex text-[20px] font-normal font-['Roboto'] tracking-wide ml-auto mr-[30px] mb-[10px]">Hey There!</span>
                <span className="w-fit max-w-[300px] h-fit px-[20px] py-[8px] text-zinc-800 justify-start items-center float-wight flex text-[20px] font-normal font-['Roboto'] tracking-wide ml-auto mr-[30px] mb-[10px]">How are you?</span>
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