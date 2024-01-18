import _ from 'lodash'
import clsx from 'clsx'
import fakerData from 'src/utils/faker'
import Lucide from 'src/components/Lucide'
// import Tippy from 'src/components/Tippy'
import Table from 'src/components/Table'
import { useState } from 'react'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton } from '@material-tailwind/react'

interface Props {
  faker: any
  fakerKey: any
}

const RegUserRequestTableRow = ({ faker, fakerKey }: Props) => {
  const [viewDetailModal, setViewDetailModal] = useState(false)

  const handleOpen = () => setViewDetailModal(!viewDetailModal)

  return (
    <>
      <Table.Tr className='intro-x'>
        <Table.Td className='first:rounded-l-md last:rounded-r-md w-10 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]'>
          <div className='flex'>{fakerKey + 1}</div>
        </Table.Td>
        <Table.Td className='first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]'>
          <a href='' className='font-medium whitespace-nowrap'>
            {fakerData[fakerKey].users[0].name}
          </a>
          <div className='text-slate-500 text-xs whitespace-nowrap mt-0.5'>
            {Math.floor(Math.random() * (33 - 18 + 1) + 18)} tuổi
          </div>
        </Table.Td>
        <Table.Td className='first:rounded-l-md last:rounded-r-md w-10 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]'>
        {Math.floor(Math.random() * (50000000 - 10000000) + 10000000)}
        </Table.Td>
        <Table.Td className='first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]'>
          <div className='flex'>
          {faker.content === 'sick' ? 'Đau ốm' : faker.status === 'die' ? 'Tử vong' : 'Tai nạn'}
            </div>
        </Table.Td>
        <Table.Td className='first:rounded-l-md last:rounded-r-md w-10 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]'>
          <div className='flex'>{faker.date}</div>
        </Table.Td>
        <Table.Td className='first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]'>
          <div
            className={clsx([
              'flex items-center justify-center',
              { 'text-warning': faker.status === 'pending' },
              { 'text-danger': faker.status === 'refused' },
              { 'text-success': faker.status === 'approved' }
            ])}
          >
            <Lucide
              icon={faker.status === 'pending' ? 'Clock' : faker.status === 'approved' ? 'Check' : 'X'}
              className='w-4 h-4 mr-2'
            />
            {faker.status === 'pending' ? 'Chờ duyệt' : faker.status === 'approved' ? 'Đã duyệt' : 'Từ chối'}
          </div>
        </Table.Td>
        <Table.Td className='first:rounded-l-md last:rounded-r-md w-60 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400'>
          <div className='flex items-center justify-center'>
            <button className='flex items-center mr-3' onClick={handleOpen}>
              <Lucide icon='Eye' className='w-4 h-4 mr-1' /> Xem
            </button>
          </div>
        </Table.Td>
      </Table.Tr>
      <Dialog size='xs' className='w-[700px] dark:bg-darkmode-400' open={viewDetailModal} handler={handleOpen}>
        <DialogHeader className='bg-white dark:bg-darkmode-400 rounded-t-md h-[60px] p-0 block'>
          <div className=''>
            <div className='flex items-center h-[60px] border-b border-gray-300'>
              <div className='w-full flex justify-center'>
                <span className='text-[20px] text-[#050505] font-bold'>Chi tiết đơn đăng ký</span>
              </div>
              <div className='flex justify-end absolute w-full -ml-4'>
                <IconButton
                  color='blue-gray'
                  className=' bg-[#e4e6eb] dark:bg-darkmode-400 rounded-full hover:bg-[#d8dadf] px-4'
                  variant='text'
                  onClick={handleOpen}
                >
                  <Lucide icon='X' className='w-5 h-5' />
                </IconButton>
              </div>
            </div>
          </div>
        </DialogHeader>
        <DialogBody>
          <div className='intro-x flex flex-col bg-white gap-[20px]'>
            <div className='flex first:rounded-l-md last:rounded-r-md border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]'>
              <div>STT:</div>
              <div className='flex'>{fakerKey + 1}</div>
            </div>
            <div className='first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]'>
              <a href='' className='font-medium whitespace-nowrap'>
                Tên: {fakerData[fakerKey].users[0].name}
              </a>
              <div className='text-slate-500 text-xs whitespace-nowrap mt-0.5'>
                {Math.floor(Math.random() * (33 - 18 + 1) + 18)} tuổi
              </div>
            </div>
            <div className='first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]'>
              <div className='flex'>Tổng chi phí: {faker.amount}</div>
            </div>
            <div className='first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]'>
              <div className='flex'>Nội dung: {faker.content}</div>
            </div>
            <div className='first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]'>
              <div className='flex'>Ngày yêu cầu: {faker.date}</div>
            </div>
            <div className='first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]'>
              <div
                className={clsx([
                  'flex items-center justify-start',
                  { 'text-warning': faker.status === 'pending' },
                  { 'text-danger': faker.status === 'refused' },
                  { 'text-success': faker.status === 'approved' }
                ])}
              >
                <div className='text-slate-500 pr-[10px]'>Trạng thái:</div>
                <Lucide
                  icon={faker.status === 'pending' ? 'Clock' : faker.status === 'approved' ? 'Check' : 'X'}
                  className='w-4 h-4 mr-2'
                />
                {faker.status === 'pending' ? 'Chờ duyệt' : faker.status === 'approved' ? 'Đã duyệt' : 'Từ chối'}
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant='text' color='red' onClick={handleOpen} className='mr-1'>
            <span>Hủy yêu cầu</span>
          </Button>
          <Button variant='gradient' color='green' onClick={handleOpen}>
            <span>Xác nhận</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default RegUserRequestTableRow
