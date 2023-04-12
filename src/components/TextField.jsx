export function TextField(props) {
  return (
    <div className="my-6 mx-0">
      <label className="block mb-2 text-2xl">{props.label}</label>
      <input
        placeholder={props.placeholder}
        className="bg-white shadow-3xl w-full border-none text-2xl p-6"
        required={props.mandatoryField}
        type="text"
      />
    </div>
  );
}
