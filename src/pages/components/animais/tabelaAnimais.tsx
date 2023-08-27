import { ChangeEvent, useContext, useState } from 'react'
import { ContainerTable } from '../../../globalStyles'
import { AnimalContext } from './animalContext'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { useContextSelector } from 'use-context-selector'
import { ModalContext } from './modalContext'

export function TabelaAnimais() {
  const { animals, deleteAnimal, searchAnimal } = useContext(AnimalContext)
  const [animalCodeForSearch, setAnimalCodeForSearch] = useState('')
  const OpenModal = useContextSelector(ModalContext, (context) => {
    return context.OpenModal
  })
  const changeSelectedAnimal = useContextSelector(ModalContext, (context) => {
    return context.changeSelectedAnimal
  })
  function handlePreencherValores(event: MouseEvent) {
    const selectedAnimalCod = (
      (event.currentTarget as HTMLElement).parentElement?.parentElement
        ?.children[0] as HTMLElement
    ).innerText
    changeSelectedAnimal(selectedAnimalCod)
    OpenModal()
  }

  function handleDeleteAnimal(event: MouseEvent) {
    if (window.confirm('Deletar Animal?') === true) {
      const animalCodValue = (
        (event.currentTarget as HTMLElement).parentElement?.parentElement
          ?.children[0] as HTMLElement
      ).innerText
      deleteAnimal(animalCodValue)
    }
  }
  function handleSearchAnimalForCode(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length >= 0) {
      setAnimalCodeForSearch(event.target.value)
      searchAnimal(event.target.value)
    } else {
      setAnimalCodeForSearch('')
    }
  }
  return (
    <ContainerTable>
      <div>
        <input
          type="text"
          id="search"
          onChange={handleSearchAnimalForCode}
          placeholder="Buscar animais"
          value={animalCodeForSearch}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>Espécie</th>
            <th>Raça</th>
            <th>Idade</th>
            <th>Sexo</th>
            <th>Peso</th>
            <th>Cor</th>
            <th>Porte</th>
            <th>Saude</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal) => {
            function calcIdade(meses: number): String {
              if (meses < 12) {
                return `${meses % 12} meses`
              }
              return `${Math.floor(meses / 12)} ${
                meses === 12 ? 'ano' : 'anos'
              } e ${meses % 12} meses`
            }
            const idadeCalculada = calcIdade(Number(animal.idade))
            return (
              <tr key={String(animal.codigo)}>
                <td>{animal.codigo}</td>
                <td>
                  {animal.nome.charAt(0).toUpperCase() + animal.nome.slice(1)}
                </td>
                <td>
                  {animal.especie.charAt(0).toUpperCase() +
                    animal.especie.slice(1)}
                </td>
                <td>
                  {animal.raca.charAt(0).toUpperCase() + animal.raca.slice(1)}
                </td>
                <td>{idadeCalculada}</td>
                <td>
                  {animal.sexo.charAt(0).toUpperCase() + animal.sexo.slice(1)}
                </td>
                <td>{`${animal.peso} Kg`}</td>
                <td>
                  {animal.cor.charAt(0).toUpperCase() + animal.cor.slice(1)}
                </td>
                <td>
                  {animal.porte.charAt(0).toUpperCase() + animal.porte.slice(1)}
                </td>
                <td>{animal.saude}</td>
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
                    onClick={handleDeleteAnimal}
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
