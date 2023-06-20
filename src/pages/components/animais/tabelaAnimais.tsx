import { useContext } from 'react'
import { ContainerTable } from '../../../globalStyles'
import { AnimalContext } from './animalContext'

export function TabelaAnimais() {
  const { animals } = useContext(AnimalContext)
  console.log(animals)
  return (
    <ContainerTable>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>Raça</th>
            <th>Espécie</th>
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
            return (
              <tr key={String(animal.codigo)}>
                <td>{animal.codigo}</td>
                <td>{animal.nome}</td>
                <td>{animal.raca}</td>
                <td>{animal.especie}</td>
                <td>{animal.idade}</td>
                <td>{animal.sexo}</td>
                <td>{animal.peso}</td>
                <td>{animal.cor}</td>
                <td>{animal.porte}</td>
                <td>{animal.saude}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </ContainerTable>
  )
}
