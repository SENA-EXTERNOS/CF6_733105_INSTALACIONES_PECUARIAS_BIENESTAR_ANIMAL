<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.justify-content-around.align-items-center
    
      .col-md.col-lg-12
      
        p Apreciado aprendiz, bienvenido a este componente formativo, donde podrá apropiarse de información clave sobre las instalaciones pecuarias y de bienestar animal, para el manejo de la producción agroecológica. El objetivo de este componente es comprender la producción animal desde una perspectiva agroecológica, estudiando y evaluando tanto, los conceptos de alojamiento de las especies pecuarias, como los materiales para su construcción, equipos y herramientas para el manejo de los animales. Todo esto, considerando las condiciones particulares de cada predio y de la especie a levantar.
        p Así mismo, se abordarán temáticas referentes a los tipos de alojamientos según la especie, condiciones de seguridad, sanidad animal y habitabilidad por densidad de animales.
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.


    .row.tarjeta.tarjeta--blanca.p-2.p-md-3.mb-5

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p A continuación, encontrará los principios de la ganadería ecológica, práctica fundamental en los sistemas agroecológicos que posee un componente pecuario.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
