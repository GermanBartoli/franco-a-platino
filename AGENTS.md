# Guía de franco-a-platino

El sitio se publica directamente desde `public`. El vencimiento del contador sale del atributo `datetime` del elemento `time` en `public/index.html`. `public/contador.js` usa ese valor para cambiar el estado del directo.

Corré `node --check public/contador.js`. Al modificar horarios, probá en una copia local un vencimiento futuro y otro pasado. Verificá el reloj en el primer caso y el texto «Directo finalizado» en el segundo. Conservá las imágenes fuente en `originales`.

Consultá los pasos de publicación en [el flujo de GitHub Actions](.github/workflows/publicar.yml).
