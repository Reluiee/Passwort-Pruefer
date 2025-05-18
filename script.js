const eingabeFeld = document.getElementById("passwort");
const toggleButton = document.getElementById("togglePasswort");

const zeichen = document.getElementById("zeichen");
const groß = document.getElementById("groß");
const zahl = document.getElementById("zahl");
const sonder = document.getElementById("sonder");
const auge = document.getElementById("auge");

eingabeFeld.addEventListener("input", function () {
    const passwort = eingabeFeld.value;

    if (passwort.length >= 8) {
        zeichen.classList.add("erfüllt");
    } else {
        zeichen.classList.remove("erfüllt");
    }

    if (/[A-Z]/.test(passwort)) {
        groß.classList.add("erfüllt");
    } else {
        groß.classList.remove("erfüllt");
    }

    if (/[0-9]/.test(passwort)) {
        zahl.classList.add("erfüllt");
    } else {
        zahl.classList.remove("erfüllt");
    }

    if (/[!@#$%^&*]/.test(passwort)) {
        sonder.classList.add("erfüllt");
    } else {
        sonder.classList.remove("erfüllt");
    }
});

toggleButton.addEventListener("click", () => {
  if (eingabeFeld.type === "password") {
    eingabeFeld.type = "text";
    toggleButton.textContent = "🙈"; // Augen-zu Symbol
  } else {
    eingabeFeld.type = "password";
    toggleButton.textContent = "👀"; // Auge offen
  }
});