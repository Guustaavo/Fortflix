from pathlib import Path
for filename in ['catalogo/js/main.js', 'catalogo/js/data.js']:
    path = Path(filename)
    text = path.read_text('utf-8', errors='replace')
    print('FILE', filename)
    if filename.endswith('main.js'):
        start = text.index('const nomePerfil')
        print(text[start-80:start+320])
    else:
        start = text.index('title: "Séries"')
        print(text[start-40:start+420])
    print('---')
