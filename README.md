# news
Proyecto final Lenguaje de Marcas


Especificaciones técnicas del proyecto:

Especificacions del client:

La maquetació (layer design) ha de deixar 300 px d'espai a la dreta de la pantalla per publicitat si la pantalla és suficientment ample. Tot altre diseny és lliure.
Per dispositius mòbils, la publicitat anirá fixada a la part inferior o bé només es mostrará a la part superior (i desapareixerà en fer scroll) amb un alt de 90px. Pots triar l'opció. Tot altre diseny és lliure.
Les dades són: títol (entorn a 8 paraules), imgbig (url al json, imatge a la carpeta), imgmid (url al json, imatge a la carpeta), descripció (mínim de 300 caràcters), data i hora (datetime).
Totes les notícies han de tenir el mateix format i mostrar les dades especificades de forma elegant a tot dispositiu.
Tasques:

Realitza la maquetació del projecte. Entrega un breu document amb l'análisi i la planificació al README.md (valen fotos d'esquemes del quadern).
(fins a 2 punts)
Presenta news.html amb 3 notícies (ja escrites al html, no carregar amb js) i emmagatzema 6 noticies més en dos fitxers, data/1.json data/2.json per ser carregades amb js.
(fins a 2 punts)
Codifica news.js en jQuery per fer: "botó carregar més notícies" i "scroll bottom" que, en ser activat qualsevol d'ells, faci una càrrega i presentació de més dades (fins a dues vegades 1.json, 2.json)
(fins a 1 punt)
Inclou rss.xml (especificat al tema 6)
(fins a 1 punt)
Codifica news1.html i news2.html, pàgines que corresponen a les dues primeres noticies (darreres publicades). Quan feim clic a la notícia 1 de news.html ens va a news1.html, quan feim clic a la notícia 2 de news.html ens va a news2.html (seguir no té sentit, aquesta tasca s'automatitza amb codi de servidor).
(fins a 1 punt)
La plantilla o pàgina de veure una sola notícia news1.html (news2.html és idèntica) ha de contenir una imatge i un vídeo de youtube responsive. 
(fins a 1 punt)
Cada pàgina ha de contenir les etiquetes meta (amb open graph) per compartir títol, descripció, imatge (gran), nom de l'aplicació i url de la pàgina. 
(fins a 1 punt)
Fins a + 2 punts: acabat final (o dit d'un altra forma: complir les especificacions del client o donar solucions elegants alternatives)




Idea principal:
Adjunto la idea principal solicitada por el cliente

![alt text](https://rawgit.com/jemys89/news/master/news/img/imagenReadme.jpg)

¿De que trata el proyecto?

Página de noticias en la cual hay que dejar predefinidas 3 noticias en el html, y al hacer "scroll" tienen que cargarse 3 noticias más a través de JSON y JQuery, mínimo se tiene que poder hacer 2 veces scroll. Tienen que poder abrirse las dos primeras noticias en otra plantilla, la cual tiene que ser la misma plantilla.




V1 Añadido twitter debajo de la publicidad.

V2 Añadido banner de patrocinadores en el pie de la página.

v3 Añadidos Recursos en el footer enlaces en los cuales he recolectado las noticias.

v4 Cambiada imagen del header en vez de 200 px de alto por una de 150 px

v5 Cambiada la imagen de la publicidad en la versión movil por un gif de apuestas deportivas.

v6 Se le han añadido lineas con sobras justo encima de cada noticia.

v7 Se le ha quitado el widget de "EL PAÍS" por problemas técnicos al cargar la página.

v8 Añadidos iconos iteractivos en el footer (facebook, twitter, google y youtube)

v9 Añadido botón de de facebook con contador de noticias compartidas en las páginas news1 y news2 







