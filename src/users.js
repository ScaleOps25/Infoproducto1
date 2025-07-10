const testimonios = [
    {
        nombre: "Martín Gómez",
        ocupacion: "Agente inmobiliario",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        texto: "¡Automatizar con ScaleOps fue como pasar del Fiat Duna al Tesla! Ahora ahorro horas por semana y no pierdo leads."
    },
    {
        nombre: "Laura Fernández",
        ocupacion: "Emprendedora digital",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        texto: "Nunca imaginé poder automatizar mi negocio sin saber programar. El soporte fue de otro planeta."
    },
    {
        nombre: "Nicolás Paz",
        ocupacion: "Emprendedor tech",
        avatar: "https://randomuser.me/api/portraits/men/54.jpg",
        texto: "Pasé de horas y horas de tareas manuales a tener todo en automático. ¡Escalé sin estrés!"
    },
    {
        nombre: "Sofía Martínez",
        ocupacion: "Diseñadora UX",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        texto: "Pensé que la automatización era solo para grandes empresas. Ahora tengo más tiempo para mis propios proyectos."
    },
    {
        nombre: "Andrés Cabrera",
        ocupacion: "Coach de negocios",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        texto: "Mi productividad se duplicó. Antes era esclavo del Excel, ahora el Excel me pregunta consejos a mí."
    },
    {
        nombre: "Valentina Torres",
        ocupacion: "Consultora IT",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        texto: "ScaleOps hace magia. Mi equipo y yo ya no peleamos con tareas repetitivas, nos dedicamos a innovar."
    },
    {
        nombre: "Esteban López",
        ocupacion: "CEO Startup",
        avatar: "https://randomuser.me/api/portraits/men/77.jpg",
        texto: "El onboarding fue rapidísimo y ahora nada se nos pasa por alto. Altamente recomendado."
    },
    {
        nombre: "Julieta Ramírez",
        ocupacion: "Community Manager",
        avatar: "https://randomuser.me/api/portraits/women/88.jpg",
        texto: "Programar campañas y reportes ya no me saca canas verdes. ¡Ahora todo fluye!"
    },
    {
        nombre: "Federico Oliva",
        ocupacion: "Desarrollador Freelance",
        avatar: "https://randomuser.me/api/portraits/men/93.jpg",
        texto: "Automatizar era la pieza que faltaba en mi trabajo remoto. El cliente nunca espera, ¡y yo tampoco!"
    },
    {
        nombre: "Marina Paz",
        ocupacion: "Project Manager",
        avatar: "https://randomuser.me/api/portraits/women/55.jpg",
        texto: "Mi equipo dejó de odiar las reuniones. Ahora automatizamos status y ganamos tiempo para pensar."
    },
];

// Animación slide-in (agregada con Tailwind vía clases dinámicas)
let currentIndex = 0;

function getSlideHTML(idx1, idx2) {
    const t1 = testimonios[idx1 % testimonios.length];
    const t2 = testimonios[idx2 % testimonios.length];
    // 100% Tailwind, sin style embebido, usando ring y shadow para el neon
    return `
    <div class="flex flex-col md:flex-row gap-8 justify-center items-center w-full h-full">
        ${[t1, t2].map(t => `
            <div class="
                relative 
                bg-[#181028] 
                border-2 border-purple-500 
                rounded-3xl 
                p-8 
                shadow-2xl 
                flex flex-col items-center group overflow-hidden 
                w-full max-w-md min-w-[260px]
                ring-2 ring-purple-500/80 ring-offset-2
                hover:ring-4 hover:ring-purple-400/80 hover:shadow-purple-500/40 transition
                animate-fadein
            ">
                <img src="${t.avatar}" alt="Avatar de ${t.nombre}"
                    class="relative z-10 w-20 h-20 mb-5 rounded-full object-cover border-4 border-purple-500 shadow-lg scale-90 group-hover:scale-105 transition duration-300" />
                <blockquote class="relative z-10 text-white text-base md:text-lg text-center font-medium mb-5">
                    "${t.texto}"
                </blockquote>
                <div class="relative z-10 text-purple-300 text-lg font-bold">${t.nombre}</div>
                <div class="relative z-10 text-white/70 text-sm">${t.ocupacion}</div>
            </div>
        `).join('')}
    </div>
    `;
}

// Animación fade-in con Tailwind (deberías tenerla en tu tailwind.config.js, pero la agrego por seguridad aquí)
const sliderStyle = document.createElement('style');
sliderStyle.innerHTML = `
@keyframes fadein {
    from { opacity: 0; transform: translateY(40px);}
    to   { opacity: 1; transform: translateY(0);}
}
.animate-fadein {
    animation: fadein 0.7s cubic-bezier(.77,0,.18,1) both;
}
`;
document.head.appendChild(sliderStyle);

function renderSlider(animate = true) {
    const container = document.getElementById('testimonial-slider');
    if (animate) {
        container.classList.remove('animate-fadein');
        container.classList.add('opacity-0');
        setTimeout(() => {
            container.innerHTML = getSlideHTML(currentIndex, currentIndex + 1);
            container.classList.remove('opacity-0');
            container.classList.add('animate-fadein', 'opacity-100');
        }, 250);
    } else {
        container.innerHTML = getSlideHTML(currentIndex, currentIndex + 1);
        container.classList.add('animate-fadein', 'opacity-100');
    }
}

// Slide automático cada 5 segundos
function nextSlide() {
    currentIndex = (currentIndex + 2) % testimonios.length;
    renderSlider();
}
setInterval(nextSlide, 9000);

// Render inicial
renderSlider(false);