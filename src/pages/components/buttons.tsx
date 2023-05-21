import { AddButtonStyles, DeleteButtonStyles, EditButtonStyles } from "./styles";
interface AddButtonProps{
  customer: string
}
export function AddButton({customer}: AddButtonProps) {
  return (
  <AddButtonStyles>Adicionar {customer}</AddButtonStyles>
  )
}
export function EditButton({customer}: AddButtonProps) {
  return (
  <DeleteButtonStyles>Deletar {customer}</DeleteButtonStyles>
  )
}
export function DeleteButton({customer}: AddButtonProps) {
  return (
  <EditButtonStyles>Editar {customer}</EditButtonStyles>
  )
}
