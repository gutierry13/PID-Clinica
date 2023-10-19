// @ts-nocheck
import { CardContainer, ContainerForCards } from '../../../globalStyles'
import { ChangeEvent, useContext, useState } from 'react'
// import { ConsultaModal } from './ConsultaModal'
// import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

// import { ModalContext } from './modalContext'
import { ConsultaContext } from './consultaContext'
import { ModalContext } from './modalContext'
import { useContextSelector } from 'use-context-selector'

export function TabelaConsultas() {
  // const OpenModal = useContextSelector(ModalContext, (context) => {
  //   return context.OpenModal
  // })
  const OpenCardModal = useContextSelector(ModalContext, (context) => {
    return context.OpenCardModal
  })
  // const changeSelectedConsulta = useContextSelector(ModalContext, (context) => {
  //   return context.changeSelectedConsulta
  // })
  const [consultaCodeInputSearch, setConsultaCodeInputSearch] = useState('')
  const { consultas, searchConsulta } = useContext(ConsultaContext)
  // console.log(consultas)
  // function handlePreencherValores(event: MouseEvent) {
  //   const ConsultaSelecionadoCpf = (
  //     (event.currentTarget as HTMLElement).parentElement?.parentElement
  //       ?.children[0] as HTMLElement
  //   ).innerText
  //   changeSelectedConsulta(ConsultaSelecionadoCpf)
  //   OpenModal()
  // }

  // function handleDeleteConsulta(event: MouseEvent) {
  //   if (window.confirm('Deletar Consulta') === true) {
  //     const cpfElementValue = (
  //       (event.currentTarget as HTMLElement).parentElement?.parentElement
  //         ?.children[0] as HTMLElement
  //     ).innerText
  //     deleteConsulta(cpfElementValue)
  //   }
  // }

  function handleSearchConsultaForCode(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length >= 0) {
      setConsultaCodeInputSearch(event.target.value)
      searchConsulta(event.target.value)
    } else {
      setConsultaCodeInputSearch('')
    }
  }

  function handleClickCard(consulta) {
    OpenCardModal(consulta)
    console.log(consulta)
  }
  return (
    <ContainerForCards>
      <div>
        <input
          type="text"
          id="search"
          onChange={handleSearchConsultaForCode}
          placeholder="Buscar por consultas"
          value={consultaCodeInputSearch}
        />
      </div>
      {consultas.map((Consulta) => {
        return (
          <CardContainer
            key={Consulta.codigo}
            onClick={() => {
              handleClickCard(Consulta)
            }}
          >
            <div>
              <div>Data: {Consulta.data}</div>
              <div>Código: {Consulta.codigo}</div>
            </div>
            <div>
              <p>Cliente: {Consulta.clienteCPF.nome}</p>
              <p>Cpf: {Consulta.clienteCPF.cpf}</p>
            </div>
            <div>
              <p>Animal: {Consulta.animalID.nome}</p>
              <p>ID: {Consulta.animalID.codigo}</p>
            </div>
          </CardContainer>
        )
      })}
    </ContainerForCards>
    // <ContainerTable>
    //   <div>
    //     <input
    //       type="text"
    //       id="search"
    //       onChange={handleSearchConsultaForCPF}
    //       placeholder="Buscar Consultas"
    //       value={consultaCpfInputSearch}
    //     />
    //   </div>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Codigo</th>
    //         <th>Animal ID</th>
    //         <th>Cliente CPF</th>
    //         <th>Funcionário CPF</th>
    //         <th>Data da Consulta</th>
    //         <th>Motivo da Consulta</th>
    //         <th>Diagnóstico</th>
    //         <th>Medicamento</th>
    //         <th>Tratamento</th>
    //         <th>Observação</th>
    //       </tr>
    //     </thead>

    //     <tbody>
    //       {consultas.map((Consulta) => {
    //         return (
    //           <tr key={Consulta.codigo}>
    //             <td id="codigo">{Consulta.codigo}</td>
    //             <td>{Consulta.animalID}</td>
    //             <td>{String(Consulta.clienteCPF.cpf)}</td>
    //             <td>{String(Consulta.funcionarioCPF[0].cpf)}</td>
    //             <td>{String(Consulta.data)}</td>
    //             <td>{Consulta.motivo}</td>
    //             <td>{Consulta.diagnostico}</td>
    //             <td>{Consulta.medicamento}</td>
    //             <td>{Consulta.tratamento}</td>
    //             <td>{Consulta.observacao}</td>
    //             {/* <td>
    //               <AiOutlineEdit
    //                 size={22}
    //                 className="editar"
    //                 style={{ color: '#808019' }}
    //                 onClick={handlePreencherValores}
    //               ></AiOutlineEdit>
    //             </td>
    //             <td>
    //               <AiOutlineDelete
    //                 className="excluir"
    //                 size={22}
    //                 style={{ color: '#902727' }}
    //                 onClick={handleDeleteConsulta}
    //               ></AiOutlineDelete>
    //             </td> */}
    //           </tr>
    //         )
    //       })}
    //     </tbody>
    //   </table>
    // </ContainerTable>
  )
}
