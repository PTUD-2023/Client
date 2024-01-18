import _ from 'lodash'
import { useRef, useState } from 'react'
import fakerData from 'src/utils/faker'
import Button from 'src/components/AdminCustomButton'
import Pagination from 'src/components/Pagination'
import { FormInput, FormSelect } from 'src/components/Form'
import Lucide from 'src/components/Lucide'
// import Tippy from 'src/components/Tippy'
import { Dialog } from 'src/components/Headless'
import Table from 'src/components/Table'
import { formatCurrentDateTime } from 'src/utils/utils'
import RegUserFormTableRow from 'src/components/RegUserFormTableRow'
import RegUserRequestTableRow from 'src/components/RegUserRequestTableRow'
import RequestForm from 'src/components/RequestForm'

function getRandomEmail() {
  const emailProviders = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com']
  const randomProvider = emailProviders[Math.floor(Math.random() * emailProviders.length)]
  return `user${Math.floor(Math.random() * 1000)}@${randomProvider}`
}

function generateRandomData() {
  const typesOfInsurance = ['Cá nhân', 'Nhóm']
  const insurancePackages = ['Gói A', 'Gói B', 'Gói C']
  const contentList = ['Acident', 'Sick', 'Die']
  const statusList = ['pending', 'refused', 'approved']

  return {
    id: Math.floor(Math.random() * 1000),
    name: fakerData[0].users[0].name,
    email: getRandomEmail(),
    date: formatCurrentDateTime(),
    content: contentList[Math.floor(Math.random() * contentList.length)],
    status: statusList[Math.floor(Math.random() * statusList.length)]
  }
}

function UserFormManagement() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false)
  const deleteButtonRef = useRef(null)
  const regList = Array.from({ length: 10 }, generateRandomData)

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open)

  return (
    <>
      <h2 className='mt-10 text-lg font-medium intro-y'>Danh sách yêu cầu thanh toán</h2>
      <div className='grid grid-cols-12 gap-6 mt-5'>
        <div className='flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap'>
          <Button variant='primary' className='mr-2 shadow-md flex items-center justify-center gap-1' onClick={handleOpen}>
            <Lucide icon='Plus' className='w-4 h-4' />
            Thêm yêu cầu mới
          </Button>
         <RequestForm open={open} handleOpen={handleOpen}/>
          <div className='hidden mx-auto md:block text-slate-500'>Showing 1 to 10 of 150 entries</div>
          <div className='w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0'>
            <div className='relative w-56 text-slate-500'>
              <FormInput type='text' className='w-56 pr-10 !box' placeholder='Search...' />
              <Lucide icon='Search' className='absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3' />
            </div>
          </div>
        </div>
        {/* BEGIN: Data List */}
        <div className='col-span-12 overflow-auto intro-y lg:overflow-visible'>
          <Table className='border-spacing-y-[10px] border-separate -mt-2'>
            <Table.Thead>
              <Table.Tr>
                <Table.Th className='border-b-0 whitespace-nowrap'>STT</Table.Th>
                <Table.Th className='border-b-0 whitespace-nowrap'>Tên</Table.Th>
                <Table.Th className='border-b-0 whitespace-nowrap'>Tổng chi phí</Table.Th>
                <Table.Th className='border-b-0 whitespace-nowrap'>Nội dung</Table.Th>
                <Table.Th className='border-b-0 whitespace-nowrap'>Ngày</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {regList.map((faker, fakerKey) => (
                <RegUserRequestTableRow faker={faker} fakerKey={fakerKey} key={fakerKey} />
              ))}
            </Table.Tbody>
          </Table>
        </div>
        {/* END: Data List */}
        {/* BEGIN: Pagination */}
        <div className='flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap'>
          <Pagination className='w-full sm:w-auto sm:mr-auto'>
            <Pagination.Link>
              <Lucide icon='ChevronsLeft' className='w-4 h-4' />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon='ChevronLeft' className='w-4 h-4' />
            </Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>1</Pagination.Link>
            <Pagination.Link active>2</Pagination.Link>
            <Pagination.Link>3</Pagination.Link>
            <Pagination.Link>...</Pagination.Link>
            <Pagination.Link>
              <Lucide icon='ChevronRight' className='w-4 h-4' />
            </Pagination.Link>
            <Pagination.Link>
              <Lucide icon='ChevronsRight' className='w-4 h-4' />
            </Pagination.Link>
          </Pagination>
          <FormSelect className='w-20 mt-3 !box sm:mt-0'>
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </FormSelect>
        </div>
        {/* END: Pagination */}
      </div>
      {/* BEGIN: Delete Confirmation Modal */}
      <Dialog
        open={deleteConfirmationModal}
        onClose={() => {
          setDeleteConfirmationModal(false)
        }}
        initialFocus={deleteButtonRef}
      >
        <Dialog.Panel>
          <div className='p-5 text-center'>
            <Lucide icon='XCircle' className='w-16 h-16 mx-auto mt-3 text-danger' />
            <div className='mt-5 text-3xl'>Are you sure?</div>
            <div className='mt-2 text-slate-500'>
              Do you really want to delete these records? <br />
              This process cannot be undone.
            </div>
          </div>
          <div className='px-5 pb-8 text-center'>
            <Button
              variant='outline-secondary'
              type='button'
              onClick={() => {
                setDeleteConfirmationModal(false)
              }}
              className='w-24 mr-1'
            >
              Cancel
            </Button>
            <Button variant='danger' type='button' className='w-24' ref={deleteButtonRef}>
              Delete
            </Button>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* END: Delete Confirmation Modal */}
    </>
  )
}

export default UserFormManagement
