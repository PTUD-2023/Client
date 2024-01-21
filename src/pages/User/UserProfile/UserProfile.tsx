import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from '@tanstack/react-query';
import userAccountApi from 'src/apis/userAccount.api';
import { UserInfor } from 'src/types/user.type'
import avt from 'src/assets/Images/avatar.png'
import { useEffect, useRef, useState } from 'react'
import Support from '../../../components/Support'

// type UserInfor= {
//   id: number,
//   email: string| null,
//   lastName: string| null,
//   firstName: string| null,
//   phone: string| null,
//   birthday: Date| null,
//   gender: string| null,
//   avatar: string| null,
//   CMND: string| null,
//   address: string| null,
//   timeCreated: Date,
//   role: string,
// }null,null,

const UserProfile = () => {
  const [isSupportVisible, setSupportVisible] = useState(false)

  const deleteButtonRef = useRef(null)
  const toggleSupportVisibility = () => {
    setSupportVisible(!isSupportVisible)
  }

  const getUserInforQuery = useQuery({
    queryKey: [`get-user-infor`],
    queryFn: () => userAccountApi.getUserInfor(),
    onError: (err) => console.log(err),
  });

  const userData = getUserInforQuery.data?.data as UserInfor;
  const userAvatarUrl = userData?.avatar?.url || avt;

  return (
    <div className="flex flex-col items-center relative font-['Roboto']">
      <div className='w-full mt-[50px] flex justify-center mb-[40px] mx-[40px] flex-col'>
        <div className="h-[53px] w-[400px] text-blue-900 text-sm font-semibold">
          Thông tin cá nhân
        </div>
        <div className='flex-1 h-fit mx-[40px] rounded-[10px] flex-col justify-center items-center gap-[20px] flex leading-normal'>
          <div className='w-full flex gap-[20px] justify-start items-center'>
            <div className='flex flex-col gap-[20px] w-fit h-fit relative justify-center items-center '>
              <img className='flex w-[200px] h-[200px] border-[2px] border-black left-0 top-0 rounded-[10px]' alt='avatar' src={userAvatarUrl}/>
              <button className='flex w-fit h-fit justify-center px-[40px] py-[10px] rounded-[10px] items-center bg-transparent border-[2px] border-black text-black leading-normal'>
                Chọn ảnh đại diện
              </button>
            </div>
            <div className='flex-1 flex flex-col gap-[10px] justify-start items-center]'>
              <div className='w-full h-fit justify-between flex'>
                <div className='h-fit flex flex-col gap-[15px] justify-start items-start'>
                  <div className="text-blue-900 text-base font-semibold ">Họ</div>
                  <input
                    className="w-[300px] h-[50px] bg-white rounded-[10px] border-2 border-zinc-500 text-zinc-500 text-sm font-medium  px-[20px]"
                    value={userData?.firstName}
                  />
                </div>
                <div className='h-fit flex flex-col gap-[15px] justify-start items-start'>
                  <div className="text-blue-900 text-base font-semibold  left-0 top-0">Tên</div>
                  <input
                    className="w-[300px] h-[50px] bg-white rounded-[10px] border-2 border-zinc-500 text-zinc-500 text-sm font-medium  px-[20px]"
                    value= {userData?.lastName}
                  />
                </div>
              </div>
              <div className='flex-col justify-center items-start gap-[15px] flex'>
                <div className="text-blue-900 text-base font-semibold ">Email</div>
                <input
                  className="w-full h-[50px] bg-white rounded-[10px] border-2 border-zinc-500 text-zinc-500 text-sm font-medium  px-[20px]"
                  value= {userData?.email}
                />
              </div>
              <div className='flex-col justify-center items-start gap-[15px] flex'>
                <div className="text-blue-900 text-base font-semibold ">Địa chỉ</div>
                <input
                  className="w-full h-[50px] bg-white rounded-[10px] border-2 border-zinc-500 text-zinc-500 text-sm font-medium  px-[20px]"
                  value= {userData?.address}
                />
              </div>
              <div className='flex-col justify-center items-start gap-[15px] flex'>
                <div className="text-blue-900 text-base font-semibold ">Số điện thoại</div>
                <input
                  className="w-full h-[50px] bg-white rounded-[10px] border-2 border-zinc-500 text-zinc-500 text-sm font-medium  px-[20px]"
                  value= {userData?.phone}
                />
              </div>
            </div>
          </div>
          <div className='w-full justify-end items-end gap-10 flex mb-[40px]'>
            <button className='py-[10px] w-[160px] bg-red-600 rounded-[10px] border border-red-600 justify-center items-center gap-2.5 flex'>
              <span className="text-white text-base font-semibold ">Hủy</span>
            </button>
            <button className='py-[10px] w-[160px] bg-green-400 rounded-[10px] border border-green-400 justify-center items-center gap-2.5 flex'>
              <span className="text-white text-base font-semibold ">Lưu</span>
            </button>
          </div>
        </div>
      </div>
      <div className='mt-[40px] justify-center items-center flex bg-white'></div>
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
