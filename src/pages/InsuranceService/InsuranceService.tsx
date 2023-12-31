export const InsuranceService = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center'>
      <h3 className='mt-10 mb-5 text-2xl lg:text-4xl font-bold lg:max-w-[50%] mx-auto lg:mx-0'>
        Biểu phí và quyền lợi các gói bảo hiểm
      </h3>
      <div className='grid grid-cols-3 gap-3 grid-rows-8'>
        <div className='col-span-1'>
          <p className='font-bold text-sm text-[#99542D] '>BẢO HIỂM TAI NẠN</p>

          <ul className='list-disc'>
            <li className='relative'>
              <span>Quyền lợi 1 - Tử vong/ thương tật toàn bộ vĩnh viễn</span>
            </li>
            <li className='relative'>
              <span>Ung thư thể nhẹ</span>
            </li>
          </ul>
        </div>
        <div>
          <p className='font-bold text-sm text-[#99542D]'>BẢO VỆ TOÀN DIỆN CÁC GIAI ĐOẠN UNG THƯ</p>
        </div>
        <div>
          <p className='font-bold text-sm text-[#99542D]'>BẢO VỆ TOÀN DIỆN CÁC GIAI ĐOẠN UNG THƯ</p>
        </div>
      </div>
      {/* <div className='w-[400px] h-[700px] bg-red-50'>
        <div className='h-[175px] w-[400px] bg-danger'></div>
      </div> */}
    </div>
  )
}

export default InsuranceService
