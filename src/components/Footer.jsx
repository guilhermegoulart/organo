import Facebook from "../imagens/fb.png";
import twitter from "../imagens/tw.png";
import Instagram from "../imagens/ig.png";
import Logo from "../imagens/logo.png";

export default function Footer() {
  return (
    <footer className="bg-pantone text-white p-20 flex justify-between items-center ">
      <section>
        <ul>
          <li className="inline-block mr-8 last:mr-0">
            <a href="facebook.com" target="_blank">
              <img src={Facebook} alt="Facebook logo" />
            </a>
          </li>
          <li className="inline-block mr-8 last:mr-0">
            <a href="twitter.com" target="_blank">
              <img src={twitter} alt="twitter logo" />
            </a>
          </li>
          <li className="inline-block mr-8 last:mr-0">
            <a href="instagram.com" target="_blank">
              <img src={Instagram} alt="Instagram logo" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src={Logo} alt="organo logo" />
      </section>
      <section>
        <p>Desenvolvido por Guilherme Goulart.</p>
      </section>
    </footer>
  );
}
