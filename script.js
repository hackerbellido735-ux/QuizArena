/* =====================================================
   QUIZARENA - SISTEMA PRINCIPAL
===================================================== */

/* ===================== BANCO DE PREGUNTAS ===================== */
const preguntas = {

    cultura: [
        { pregunta: "¿Cuál es el país con mayor superficie territorial del mundo?",
          opciones: ["Canadá", "China", "Rusia", "Estados Unidos"], correcta: 2,
          explicacion: "Rusia es el país más extenso del planeta, con una superficie superior a 17 millones de km²." },
        { pregunta: "¿Qué fenómeno explica principalmente el cambio aparente de posición de las estrellas durante el año?",
          opciones: ["La rotación de la Tierra", "La traslación de la Tierra", "Las fases de la Luna", "Las mareas"], correcta: 1,
          explicacion: "La traslación de la Tierra alrededor del Sol modifica nuestra posición de observación y permite ver diferentes regiones del cielo durante el año." },
        { pregunta: "¿Cuál es la obra literaria escrita por Miguel de Cervantes?",
          opciones: ["La Divina Comedia", "Don Quijote de la Mancha", "Cien años de soledad", "El principito"], correcta: 1,
          explicacion: "Don Quijote de la Mancha fue escrita por Miguel de Cervantes y publicada en dos partes." },
        { pregunta: "¿Qué órgano de las Naciones Unidas tiene como función principal mantener la paz y seguridad internacionales?",
          opciones: ["UNESCO", "Consejo de Seguridad", "Asamblea General", "UNICEF"], correcta: 1,
          explicacion: "El Consejo de Seguridad de la ONU tiene la responsabilidad principal sobre el mantenimiento de la paz y seguridad internacionales." },
        { pregunta: "¿Cuál de estos idiomas pertenece a la familia de lenguas romances?",
          opciones: ["Alemán", "Ruso", "Portugués", "Árabe"], correcta: 2,
          explicacion: "El portugués es una lengua romance porque evolucionó principalmente a partir del latín vulgar." },
        { pregunta: "¿Qué país fue conocido históricamente como Persia?",
          opciones: ["Irak", "Irán", "Turquía", "Siria"], correcta: 1,
          explicacion: "Persia fue el nombre histórico del territorio que actualmente corresponde principalmente a Irán." }
    ],

    mate: [
        { pregunta: "Calcula: 2³ + 3² × 2", opciones: ["22", "26", "28", "34"], correcta: 1,
          explicacion: "Primero las potencias: 2³ = 8 y 3² = 9. Luego 9 × 2 = 18. Finalmente 8 + 18 = 26." },
        { pregunta: "Calcula: 3/4 + 2/3", opciones: ["5/7", "13/12", "17/12", "7/12"], correcta: 2,
          explicacion: "El mínimo común denominador es 12. 3/4 = 9/12 y 2/3 = 8/12. Por tanto, 9/12 + 8/12 = 17/12." },
        { pregunta: "¿Cuál es el resultado de √144 + 2⁴?", opciones: ["20", "24", "28", "32"], correcta: 2,
          explicacion: "√144 = 12 y 2⁴ = 16. Entonces 12 + 16 = 28." },
        { pregunta: "Resuelve: 5 + 3 × (8 - 2)", opciones: ["23", "18", "29", "48"], correcta: 0,
          explicacion: "Primero el paréntesis: 8 - 2 = 6. Luego 3 × 6 = 18. Finalmente 5 + 18 = 23." },
        { pregunta: "Si x + 7 = 19, ¿cuánto vale x?", opciones: ["10", "11", "12", "13"], correcta: 2,
          explicacion: "Restamos 7 a ambos lados: x = 19 - 7 = 12." },
        { pregunta: "¿Cuánto es el 25% de 240?", opciones: ["40", "50", "60", "80"], correcta: 2,
          explicacion: "25% equivale a 1/4. 240 ÷ 4 = 60." },
        { pregunta: "Un triángulo tiene base de 12 cm y altura de 7 cm. ¿Cuál es su área?",
          opciones: ["42 cm²", "84 cm²", "38 cm²", "19 cm²"], correcta: 0,
          explicacion: "Área = base × altura ÷ 2. Entonces 12 × 7 ÷ 2 = 42 cm²." },
        { pregunta: "¿Qué número continúa la sucesión? 3, 6, 12, 24, ___",
          opciones: ["36", "42", "48", "54"], correcta: 2,
          explicacion: "Cada número se multiplica por 2: 3, 6, 12, 24, 48." },
        { pregunta: "Calcula: 18 - 6 ÷ 3 + 4 × 2", opciones: ["20", "24", "22", "16"], correcta: 1,
          explicacion: "Primero división y multiplicación: 6 ÷ 3 = 2 y 4 × 2 = 8. Después 18 - 2 + 8 = 24." },
        { pregunta: "Si 3x = 27, ¿cuánto vale x?", opciones: ["6", "7", "8", "9"], correcta: 3,
          explicacion: "Dividimos ambos lados entre 3: x = 27 ÷ 3 = 9." },
        { pregunta: "¿Cuál es el resultado de (2 + 3)²?", opciones: ["10", "15", "20", "25"], correcta: 3,
          explicacion: "Primero 2 + 3 = 5. Luego 5² = 25." },
        { pregunta: "Si una camisa cuesta S/ 80 y tiene un descuento del 15%, ¿cuánto se paga?",
          opciones: ["S/ 65", "S/ 68", "S/ 70", "S/ 72"], correcta: 1,
          explicacion: "El 15% de 80 es 12. Entonces 80 - 12 = S/ 68." }
    ],

    ciencia: [
        { pregunta: "¿Qué orgánulo celular se encarga principalmente de producir energía mediante la respiración celular?",
          opciones: ["Núcleo", "Ribosoma", "Mitocondria", "Vacuola"], correcta: 2,
          explicacion: "Las mitocondrias producen gran parte del ATP utilizado por las células como fuente de energía." },
        { pregunta: "¿Cuál es la unidad básica de la vida?",
          opciones: ["El tejido", "La célula", "El órgano", "El átomo"], correcta: 1,
          explicacion: "La célula es la unidad estructural y funcional básica de los seres vivos." },
        { pregunta: "¿Qué gas utilizan principalmente las plantas durante la fotosíntesis?",
          opciones: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"], correcta: 2,
          explicacion: "Las plantas usan dióxido de carbono, agua y energía luminosa para producir materia orgánica." },
        { pregunta: "¿Cuál es la velocidad aproximada de la luz en el vacío?",
          opciones: ["3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁸ m/s", "3 × 10⁹ m/s"], correcta: 2,
          explicacion: "La velocidad de la luz en el vacío es aproximadamente 300 000 km/s, equivalente a 3 × 10⁸ m/s." },
        { pregunta: "¿Qué partícula tiene carga eléctrica negativa?",
          opciones: ["Protón", "Neutrón", "Electrón", "Núcleo"], correcta: 2,
          explicacion: "El electrón posee carga eléctrica negativa." }
    ],

    historia: [
        { pregunta: "¿Qué civilización construyó Machu Picchu?",
          opciones: ["Maya", "Azteca", "Inca", "Moche"], correcta: 2,
          explicacion: "Machu Picchu fue construido durante el desarrollo del Imperio incaico." },
        { pregunta: "¿En qué año llegó Cristóbal Colón a América?",
          opciones: ["1492", "1453", "1519", "1532"], correcta: 0,
          explicacion: "El primer viaje de Colón llegó a América en 1492." },
        { pregunta: "¿Qué acontecimiento marcó tradicionalmente el inicio de la Revolución Francesa?",
          opciones: ["La toma de la Bastilla", "La coronación de Napoleón", "La batalla de Waterloo", "La caída de Roma"], correcta: 0,
          explicacion: "La toma de la Bastilla ocurrió el 14 de julio de 1789 y simboliza el inicio de la Revolución Francesa." },
        { pregunta: "¿Quién proclamó la independencia del Perú en Lima en 1821?",
          opciones: ["Simón Bolívar", "José de San Martín", "Túpac Amaru II", "Antonio José de Sucre"], correcta: 1,
          explicacion: "José de San Martín proclamó la independencia del Perú en Lima el 28 de julio de 1821." },
        { pregunta: "¿Cuál fue una de las principales características del Renacimiento europeo?",
          opciones: ["El abandono de las ciencias", "El interés renovado por la Antigüedad clásica", "La desaparición del arte", "El aislamiento cultural"], correcta: 1,
          explicacion: "El Renacimiento recuperó y reinterpretó ideas, arte y conocimientos de las culturas clásicas grecorromanas." }
    ]
};

