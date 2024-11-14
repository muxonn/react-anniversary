import React, { useEffect, useState } from "react";
import './IntroductionHeader.css';

const IntroductionHeader = () => {
    // Docelowe wartości dla lat, dni, godzin, minut i sekund
    const targetValues = {
        days: 1095, // 3 lata to około 1095 dni (365 * 3)
        hours: 26280, // 3 lata to 26280 godzin (365 * 3 * 24)
        minutes: 1576800, // 3 lata to 1576800 minut (365 * 3 * 24 * 60)
        seconds: 94608000 // 3 lata to 94608000 sekund (365 * 3 * 24 * 60 * 60)
    };

    // Stan dla bieżącej wartości licznika
    const [counter, setCounter] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Funkcja do inkrementacji wartości licznika
        const incrementCounters = () => {
            setCounter(prevCounter => {
                const newCounter = { ...prevCounter };
                let reachedTarget = true;

                // Dla każdej wartości (lat, dni, godzin, minut, sekund) sprawdzamy czy osiągnęła docelową wartość
                for (const key in targetValues) {
                    if (newCounter[key] < targetValues[key]) {
                        newCounter[key] += Math.floor(targetValues[key] / 100); // Tempo inkrementacji
                        if (newCounter[key] > targetValues[key]) {
                            newCounter[key] = targetValues[key]; // Zatrzymanie na docelowej wartości
                        }
                        reachedTarget = false;
                    }
                }

                // Jeśli wszystkie wartości osiągnęły cel, zatrzymujemy licznik
                if (reachedTarget) {
                    clearInterval(interval);
                }

                return newCounter;
            });
        };

        // Ustawienie interwału dla animacji licznika
        const interval = setInterval(incrementCounters, 40); // Szybkość animacji (50 ms)

        return () => clearInterval(interval); // Czyszczenie interwału po zakończeniu animacji
    }, []);

    return (
        <section className="introduction-header">
            <video className="background-video" autoPlay loop muted>
                <source src="/bg.mp4" type="video/mp4" />
            </video>

            <div className="video-overlay"></div>

            <div className="content">
                <h1 className="content-header">Wspólne 3 lata to:</h1>
                <div className="content-divider"></div>
                <div className="counter">
                    <p> {3} lata</p>
                    <p> {counter.days} dni</p>
                    <p> {counter.hours} godzin</p>
                    <p> {counter.minutes} minut</p>
                    <p> {counter.seconds} sekund</p>
                </div>
            </div>
        </section>
    );
};

export default IntroductionHeader;
