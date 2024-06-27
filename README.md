# Sito Web Cantina Piano

Questo progetto è un sito web statico realizzato con Astro.

## 🚀 Struttura del Progetto

All'interno del progetto sono presenti le seguenti cartelle e file:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro cerca i file `.astro` o `.md` nella cartella `src/pages/`. Ogni pagina è esposta come rotta in base al nome del file.

Nella cartella `src/components/`,
 è vengono alloggiati i componenti di Astro/React/Vue/Svelte/Preact.
Qualsiasi risorsa statica, come le immagini,
può essere collocata nella cartella `public/`.

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
