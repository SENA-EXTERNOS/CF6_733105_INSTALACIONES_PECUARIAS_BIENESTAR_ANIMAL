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

          
          h2 Comportamiento espacial para bovinos


          p El espacio para criar reses varía de acuerdo a la zona, la precipitación de lluvias, el tipo de alimento suministrado, la edad y el peso del animal. En fincas productoras de Colombia y en producciones extensivas, se varía la cantidad de animales entre 1.5 y 1.8 reses por hectárea, con un rango de peso entre los 430 y 450 Kg. Sin embargo, se ha comprobado que en terrenos tecnificados, se puede hallar entre 3 a 4 animales por hectárea.
          p Analice la siguiente tabla y conozca los requerimientos básicos para el manejo del espacio en la crianza intensiva de bovinos:
          
          .row
          
            .titulo-sexto.color-acento-contenido.texto-titulo-fig6-tema5.mb-3
              h5 Tabla 1
              p.mb-0 
                em Espacio requerido para bovinos en crianza intensiva
            
            .col-lg-12
                figure
                  img(data-aos="fade-left")(src='@/assets/curso/temas/tabla-tema4.png' alt='AvatarTop').img-fig6-tema5
          
          
         
      br
      br
      br

      .row.container.justify-content-around.align-items-center

          h2 Comportamiento espacial para pollo de engorde

          p El espacio ideal para la explotación avícola dependerá del clima y de la edad. En temperaturas altas, el rango está entre 6 a 7 animales por metro cuadrado; en climas templados, entre 8 a 9 animales y, en condiciones de frío máximo, 10 animales por metro cuadrado. En la siguiente tabla se evidencia la densidad de aves, según su edad:

          
          .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 2
              p.mb-0 
                em Densidad de pollos según la edad

          .row.bloque-comp-pollo-engorde


            .col-lg-6
                figure
                  img(src='@/assets/curso/temas/tabla-comp-pollo-engorde.png' alt='AvatarTop')
            .col-lg-6
                figure
                  img(data-aos="fade-left")(src='@/assets/curso/temas/img-comp-pollo-engorde.png' alt='AvatarTop').img-comp-pollo-engorde

          p.texto-final-comp-pollo-engorde El espacio requerido por las gallinas para realizar sus procesos vitales y para poner huevos, debe ser acorde con la producción o comercialización esperada; a esto se le conoce como densidad de aves, bien sea en jaula o en espacios abiertos.

      br
      br
      br
      br

      .row.container.justify-content-around.align-items-center

          h2 Comportamiento espacial para gallinas ponedoras

          p El espacio ideal para la explotación avícola dependerá del clima y de la edad. En temperaturas altas, el rango está entre 6 a 7 animales por metro cuadrado, en climas templados entre 8 a 9 animales y, en condiciones de frío máximo, 10 animales por metro cuadrado. En la siguiente tabla se evidencia la densidad de aves, según su edad:
          
          .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 3
              p.mb-0 
                em Densidad de gallinas según la etapa

          .row.bloque-comp-pollo-engorde


            .col-lg-7
                figure
                  img(src='@/assets/curso/temas/tabla-gallinas-ponedoras.png' alt='AvatarTop').img-tabla-gallinas-ponedoras
            .col-lg-5
                figure
                  img(data-aos="fade-left")(src='@/assets/curso/temas/img-gallinas-ponedoras.png' alt='AvatarTop').img-gallinas-ponedoras

          p.texto-final-comp-pollo-engorde La cantidad de espacio que necesita un pollo de engorde para realizar sus procesos vitales, se conoce como densidad de aves, siendo este un espacio de producción y de crianza de aves para explotación avícola. 

      br
      br
      br
      br

      .row.container.justify-content-around.align-items-center

          h2 Comportamiento espacial para porcinos
          
          br

          p Los cerdos requieren de gran espacio para su buen desarrollo y, dependiendo de la etapa en la que se encuentren, su área variará. A continuación, encontrará una tabla que muestra el área requerida dependiendo de la edad y el peso del cerdo:


          .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 4
              p.mb-0 
                em Áreas de acuerdo con la edad y peso de los cerdos


          .row.bloque-comp-pollo-engorde



            .col-lg-7
                figure
                  img(src='@/assets/curso/temas/img-tabla-comport-cerdos.png' alt='AvatarTop').img-tabla-comp-cerdos
            .col-lg-5
                figure
                  img(data-aos="fade-left")(src='@/assets/curso/temas/img-comportamiento-cerdos.png' alt='AvatarTop').img-comp-cerdos

          p.texto-final-comp-pollo-engorde Así como se adecuan espacios para el bienestar y desarrollo de los animales, es importante conocer en cuáles de sus etapas productivas requieren habitar estos lugares, prestando especial atención a sus ciclos productivos.


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
