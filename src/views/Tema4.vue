<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Comportamiento espacial
  
      .row.container.justify-content-around.align-items-center
        
        .row
          figure
              img(src='@/assets/curso/temas/img-fondo-lat-der-tema4.png' alt='AvatarTop').img-fondo-lat-der-tema4
        
          .col-lg-6
            .bloque-color-tar1-tema-4
            p.texto-tar1-tema4 El comportamiento espacial se define como la cantidad de espacio que necesita un animal para realizar sus procesos vitales. El espacio es una variable que depende de la temperatura, el tipo de explotación, la edad de los animales y su tipo de especie.

          .col-lg-6
            
            figure
              img(data-aos="fade-left")(src='@/assets/curso/temas/img1-tema4.png' alt='AvatarTop')
      br
      br
      br

      .row.container.justify-content-around.align-items-center

          #comportamiento-espacial-para-bovinos
          .titulo-segundo.color-acento-contenido
            h2 4.1 Comportamiento espacial para bovinos


          p El espacio para criar reses varía de acuerdo a la zona, la precipitación de lluvias, el tipo de alimento suministrado, la edad y el peso del animal. En fincas productoras de Colombia y en producciones extensivas, se varía la cantidad de animales entre 1.5 y 1.8 reses por hectárea, con un rango de peso entre los 430 y 450 Kg. Sin embargo, se ha comprobado que en terrenos tecnificados, se puede hallar entre 3 a 4 animales por hectárea.
          
          .row
          
            .titulo-sexto.color-acento-contenido.texto-titulo-fig6-tema5.mb-3
              h5 Figura 6.
              span <em>Espacio requerido para bovinos en crianza intensiva</em>
            
            .col-lg-12
                figure
                  img(data-aos="fade-left")(src='@/assets/curso/temas/tabla-tema4.png' alt='AvatarTop').img-fig6-tema5
          
          
          p.texto-inf-fig6-tema5 La cantidad de espacio que necesita un pollo de engorde para realizar sus procesos vitales se conoce como densidad de aves, siendo este un espacio de producción y de crianza de aves para explotación avícola.
      br
      br
      br

      .row.container.justify-content-around.align-items-center

          #comportamiento-espacial-para-pollo-de-engorde
          .titulo-segundo.color-acento-contenido
            h2 4.2 Comportamiento espacial para pollo de engorde

          p El espacio ideal para la explotación avícola dependerá del clima y de la edad. En temperaturas altas el rango está entre 6 a 7 animales por metro cuadrado, en climas templados entre 8 a 9 animales y, en condiciones de frío máximo, 10 animales por metro cuadrado. En la siguiente tabla se evidencia la densidad de aves según la edad.

          
          .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 7.
              span <em>Densidad de pollos según la edad.</em>

          .row.bloque-comp-pollo-engorde


            .col-lg-6
                figure
                  img(src='@/assets/curso/temas/tabla-comp-pollo-engorde.png' alt='AvatarTop')
            .col-lg-6
                figure
                  img(data-aos="fade-left")(src='@/assets/curso/temas/img-comp-pollo-engorde.png' alt='AvatarTop').img-comp-pollo-engorde

          p.texto-final-comp-pollo-engorde El espacio requerido por las gallinas para realizar sus procesos vitales y para poner huevos acorde a la producción o comercialización esperada, a lo anterior se le conoce como densidad de aves, bien sea en jaula o en espacios abiertos.

      br
      br
      br
      br

      .row.container.justify-content-around.align-items-center

          #comportamiento-espacial-para-gallinas-ponedoras
          .titulo-segundo.color-acento-contenido
            h2 4.3 Comportamiento espacial para gallinas ponedoras

          p El espacio ideal para la explotación avícola dependerá del clima y de la edad. En temperaturas altas el rango está entre 6 a 7 animales por metro cuadrado, en climas templados entre 8 a 9 animales y, en condiciones de frío máximo, 10 animales por metro cuadrado. En la siguiente tabla se evidencia la densidad de aves según la edad.
          
          .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 8.
              span <em>Densidad de pollos según la edad.</em>

          .row.bloque-comp-pollo-engorde


            .col-lg-6
                figure
                  img(src='@/assets/curso/temas/tabla-gallinas-ponedoras.png' alt='AvatarTop').img-tabla-gallinas-ponedoras
            .col-lg-6
                figure
                  img(data-aos="fade-left")(src='@/assets/curso/temas/img-gallinas-ponedoras.png' alt='AvatarTop').img-gallinas-ponedoras

          p.texto-final-comp-pollo-engorde Ahora veremos cómo es el comportamiento espacial de los porcinos, concebido este como el espacio vital que los cerdos requieren para su desarrollo animal.

      br
      br
      br
      br

      .row.container.justify-content-around.align-items-center

          #comportamiento-espacial-para-porcinos
          .titulo-segundo.color-acento-contenido
            h2 4.4 Comportamiento espacial para porcinos
          
          br

          p Los cerdos requieren de gran espacio para su buen desarrollo y, dependiendo de la etapa en la que se encuentren, su área variará. A continuación, encontrará una tabla que muestra el área requerida dependiendo de la edad y el peso del cerdo.

          .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 9.
              span <em>Áreas de acuerdo con la edad y peso de los cerdos</em>


          .row.bloque-comp-pollo-engorde



            .col-lg-7
                figure
                  img(src='@/assets/curso/temas/img-tabla-comport-cerdos.png' alt='AvatarTop').img-tabla-comp-cerdos
            .col-lg-5
                figure
                  img(data-aos="fade-left")(src='@/assets/curso/temas/img-comportamiento-cerdos.png' alt='AvatarTop').img-comp-cerdos

          p.texto-final-comp-pollo-engorde Así como se adecuan espacios para el bienestar y desarrollo de los animales, es importante conocer cuáles de sus etapas productivas requieren habitar de estos lugares, prestando especial atención a sus ciclos productivos.


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