/* Metadatos de categorías para tarjetas dinámicas */
const META_CATEGORIAS = {
    cultura:  { icono: "🌎", nombre: "Cultura General", sub: "Mundo y sociedad", clase: "cultura" },
    mate:     { icono: "➕", nombre: "Matemática",      sub: "Secundaria",       clase: "mate" },
    ciencia:  { icono: "⚛️", nombre: "Ciencia",         sub: "Física, química y biología", clase: "ciencia" },
    historia: { icono: "🏛️", nombre: "Historia",        sub: "Mundo y Perú",     clase: "historia" }
};

/* ===================== PERFIL Y ESTADO ===================== */
const PERFIL_DEFAULT = {
    nombre: "Jugador", descripcion: "", foto: "",
    puntos: 0, preguntas: 0, correctas: 0,
    racha: 0, mejorRacha: 0, mejorPuntaje: 0, sonido: true
};

let perfil = { ...PERFIL_DEFAULT };

let categoriaActual = "cultura";
let preguntasPartida = [];
let preguntaActual = 0;
let respuestaSeleccionada = null;
let puntosPartida = 0;
let tiempo = 15;
let intervaloTimer = null;
let modoReto = false;
let modoSupervivencia = false;
let vidas = 3;

/* ===================== INICIALIZACIÓN ===================== */
document.addEventListener("DOMContentLoaded", () => {
    cargarPerfil();
    renderizarCategorias();
    prepararFotoDefault();
    actualizarInicio();
    prepararContadorDescripcion();
    actualizarMenu("inicio");
    prepararTeclado();
});

/* ===================== PERSISTENCIA ===================== */
function cargarPerfil() {
    const guardado = localStorage.getItem("quizarena_perfil");
    if (guardado) {
        try { perfil = { ...PERFIL_DEFAULT, ...JSON.parse(guardado) }; }
        catch { console.log("No se pudo cargar el perfil."); }
    }
}
function guardarDatos() {
    localStorage.setItem("quizarena_perfil", JSON.stringify(perfil));
}

/* ===================== SONIDO (WebAudio) ===================== */
let audioCtx = null;
function beep(frecuencias, duracion) {
    if (!perfil.sonido) return;
    try {
        audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        let t = audioCtx.currentTime;
        frecuencias.forEach((f) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = "sine";
            osc.frequency.value = f;
            gain.gain.setValueAtTime(0.12, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + duracion);
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.start(t); osc.stop(t + duracion);
            t += duracion;
        });
    } catch (e) { /* silencio si no hay soporte */ }
}
function sonidoAcierto() { beep([660, 880], 0.12); }
function sonidoError()   { beep([200, 140], 0.16); }
function sonidoTic()     { beep([440], 0.05); }

function alternarSonido() {
    perfil.sonido = !perfil.sonido;
    guardarDatos();
    actualizarToggleSonido();
    mostrarMensaje(perfil.sonido ? "🔊 Sonidos activados" : "🔇 Sonidos desactivados");
    if (perfil.sonido) sonidoAcierto();
}
function actualizarToggleSonido() {
    const t = document.getElementById("toggleSonido");
    if (t) t.setAttribute("aria-checked", perfil.sonido ? "true" : "false");
}

/* ===================== NAVEGACIÓN ===================== */
function mostrarPantalla(id) {
    detenerTimer();
    document.querySelectorAll(".pantalla").forEach(p => p.classList.remove("activa"));
    const pantalla = document.getElementById(id);
    if (pantalla) pantalla.classList.add("activa");
    actualizarMenu(id);
    if (id === "inicio") actualizarInicio();
    if (id === "perfil") { actualizarPerfil(); actualizarToggleSonido(); }
    window.scrollTo(0, 0);
}
function actualizarMenu(id) {
    const items = document.querySelectorAll(".menu-item");
    items.forEach(i => i.classList.remove("activo"));
    const idx = { inicio: 0, retos: 1, perfil: 2 }[id];
    if (idx !== undefined && items[idx]) items[idx].classList.add("activo");
}

/* ===================== INICIO / CATEGORÍAS ===================== */
function actualizarInicio() {
    document.getElementById("rachaInicio").textContent = perfil.racha + " días";
    document.getElementById("puntosInicio").textContent = perfil.puntos.toLocaleString() + " pts";
}
function renderizarCategorias() {
    const grid = document.getElementById("categoriasGrid");
    if (!grid) return;
    grid.innerHTML = "";
    Object.keys(META_CATEGORIAS).forEach(clave => {
        const m = META_CATEGORIAS[clave];
        const total = preguntas[clave].length;
        const btn = document.createElement("button");
        btn.className = "categoria-card " + m.clase;
        btn.onclick = () => iniciarQuiz(clave);
        btn.innerHTML =
            '<div class="categoria-icon">' + m.icono + '</div>' +
            '<div class="categoria-info">' +
                '<strong>' + m.nombre + '</strong>' +
                '<small>' + m.sub + '</small>' +
                '<span>📚 ' + total + ' preguntas</span>' +
            '</div><b>›</b>';
        grid.appendChild(btn);
    });
}
function obtenerNombreCategoria(cat) {
    const m = META_CATEGORIAS[cat];
    return m ? (m.icono + " " + m.nombre) : "QuizArena";
}
function mostrarTodasCategorias() {
    mostrarMensaje("Próximamente habrá más categorías.");
}

/* ===================== INICIAR QUIZ ===================== */
function iniciarQuiz(categoria) {
    categoriaActual = categoria;
    modoReto = false;
    modoSupervivencia = false;
    puntosPartida = 0;
    preguntaActual = 0;
    respuestaSeleccionada = null;
    preguntasPartida = mezclarArray(preguntas[categoria]).slice(0, 10);
    if (preguntasPartida.length === 0) { mostrarMensaje("No hay preguntas disponibles."); return; }
    document.getElementById("categoriaActual").textContent = obtenerNombreCategoria(categoria);
    document.getElementById("totalPreguntas").textContent = preguntasPartida.length;
    document.getElementById("vidas").classList.add("oculto");
    mostrarPantalla("quiz");
    mostrarPregunta();
}

/* ===================== MOSTRAR PREGUNTA ===================== */
function mostrarPregunta() {
    detenerTimer();
    respuestaSeleccionada = null;
    const pregunta = preguntasPartida[preguntaActual];
    if (!pregunta) { finalizarPartida(); return; }

    document.getElementById("numeroPregunta").textContent = preguntaActual + 1;
    document.getElementById("textoPregunta").textContent = pregunta.pregunta;
    document.getElementById("puntosPregunta").textContent = puntosPartida;
    document.getElementById("progresoPregunta").style.width =
        ((preguntaActual / preguntasPartida.length) * 100) + "%";

    const opciones = document.getElementById("opciones");
    opciones.innerHTML = "";
    const letras = ["A", "B", "C", "D"];
    pregunta.opciones.forEach((texto, indice) => {
        const boton = document.createElement("button");
        boton.className = "opcion";
        boton.innerHTML =
            '<span class="opcion-letra">' + letras[indice] + '</span><span>' + escaparHtml(texto) + '</span>';
        boton.onclick = () => seleccionarRespuesta(indice);
        opciones.appendChild(boton);
    });

    document.getElementById("explicacion").classList.add("oculto");
    document.getElementById("siguienteBtn").classList.add("oculto");
    iniciarTimer();
}

/* ===================== TIMER ===================== */
function iniciarTimer() {
    tiempo = 15;
    const timer = document.getElementById("timer");
    const circle = document.getElementById("timerCircle");
    timer.textContent = tiempo;
    circle.classList.remove("warning");
    intervaloTimer = setInterval(() => {
        tiempo--;
        timer.textContent = tiempo;
        if (tiempo <= 5 && tiempo > 0) { circle.classList.add("warning"); sonidoTic(); }
        if (tiempo <= 0) { detenerTimer(); seleccionarRespuesta(-1); }
    }, 1000);
}
function detenerTimer() {
    if (intervaloTimer) { clearInterval(intervaloTimer); intervaloTimer = null; }
}

/* ===================== RESPONDER ===================== */
function seleccionarRespuesta(indice) {
    if (respuestaSeleccionada !== null) return;
    respuestaSeleccionada = indice;
    detenerTimer();

    const pregunta = preguntasPartida[preguntaActual];
    const correcta = indice === pregunta.correcta;
    const botones = document.querySelectorAll(".opcion");
    botones.forEach((boton, i) => {
        boton.disabled = true;
        if (i === pregunta.correcta) boton.classList.add("correcta");
        if (i === indice && !correcta) boton.classList.add("incorrecta");
    });

    perfil.preguntas++;
    let puntosGanados = 0;
    if (correcta) {
        sonidoAcierto();
        perfil.correctas++;
        perfil.racha++;
        if (perfil.racha > perfil.mejorRacha) perfil.mejorRacha = perfil.racha;
        puntosGanados = 100 + (tiempo * 10);
        if (perfil.racha >= 5) puntosGanados += 25;
        puntosPartida += puntosGanados;
    } else {
        sonidoError();
        perfil.racha = 0;
        if (modoSupervivencia) {
            vidas--;
            actualizarVidas();
        }
    }

    guardarDatos();
    actualizarPerfil();
    mostrarResultado(correcta, indice, puntosGanados);
}

/* ===================== VIDAS ===================== */
function actualizarVidas() {
    const cont = document.getElementById("vidas");
    if (!cont) return;
    let html = "";
    for (let i = 0; i < 3; i++) {
        html += '<span class="' + (i < vidas ? "" : "vida-vacia") + '">❤️</span>';
    }
    cont.innerHTML = html;
}

/* ===================== RESULTADO ===================== */
function mostrarResultado(correcta, indice, puntosGanados) {
    const pregunta = preguntasPartida[preguntaActual];
    const icon = document.getElementById("resultadoIcon");
    icon.textContent = correcta ? "✓" : "×";
    icon.classList.toggle("error", !correcta);

    document.getElementById("resultadoTitulo").textContent = correcta ? "¡Correcto!" : "¡Incorrecto!";
    document.getElementById("resultadoSubtitulo").textContent =
        correcta ? "¡Excelente! Sigue así." : "No te preocupes, puedes intentarlo de nuevo.";

    const letras = ["A", "B", "C", "D"];
    if (indice === -1) {
        document.getElementById("respuestaUsuario").textContent = "⏱";
        document.getElementById("textoRespuestaUsuario").textContent = "Se acabó el tiempo";
    } else {
        document.getElementById("respuestaUsuario").textContent = letras[indice];
        document.getElementById("textoRespuestaUsuario").textContent = pregunta.opciones[indice];
    }

    document.getElementById("textoRespuestaCorrecta").textContent =
        letras[pregunta.correcta] + " · " + pregunta.opciones[pregunta.correcta];

    const exp = document.getElementById("resultadoExplica");
    if (pregunta.explicacion) {
        document.getElementById("resultadoExplicaTexto").textContent = pregunta.explicacion;
        exp.classList.remove("oculto");
    } else {
        exp.classList.add("oculto");
    }

    document.getElementById("puntosGanados").textContent = "+" + puntosGanados;
    mostrarPantalla("resultado");
}

/* ===================== SIGUIENTE / FINAL ===================== */
function siguientePregunta() {
    if (modoSupervivencia && vidas <= 0) { finalizarPartida("💔 Te quedaste sin vidas."); return; }
    preguntaActual++;
    if (preguntaActual >= preguntasPartida.length) { finalizarPartida(); return; }
    mostrarPantalla("quiz");
    mostrarPregunta();
}
function finalizarPartida(mensajeExtra) {
    detenerTimer();
    perfil.puntos += puntosPartida;
    if (puntosPartida > perfil.mejorPuntaje) perfil.mejorPuntaje = puntosPartida;
    guardarDatos();
    actualizarPerfil();
    actualizarInicio();
    const base = "Partida terminada: +" + puntosPartida + " puntos";
    mostrarMensaje(mensajeExtra ? (mensajeExtra + " " + base) : base);
    mostrarPantalla("inicio");
}
function salirQuiz() {
    detenerTimer();
    mostrarPantalla("inicio");
}

