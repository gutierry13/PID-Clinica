import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Model, createServer } from 'miragejs'
import Modal from 'react-modal'
interface Cliente {
  cpf: string
  nome: string
  dtNasc: Date
  email: string
  telefone: string
  ocupacao: string
  sexo: string
  cep: string
  estadoCivil: string
}
interface Animal {
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
interface Funcionario {
  cpf: string
  nome: string
  dtNasc: Date
  funcao: string
  setor: string
  email: string
  telefone: string
  ocupacao: string
  estadoCivil: string
  cep: string
  dtContratacao: Date
  sexo: string
}
interface Consulta {
  animalID: string
  clienteCPF: string
  funcionarioCPF: string
  dtConsulta: Date
  motivoConsulta: string
  diagnostico: string
  medicamento: string
  tratamento: string
  observacao: string
}
createServer({
  models: {
    cliente: Model.extend<Partial<Cliente>>({}),
    animal: Model.extend<Partial<Animal>>({}),
    funcionario: Model.extend<Partial<Funcionario>>({}),
    consulta: Model.extend<Partial<Consulta>>({})
  },
  seeds(server) {
    server.db.loadData({
      clientes: [
        {
          cpf: '12345678910',
          nome: 'João',
          dtNasc: new Date('1995-01-01'),
          email: 'j@j.com',
          telefone: '123456789',
          ocupacao: 'Desenvolvedor',
          sexo: 'Masculino',
          cep: '12345678',
          estadoCivil: 'Solteiro'
        },
        {
          cpf: '12345678911',
          nome: 'Maria',
          dtNasc: new Date('1995-01-01'),
          email: 'm@m.com',
          telefone: '123456789',
          ocupacao: 'Desenvolvedor',
          sexo: 'Feminino',
          cep: '12345678',
          estadoCivil: 'Casado'
        }
      ],
      animals: [
        {
          animalID: '1',
          nome: 'Leão',
          idade: 2,
          raca: 'Leão',
          especie: 'Leão',
          genero: 'Macho',
          peso: 1,
          cor: 'Vermelho',
          porte: 'Pequeno',
          historicoSaude: 'Alergia a Ração'
        }
      ],
      funcionarios: [
        {
          cpf: '12345678910',
          nome: 'João',
          dtNasc: new Date('1995-01-01'),
          funcao: 'Desenvolvedor',
          setor: 'Desenvolvimento',
          email: 'j@j.com',
          telefone: '123456789',
          ocupacao: 'Desenvolvedor',
          estadoCivil: 'Solteiro',
          cep: '12345678',
          dtContratacao: new Date('1995-01-01'),
          sexo: 'Masculino'
        }
      ],
      consulta: [
        {
          animalID: '1',
          clienteCPF: '12345678910',
          funcionarioCPF: '12345678910',
          dtConsulta: new Date('1995-01-01'),
          motivoConsulta: 'Consulta',
          diagnostico: 'Consulta',
          medicamento: 'Consulta',
          tratamento: 'Consulta',
          observacao: 'Consulta'
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api'
    {
      /* API Cliente  */
    }
    this.get('/clientes')
    this.post('/clientes', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('cliente', data)
    })

    // this.post('/clientes')
    {
      /* API Animal  */
    }
    this.get('/animals')
    this.post('/animals', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('animal', data)
    })
    {
      /* API Funcionario  */
    }
    this.get('/funcionarios')
    this.post('/funcionarios')
    {
      /* API Consultas  */
    }
    this.get('/consultas')
    this.post('/consultas')
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
const appRoot = document.getElementById('root')
Modal.setAppElement(appRoot!)
// this.get('/clientes', ( ) =>{
//   return this.schema.all('clientes')
// })
