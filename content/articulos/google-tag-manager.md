---
title: Google Tag Manager
description: Learn how to use @nuxt/content.
picture: https://stacole.com/wp-content/uploads/2021/07/Captura-de-pantalla-de-2021-07-04-20-29-14.png
---
# Google Tag Manager

Google Tag Manager ofrece una variable de capa de datos especial llamada event , que se usa en los procesadores de
eventos JavaScript para iniciar la activación de etiquetas cuando los usuarios interactúan con elementos del sitio web,
como botones.

## Guía de inicio rápido

El fragmento de contenedor de Google Tag Manager es un pequeño fragmento de código con y sin JavaScript que puedes pegar
en tus páginas. Este código permite a Google Tag Manager activar etiquetas insertando gtm.js en la página. Si JavaScript
no está disponible, utilizará un iframe.

### Para implementar Google Tag Manager en tu sitio web, haz lo siguiente:  📋

_Copia el siguiente código JavaScript y pégalo lo más cerca posible de la etiqueta de apertura <head> de todas las
páginas de tu sitio web; sustituye GTM-XXXX por el ID de contenedor:_

```js
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX');</script>
<!-- End Google Tag Manager -->
```

_Copia este fragmento y pégalo inmediatamente después de la etiqueta de apertura <body> de todas las páginas de tu sitio
web; sustituye GTM-XXXX por el ID de contenedor:_

```js
<!-- Google Tag Manager (noscript) -->
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
```

## Mas Informacion

Puedes encontrar mucho más de cómo utilizar este proyecto en

* [Google](https://developers.google.com/tag-manager/quickstart?hl=es) - Informacion Official


---
⌨️ con ❤️ por [MisaelMa](https://github.com/MisaelMa) 😊
