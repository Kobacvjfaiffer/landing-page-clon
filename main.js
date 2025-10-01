// ---- NAV ----
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('open');
    });

    document.querySelectorAll('.nav a').forEach(a => {
      a.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
});

// ---- PROYECTOS ----
async function cargarProyectos() {
  try {
    const res = await fetch("http://localhost:3000/api/proyectos");
    const data = await res.json();

    const contenedor = document.createElement("section");
    contenedor.classList.add("proyectos");

    data.forEach(proyecto => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion}</p>
      `;
      contenedor.appendChild(card);
    });

    document.querySelector("#services").appendChild(contenedor);
  } catch (err) {
    console.error("Error cargando proyectos:", err);
  } finally {
    document.getElementById("loader").style.display = "none";
  }
}
cargarProyectos();
// ---- SERVICIOS (FEATURES) ----
async function cargarServicios() {
  try {
    const res = await fetch("http://localhost:3000/api/services");
    const data = await res.json();

    const contenedor = document.querySelector(".features");

    data.forEach(service => {
      const feature = document.createElement("div");
      feature.classList.add("feature");
      feature.innerHTML = `
        <img src="${service.image}" alt="${service.title}">
        <i class="${service.icon}"></i>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      `;
      contenedor.appendChild(feature);
    });
  } catch (err) {
    console.error("Error cargando servicios:", err);
  }
}
cargarServicios();