import { ComponentPropsWithoutRef } from 'react'

type InputProps = {
  id: string
  label: string
  type: string
} & ComponentPropsWithoutRef<'input'>

const Input = ({ id, label, type, ...otherProps }: InputProps) => {
  return (
    <div className='control'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={label} {...otherProps} />
    </div>
  )
}

export default Input
