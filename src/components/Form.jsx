import { Button } from "./Button";
import { DropDownList } from "./DropdownList";
import { TextField } from "./TextField";

export function Form(props) {
  const teams = [
    "Programação",
    "Front-End",
    "DataScience",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovacão e Gestão",
  ];

  const whenSaving = (event) => {
    event.preventDefault();
    console.log("Form was submited");
  };

  return (
    <section className="flex justify-center ">
      <form
        onSubmit={whenSaving}
        className="my-20 mx-0 bg-cinza rounded-2xl py-4 px-16 shadow-2 "
      >
        <h2 className="text-3xl">
          Preencha os dados para criar o card do colaborador.
        </h2>
        <TextField
          mandatoryField={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextField
          mandatoryField={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
        <DropDownList mandatoryField={true} label="Time" itens={teams} />
        <Button>Criar card</Button>
      </form>
    </section>
  );
}
