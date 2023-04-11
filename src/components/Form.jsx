import { TextField } from "./TextField";

export function Form(props) {
  return (
    <section className="flex justify-center ">
      <form className="my-20 mx-0 bg-cinza rounded-2xl py-4 px-16 shadow-2 ">
        <h2 className="text-3xl">
          Preencha os dados para criar o card do colaborador.
        </h2>
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
      </form>
    </section>
  );
}
