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

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll by the height of the viewport
      behavior: 'smooth', // Smooth scrolling
    });
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
                <div className="receiver">Droga Karolino Hermenegildo Bartmińska,</div>
              </header>
              <main className="letter-body">
                <div className="title">3 lata razem!!!!</div>
                <p>
                  To, co zobaczysz poniżej, to starannie wyselekcjonowane przeze mnie najlepsze chwile z każdego miesiąca,
                  jakie przeżyliśmy przez te 3 lata❤️
                </p>
                <p>
                  3 lata to nie tylko liczba, 3 lata to też...
                </p>
              </main>
              <footer className="letter-footer">
                <HandwrittenText text="Love yaaa, Kuba" />
              </footer>
            </div>
          )}
          <div className="scroll-arrow2" onClick={handleScroll}>
            <div className="arrow-icon">&#8595;</div> {/* Down arrow */}
          </div>
        </div>
      )}
      

      
      
    </section>
  );
};

export default MainHeader;
