import "../Colaborator/colaborator.css";

export default function Colaborator({ name, image, job, bgColor }) {
  return (
    <div className="colaborador">
      <section className="cabecalho" style={{ backgroundColor: bgColor }}>
        <img src={image} alt={name} />
      </section>
      <section className="rodape">
        <h4>{name}</h4>
        <h5>{job}</h5>
      </section>
    </div>
  );
}
