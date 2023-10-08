import { InputTemplate, SelectSexoTemplate } from '../simpleInputTemplate'
import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

interface Funcionario {
  cpf: string
  nome: string
  dataNascimento: Date | string
  funcao: string
  setor: string
  email: string
  telefone: number
  ocupacao: string
  estadoCivil: string
  cep: number
  dtContratacao: Date | string
  sexo: string
}
interface ClienteModalProps {
  open: boolean
  close: () => void
}
export function FuncionarioModal({ open, close }: ClienteModalProps) {
  function handleSubmitFuncionario(event: FormEvent) {
    event.preventDefault()
  }
  const [funcionario, setFuncionario] = useState<Funcionario>({
    cpf: '',
    nome: '',
    dtNasc: new Date(),
    funcao: '',
    setor: '',
    email: '',
    telefone: 0,
    ocupacao: '',
    estadoCivil: '',
    cep: 0,
    dtContratacao: new Date(),
    sexo: 'Masculino',
  })
  console.log(funcionario)
  return (
    <Modal isOpen={open} onRequestClose={close}>
      <div className="title">
        <h1>Cadastrar Funcionários</h1>
      </div>
      <form
        action="
      "
      >
        <InputTemplate
          id="cpf"
          name="CPF"
          type="text"
          value={funcionario.cpf}
          change={(e) =>
            setFuncionario({ ...funcionario, cpf: e.target.value })
          }
        />
        <InputTemplate
          id="nome"
          name="Nome"
          type="text"
          value={funcionario.nome}
          change={(e) =>
            setFuncionario({ ...funcionario, nome: e.target.value })
          }
        />
        <InputTemplate
          id="dtnasc"
          name="Data de Nascimento"
          type="date"
          value={funcionario.dtNasc.toString()}
          change={(e) =>
            setFuncionario({
              ...funcionario,
              dtNasc: e.target.value,
            })
          }
        />
        <InputTemplate
          id="func"
          name="Função"
          type="text"
          value={funcionario.funcao}
          change={(e) =>
            setFuncionario({ ...funcionario, funcao: e.target.value })
          }
        />
        <InputTemplate
          id="setor"
          name="Setor"
          type="text"
          value={funcionario.setor}
          change={(e) =>
            setFuncionario({ ...funcionario, setor: e.target.value })
          }
        />
        <InputTemplate
          id="email"
          name="Email"
          type="email"
          value={funcionario.email}
          change={(e) =>
            setFuncionario({ ...funcionario, email: e.target.value })
          }
        />
        <InputTemplate
          id="telefone"
          name="Telefone"
          type="tel"
          value={funcionario.telefone}
          change={(e) =>
            setFuncionario({ ...funcionario, telefone: Number(e.target.value) })
          }
        />
        <InputTemplate
          id="ocupacao"
          name="Ocupação"
          type="text"
          value={funcionario.ocupacao}
          change={(e) =>
            setFuncionario({ ...funcionario, ocupacao: e.target.value })
          }
        />
        <InputTemplate
          id="estadoCivil"
          name="Estado Civil"
          type="text"
          value={funcionario.estadoCivil}
          change={(e) =>
            setFuncionario({ ...funcionario, estadoCivil: e.target.value })
          }
        />
        <InputTemplate
          id="cep"
          name="CEP"
          type="text"
          value={funcionario.cep}
          change={(e) =>
            setFuncionario({ ...funcionario, cep: Number(e.target.value) })
          }
        />
        <InputTemplate
          id="dtContratacao"
          name="Data de Contratação"
          type="date"
          value={funcionario.dtContratacao.toString()}
          change={(e) =>
            setFuncionario({
              ...funcionario,
              dtContratacao: e.target.value,
            })
          }
        />
        <SelectSexoTemplate
          value1="Masculino"
          value2="Feminino"
          value={funcionario.sexo}
          change={(e) =>
            setFuncionario({ ...funcionario, sexo: e.target.value })
          }
        />
        <button type="submit" onClick={handleSubmitFuncionario}>
          Cadastrar
        </button>
      </form>
    </Modal>
  )
}
