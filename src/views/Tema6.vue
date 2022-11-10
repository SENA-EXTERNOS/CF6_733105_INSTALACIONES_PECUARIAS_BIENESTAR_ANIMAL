<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Conceptos de limpieza
      
      .row.container.justify-content-around.align-items-center
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      br
      br
      br
      
      .row.container.justify-content-around.align-items-center
        
        .row

          .col-lg-7
            .texto-tarj-tema1.p-4
              p El manejo de la producción agroecológica como práctica para el bienestar animal, las instalaciones pecuarias para el manejo de especies, según las características de cada una conforme a criterios técnicos y normativas de producción agropecuaria y ecológica, son los principios de la ganadería ecológica de la mano con la agricultura alternativa para la alimentación de animales y personas,  es una fortaleza para suplir las  necesidades de los sistemas productivos, con actividades enfocadas hacia las buenas prácticas acorde lineamientos que el ICA para ser más competitivos y aportar productos cárnicos que valoricen las seguridad alimentaria de los consumidores, así como la rentabilidad de los productores. 
              p Recuerde explorar todos los recursos disponibles en este componente formativo, para ello, diríjase al menú principal en donde encontrará la síntesis, una actividad didáctica, el material complementario, entre otros recursos.


          .col-lg-5
            figure
                img(data-aos="fade-left")(src='@/assets/curso/temas/img-tema6.png' alt='AvatarTop').img-tarj-final-tema6

            

  
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
