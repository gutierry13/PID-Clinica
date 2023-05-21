interface InputProps {
  name: string
  type: string
  id: string
  value: string | number
  change: (e: React.ChangeEvent<HTMLInputElement>) => void
}
interface SelectProps {
  value1: string
  value2: string
  value: string
  change: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export function InputTemplate({ name, type, id, value, change }: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={change}
      />
    </div>
  )
}
export function SelectSexoTemplate({
  value1,
  value2,
  value,
  change
}: SelectProps) {
  return (
    <div>
      <label htmlFor="sexo">Sexo</label>
      <select
        onChange={change}
        name="sexo"
        id="sexo"
        value={value}
      >
        <option value="Masculino">{value1}</option>
        <option value="Feminino">{value2}</option>
      </select>
    </div>
  )
}
