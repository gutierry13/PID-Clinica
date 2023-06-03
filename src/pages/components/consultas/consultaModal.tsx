import { InputTemplate } from '../simpleInputTemplate'
import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

interface Consulta {
  animalID: string
  clienteCPF: string
  funcionarioCPF: string
  dtConsulta: Date | string
  motivoConsulta: string
  diagnostico: string
  medicamento: string
  tratamento: string
  observacao: string
}
interface ClienteModalProps {
  open: boolean
  close: () => void
}
export function ConsultaModal({ open, close }: ClienteModalProps) {
  function handleSubmitConsulta(event: FormEvent) {
    event.preventDefault()
  }
  const [consulta, setConsulta] = useState<Consulta>({
    animalID: '',
    clienteCPF: '',
    funcionarioCPF: '',
    dtConsulta: new Date(),
    motivoConsulta: '',
    diagnostico: '',
    medicamento: '',
    tratamento: '',
    observacao: '',
  })
  console.log(consulta)
  return (
    <Modal isOpen={open} onRequestClose={close}>
      <div className="tex">
        <h1></h1>
      </div>
      <form action="">
        <InputTemplate
          id="id"
          name="ID"
          type="text"
          value={consulta.animalID}
          change={(e) => setConsulta({ ...consulta, animalID: e.target.value })}
        />
        <InputTemplate
          id="clienteCpf"
          name="CPF do Cliente "
          type="text"
          value={consulta.clienteCPF}
          change={(e) =>
            setConsulta({ ...consulta, clienteCPF: e.target.value })
          }
        />
        <InputTemplate
          id="funcionarioCpf"
          name="CPF do Funcionario "
          type="text"
          value={consulta.funcionarioCPF}
          change={(e) =>
            setConsulta({ ...consulta, funcionarioCPF: e.target.value })
          }
        />
        <InputTemplate
          id="dataConsulta"
          name="Data da Consulta"
          type="date"
          value={consulta.dtConsulta.toString()}
          change={(e) =>
            setConsulta({ ...consulta, dtConsulta: e.target.value })
          }
        />
        <InputTemplate
          id="motivoConsulta"
          name="Motivo da Consulta"
          type="text"
          value={consulta.motivoConsulta}
          change={(e) =>
            setConsulta({ ...consulta, motivoConsulta: e.target.value })
          }
        />
        <InputTemplate
          id="diagnostico"
          name="Diagnostico"
          type="text"
          value={consulta.diagnostico}
          change={(e) =>
            setConsulta({ ...consulta, diagnostico: e.target.value })
          }
        />
        <InputTemplate
          id="medicamento"
          name="Medicamento"
          type="text"
          value={consulta.medicamento}
          change={(e) =>
            setConsulta({ ...consulta, medicamento: e.target.value })
          }
        />
        <InputTemplate
          id="tratamento"
          name="Tratamento"
          type="text"
          value={consulta.tratamento}
          change={(e) =>
            setConsulta({ ...consulta, tratamento: e.target.value })
          }
        />
        <InputTemplate
          id="observacao"
          name="Observação"
          type="text"
          value={consulta.observacao}
          change={(e) =>
            setConsulta({ ...consulta, observacao: e.target.value })
          }
        />
        <button type="submit" onClick={handleSubmitConsulta}>
          Cadastrar
        </button>
      </form>
    </Modal>
  )
}
