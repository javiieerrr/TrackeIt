// ======================================================
// LÓGICA DEL PROYECTO
// ======================================================
class Objetivo {
  constructor(nombre, dificultad) {
    nombre = nombre.trim();
    // si esta vacio
    nombre = nombre.trim();

    // si está vacío
    if (!nombre) {
      alert("Ingresa un objetivo.");
      return;
    }
    // mínimo 3 caracteres, no funciona 
    if (nombre.length < 3) {
      alert("El objetivo debe tener al menos 3 caracteres.");
      return;
    }

    // letras números espacios y algunos separadores
    const patron = /^[a-záéíóúñ0-9 .,-]+$/i;

    if (!patron.test(nombre)) {
      alert("Usa solo letras, números y espacios.");
      return;
    }

    // debe comenzar con letra
    if (!/^[a-záéíóúñ]/i.test(nombre)) {
      alert("El objetivo debe comenzar con texto.");
      return;
    }

    dificultad = parseInt(dificultad);
    if (isNaN(dificultad) || dificultad < 1 || dificultad > 5) {
      alert("La dificultad debe estar entre 1 y 5.");
      return;
    }
    this.id = Date.now();
    this.nombre = nombre;
    this.dificultad = dificultad;
    this.completado = false;
  }
  // Una vez completado ya no vuelve atrás.
  completar() {
    this.completado = true;
  }
}
const gestorObjetivos = {
  lista: [],
  agregar(nombre, dificultad) {
    const nuevo = new Objetivo(nombre, dificultad);
    if (!nuevo.nombre) {
      return null;
    }
    this.lista.push(nuevo);
    return nuevo;
  },
  obtenerTodos() {
    return this.lista;
  },

  // El objetivo debe estar incompleto.
  completar(id) {
    const objetivo = this.lista.find((obj) => obj.id === id);
    if (objetivo && !objetivo.completado) {
      objetivo.completar();
    }
  },
  eliminar(id) {
    // filter crea un nuevo arreglo
    // dejando fuera el objetivo seleccionado.
    this.lista = this.lista.filter((obj) => obj.id !== id);
  },
};
window.gestorObjetivos = gestorObjetivos;
