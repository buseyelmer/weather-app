import { useState } from "react";
import axios from "axios";

export default function Form({ setInfo, setState }) {
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = async () => {
        if (!city.trim()) return;

        setLoading(true);
        const api = "4e64f6ec528512939738c8479d050aeb";
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${api}&units=metric&lang=tr`;

        try {
            const response = await axios.get(baseURL);
            setInfo(response.data);
            setState(true);
        } catch (error) {
            console.error("Hava durumu verileri alınamadı:", error);
            alert("⚠️ Şehir adı bulunamadı ya da bağlantı hatası oluştu.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleChange();
    };

    return (
        <div>
            <h1>Hava Durumu</h1>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="inputText"
                        type="text"
                        placeholder="Şehri giriniz"
                        required
                        disabled={loading}
                    />
                </div>
                <div className="btnDiv">
                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? "Yükleniyor..." : "🌇 Tahmini Gör"}
                    </button>
                </div>
            </form>
        </div>
    );
}
