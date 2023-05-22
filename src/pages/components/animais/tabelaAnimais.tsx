import { useContext } from 'react'
import { ContainerTable } from '../../../globalStyles'
import { AnimalContext } from './animalContext'

export function TabelaAnimais() {
  const { animais } = useContext(AnimalContext)
  return (
    <ContainerTable>
      <table>
        <thead>
          <tr>
            <th>Animal ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Raça</th>
            <th>Espécie</th>
            <th>Gênero</th>
            <th>Peso</th>
            <th>Cor</th>
            <th>Porte</th>
            <th>Histórico de Saúde</th>
          </tr>
        </thead>
        <tbody>
          {animais.map((animal) => {
            return (
              <tr>
                <td>{animal.animalID}</td>
                <td>{animal.nome}</td>
                <td>{animal.idade}</td>
                <td>{animal.raca}</td>
                <td>{animal.especie}</td>
                <td>{animal.genero}</td>
                <td>{animal.peso}</td>
                <td>{animal.cor}</td>
                <td>{animal.porte}</td>
                <td>{animal.historicoSaude}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </ContainerTable>
  )
}
