astromoderna/
├── public/
│   ├── index.html
│   └── images/             # Imágenes estáticas (logos, fondos, iconos)
│       ├── tarot/
│       ├── zodiac/
├── src/
│   ├── assets/             # Imágenes, fuentes, patrones, etc.
│   │   ├── img/
│   │   └── fonts/
│   ├── components/         # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── TarotCard.jsx
│   │   ├── ZodiacCard.jsx
│   ├── data/               # Datos en JSON si no usas API
│   │   ├── tarotData.json
│   │   ├── zodiacData.json
│   ├── pages/              # Vistas principales
│   │   ├── Home.jsx
│   │   ├── Astrology.jsx
│   │   ├── Tarot.jsx
│   │   ├── TarotDetail.jsx
│   │   └── NotFound.jsx
│   ├── styles/             # Archivos SCSS/CSS por secciones
│   │   ├── base/
│   │   │   ├── _reset.scss
│   │   │   ├── _variables.scss
│   │   │   └── _mixins.scss
│   │   ├── layout/
│   │   │   ├── _header.scss
│   │   │   ├── _footer.scss
│   │   │   └── _grid.scss
│   │   ├── components/
│   │   │   ├── _tarotCard.scss
│   │   │   └── _zodiacCard.scss
│   │   └── App.scss
│   ├── App.jsx             # Lógica de rutas y estructura
│   ├── main.jsx            # Punto de entrada de React
│   └── router.jsx          # (Opcional) Si quieres separar las rutas
├── .gitignore
├── package.json
└── README.md
