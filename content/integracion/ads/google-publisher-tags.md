# Google Publisher Tags

_Google Publisher Tag (GPT) es una biblioteca de etiquetado de anuncios para Google Ad Manager que se utiliza para crear
solicitudes de anuncios de forma dinámica. Obtiene detalles clave de usted (como el código del bloque de anuncios, el
tamaño del anuncio y la orientación personalizada), crea la solicitud y muestra el anuncio en las páginas web._

Google Publisher Tag (GPT) es una biblioteca de etiquetas de anuncios que permite a los publicadores definir inventario,
iniciar y agrupar solicitudes de anuncios y renderizar la demanda que coincida con los requisitos. GPT toma detalles
clave (como el código del bloque de anuncios, el tamaño del anuncio y los pares clave-valor), compila la solicitud y
muestra el anuncio en páginas web.

Con GPT, puede definir opciones de configuración compartidas, como la orientación a nivel de una página, en lugar de
definir la misma orientación para cada anuncio individual en la página. También puede controlar cómo y cuándo se
realizan las solicitudes de anuncios. Por ejemplo, puede usar la arquitectura de solicitud única para llamar a todos los
anuncios a la vez en el encabezado de su página.
_Para obtener una breve descripción general de GPT, incluidos sus beneficios, funcionalidad básica y características,
visite el Centro de ayuda de Ad Manager ._

## Cómo funciona GPT

Google Publisher Tag se usa para definir espacios publicitarios disponibles en su red. Cuando coloca una etiqueta GPT en
una página, se crea una ruta de comunicación entre el servidor de anuncios y el navegador del usuario. Cuando se
solicita una página que contiene etiquetas GPT, se produce la siguiente secuencia de eventos:

- Se realiza una solicitud del navegador del usuario al servidor de anuncios para gpt.js, el código de etiqueta compilado en JavaScript.

- JavaScript compila y envía una o más solicitudes al servidor de anuncios para los anuncios etiquetados en la página.

- El servidor de anuncios combina los bloques de anuncios y los pares clave-valor contenidos en la solicitud.

- El servidor de anuncios ejecuta una subasta a fin de seleccionar la creatividad que mejor coincida con los requisitos para el bloque de anuncios.

- El servidor de anuncios muestra el anuncio coincidente para la biblioteca JavaScript de GPT.

- La biblioteca JavaScript de GPT renderiza el anuncio en la página.


## Mas Informacion

Puedes encontrar mucho más de cómo utilizar este proyecto en

* [Google](https://support.google.com/admanager/answer/181073?hl=es-419) - Informacion Official

---
⌨️ con ❤️ por [MisaelMa](https://github.com/MisaelMa) 😊
