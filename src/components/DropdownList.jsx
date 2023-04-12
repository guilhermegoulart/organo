export function DropDownList(props) {
  return (
    <div>
      <label className=" block mb-2 text-2xl">{props.label}</label>
      <select className="bg-white shadow-3xl w-full border-none text-2xl p-6">
        {props.itens.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
}
