export function TextField(props) {
  const Content = (event) => {
    props.Change(event.target.value);
  };

  return (
    <div className="my-6 mx-0">
      <label className="block mb-2 text-2xl">{props.label}</label>
      <input
        className="bg-white shadow-3xl w-full border-none text-2xl p-6"
        value={props.value}
        onChange={Content}
        placeholder={props.placeholder}
        required={props.mandatoryField}
        type="text"
      />
    </div>
  );
}
