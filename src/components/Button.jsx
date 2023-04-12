export function Button(props) {
  return (
    <button className="bg-pantone rounded-xl font-bold text-lg px-8 py-6 border-none cursor-pointer text-white hover:text-veryperi my-8 mx-0">
      {props.children}
    </button>
  );
}
