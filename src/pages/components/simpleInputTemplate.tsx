import { ChangeEvent } from 'react'

interface InputProps {
  name: string
  type: string
  id: string
  value: string | number
  change: (e: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  validated?: boolean
  required?: boolean
  list?: string
  title?: string
}
interface SelectProps {
  value1: string
  value2: string
  value: string
  change: (e: ChangeEvent<HTMLSelectElement>) => void
}

export function InputTemplate({
  name,
  type,
  id,
  value,
  change,
  validated = true,
  ...props
}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        value={value}
        onInput={change}
        style={
          !validated
            ? { border: '1px solid red' }
            : { border: '1px solid black' }
        }
        {...props}
      />
    </div>
  )
}
export function SelectSexoTemplate({
  value1,
  value2,
  value,
  change,
}: SelectProps) {
  return (
    <div>
      <label htmlFor="sexo">Sexo</label>
      <select onChange={change} name="sexo" id="sexo" value={value}>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
      </select>
    </div>
  )
}
