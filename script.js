const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const focusBtn = document.getElementById('focusToggle');
const grid = document.getElementById("videoGrid");
const content = document.getElementById("content");

let focusMode = false;

// SIDEBAR TOGGLE
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    const icon = toggleBtn.querySelector('i');
    if (sidebar.classList.contains('collapsed')) {
        icon.classList.replace('fa-chevron-left', 'fa-chevron-right');
    } else {
        icon.classList.replace('fa-chevron-right', 'fa-chevron-left');
    }
});

// MODO FOCO
focusBtn.addEventListener("click", () => {
    focusMode = !focusMode;
    document.body.classList.toggle("focus-mode");
    focusBtn.classList.toggle("active");
});

// -------------------------------
// ARRAY DE VIDEOS
// -------------------------------
const videos = [
    {
        thumb: "https://picsum.photos/seed/js/500/280",
        channelImg: "https://i.pravatar.cc/40?img=1",
        title: "Aprenda JavaScript do zero ao avançado",
        channel: "Dev Master",
        views: "10k visualizações",
        time: "há 2 dias",
        duration: "18:24",
        category: "study"
    },
    {
        thumb: "https://picsum.photos/seed/fut/500/280",
        channelImg: "https://i.pravatar.cc/40?img=2",
        title: "Melhores gols da semana | Compilação",
        channel: "Futebol Total",
        views: "50k visualizações",
        time: "há 1 dia",
        duration: "10:05",
        category: "entertainment"
    },
    {
        thumb: "https://picsum.photos/seed/study/500/280",
        channelImg: "https://i.pravatar.cc/40?img=3",
        title: "Como estudar melhor e reter mais conhecimento",
        channel: "Produtividade Pro",
        views: "8k visualizações",
        time: "há 3 dias",
        duration: "22:17",
        category: "study"
    },
    {
        thumb: "https://picsum.photos/seed/game/500/280",
        channelImg: "https://i.pravatar.cc/40?img=4",
        title: "Top 10 jogadas insanas do mês",
        channel: "Highlights BR",
        views: "70k visualizações",
        time: "há 5 dias",
        duration: "8:43",
        category: "entertainment"
    },
    {
        thumb: "https://picsum.photos/seed/react/500/280",
        channelImg: "https://i.pravatar.cc/40?img=5",
        title: "React do zero: construindo um projeto real",
        channel: "Code Academy",
        views: "32k visualizações",
        time: "há 1 semana",
        duration: "1:12:33",
        category: "study"
    },
    {
        thumb: "https://picsum.photos/seed/music/500/280",
        channelImg: "https://i.pravatar.cc/40?img=6",
        title: "Os melhores lançamentos musicais de 2025",
        channel: "Música Total",
        views: "120k visualizações",
        time: "há 4 dias",
        duration: "15:09",
        category: "entertainment"
    },
    {
        thumb: "https://picsum.photos/seed/css/500/280",
        channelImg: "https://i.pravatar.cc/40?img=7",
        title: "CSS Grid e Flexbox: a diferença definitiva",
        channel: "Dev Master",
        views: "14k visualizações",
        time: "há 6 dias",
        duration: "19:48",
        category: "study"
    },
    {
        thumb: "https://picsum.photos/seed/vlog/500/280",
        channelImg: "https://i.pravatar.cc/40?img=8",
        title: "Vlog: uma semana em São Paulo",
        channel: "Vida Agitada",
        views: "45k visualizações",
        time: "há 2 dias",
        duration: "24:01",
        category: "entertainment"
    },
    {
        thumb: "https://picsum.photos/seed/python/500/280",
        channelImg: "https://i.pravatar.cc/40?img=9",
        title: "Python para iniciantes: fundamentos essenciais",
        channel: "Python BR",
        views: "27k visualizações",
        time: "há 1 semana",
        duration: "31:15",
        category: "study"
    },
    {
        thumb: "https://picsum.photos/seed/comedy/500/280",
        channelImg: "https://i.pravatar.cc/40?img=10",
        title: "Compilação de memes e vídeos engraçados 2025",
        channel: "Risadas",
        views: "200k visualizações",
        time: "há 3 dias",
        duration: "12:55",
        category: "entertainment"
    },
    {
        thumb: "https://picsum.photos/seed/docker/500/280",
        channelImg: "https://i.pravatar.cc/40?img=11",
        title: "Docker para devs: tudo que você precisa saber",
        channel: "DevOps BR",
        views: "18k visualizações",
        time: "há 5 dias",
        duration: "44:07",
        category: "study"
    },
    {
        thumb: "https://picsum.photos/seed/culin/500/280",
        channelImg: "https://i.pravatar.cc/40?img=12",
        title: "Receitas fáceis para a semana toda",
        channel: "Cozinha Rápida",
        views: "35k visualizações",
        time: "há 2 semanas",
        duration: "20:30",
        category: "entertainment"
    }
];

// -------------------------------
// COMPONENTE CARD
// -------------------------------
function VideoCard(video) {
    const isFutil = video.category !== "study";
    return `
        <div class="video-card ${isFutil ? "futil" : ""}">
            <div class="thumb-wrap">
                <img src="${video.thumb}" class="thumb" loading="lazy">
                <span class="duration">${video.duration}</span>
            </div>
            <div class="video-info">
                <img src="${video.channelImg}" class="channel-img" loading="lazy">
                <div class="video-meta">
                    <div class="title">${video.title}</div>
                    <div class="channel">${video.channel}</div>
                    <div class="meta">${video.views} • ${video.time}</div>
                </div>
            </div>
        </div>
    `;
}

const randomTitles = [
    "Aprenda JavaScript em 10 minutos",
    "Dicas para estudar melhor",
    "Gameplay insana!",
    "Como ganhar dinheiro programando",
    "Rotina de um dev",
    "Top curiosidades da internet",
];

const randomChannels = [
    "Dev BR",
    "CodeLab",
    "Vida Tech",
    "Explora Mundo",
    "Canal Aleatório",
    "Conteúdo Pro",
];

const categories = ["study", "entertainment"];

function generateRandomVideo(id) {
    const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

    return {
        thumb: `https://picsum.photos/seed/${Math.random()}/500/280`,
        channelImg: `https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70)}`,
        title: random(randomTitles),
        channel: random(randomChannels),
        views: `${Math.floor(Math.random() * 200)}k visualizações`,
        time: `há ${Math.floor(Math.random() * 10) + 1} dias`,
        duration: `${Math.floor(Math.random() * 59)}:${Math.floor(Math.random() * 59).toString().padStart(2, '0')}`,
        category: random(categories)
    };
}

// Render inicial
grid.innerHTML = videos.map(VideoCard).join("");

// Sentinel - elemento invisível no fim da página
const sentinel = document.createElement('div');
sentinel.id = 'sentinel';
sentinel.style.cssText = 'height:1px; width:100%;';
document.getElementById('content').appendChild(sentinel);

// Infinite scroll
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        const newVideos = Array.from({ length: 12 }, (_, i) => generateRandomVideo(i));
        grid.innerHTML += newVideos.map(VideoCard).join("");
    }
}, { rootMargin: '200px' });

observer.observe(sentinel);

// -------------------------------
// SIDEBAR
// -------------------------------
const sidebarSections = [
    {
        items: [
            { label: "Início", icon: "fas fa-home" },
            { label: "Shorts", icon: "fas fa-film" },
            { label: "Inscrições", icon: "fas fa-play-circle" },
        ]
    },
    {
        title: "Você",
        items: [
            { label: "Seu canal", icon: "fas fa-user-circle" },
            { label: "Histórico", icon: "fas fa-history" },
            { label: "Playlists", icon: "fas fa-list" },
            { label: "Seus vídeos", icon: "fas fa-video" },
            { label: "Assistir depois", icon: "fas fa-clock" },
            { label: "Vídeos curtidos", icon: "fas fa-thumbs-up" },
            { label: "Downloads", icon: "fas fa-download" },
        ]
    },
    {
        title: "Explorar",
        items: [
            { label: "Tendências", icon: "fas fa-fire" },
            { label: "Música", icon: "fas fa-music" },
            { label: "Jogos", icon: "fas fa-gamepad" },
            { label: "Notícias", icon: "fas fa-newspaper" },
            { label: "Esportes", icon: "fas fa-futbol" },
            { label: "Ao vivo", icon: "fas fa-circle", extra: "live" },
        ]
    }
];

const sidebarList = document.getElementById("sidebarList");

sidebarSections.forEach((section, i) => {
    if (i > 0) {
        const hr = document.createElement("hr");
        hr.className = "sidebar-divider";
        sidebarList.appendChild(hr);
    }

    if (section.title) {
        const title = document.createElement("div");
        title.className = "sidebar-section-title";
        title.textContent = section.title;
        sidebarList.appendChild(title);
    }

    section.items.forEach(item => {
        const div = document.createElement("div");
        div.className = "sidebar-item";
        div.innerHTML = `
            <span class="item-icon"><i class="${item.icon}${item.extra === 'live' ? ' live-dot' : ''}"></i></span>
            <span class="item-label">${item.label}</span>
        `;
        sidebarList.appendChild(div);
    });
});
