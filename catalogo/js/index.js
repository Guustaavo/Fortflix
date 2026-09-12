// index.js
// Este arquivo controla a funcionalidade dos perfis na página inicial.
// Armazena o perfil ativo no localStorage quando um perfil é selecionado.

/**
 * FUNÇÃO: Armazena o perfil ativo no localStorage
 * - Quando um perfil é clicado, salva nome e imagem
 */
function storeActiveProfile(event) {
    event.preventDefault(); // Impede a navegação imediata para garantir que o armazenamento aconteça

    // Obtém o link clicado
    const link = event.currentTarget;

    // Obtém a imagem e o nome do perfil
    const img = link.querySelector('img');
    const name = link.querySelector('figcaption').textContent;

    // Armazena no localStorage
    localStorage.setItem('perfilAtivoNome', name);
    localStorage.setItem('perfilAtivoImagem', img.src);

    // Debug: mostra no console o que foi armazenado
    console.log('Perfil armazenado:', name, img.src);

    // Navega para a página do catálogo após armazenar
    window.location.href = link.href;
}

/**
 * EVENT LISTENERS: Adiciona listeners aos links dos perfis
 * - Quando clicado, armazena o perfil ativo
 */
document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profile a');
    profileLinks.forEach(link => {
        link.addEventListener('click', storeActiveProfile);
    });
});
