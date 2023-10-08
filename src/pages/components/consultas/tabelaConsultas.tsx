import { ContainerTable } from '../../../globalStyles'
import { ChangeEvent, MouseEvent, useContext, useState } from 'react'
// import { ConsultaModal } from './ConsultaModal'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

import { ModalContext } from './modalContext'
import { ConsultaContext } from './consultaContext'
import { useContextSelector } from 'use-context-selector'

export function TabelaConsultas() {
  const OpenModal = useContextSelector(ModalContext, (context) => {
    return context.OpenModal
  })
  const changeSelectedConsulta = useContextSelector(ModalContext, (context) => {
    return context.changeSelectedConsulta
  })
  const [consultaCpfInputSearch, setConsultaCpfInputSearch] = useState('')
  const { consultas, deleteConsulta, searchConsulta } =
    useContext(ConsultaContext)
  // console.log(consultas)
  function handlePreencherValores(event: MouseEvent) {
    const ConsultaSelecionadoCpf = (
      (event.currentTarget as HTMLElement).parentElement?.parentElement
        ?.children[0] as HTMLElement
    ).innerText
    changeSelectedConsulta(ConsultaSelecionadoCpf)
    OpenModal()
  }

  function handleDeleteConsulta(event: MouseEvent) {
    if (window.confirm('Deletar Consulta') === true) {
      const cpfElementValue = (
        (event.currentTarget as HTMLElement).parentElement?.parentElement
          ?.children[0] as HTMLElement
      ).innerText
      deleteConsulta(cpfElementValue)
    }
  }

  function handleSearchConsultaForCPF(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length >= 0) {
      setConsultaCpfInputSearch(event.target.value)
      searchConsulta(event.target.value)
    } else {
      setConsultaCpfInputSearch('')
    }
  }
  return (
    <ContainerTable>
      <div>
        <input
          type="text"
          id="search"
          onChange={handleSearchConsultaForCPF}
          placeholder="Buscar Consultas"
          value={consultaCpfInputSearch}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Animal ID</th>
            <th>Cliente CPF</th>
            <th>Funcionário CPF</th>
            <th>Data da Consulta</th>
            <th>Motivo da Consulta</th>
            <th>Diagnóstico</th>
            <th>Medicamento</th>
            <th>Tratamento</th>
            <th>Observação</th>
          </tr>
        </thead>

        <tbody>
          {consultas.map((Consulta) => {
            return (
              <tr key={Consulta.codigo}>
                <td id="codigo">{Consulta.codigo}</td>
                <td>{Consulta.animalID}</td>
                <td>{Consulta.clienteCPF.cpf}</td>
                <td>{Consulta.funcionarioCPF[0].cpf}</td>
                <td>{Consulta.data}</td>
                <td>{Consulta.motivo}</td>
                <td>{Consulta.diagnostico}</td>
                <td>{Consulta.medicamento}</td>
                <td>{Consulta.tratamento}</td>
                <td>{Consulta.observacao}</td>
                {/* <td>
                  <AiOutlineEdit
                    size={22}
                    className="editar"
                    style={{ color: '#808019' }}
                    onClick={handlePreencherValores}
                  ></AiOutlineEdit>
                </td>
                <td>
                  <AiOutlineDelete
                    className="excluir"
                    size={22}
                    style={{ color: '#902727' }}
                    onClick={handleDeleteConsulta}
                  ></AiOutlineDelete>
                </td> */}
              </tr>
            )
          })}
        </tbody>
      </table>
    </ContainerTable>
  )
}
