import '../Colaborator/colaborator.css'

export default function Colaborator(props) {
  return (
    <div className="colaborador">
      <section className='cabecalho'>
        <img
          src="https://github.com/guilhermegoulart.png"
          alt="Imagem do meu perfil do github"
        />
      </section>
      <section className='rodape'>
        <h4>Guilherme</h4>
        <h5>Developer</h5>
      </section>
    </div>
  );
}
