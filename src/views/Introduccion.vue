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
      
        p.p-2 Bienvenido a este componente formativo. A continuación, encontrará información acerca de instalaciones pecuarias y de bienestar animal para el manejo de la producción agroecológica. El objetivo de este componente es comprender la producción animal desde una perspectiva agroecológica, estudiando y evaluando tanto los conceptos de alojamiento de las especies pecuarias, como los materiales para su construcción, equipos y herramientas para el manejo de animales. Todo esto, considerando las condiciones particulares de cada predio y de la especie a levantar.
        p.p-2 Así mismo, se abordarán temáticas referentes a los tipos de alojamientos según la especie, condiciones de seguridad, sanidad animal y habitabilidad por densidad de animales. Para comenzar, le sugerimos observar el siguiente video de introducción.



    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
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
