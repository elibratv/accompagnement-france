/* =========================================================
   Compte à rebours — Offre de lancement
   Cible : 1er octobre 2026 à 00:00 (heure locale du visiteur)
   À l'expiration : le chrono se fige à 00 et le message change.
   ========================================================= */

(function () {
  var targetDate = new Date("2026-10-01T00:00:00").getTime();

  var daysEl = document.getElementById("days");
  var hoursEl = document.getElementById("hours");
  var minutesEl = document.getElementById("minutes");
  var secondsEl = document.getElementById("seconds");
  var noteEl = document.getElementById("countdown-note");

  // Si le bloc chrono n'est pas sur la page, on ne fait rien.
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  var timer = null;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function render() {
    var distance = targetDate - Date.now();

    if (distance <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      if (noteEl) {
        noteEl.textContent = "L'offre de lancement est terminée. Le tarif normal s'applique désormais.";
        noteEl.classList.add("expired");
      }
      if (timer) clearInterval(timer);
      return;
    }

    var day = 1000 * 60 * 60 * 24;
    var hour = 1000 * 60 * 60;
    var minute = 1000 * 60;
    var second = 1000;

    daysEl.textContent = pad(Math.floor(distance / day));
    hoursEl.textContent = pad(Math.floor((distance % day) / hour));
    minutesEl.textContent = pad(Math.floor((distance % hour) / minute));
    secondsEl.textContent = pad(Math.floor((distance % minute) / second));
  }

  render();
  timer = setInterval(render, 1000);
})();