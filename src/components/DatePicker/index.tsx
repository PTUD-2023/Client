import dayjs from 'dayjs'
import 'dayjs/locale/vi'
import Lucide from '../Lucide'
import Litepicker from 'src/components/Litepicker'
import { useMemo } from 'react'

interface Props {
  date?: Date
  setDate?: React.Dispatch<React.SetStateAction<string>>
  formik?: any
  id: string
  name: string
  isForm: boolean
  label: string
}

const Main = ({ isForm, date, setDate, formik, id, name, label }: Props) => {
  return (
    <div className='relative min-w-20 max-w-56 mx-auto'>
      <div className='absolute flex items-center justify-center w-10 h-[38px] border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400'>
        <Lucide icon='Calendar' className='w-4 h-4' />
      </div>
      <Litepicker
        value={isForm ? dayjs(formik.values[name]).format('D MMM, YYYY') : dayjs(date).format('D MMM, YYYY')}
        onChange={(selectedDate) => {
          if(isForm)
            formik.handleChange({ target: { name: 'birthday', value: dayjs(selectedDate).locale('vi')}}) 
          setDate
        }}
        id={id}
        name={name}
        label={label}
        options={{
          autoApply: false,
          buttonText: {
            apply: 'Chọn',
            cancel: 'Hủy',
            previousMonth: '',
            nextMonth: '',
            reset: ''
          },
          maxDate: new Date(), 
          lang: 'vi-vn',
          dropdowns: {
            minYear: 1990,
            maxYear: null,
            months: true,
            years: true
          },
        }}
        className='pl-12'
      />
    </div>
  )
}
export default Main
