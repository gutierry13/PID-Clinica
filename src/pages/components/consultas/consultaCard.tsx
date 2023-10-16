import Modal from 'react-modal'
import { useContextSelector } from 'use-context-selector'
import { ModalContext } from './modalContext'
import { ConsultaElement } from '../../../globalStyles'
export default function ConsultaCard() {
  const { isCardOpen, selectedClient, CloseCardModal } = useContextSelector(
    ModalContext,
    (context) => {
      return {
        isCardOpen: context.isCardOpen,
        selectedClient: context.selectedClient,
        CloseCardModal: context.CloseCardModal,
      }
    },
  )
  console.log(selectedClient)
  return (
    <Modal
      isOpen={isCardOpen}
      onRequestClose={CloseCardModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content consultaModal"
    >
      {selectedClient.clienteCPF &&
      selectedClient.animalID &&
      selectedClient.codigo &&
      selectedClient.funcionarioCPF ? (
        <ConsultaElement>
          <div className="cliente">
            <h3>Cliente</h3>
            <p>Cpf: {selectedClient.clienteCPF.cpf}</p>
            <p>Nome: {selectedClient.clienteCPF.nome}</p>
            <p>Email: {selectedClient.clienteCPF.email}</p>
            <p>Telefone: {selectedClient.clienteCPF.telefone}</p>
          </div>
          <div className="animal">
            <h3>Animal</h3>
            <p>Códgio: {selectedClient.animalID.codigo}</p>
            <p>Nome: {selectedClient.animalID.nome}</p>
            <p>Especie: {selectedClient.animalID.especie.nome}</p>
            <p>Raça: {selectedClient.animalID.raca}</p>
            <p>Peso: {selectedClient.animalID.peso} Kg</p>
            <p>Saúde:{selectedClient.animalID.saude}</p>
            <p>Sexo: {selectedClient.animalID.sexo}</p>
            <p>Idade: {selectedClient.animalID.idade} anos</p>
          </div>
          <div className="consulta">
            <h3>Consulta</h3>
            <p>Código: {selectedClient.codigo}</p>
            <p>Data: {selectedClient.data}</p>
            <p>Motivo: {selectedClient.motivo}</p>
            <p>Diagnóstico: {selectedClient.diagnostico}</p>
            <p>Medicamentos: {selectedClient.medicamento}</p>
            <p>Tratamento: {selectedClient.tratamento}</p>
            <p>Observação: {selectedClient.observacao}</p>
          </div>
          <div className="funcionario">
            <h3>Funcionários</h3>
            {selectedClient.funcionarioCPF.map((funcionario) => {
              return (
                <div key={funcionario.cpf} className="func">
                  <p>Cpf: {funcionario.cpf}</p>
                  <p>Nome: {funcionario.nome}</p>
                  <p>Função: {funcionario.funcao}</p>
                  <p>Setor: {funcionario.setor}</p>
                  <p>Telefone: {funcionario.telefone}</p>
                  <p>Ocupação: {funcionario.ocupacao}</p>
                </div>
              )
            })}
          </div>
        </ConsultaElement>
      ) : (
        <div>Null</div>
      )}
    </Modal>
  )
}
