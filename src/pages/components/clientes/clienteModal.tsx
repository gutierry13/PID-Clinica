import { FormEvent, useState, useContext } from 'react'
import { InputTemplate, SelectSexoTemplate } from '../simpleInputTemplate'
import { api } from '../../../services/api'
import { ClienteContext } from './clienteContext'

export function ClienteModal() {
  const data = useContext(ClienteContext)
  console.log(data)
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [dtNasc, setDtNasc] = useState('')
  const [tel, setTel] = useState('')
  const [ocp, setOcp] = useState('')
  const [sexo, setSexo] = useState('')
  const [cep, setCep] = useState('')
  const [estCivil, setEstCivil] = useState('')
  function handleSubmitCadastrarCliente(event: FormEvent) {
    event.preventDefault()
    const data = {
      nome,
      cpf,
      email,
      dtNasc,
      tel,
      ocp,
      sexo,
      cep,
      estCivil
    }
    api.post('/clientes', data).then(() => {
      alert('Cliente cadastrado com sucesso!')
    })
  }
  return (
    <div>
      <div className="title">
        <h1>Cadastrar Cliente</h1>
      </div>
      <form action="">
        <InputTemplate
          id="nome"
          name="Nome"
          type="text"
          value={nome}
          change={(e) => setNome(e.target.value)}
        />
        <InputTemplate
          id="cpf"
          name="CPF"
          type="text"
          value={cpf}
          change={(e) => setCpf(e.target.value)}
        />
        <InputTemplate
          id="email"
          name="Email"
          type="email"
          value={email}
          change={(e) => setEmail(e.target.value)}
        />
        <InputTemplate
          id="dtNasc"
          name="Data de Nascimento"
          type="date"
          value={dtNasc}
          change={(e) => setDtNasc(e.target.value)}
        />
        <InputTemplate
          id="telefone"
          name="Telefone"
          type="tel"
          value={tel}
          change={(e) => setTel(e.target.value)}
        />
        <InputTemplate
          id="ocupacao"
          name="Ocupação"
          type="text"
          value={ocp}
          change={(e) => setOcp(e.target.value)}
        />
        <SelectSexoTemplate
          value1="Masculino"
          value2="Feminino"
          value={sexo}
          change={(e) => setSexo(e.target.value)}
        />
        <InputTemplate
          id="cep"
          name="CEP"
          type="text"
          value={cep}
          change={(e) => setCep(e.target.value)}
        />
        <InputTemplate
          id="estdCivil"
          name="Estado Civil"
          type="text"
          value={estCivil}
          change={(e) => setEstCivil(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSubmitCadastrarCliente}
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
