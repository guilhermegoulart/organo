import Image from '../imagens/banner.png';
import '../components/Banner.css';

export function Banner() {
    return (
        <header className='banner'>
            <img src={Image} alt="I know that I'm able" />
        </header>
    )
}