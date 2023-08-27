import { ChangeEvent, useContext, useState } from 'react'
import { ContainerTable } from '../../../globalStyles'
import { AdocaoContext } from './adocoesContext'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { useContextSelector } from 'use-context-selector'
import { ModalContext } from './modalContext'

export function TabelaAdocoes() {
  const { adocoes, deleteAdocao, searchAdocao } = useContext(AdocaoContext)
  const [adocaoCodeForSearch, setAdocaoCodeForSearch] = useState('')
  const OpenModal = useContextSelector(ModalContext, (context) => {
    return context.OpenModal
  })
  const changeSelectedAdocao = useContextSelector(ModalContext, (context) => {
    return context.changeSelectedAdocao
  })

  function handlePreencherValores(event: MouseEvent) {
    const selectedAdocaoCod = (
      (event.currentTarget as HTMLElement).parentElement?.parentElement
        ?.children[0] as HTMLElement
    ).innerText
    changeSelectedAdocao(selectedAdocaoCod)
    OpenModal()
  }

  function handleDeleteAdocao(event: MouseEvent) {
    if (window.confirm('Deletar Adocao?') === true) {
      const adocaoCodValue = (
        (event.currentTarget as HTMLElement).parentElement?.parentElement
          ?.children[0] as HTMLElement
      ).innerText
      deleteAdocao(adocaoCodValue)
    }
  }
  function handleSearchAdocaoForCode(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length >= 0) {
      setAdocaoCodeForSearch(event.target.value)
      searchAdocao(event.target.value)
    } else {
      setAdocaoCodeForSearch('')
    }
  }
  return (
    <ContainerTable>
      <div>
        <input
          type="text"
          id="search"
          onChange={handleSearchAdocaoForCode}
          placeholder="Buscar adocoes"
          value={adocaoCodeForSearch}
        />
      </div>
      <table>
        <thead>
          <tr>
            <td>Código</td>
            <td>CPF</td>
            <td>Animal</td>
            <td>Data</td>
            <td>Status</td>
            <td>Termos</td>
            <td>Documentos</td>
          </tr>
        </thead>
        <tbody>
          {adocoes.map((adocao) => {
            return (
              <tr key={String(adocao.codigo)}>
                <td>{adocao.codigo}</td>
                <td>{adocao.cpfCliente}</td>
                <td>{adocao.codigoAnimal}</td>
                <td>{adocao.data}</td>
                <td>{adocao.status}</td>
                <td>{adocao.termos}</td>
                <td>{adocao.documentos}</td>
                <td>
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
                    onClick={handleDeleteAdocao}
                  ></AiOutlineDelete>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </ContainerTable>
  )
}
