import { useState } from "react";
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

  const [name, setName] = useState("");
  const [job, setjob] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const whenCreate = (event) => {
    event.preventDefault();
    props.forRegisteredColaborator({
      name,
      job,
      image,
      team,
    });
  };

  return (
    <section className="flex justify-center ">
      <form
        onSubmit={whenCreate}
        className="my-20 mx-0 bg-cinza rounded-2xl py-4 px-16 shadow-2 "
      >
        <h2 className="text-3xl">
          Preencha os dados para criar o card do colaborador.
        </h2>
        <TextField
          label="Nome"
          value={name}
          Change={(value) => setName(value)}
          placeholder="Digite seu nome"
          mandatoryField={true}
        />
        <TextField
          label="Cargo"
          placeholder="Digite seu cargo"
          value={job}
          Change={(value) => setjob(value)}
          mandatoryField={true}
        />
        <TextField
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={image}
          Change={(value) => setImage(value)}
        />
        <DropDownList
          label="Time"
          itens={teams}
          mandatoryField={true}
          value={team}
          Change={(value) => setTeam(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
}
