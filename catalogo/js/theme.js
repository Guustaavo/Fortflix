/* ============================================ */
/* SCRIPT DE ALTERNÂNCIA DE TEMA (DARK/LIGHT) */
/* ============================================ */

/* 
 * FUNCIONAMENTO:
 * - Detecta o tema salvo no localStorage do navegador
 * - Se não houver tema salvo, usa o tema do sistema operacional
 * - Permite ao usuário alternar entre dark e light mode
 * - Persiste a preferência do usuário no localStorage
 */

// Obtém o elemento do botão toggle de tema
const themeToggle = document.getElementById('themeToggle');

// Obtém o elemento raiz (html), que contém o atributo data-theme
const html = document.documentElement;

/**
 * FUNÇÃO: Inicializa o tema na primeira carga da página
 * - Verifica se há um tema salvo no localStorage
 * - Se não houver, verifica a preferência do navegador
 * - Aplica o tema detectado
 */
function initTheme() {
    // Obtém o tema salvo no localStorage (ou null se não existir)
    const savedTheme = localStorage.getItem('theme');
    
    // Se houver tema salvo, usa-o
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
        return;
    }
    
    // Se não houver tema salvo, detecta a preferência do sistema
    /* 
     * window.matchMedia() verifica se o navegador/SO está em modo escuro
     * Isso respeita as configurações de tema do sistema operacional
     */
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'dark' : 'light';
    
    html.setAttribute('data-theme', initialTheme);
    localStorage.setItem('theme', initialTheme);
    updateThemeIcon(initialTheme);
}

/**
 * FUNÇÃO: Alterna entre temas dark e light
 * - Detecta o tema atual
 * - Muda para o tema oposto
 * - Salva a preferência no localStorage
 * - Atualiza o ícone do botão
 */
function toggleTheme() {
    // Obtém o tema atual do atributo data-theme
    const currentTheme = html.getAttribute('data-theme');
    
    // Define o novo tema (oposto do atual)
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Aplica o novo tema
    html.setAttribute('data-theme', newTheme);
    
    // Salva o novo tema no localStorage para persistência
    localStorage.setItem('theme', newTheme);
    
    // Atualiza o ícone do botão
    updateThemeIcon(newTheme);
}

/**
 * FUNÇÃO: Atualiza o ícone do botão de toggle
 * - O ícone é desenhado com CSS baseado no data-theme
 * - Lâmpada branca em dark mode
 * - Lâmpada preta em light mode
 * 
 * @param {string} theme - O tema atual ('dark' ou 'light')
 */
function updateThemeIcon(theme) {
    // O ícone é atualizado automaticamente pelo CSS que responde ao data-theme
    // Não precisa de mudanças no JavaScript mais
}

/**
 * EVENT LISTENER: Adiciona listener ao botão de toggle
 * - Quando clicado, chama a função toggleTheme()
 * - Permite alternar entre temas com um clique
 */
themeToggle.addEventListener('click', toggleTheme);

/**
 * EXECUÇÃO: Inicializa o tema quando a página carrega
 * - Window.DOMContentLoaded garante que o DOM está pronto
 */
document.addEventListener('DOMContentLoaded', initTheme);

/* ============================================ */
/* FUNCIONALIDADES DOS PERFIS */
/* ============================================ */

/*
 * NOTA: Os perfis agora usam <a href> para redirecionamento nativo.
 * Isso é mais semântico, acessível e não requer JavaScript.
 * Os links são definidos diretamente no HTML (href="perfil1.html", etc.).
 * Se precisar de lógica adicional (ex: confirmação), adicione aqui.
 */

/* ============================================ */
/* FUNCIONALIDADES DO LINK CONFIGURAÇÕES */
/* ============================================ */

/*
 * NOTA: O botão Configurações agora é um link <a href="configuracoes.html">.
 * Redirecionamento nativo, sem necessidade de JavaScript.
 * Se precisar de uma modal ou página dinâmica, implemente aqui.
 */
