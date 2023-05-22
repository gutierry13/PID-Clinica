import { AddButtonStyles, DeleteButtonStyles, EditButtonStyles } from './styles'
import { MdAdd } from 'react-icons/md'
import { useState } from 'react'
import Modal from 'react-modal'
import { BiEditAlt } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
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
  children?: React.ReactNode
  customer: string
  modalState?: boolean
}
interface EditModalProps {
  children?: React.ReactNode
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
        isOpen={props.modalState || newClienteModalOpen}
        onRequestClose={handleCloseNewClienteModal}
      >
        {props.children}
      </Modal>
    </>
  )
}

export function DeleteOpenModal(props: EditModalProps) {
  const [newClienteModalOpen, setNewClienteModalOpen] = useState(false)
  function handleOpenNewClienteModal(event: any) {
    setNewClienteModalOpen(true)
  }
  function handleCloseNewClienteModal() {
    setNewClienteModalOpen(false)
  }
  return (
    <>
      <RiDeleteBinLine onClick={handleOpenNewClienteModal} />
      <Modal
        isOpen={newClienteModalOpen}
        onRequestClose={handleCloseNewClienteModal}
      >
        {props.children}
      </Modal>
    </>
  )
}
