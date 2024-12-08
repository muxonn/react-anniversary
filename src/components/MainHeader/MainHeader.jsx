import React, { useEffect, useState } from "react";
import HandwrittenText from "../HandwrittenText/HandwrittenText";
import "./MainHeader.css";


const pinCode = 2205

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pin, setPin] = useState(["", "", "", ""]); // Cztery pola dla PIN-u
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Funkcja obsługująca otwieranie/zamykanie listu
  const toggleLetter = () => {
    if (isUnlocked) {
      setIsOpen((prevState) => !prevState);
    }
  };

  useEffect(() => {
    if (!isUnlocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isUnlocked]);

  // Obsługa wpisywania PIN-u
  const handlePinChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Akceptuj tylko cyfry lub pusty znak
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Automatyczne przejście do następnego pola
    if (value && index < 3) {
      document.getElementById(`pin-${index + 1}`).focus();
    }

    // Sprawdzenie, czy PIN jest poprawny
    if (newPin.join("") === pinCode.toString()) {
      setIsUnlocked(true);
    }
  };

  return (
    <section className="main-header">
      {!isUnlocked && (
        <div className="pin-container">
          <h2>Podaj PIN, aby otworzyć list</h2>
          <div className="pin-inputs">
            {pin.map((digit, index) => (
              <input
                key={index}
                id={`pin-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handlePinChange(index, e.target.value)}
                className="pin-input"
              />
            ))}
          </div>
          <p className="pin-message">
            {pin.join("") === pinCode.toString() ? "PIN poprawny!" : "Wpisz poprawny PIN"}
          </p>
        </div>
      )}
      {isUnlocked && (
        <div className={`letter ${isOpen ? "open" : "closed"}`}>
          <div className="envelope" onClick={toggleLetter}>
            <div className="envelope-front">📩 Kliknij, aby otworzyć list</div>
          </div>
          {isOpen && (
            <div className="letter-content">
              <header className="letter-header">
                <div className="receiver">Cześć Karciu,</div>
                <div className="sender">Od: Kuby</div>
              </header>
              <main className="letter-body">
                <div className="title">3 lata minęły jak jeden dzień...</div>
                <p>
                  Mam nadzieję, że ten dzień jest pełen uśmiechu, energii i
                  pięknych chwil. Pamiętaj, że jesteś niesamowitą osobą i każdy
                  dzień z Tobą jest jak przygoda pełna radości.
                </p>
                <p>
                  Chciałem tylko przypomnieć Ci, jak bardzo doceniam to, co
                  robisz i jak wiele dla mnie znaczysz.
                </p>
              </main>
              <footer className="letter-footer">
                <HandwrittenText text="Love yaaa, Kuba" />
              </footer>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default MainHeader;
