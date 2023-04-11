import Image from "../imagens/banner.png";

export function Banner() {
  return (
    <header className="w-full bg-banner">
      <img src={Image} alt="I know that I'm able" />
    </header>
  );
}
