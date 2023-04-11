export function TextField() {
  return (
    <div className="my-6 mx-0">
      <label htmlFor="" className="block mb-2 text-2xl">
        Nome
      </label>
      <input
        placeholder="Digite seu nome"
        className="bg-white shadow-3xl w-full border-none text-2xl p-6"
        type="text"
      />
    </div>
  );
}
