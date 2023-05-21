import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Model, createServer} from 'miragejs'
interface User{
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
createServer({
  models: {
    cliente: Model.extend<Partial<User>>({})
  },
  seeds(server){
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
      ]
    })
  },
  routes(){
    this.namespace = 'api'
    this.get('/clientes')
    this.post('/clientes')
    // this.get('/clientes', ( ) =>{
    //   return this.schema.all('clientes')
    // })
    // this.post('/clientes', (schema, request) =>{
    //   const data = JSON.parse(request.requestBody)
    //   return schema.create('clientes', data)
    // })
    this.namespace = ''

  }
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
