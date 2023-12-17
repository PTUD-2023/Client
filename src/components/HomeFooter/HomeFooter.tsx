import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeFooter = () => {
  return (
    <div className='max-w-full mx-auto sm:px-4 bg-[#15233C] footer mt-5 pt-[60px] wow fadeIn' data-wow-delay='0.1s'>
      <div className='container mx-auto sm:px-4 py-5'>
        <div className='flex flex-wrap'>
          <div className='lg:w-1/4 md:w-1/2 pr-4 pl-4'>
            <h1 className='text-white mb-4 flex items-center'>
              <img className='max-w-full h-auto me-3' src='src/assets/Images/icon/icon-02-light.png' alt='' />
              <span className='text-[40px] text-white font-[Poppins,sans-serif] leading-[48px] font-bold'>Insure</span>
            </h1>
            <p className='font-[Roboto] text-[17px] text-[#a7a8b4]'>
              We always bring safety to your health and money We always bring safety to your health and money{' '}
            </p>
            <div className='flex pt-2 mt-4'>
              <button className='flex justify-center items-center border border-[#A7A8B4] w-[38px] h-[38px] transition duration-[300ms] rounded-[10px] py-1 px-3 bg-transparent hover:bg-[#015fc9] m-1 ml-0 group'>
                <FontAwesomeIcon icon={faTwitter} className='text-[#A7A8B4] group-hover:text-white' />
              </button>
              <button className='flex justify-center items-center border border-[#A7A8B4] w-[38px] h-[38px] transition duration-[300ms] rounded-[10px] py-1 px-3 bg-transparent hover:bg-[#015fc9] m-1 group'>
                <FontAwesomeIcon icon={faFacebookF} className='text-[#A7A8B4] group-hover:text-white' />
              </button>
              <button className='flex justify-center items-center border border-[#A7A8B4] w-[38px] h-[38px] transition duration-[300ms] rounded-[10px] py-1 px-3 bg-transparent hover:bg-[#015fc9] m-1 group'>
                <FontAwesomeIcon icon={faYoutube} className='text-[#A7A8B4] group-hover:text-white' />
              </button>
              <button className='flex justify-center items-center border border-[#A7A8B4] w-[38px] h-[38px] transition duration-[300ms] rounded-[10px] py-1 px-3 bg-transparent hover:bg-[#015fc9] m-1 group'>
                <FontAwesomeIcon icon={faLinkedinIn} className='text-[#A7A8B4] group-hover:text-white' />
              </button>
            </div>
          </div>
          <div className='lg:w-1/4 md:w-1/2 pr-4 pl-4'>
            <h5 className='text-[20px] text-white font-[Poppins,sans-serif] mb-5 font-bold'>Address</h5>
            <p className='font-[Roboto] text-[17px] text-[#a7a8b4] mb-4'>
              <FontAwesomeIcon icon={faLocationDot} className='mr-2' />
              123 Street, Ho Chi Minh City, VietNam
            </p>
            <p className='font-[Roboto] text-[17px] text-[#a7a8b4] flex gap-2 items-center mb-4'>
              <FontAwesomeIcon icon={faPhone} />
              +012 345 67890
            </p>
            <p className='font-[Roboto] text-[17px] text-[#a7a8b4] flex gap-2 items-center '>
              <FontAwesomeIcon icon={faEnvelope} />
              info@example.com
            </p>
          </div>
          <div className='lg:w-1/4 md:w-1/2 pr-4 pl-4 flex flex-col'>
            <h5 className='text-[20px] text-white font-[Poppins,sans-serif] mb-5 font-bold'>Quick Links</h5>
            <button className='font-[Roboto] text-[17px] text-[#a7a8b4] group flex gap-2 items-center '>
              <FontAwesomeIcon icon={faAngleRight} className='h-3 w-3 text-[#a7a8b4]' />
              <span className='btn btn-link mt-1'>About Us</span>
            </button>
            <button className='font-[Roboto] text-[17px] text-[#a7a8b4] group flex gap-2 items-center '>
              <FontAwesomeIcon icon={faAngleRight} className='h-3 w-3 text-[#a7a8b4]' />
              <span className='btn btn-link mt-1'>Contact Us</span>
            </button>
            <button className='font-[Roboto] text-[17px] text-[#a7a8b4] group flex gap-2 items-center '>
              <FontAwesomeIcon icon={faAngleRight} className='h-3 w-3 text-[#a7a8b4]' />
              <span className='btn btn-link mt-1'>Our Services</span>
            </button>
            <button className='font-[Roboto] text-[17px] text-[#a7a8b4] group flex gap-2 items-center '>
              <FontAwesomeIcon icon={faAngleRight} className='h-3 w-3 text-[#a7a8b4]' />
              <span className='btn btn-link mt-1'>Terms & Condition</span>
            </button>
            <button className='font-[Roboto] text-[17px] text-[#a7a8b4] group flex gap-2 items-center '>
              <FontAwesomeIcon icon={faAngleRight} className='h-3 w-3 text-[#a7a8b4]' />
              <span className='btn btn-link mt-1'>Support</span>
            </button>
          </div>
          <div className='lg:w-1/4 md:w-1/2 pr-4 pl-4 '>
            <h5 className='text-[20px] text-white font-[Poppins,sans-serif] mb-5 font-bold'>Newsletter</h5>
            <p className='font-[Roboto] text-[17px] text-[#a7a8b4]'>Please leave your email and we will assist you.</p>
            <div className='relative mx-auto mt-3' style={{ maxWidth: '400px' }}>
              <input
                className='focus:ring-4 rounded-[10px] px-2 mb-1 text-base bg-transparent text-white border border-gray-200 w-[300px] py-4 ps-4 pe-5'
                type='text'
                placeholder='Your email'
              />
              <button
                type='button'
                className='transition text-center border rounded-[10px] px-3 bg-[#0dd3f1] text-white hover:bg-[#015fc9] py-2 absolute top-0 end-0 mt-2 -me-3'
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-6 max-w-full mx-auto sm:px-4 copyright'>
        <div className='container mx-auto sm:px-4'>
          <div className='flex flex-wrap '>
            <div className='md:w-1/2 pr-4 pl-4 mb-3 md:mb-0'>
              &copy; <a href='#'>Health Insurance</a>, All Right Reserved.
            </div>
            <div className='md:w-1/2 pr-4 pl-4 text-center'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFooter
