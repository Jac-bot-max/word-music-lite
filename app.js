const root = document.getElementById('root');

// --- TELA DE ABERTURA (Splash Screen) ---
root.innerHTML = `
    <div id="splash" style="background:black; height:100vh; width:100vw; display:flex; flex-direction:column; align-items:center; justify-content:center; position:fixed; z-index:9999; transition: opacity 1s;">
        <div style="text-align:center;">
            <h1 id="logo" class="text-glow animate-giro" style="color:#FFD700; font-size:2.5rem; font-weight:bold; font-style:italic;">
                @7viDASMusic
            </h1>
            <p id="sub" style="color:#D32F2F; letter-spacing:8px; margin-top:15px; font-size:0.8rem; opacity:0; transition: 1s;">
                SETE VIDAS MUSIC
            </p>
        </div>
    </div>
`;

// Mostrar o subtítulo depois de 1 segundo
setTimeout(() => {
    document.getElementById('sub').style.opacity = '1';
}, 1000);

// --- TRANSIÇÃO PARA O SITE (Após 4 segundos) ---
setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.style.opacity = '0';
    setTimeout(() => {
        splash.remove();
        renderCadastro();
    }, 1000);
}, 4500);

// --- TELA DE CADASTRO ---
function renderCadastro() {
    root.innerHTML = `
        <div class="min-h-screen p-6 flex flex-col items-center">
            <header class="w-full max-w-md flex justify-between items-center mb-10">
                <h1 class="text-[#FFD700] text-2xl font-black italic">Word Music Lite</h1>
                <div class="w-10 h-10 bg-[#D32F2F] rounded-full flex items-center justify-center font-bold text-white shadow-lg">7V</div>
            </header>

            <div class="w-full max-w-md bg-zinc-900 p-8 rounded-[2rem] border border-zinc-800 shadow-2xl">
                <h2 class="text-xl font-bold mb-2">Cria a tua conta 🇲🇿</h2>
                <p class="text-zinc-500 text-sm mb-6">Apenas para músicos de Moçambique.</p>
                
                <div class="space-y-4 text-white">
                    <input type="text" placeholder="Teu nome artístico" class="w-full bg-black p-4 rounded-xl border border-zinc-700 focus:border-[#FFD700] outline-none">
                    <input type="text" placeholder="@usuario" class="w-full bg-black p-4 rounded-xl border border-zinc-700 focus:border-[#D32F2F] outline-none">
                    
                    <select class="w-full bg-black p-4 rounded-xl border border-zinc-700 text-zinc-400">
                        <option>Tua Província</option>
                        <option>Maputo</option><option>Gaza</option><option>Inhambane</option>
                        <option>Sofala</option><option>Manica</option><option>Tete</option>
                        <option>Zambézia</option><option>Nampula</option><option>Niassa</option>
                        <option>Cabo Delgado</option>
                    </select>

                    <select class="w-full bg-black p-4 rounded-xl border border-zinc-700 text-zinc-400">
                        <option>O que tu fazes?</option>
                        <option>Produtor Musical</option><option>Cantor(a)</option><option>Beatmaker</option>
                        <option>DJ</option><option>Compositor</option><option>Guitarrista</option>
                    </select>

                    <button class="w-full bg-[#D32F2F] hover:bg-red-700 py-4 rounded-xl font-bold text-lg mt-6 shadow-lg active:scale-95 transition-all">
                        COMEÇAR AGORA
                    </button>
                </div>
            </div>
            
            <footer class="mt-auto py-10">
                <p class="text-zinc-600 text-[10px] tracking-[4px] uppercase">Desenvolvido por Sete Vidas</p>
            </footer>
        </div>
    `;
}