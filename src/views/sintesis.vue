<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  //(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-titulo-sexto
      h4.texto-titulo-sintesis Manejo de la producción agroecológica
      p.texto-titulo-sintesis Síntesis: CF6 Instalaciones pecuarias y bienestar animal.
    
    br
    
    p Este componente brindó información acerca de cómo deben vivir los animales desde su nacimiento hasta su descarte o sacrificio, siendo importante recordar que necesitan de un comportamiento espacial según la especie que determina la cantidad de animales que serán estabulados en un área determinada. Igualmente, se deben tener claras las etapas productivas, estas determinan qué se va a producir y cómo se va a hacer. Por último, es fundamental realizar procesos de limpieza, desinfección y esterilización para evitar la proliferación de agentes patógenos.
    p A continuación, en el siguiente mapa conceptual, encontrará un resumen de lo visto en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/img-sintesis.png", alt="alt").imgagen-sintesis
      .col-auto.bloque-anexo
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
