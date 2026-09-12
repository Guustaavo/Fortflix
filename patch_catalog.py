from pathlib import Path

def patch(path, old, new):
    text = path.read_text(encoding='utf-8')
    if old not in text:
        raise RuntimeError(f'Old block not found in {path}')
    path.write_text(text.replace(old, new, 1), encoding='utf-8')

patch(Path('catalogo/js/main.js'),
"""    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    console.log('Perfil recuperado:', nomePerfil, imagemPerfil);
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }
""",
"""    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');
    console.log('Perfil recuperado:', nomePerfil, imagemPerfil);

    if (nomePerfil && imagemPerfil) {
        const profileName = document.querySelector('.profile-name');
        const profileIcon = document.querySelector('.profile-icon');

        if (profileName) profileName.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }
"""
)

patch(Path('catalogo/js/data.js'),
"""    {
        title: \"Para maratonar\",\n""",
"""    {
        title: \"Fortnite\",
        items: [
            { img: \"https://cdn2.unrealengine.com/fortnite-home-page-hero-1920x1080-5fbc528d4b54.jpg\", top10: true, badge: \"Épico\", badgeColor: \"purple\", progress: 0, youtube: \"https://www.youtube.com/watch?v=8gY3u97YfMQ\" },
            { img: \"https://cdn2.unrealengine.com/fortnite-blog-14may-2024-1920x1080-591a74dc2465.jpg\", badge: \"Novo vídeo\", badgeColor: \"purple\", progress: 0, youtube: \"https://www.youtube.com/watch?v=V-kS1PB0dZU\" },
            { img: \"https://cdn2.unrealengine.com/fortnite-chapter-5-season-2-hero-1920x1080-bcf138bd0c08.jpg\", badge: \"Battle Royale\", badgeColor: \"purple\", progress: 0, youtube: \"https://www.youtube.com/watch?v=f9MwYX9tha8\" },
            { img: \"https://cdn2.unrealengine.com/fortnite-x-trailer-1920x1080-4c3e7f1bb4bd.jpg\", badge: \"Clássico\", badgeColor: \"purple\", progress: 0, youtube: \"https://www.youtube.com/watch?v=JIK8jZLW5FY\" },
        ]
    },
    {
        title: \"Para maratonar\",
"""
)
print('patched OK')
