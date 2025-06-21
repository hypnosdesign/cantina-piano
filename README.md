# Sito Web Cantina Piano

Questo progetto è un sito web statico realizzato con Astro.

## 🚀 Struttura del Progetto

All'interno del progetto sono presenti le seguenti cartelle e file:

```text
/
.
├── astro.config.mjs
├── declaration-order.md
├── eslintrc.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.svg
│   └── imgs
│       ├── ba-bere-nero.webp
│       ├── da-bere-bianco.webp
│       ├── ellipse-black.svg
│       ├── ellipse-white.svg
│       ├── forblog
│       │   ├── blog-abbinamenti-cibo-vino.webp
│       │   ├── blog-alla-scoperta-ristoranti.webp
│       │   ├── blog-cannonau-storia.webp
│       │   ├── blog-mia-esperienza.webp
│       │   ├── blog-scoperta-produttori.webp
│       │   ├── blog-spiagge-vini.webp
│       │   ├── blog-una-serata-da-ricordare.webp
│       │   ├── blog-vacanze.webp
│       │   ├── blog-viaggio-enogastronomico.webp
│       │   └── blog-weekend-amici.webp
│       ├── icon-bn-logo_cantina-piano.svg
│       ├── logo_black.svg
│       ├── Logo_IEDc_scritta.svg
│       ├── logo_white.svg
│       ├── logo-cantina-piano-bianco.svg
│       └── logo-cantina-piano-color.svg
├── README.md
├── src
│   ├── breadcrumbs.scss
│   ├── components
│   │   ├── Footer.astro
│   │   ├── ImageSlider.astro
│   │   ├── ItaliaVect.astro
│   │   ├── NavBar.astro
│   │   └── PostEl.astro
│   ├── constants.ts
│   ├── content
│   │   ├── blog
│   │   │   ├── abbinamenti-cibo-vino-consigli-di-un-sommelier.md
│   │   │   ├── alla-scoperta-dei-migliori-ristoranti-sardi.md
│   │   │   ├── degustazione-di-vermentino-una-serata-da-ricordare.md
│   │   │   ├── il-fascino-del-cannonau-degustazione-e-storia.md
│   │   │   ├── scoperta-dei-piccoli-produttori-vinicoli-sardi.md
│   │   │   ├── spiagge-sarde-e-vini-un-abbinamento-perfetto.md
│   │   │   ├── un-giorno-da-sommelier-la-mia-esperienza-alla-cantina-piano.md
│   │   │   ├── vacanze-tra-le-vigne-della-cantina-piano.md
│   │   │   ├── viaggio-enogastronomico-in-sardegna.md
│   │   │   └── weekend-enogastronomico-con-gli-amici.md
│   │   └── config.ts
│   ├── env.d.ts
│   ├── images
│   │   ├── bevilo-piano.png
│   │   ├── botti.jpg
│   │   ├── cantina
│   │   │   ├── cantina0000.jpg
│   │   │   ├── cantina0001.jpg
│   │   │   ├── imbottigliamento.jpeg
│   │   │   └── stoccaggio.jpeg
│   │   ├── cantina_vini.jpg
│   │   ├── cf-vino-bianco.jpg
│   │   ├── cf-vino-nero.jpg
│   │   ├── h2-slide-bianco.jpg
│   │   ├── sf-vino-bianco.jpg
│   │   ├── sf-vino-nero.jpg
│   │   ├── tavolo_vuoto.jpg
│   │   ├── tavolo_vuoto.png
│   │   ├── vigna
│   │   │   ├── bionda-calm-bianco.jpg
│   │   │   ├── header-vigna.jpg
│   │   │   ├── landscape-vigna.jpg
│   │   │   ├── mora-book-nero.jpg
│   │   │   ├── mora-lunga-nero.jpg
│   │   │   ├── spiaggia-bianco.jpg
│   │   │   ├── uva-bianca-vigna.jpg
│   │   │   └── uva-nera-vigna.jpg
│   │   ├── vini
│   │   │   ├── h2-slide-1.jpg
│   │   │   ├── h2-slide-bianco.jpg
│   │   │   ├── h2-slide-con-vini.jpg
│   │   │   ├── h2-slide-con-vini.png
│   │   │   ├── h2-slide-nero.jpg
│   │   │   ├── sfondo_vini_pck_0000.jpg
│   │   │   ├── sfondo_vini_pck_0001.jpg
│   │   │   ├── sfondo_vini_pck.jpg
│   │   │   ├── vino_bianco_pck.jpg
│   │   │   └── vino_nero_pck.jpg
│   │   ├── vino_bianco_bottle_nobg.png
│   │   ├── vino_nero_bottle_nobg_test.png
│   │   └── vino_nero_bottle_nobg.png
│   ├── layouts
│   │   └── MainLayout.astro
│   ├── main.scss
│   ├── pages
│   │   ├── __i-vini.astro
│   │   ├── 404.astro
│   │   ├── blog
│   │   │   ├── [...slug].astro
│   │   │   └── index.astro
│   │   ├── contatti.astro
│   │   ├── i-vini
│   │   │   ├── il-bianco.astro
│   │   │   ├── il-nero.astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── la-cantina.astro
│   │   ├── la-vigna.astro
│   │   ├── privacy.astro
│   │   └── test.astro
│   ├── sass
│   │   ├── _colors.scss
│   │   ├── _variables.scss
│   │   └── components
│   │       └── _navbar.scss
│   └── utils.ts
└── tsconfig.json
```

Astro cerca i file `.astro` o `.md` nella cartella `src/pages/`. Ogni pagina è esposta come rotta in base al nome del file.

Nella cartella `src/components/`,
vengono alloggiati i componenti di Astro.
Qualsiasi risorsa statica, come le immagini,
è collocata nella cartella `public/`.

## 🧞 Commandi

Tutti i comandi vengono eseguiti dalla radice del progetto, da un terminale:

| Commando                  | Evento                                                      |
|:--------------------------|:------------------------------------------------------------|
| `npm install`             | Installa le dipendenze                                      |
| `npm run dev`             | Avvia un server locale su `localhost:4321`                  |
| `npm run build`           | Crea lo stato di produzione in `./dist/`                    |
| `npm run preview`         | Anteprima della build in locale, prima di distribuirla      |
| `npm run astro ...`       | Per Eseguire i comandi CLI come `astro add`, `astro check`. |
| `npm run astro -- --help` | Aiuto per l'utilizzo della CLI di Astro                     |

## 👀 pacchetti aggiuntivi

- installazione di Boostrap
```sh
  npm install bootstrap
```

- installazione di fontsource e del font Source Serif Pro
```sh
  npm install @fontsource/source-serif-pro
```
https://docs.astro-breadcrumbs.kasimir.dev/start-here/getting-started/

```
npm install astro-breadcrumbs
```
