import { AddButtonStyles, DeleteButtonStyles, EditButtonStyles } from './styles'
import { MdAdd } from 'react-icons/md'
import { useState } from 'react'
import Modal from 'react-modal'

interface AddButtonProps {
  customer: string
}
export function AddButton({ customer }: AddButtonProps) {
  return (
    <AddButtonStyles>
      Adicionar {customer} <MdAdd size={24} />
    </AddButtonStyles>
  )
}
export function EditButton({ customer }: AddButtonProps) {
  return <DeleteButtonStyles>Deletar {customer}</DeleteButtonStyles>
}
export function DeleteButton({ customer }: AddButtonProps) {
  return <EditButtonStyles>Editar {customer}</EditButtonStyles>
}
interface ModalProps {
  children: React.ReactNode
  customer: string
}
export function ButtonOpenModal(props: ModalProps) {
  const [newClienteModalOpen, setNewClienteModalOpen] = useState(false)
  function handleOpenNewClienteModal() {
    setNewClienteModalOpen(true)
  }
  function handleCloseNewClienteModal() {
    setNewClienteModalOpen(false)
  }
  return (
    <>
      <div
        className="btn"
        onClick={handleOpenNewClienteModal}
      >
        <AddButton customer={props.customer} />
      </div>
      <Modal
        isOpen={newClienteModalOpen}
        onRequestClose={handleCloseNewClienteModal}
      >
        {props.children}
      </Modal>
    </>
  )
}
