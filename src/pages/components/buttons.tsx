import { AddButtonStyles, DeleteButtonStyles, EditButtonStyles } from "./styles";
import {MdAdd} from 'react-icons/md'
interface AddButtonProps{
  customer: string
}
export function AddButton({customer}: AddButtonProps) {
  return (
  <AddButtonStyles>Adicionar {customer} <MdAdd size={24}/></AddButtonStyles>
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
