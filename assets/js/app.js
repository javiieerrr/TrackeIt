// ======================================================
// INTERFAZ
// ======================================================
const btnAgregar = document.getElementById("btn-agregar");
const listaUI = document.getElementById("lista-objetivos");
function renderizar() {
  listaUI.innerHTML = "";
  // llamamo a la funcion obtenerTodos del gestor de objetivos
  gestorObjetivos.obtenerTodos().forEach((obj) => {
    // creamos un elemento li para cada objetivo
    const li = document.createElement("li");
    li.innerHTML = `
                ${obj.nombre}
                (Dif: ${obj.dificultad})
                ${obj.completado ? "🏆 Completado" : "🎯 Pendiente"}
                <button
                class="btn-completar"
                data-id="${obj.id}"
                ${obj.completado ? "disabled" : ""}>
                    Completar
                </button>
                <button
                class="btn-eliminar"
                data-id="${obj.id}">
                    Eliminar
                </button>
            `;
    listaUI.appendChild(li);
  });
}
// capturamos el click del usuario y manejamos el evento
btnAgregar.addEventListener("click", () => {
  const nombre = document.getElementById("input-nombre");
  const dificultad = document.getElementById("input-dif");
  const nuevo = gestorObjetivos.agregar(nombre.value, dificultad.value);
  if (!nuevo) {
    return;
  }
  // limpiamos los campos y actualizamos la lista de objetivos.
  nombre.value = "";
  dificultad.value = "";
  renderizar();
});
listaUI.addEventListener("click", (e) => {
  const id = Number(e.target.dataset.id);
  if (e.target.classList.contains("btn-completar")) {
    gestorObjetivos.completar(id);
  }
  if (e.target.classList.contains("btn-eliminar")) {
    gestorObjetivos.eliminar(id);
  }
  renderizar();
});
renderizar();