/* ===================== PERFIL ===================== */
function actualizarPerfil() {
    const nombre = document.getElementById("nombreUsuario");
    if (!nombre) return;
    nombre.value = perfil.nombre;
    document.getElementById("descripcionUsuario").value = perfil.descripcion;
    document.getElementById("contadorDescripcion").textContent = perfil.descripcion.length;
    document.getElementById("puntosPerfil").textContent = perfil.puntos.toLocaleString();
    document.getElementById("rachaPerfil").textContent = perfil.racha;
    document.getElementById("preguntasRespondidas").textContent = perfil.preguntas;
    document.getElementById("respuestasCorrectasPerfil").textContent = perfil.correctas;
    document.getElementById("mejorRachaPerfil").textContent = perfil.mejorRacha;
    document.getElementById("mejorPuntajePerfil").textContent = perfil.mejorPuntaje.toLocaleString();

    let porcentaje = 0;
    if (perfil.preguntas > 0) porcentaje = Math.round((perfil.correctas / perfil.preguntas) * 100);
    document.getElementById("aciertosPerfil").textContent = porcentaje + "%";

    const nivel = calcularNivel(perfil.puntos);
    document.getElementById("nivelPerfil").textContent = nivel.nivel;
    document.getElementById("xpPerfil").textContent = nivel.xpActual + " / " + nivel.xpNecesaria + " XP";
    document.getElementById("progresoNivel").style.width = nivel.progreso + "%";
    document.getElementById("iqPerfil").textContent = calcularIndiceJuego();

    if (perfil.foto) document.getElementById("fotoPerfil").src = perfil.foto;
    else prepararFotoDefault();
    actualizarToggleSonido();
}

function calcularNivel(puntos) {
    const xpNecesaria = 500;
    const nivel = Math.floor(puntos / xpNecesaria) + 1;
    const xpActual = puntos % xpNecesaria;
    const progreso = (xpActual / xpNecesaria) * 100;
    return { nivel, xpActual, xpNecesaria, progreso };
}

function calcularIndiceJuego() {
    if (perfil.preguntas === 0) return 100;
    const precision = perfil.correctas / perfil.preguntas;
    let indice = 80 + Math.round(precision * 40);
    if (perfil.preguntas >= 25) indice += 3;
    if (perfil.preguntas >= 50) indice += 3;
    if (perfil.preguntas >= 100) indice += 4;
    return Math.min(indice, 150);
}

