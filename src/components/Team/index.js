import Colaborator from '../Colaborator';
import '../Team/team.css'

export default function Team(props) {
  const styles = { backgroundColor: props.secColor }
  const borderStyle = { borderColor: props.primColor }

  return (
    <section className="time" style={styles}>
      <h3 style={borderStyle}>
        {props.name}
      </h3>
      <Colaborator/>
    </section>
  );
}
