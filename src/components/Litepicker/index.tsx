import { createRef, useEffect, useRef } from 'react'
import { setValue, init, reInit } from './litepicker'
import LitepickerJs from 'litepicker'
import { FormInput } from 'src/components/Form'
import { ILPConfiguration } from 'litepicker/dist/types/interfaces'
import './style.css'

export interface LitepickerElement extends HTMLInputElement {
  litePickerInstance: LitepickerJs
}

type LitepickerConfig = Partial<ILPConfiguration>

interface MainProps {
  options: {
    format?: string | undefined;
    maxDate?: string | Date | undefined;
  } & LitepickerConfig
  value: string
  onChange: (date: string) => void
  getRef: (el: LitepickerElement) => void
  label?: string; // Thêm prop label
}

export type LitepickerProps = MainProps & Omit<React.ComponentPropsWithoutRef<'input'>, keyof MainProps>

function Litepicker(props: LitepickerProps) {
  const initialRender = useRef(true)
  const litepickerRef = createRef<LitepickerElement>()
  const tempValue = useRef(props.value)

  useEffect(() => {
    if (litepickerRef.current) {
      props.getRef(litepickerRef.current)
    }

    // litepickerRef.current.litePickerInstance.on('show', () => {
    //   if (litepickerRef.current) {
    //     litepickerRef.current.classList.add('litepicker-has-value');
    //   }
    // });

    // litepickerRef.current.litePickerInstance.on('hide', () => {
    //   if (litepickerRef.current) {
    //     litepickerRef.current.classList.remove('litepicker-has-value');
    //   }
    // });

    if (initialRender.current) {
      setValue(props)
      if (litepickerRef.current !== null) {
        init(litepickerRef.current, props)
      }
      initialRender.current = false
    } else {
      if (tempValue.current !== props.value && litepickerRef.current !== null) {
        reInit(litepickerRef.current, props)
      }
    }
    

    tempValue.current = props.value
  }, [props.value])

  const { options, value, onChange, getRef, label, ...computedProps } = props;

  return (
    <div className={`relative ${value ? 'litepicker-has-value' : ''} text-[16px]`}>
      {label && (
        <label className={`absolute ${value ? 'label-focused' : ''}`} htmlFor={props.id}>
          {label}
        </label>
      )}
      <FormInput
        ref={litepickerRef}
        type="text"
        id={props.id}
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
        {...computedProps}
      />
    </div>
  );
}

Litepicker.defaultProps = {
  options: {},
  value: '',
  onChange: () => {},
  getRef: () => {}
}

export default Litepicker
