import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faQuestion } from '@fortawesome/free-solid-svg-icons'
import avt from 'src/assets/Images/avatar.png'
import { useState } from 'react'
import Support from '../../../components/Support'

const UserProfile = () => {
  const [isSupportVisible, setSupportVisible] = useState(false)

  const toggleSupportVisibility = () => {
    setSupportVisible(!isSupportVisible)
  }

  return (
    <div className='flex flex-col items-center relative'>
      <div className='w-full mt-[50px] flex justify-between mb-[40px]'>
        <div className='w-fit h-fit py-[20px] bg-white rounded-[10px] border-2 border-blue-900 flex-col justify-center items-center gap-[20px] flex mr-[40px]'>
          <img
            className='w-[100px] h-[100px] bg-red-300 rounded-[50px] border border-blue-900 justify-end items-center flex mx-[50px]'
            src={avt}
          />
          <div className="text-center text-blue-900 text-[17px] font-bold font-['Montserrat']">Drennan</div>
          <button className='bg-gray-300 rounded-md justify-center items-center flex'>
            <div className="px-[20px] py-[10px] text-blue-600 text-base font-bold font-['Roboto'] leading-normal">
              Thông tin
            </div>
          </button>
        </div>
        <div className='w-fit h-fit rounded-[25px] mr-[200px] border-2 border-blue-900 flex-col justify-center items-center gap-[20px] flex bg-white leading-normal'>
          <div className='h-[120px] w-full justify-between items-center flex px-[30px] py-[40px]'>
            <div className="h-[53px] w-[400px] text-blue-900 text-[40px] font-semibold font-['Roboto']">
              Chỉnh sửa thông tin cá nhân
            </div>
            <div className='w-[80px] h-[80px] relative'>
              <img className='w-[80px] h-[80px] left-0 top-0 absolute rounded-[500px]' src={avt} />
              <FontAwesomeIcon
                icon={faPencil}
                className='w-[20px] h-[20px] left-[50px] top-[0px] px-[5px] py-[5px] text-white absolute bg-blue-900 rounded-[50px]'
              />
            </div>
          </div>
          <div className='w-full h-fit px-[30px] justify-between flex py-[20px]'>
            <div className='h-fit flex flex-col gap-[15px] justify-start items-start'>
              <div className="text-blue-900 text-xl font-semibold font-['Roboto']">Họ</div>
              <input
                className="w-[200px] h-[50px] bg-white rounded-[25px] border-2 border-zinc-500 text-zinc-500 text-lg font-medium font-['Roboto'] px-[20px]"
                placeholder='Mehrab'
              />
            </div>
            <div className='h-fit flex flex-col gap-[15px] justify-start items-start'>
              <div className="text-blue-900 text-xl font-semibold font-['Roboto'] left-0 top-0">Tên</div>
              <input
                className="w-[200px] h-[50px] bg-white rounded-[25px] border-2 border-zinc-500 text-zinc-500 text-lg font-medium font-['Roboto'] px-[20px]"
                placeholder='Bozorgi'
              />
            </div>
          </div>
          <div className='flex-col px-[30px] justify-center items-start gap-[15px] flex pb-[20px]'>
            <div className="text-blue-900 text-xl font-semibold font-['Roboto']">Email</div>
            <input
              className="w-[500px] h-[50px] bg-white rounded-[25px] border-2 border-zinc-500 text-zinc-500 text-lg font-medium font-['Roboto'] px-[20px]"
              placeholder='Mehrabbozorgi.business@gmail.com'
            />
          </div>
          <div className='flex-col px-[30px] justify-center items-start gap-[15px] flex pb-[20px]'>
            <div className="text-blue-900 text-xl font-semibold font-['Roboto']">Địa chỉ</div>
            <input
              className="w-[500px] h-[50px] bg-white rounded-[25px] border-2 border-zinc-500 text-zinc-500 text-lg font-medium font-['Roboto'] px-[20px]"
              placeholder='33062 Zboncak isle'
            />
          </div>
          <div className='flex-col px-[30px] justify-center items-start gap-[15px] flex pb-[20px]'>
            <div className="text-blue-900 text-xl font-semibold font-['Roboto']">Số điện thoại</div>
            <input
              className="w-[500px] h-[50px] bg-white rounded-[25px] border-2 border-zinc-500 text-zinc-500 text-lg font-medium font-['Roboto'] px-[20px]"
              placeholder='58077.79'
            />
          </div>
          <div className='h-fit justify-end items-end gap-10 flex mb-[40px]'>
            <button className='py-[10px] w-[160px] bg-red-600 bg-opacity-30 rounded-[25px] border border-red-600 justify-center items-center gap-2.5 flex'>
              <span className="text-white text-lg font-semibold font-['Montserrat']">Hủy</span>
            </button>
            <button className='py-[10px] w-[160px] bg-green-400 bg-opacity-30 rounded-[25px] border border-green-400 justify-center items-center gap-2.5 flex'>
              <span className="text-black text-lg font-semibold font-['Montserrat']">Lưu</span>
            </button>
          </div>
        </div>
      </div>
      <div className='mt-[20px] justify-center items-center flex bg-white'></div>
      {/* Component Support */}
      {isSupportVisible && (
        <div className='absolute bottom-[100px] right-[80px] z-50'>
          <Support />
        </div>
      )}
      <button
        onClick={toggleSupportVisibility}
        className='w-[50px] h-[50px] flex justify-center items-center absolute right-[60px] bottom-[40px] bg-blue-900 rounded-[50px]'
      >
        <FontAwesomeIcon icon={faQuestion} className='text-2xl text-white' />
      </button>
    </div>
  )
}

export default UserProfile
