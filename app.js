const root = document.getElementById('root');

// --- ESTADOS DO SITE ---
let currentState = 'splash'; // splash, login, home

function navigate(state) {
    currentState = state;
    render();
}

// --- 1. TELA DE ABERTURA MÁGICA ---
function Splash() {
    setTimeout(() => navigate('login'), 5000);
    return `
        <div id="splash-screen" class="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] overflow-hidden">
            <!-- Partículas de Brilho -->
            <div class="absolute inset-0 pointer-events-none">
                ${Array(30).fill(0).map(() => `
                    <div class="absolute bg-yellow-500 rounded-full animate-ping" 
                         style="width:2px; height:2px; top:${Math.random()*100}%; left:${Math.random()*100}%; animation-duration:${Math.random()*3+1}s"></div>
                `).join('')}
            </div>

            <div class="relative text-center">
                <h1 id="magic-text" class="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-700 animate-giro-escrita" 
                    style="filter: drop-shadow(0 0 15px rgba(255,215,0,0.8));">
                    @7viDAS
                </h1>
                <div class="mt-4 h-1 w-0 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-linha-magica mx-auto"></div>
            </div>
        </div>
    `;
}

// --- 2. TELA DE LOGIN (ESTILO FB LITE) ---
function Login() {
    return `
        <div class="min-h-screen bg-[#000] flex flex-col items-center justify-center p-6">
            <h1 class="text-[#FFD700] text-4xl font-black italic mb-8">Word Music Lite</h1>
            <div class="w-full max-w-sm space-y-4">
                <input type="email" placeholder="E-mail ou Telemóvel" class="w-full bg-[#1c1c1c] p-4 rounded-md border border-zinc-800 outline-none focus:border-red-600 text-white">
                <input type="password" placeholder="Palavra-passe" class="w-full bg-[#1c1c1c] p-4 rounded-md border border-zinc-800 outline-none focus:border-red-600 text-white">
                <button onclick="navigate('home')" class="w-full bg-red-700 text-white font-bold py-3 rounded-md text-lg active:scale-95 transition-all">Entrar</button>
                <div class="flex items-center justify-center space-x-2 text-zinc-500 py-4">
                    <div class="h-[1px] w-full bg-zinc-800"></div>
                    <span>ou</span>
                    <div class="h-[1px] w-full bg-zinc-800"></div>
                </div>
                <button class="w-full border border-green-600 text-green-600 font-bold py-2 rounded-md">Criar nova conta</button>
            </div>
        </div>
    `;
}

// --- 3. PÁGINA INICIAL (FEED ESTILO FACEBOOK LITE) ---
function Home() {
    return `
        <div class="bg-black min-h-screen pb-20">
            <!-- Barra Superior (Tabs) -->
            <nav class="sticky top-0 bg-[#1c1c1c] border-b border-zinc-800 flex justify-around p-2 z-50">
                <button class="text-red-600 p-2 border-b-2 border-red-600">🏠</button>
                <button class="text-zinc-400 p-2">👥</button>
                <button class="text-zinc-400 p-2 text-xl">🎞️</button> <!-- SHORTS -->
                <button class="text-zinc-400 p-2">🔔</button>
                <button class="text-zinc-400 p-2">☰</button>
            </nav>

            <!-- O que estás a gravar? -->
            <div class="bg-[#1c1c1c] p-4 mt-2 flex items-center space-x-3">
                <div class="w-10 h-10 bg-red-800 rounded-full flex-shrink-0 flex items-center justify-center font-bold">7V</div>
                <button class="bg-black text-zinc-500 rounded-full px-4 py-2 w-full text-left border border-zinc-800">
                    O que estás a gravar hoje?
                </button>
            </div>

            <!-- Botões de Ação Rápida -->
            <div class="bg-[#1c1c1c] flex border-t border-zinc-800 text-xs py-2">
                <button class="flex-1 text-center border-r border-zinc-800 text-red-500">📷 Imagem</button>
                <button class="flex-1 text-center border-r border-zinc-800 text-yellow-500">🎵 Áudio</button>
                <button class="flex-1 text-center text-blue-500">🎥 Vídeo</button>
            </div>

            <!-- Feed de Publicações -->
            <div class="mt-2 space-y-2">
                ${PostCard("Seven Vidas", "Acabei de soltar um novo beat de Marrabenta! 🇲🇿", "https://via.placeholder.com/400x250/222/FFD700?text=BEAT+MARRABENTA")}
                ${PostCard("Jackson Beatz", "Quem precisa de um engenheiro de som em Nampula?", null)}
            </div>
        </div>
    `;
}

function PostCard(user, text, image) {
    return `
        <div class="bg-[#1c1c1c] p-4">
            <div class="flex items-center space-x-2 mb-3">
                <div class="w-10 h-10 bg-zinc-700 rounded-full"></div>
                <div>
                    <p class="font-bold text-sm">${user}</p>
                    <p class="text-zinc-500 text-[10px]">Agora mesmo • Moçambique</p>
                </div>
            </div>
            <p class="text-sm mb-3">${text}</p>
            ${image ? `<img src="${image}" class="w-full rounded-md border border-zinc-800 mb-3">` : ''}
            <div class="flex justify-between border-t border-zinc-800 pt-3 text-zinc-400 text-sm">
                <button>🔥 Curtir</button>
                <button>💬 Comentar</button>
                <button>🚀 Partilhar</button>
            </div>
        </div>
    `;
}

// --- ENGINE DE RENDERIZAÇÃO ---
function render() {
    if (currentState === 'splash') root.innerHTML = Splash();
    if (currentState === 'login') root.innerHTML = Login();
    if (currentState === 'home') root.innerHTML = Home();
}

render();