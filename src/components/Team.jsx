export default function Team(props) {
  return (
    <section className=" text-center p-8 bg-lighgreen">
      <h3 className="text-2xl border-b-4 border-green inline-block pb-2">
        {props.name}
      </h3>
    </section>
  );
}
