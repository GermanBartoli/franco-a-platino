const inicio = Date.parse(document.querySelector("time").dateTime);
const campos = ["horas", "minutos", "segundos"].map(id => document.getElementById(id));

function actualizar() {
  const restantes = Math.max(0, Math.ceil((inicio - Date.now()) / 1000));
  const valores = [Math.floor(restantes / 3600), Math.floor(restantes / 60) % 60, restantes % 60];
  campos.forEach((campo, indice) => {
    campo.textContent = String(valores[indice]).padStart(2, "0");
  });
  if (restantes === 0) {
    document.getElementById("estado").textContent = "Llegó la hora del desafío";
  } else {
    setTimeout(actualizar, 1000 - Date.now() % 1000);
  }
}

actualizar();
