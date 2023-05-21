import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { ContainerTable } from "../../../globalStyles"

interface Animal{
  animalID: String
  nome: string
  idade: number
  raca: string
  especie: string
  genero: string
  peso: number
  cor: string
  porte: string
  historicoSaude: string
 }
export function TabelaAnimais(){
  const [animais, setAnimais] = useState<Animal[]>([])
  useEffect(()=>{
    api.get('animals').then(response => setAnimais(response.data.animals))
  },[])
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
            {animais.map(animal=>{
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