// Año actual en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();

// Saludo según la hora del día
const saludoBtn = document.getElementById("saludoBtn");
const mensaje = document.getElementById("mensaje");

saludoBtn.addEventListener("click", () => {
  const hora = new Date().getHours();
  let saludo = "Buenas noches";

  if (hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 19) {
    saludo = "Buenas tardes";
  }

  mensaje.textContent = `${saludo}, bienvenido al Taller de Despliegue.`;
});

// Envío del formulario (sin backend: solo confirmación en pantalla)
const formContacto = document.getElementById("formContacto");
const respuesta = document.getElementById("respuesta");

formContacto.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  respuesta.textContent = `Gracias por tu mensaje, ${nombre}.`;
  formContacto.reset();
});