/* ===================== FOTO ===================== */
function prepararFotoDefault() {
    const imagen = document.getElementById("fotoPerfil");
    if (!imagen) return;
    if (perfil.foto) { imagen.src = perfil.foto; return; }
    const svg =
        '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
        '<rect width="200" height="200" fill="#171b22"/>' +
        '<circle cx="100" cy="75" r="42" fill="#ff5a1f"/>' +
        '<circle cx="100" cy="220" r="85" fill="#ff5a1f"/></svg>';
    imagen.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

document.addEventListener("change", function (event) {
    if (event.target.id !== "selectorFoto") return;
    const archivo = event.target.files[0];
    if (!archivo) return;
    if (!archivo.type.startsWith("image/")) { mostrarMensaje("Selecciona una imagen válida."); return; }
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
            const canvas = document.createElement("canvas");
            const max = 500;
            let ancho = img.width, alto = img.height;
            if (ancho > alto) { if (ancho > max) { alto = alto * (max / ancho); ancho = max; } }
            else { if (alto > max) { ancho = ancho * (max / alto); alto = max; } }
            canvas.width = ancho; canvas.height = alto;
            canvas.getContext("2d").drawImage(img, 0, 0, ancho, alto);
            perfil.foto = canvas.toDataURL("image/jpeg", 0.85);
            guardarDatos();
            actualizarPerfil();
            mostrarMensaje("✓ Foto actualizada");
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(archivo);
});

/* ===================== GUARDAR / CONTADOR / RESET ===================== */
function guardarPerfil() {
    const nombre = document.getElementById("nombreUsuario").value.trim();
    const descripcion = document.getElementById("descripcionUsuario").value.trim();
    perfil.nombre = nombre || "Jugador";
    perfil.descripcion = descripcion;
    guardarDatos();
    actualizarPerfil();
    actualizarInicio();
    mostrarMensaje("✓ Perfil guardado");
}
function prepararContadorDescripcion() {
    const textarea = document.getElementById("descripcionUsuario");
    if (!textarea) return;
    textarea.addEventListener("input", function () {
        document.getElementById("contadorDescripcion").textContent = this.value.length;
    });
}
function reiniciarProgreso() {
    if (!confirm("¿Seguro que quieres reiniciar tu progreso? Se perderán puntos, racha y estadísticas (el nombre y la foto se conservan).")) return;
    const nombre = perfil.nombre, descripcion = perfil.descripcion, foto = perfil.foto, sonido = perfil.sonido;
    perfil = { ...PERFIL_DEFAULT, nombre, descripcion, foto, sonido };
    guardarDatos();
    actualizarPerfil();
    actualizarInicio();
    mostrarMensaje("♻ Progreso reiniciado");
}

/* ===================== RETOS ===================== */
function iniciarReto(tipo) {
    modoReto = true;
    modoSupervivencia = false;
    puntosPartida = 0;
    preguntaActual = 0;
    respuestaSeleccionada = null;
    vidas = 3;

    const mezcladoTodo = () => mezclarArray([
        ...preguntas.cultura, ...preguntas.mate, ...preguntas.ciencia, ...preguntas.historia
    ]).slice(0, 10);

    if (tipo === "sprint") {
        preguntasPartida = generarPreguntasMatematicasReto();
        categoriaActual = "mate";
    } else if (tipo === "supervivencia") {
        modoSupervivencia = true;
        preguntasPartida = mezcladoTodo();
        categoriaActual = "mixto";
    } else {
        preguntasPartida = mezcladoTodo();
        categoriaActual = "mixto";
    }

    const etiquetas = { sprint: "➗ Sprint Matemático", supervivencia: "❤️ Supervivencia", mixto: "⏱ Contrarreloj Mixto" };
    document.getElementById("categoriaActual").textContent = etiquetas[tipo] || "🏆 Modo reto";
    document.getElementById("totalPreguntas").textContent = preguntasPartida.length;

    const vidasEl = document.getElementById("vidas");
    if (modoSupervivencia) { vidasEl.classList.remove("oculto"); actualizarVidas(); }
    else vidasEl.classList.add("oculto");

    mostrarPantalla("quiz");
    mostrarPregunta();
}

function generarPreguntasMatematicasReto() {
    const resultado = [];
    for (let i = 0; i < 10; i++) {
        const a = Math.floor(Math.random() * 20) + 5;
        const b = Math.floor(Math.random() * 15) + 2;
        const respuesta = a + b;
        const opciones = mezclarArray([respuesta, respuesta + 3, respuesta - 2, respuesta + 7].map(String));
        resultado.push({
            pregunta: "¿Cuánto es " + a + " + " + b + "?",
            opciones: opciones,
            correcta: opciones.indexOf(String(respuesta)),
            explicacion: "La operación es " + a + " + " + b + " = " + respuesta + "."
        });
    }
    return resultado;
}

function iniciarRetoAleatorio() {
    const retos = ["sprint", "supervivencia", "mixto"];
    iniciarReto(retos[Math.floor(Math.random() * retos.length)]);
}

/* ===================== UTILIDADES ===================== */
function mezclarArray(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}
function escaparHtml(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
}

/* ===================== TECLADO ===================== */
function prepararTeclado() {
    document.addEventListener("keydown", (e) => {
        const quizActivo = document.getElementById("quiz").classList.contains("activa");
        const resultadoActivo = document.getElementById("resultado").classList.contains("activa");
        if (quizActivo && respuestaSeleccionada === null) {
            const mapa = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
            const idx = mapa[e.key.toLowerCase()];
            if (idx !== undefined) {
                const botones = document.querySelectorAll(".opcion");
                if (botones[idx]) { botones[idx].click(); }
            }
        }
        if (resultadoActivo && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            siguientePregunta();
        }
    });
}

/* ===================== TOAST ===================== */
let toastTimer = null;
function mostrarMensaje(texto) {
    const toast = document.getElementById("toast");
    toast.textContent = texto;
    toast.classList.add("mostrar");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("mostrar"), 2200);
}

