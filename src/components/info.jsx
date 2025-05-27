import { RiCelsiusFill } from "react-icons/ri";

export function Info({ info, state }) {
    if (!state || !info.main) return null;

    return (
        <div className="info">
            <p id="sehir">{info.name}, {info.sys.country}</p>
            <div className="genelDeger">
                <p id="sicaklik">{info.main.temp}</p>
                <RiCelsiusFill className="fa-c" />
            </div>
            <p id="havaDurumu">{info.weather[0].description}</p>
            <div className="his">
                <p id="hissedilen">Hissedilen: {info.main.feels_like}</p>
                <RiCelsiusFill className="fa-circle" />
            </div>
        </div>
    );
}

export default Info;
