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

  return (
    <section className="flex justify-center ">
      <form className="my-20 mx-0 bg-cinza rounded-2xl py-4 px-16 shadow-2 ">
        <h2 className="text-3xl">
          Preencha os dados para criar o card do colaborador.
        </h2>
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
        <DropDownList label="Time" itens={teams} />
        <Button>Criar card</Button>
      </form>
    </section>
  );
}
