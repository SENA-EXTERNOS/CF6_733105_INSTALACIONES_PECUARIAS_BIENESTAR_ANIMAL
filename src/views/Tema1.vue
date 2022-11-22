<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Principios de ganadería agroecológica
      
    .row.container.justify-content-around.align-items-center

      p Al hablar de producción de ganado agroecológico, se debe enfocar la mirada en el suelo como recurso y factor determinante para la producción del alimento proveniente de animales con gran calidad sanitaria y nutritiva.


      .row 
        .col-lg-12
            .titulo-sexto.color-acento-contenido.subtitulo-fig1-tema1.mb-3
              h5 Figura 1.
              span <em>Ganadería ecológica</em>
            figure
                img(src="@/assets/curso/temas/img1-tema1.png", alt="alt").img1-tema1
      
      //Tarjetas conectadas verticales
      .row.justify-content-center.mb-5.bloque-tarj-conectadas-tema1
        .col-lg-11.position-relative
        
          .crd.crd--avatarHorizontal.fondo-tarj-conectadas-tema1.tarjeta.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/img-prod-agro.tema1.png", alt="alt").img100.imagenes-tarj-conectadas-tema1
              .col
                h5.texto-tarj-conectadas-tema1 Producción agroecológica
                p.texto-tarj-conectadas-tema1 La producción agroecológica busca el equilibrio entre la ganadería y la agricultura, aprovechando recursos renovables del suelo, fuentes de alimento (leguminosas y gramíneas) de la región y material genético libre de agroquímicos. Así mismo, las labores agroecológicas se realizan sin deforestar ni degradar los suelos destinados para la producción, evitando el uso de medicamentos convencionales y aumentando el uso de tratamientos preventivos, de procedencia biológica, que no produzcan efectos dañinos o alteraciones en los ciclos.
 
          .crd.crd--avatarHorizontal.fondo-tarj-conectadas-tema1.tar2-conectadas-tema1.tarjeta.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/img-man-reproductivo-tema1.png", alt="alt").img100.imagenes-tarj-conectadas-tema1
              .col
                h5.texto-tarj-conectadas-tema1 Manejo reproductivo
                p.texto-tarj-conectadas-tema1 Algunas de las recomendaciones a tener en cuenta es la no utilización de hormonas, de urea y de medicamentos que no cuenten certificado su uso; con la excepción de casos de emergencia. Igualmente, con respecto a los animales, solo se permite el manejo reproductivo natural y, en ningún caso, la utilización de métodos de inducción de celo. A su vez, se prohíbe el destete precoz y las mutilaciones, a no ser que sean recomendadas por un médico veterinario.
          .crd.crd--avatarHorizontal.fondo-tarj-conectadas-tema1.tar3-conectadas-tema1.tarjeta.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/img-opt-crecimiento-tema1.png", alt="alt").img100.imagenes-tarj-conectadas-tema1
              .col
                h5.texto-tarj-conectadas-tema1 Optimizar el crecimiento y desarrollo
                p.texto-tarj-conectadas-tema1 La producción agrícola es la práctica por la cual se obtienen productos de buena calidad, económicamente rentables y amigables con el ambiente. Para alcanzar estos objetivos, optimizar el crecimiento, adecaudo desarrollo de los cultivos, se deben tener en cuenta variables climáticas y biológicas, la composición del suelo, la topografía del terreno y la facilidad en la obtención del recurso hídrico.
          .crd.crd--avatarHorizontal.fondo-tarj-conectadas-tema1.tar4-conectadas-tema1.tarjeta.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/img-corr-desa-planta-tema1.png", alt="alt").img100.imagenes-tarj-conectadas-tema1
              .col
                h5.texto-tarj-conectadas-tema1 Correcto desarrollo de la planta
                p.texto-tarj-conectadas-tema1 Sin duda, uno de los retos más grandes es vincular, al campo, la tecnología apropiada y las técnicas de manejo cultural que permitan realizar un uso y manejo adecuado del agua de riego que sea apropiado para el cultivo, que suministre el requerimiento hídrico necesario y que facilite el control y la aplicación del agua. Esto permitirá reducir costos y asegurar el correcto desarrollo de la planta.
          
          .crd.crd--avatarHorizontal.fondo-tarj-conectadas-tema1.tar5-conectadas-tema1.tarjeta.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/img-man-plagas-tema1.png", alt="alt").img100.imagenes-tarj-conectadas-tema1
              .col
                h5.texto-tarj-conectadas-tema1 Manejo de las plagas
                p.texto-tarj-conectadas-tema1 Otro punto a tener en cuenta es el manejo de las plagas, ya que constituyen la principal causa de pérdidas en las plantaciones. Los monitoreos para detectar las enfermedades asociadas a la plaga deben ser constantes, evitar emplear productos químicos para la erradicación de estas, pues su uso debe ser mínimo, preferiblemente nulo, lo que puede ser fácilmente subsanado incorporando, al predio, controladores biológicos como medida acorde a los principios agroecológicos.

          p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam quaerat illum placeat, harum ea facere itaque nobis sequi, incidunt eaque omnis obcaecati mollitia minima cumque adipisci repellendus, quod dolore?
      p.texto-final-tarj1-tema1 La ganadería ecológica busca un equilibrio entre el ambiente, los humanos, las plantas y los animales. A continuación, se presentan algunos aspectos a tener en cuenta.

    separador

    //
    .row.justify-content-center.mb-5.bloque-tarj-conectadas-tema1

        #ganaderia-ecologica
        .titulo-segundo.color-acento-contenido
          h2 1.1  Ganadería ecológica

        p Antes de ampliar los principios de la ganadería ecológica, se presenta, a continuación, un resumen gráfico de lo abordado en la sección anterior. 


          
        .row  
          .col-lg-12
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 2. Ganadería agroecológica
              figure
                  img(src="@/assets/curso/temas/cuadro2-conc-ganaderia-tema1.png", alt="alt").cuadro-conc-ganaderia-tema1
            
        p.texto-final-gan-ecologica Como hemos visto la ganadería ecológica, se asocia con otras agriculturas alternativas, buscando  minimizar los riesgos a la salud de los cultivos y del ambiente, por ello, es importante aplicar este principio sobre el manejo de cultivos para mejorar rendimientos y producción, cuidando, siempre, el ambiente.

    br
    separador
    br

    .row.justify-content-center.mb-5.bloque-tarj-conectadas-tema1

        #agricultura-alternativa-para-la-produccion-ganadera
        .titulo-segundo.color-acento-contenido
          h2 1.2  Agricultura alternativa para la producción ganadera

        .row.color-der-tarj-agricultura-altern
  
          .col-lg-7.mb-5.mb-lg-0
            .texto-tarj-agricultura-altern.p-2
              p En la agricultura alternativa, la preocupación de los productores agropecuarios radica en si es posible producir grandes cantidades de alimentos sanos, naturales y de calidad, sin necesidad de destruir el planeta y sin verse obligados a emplear productos tóxicos como los agroquímicos.
              p La agroecología es una combinación de prácticas, por ejemplo, de producción y reciclaje de productos. Se compone, además, de interrelaciones como labores en el suelo con la planta y los microorganismos, la de los animales con el ser humano o la rotación y asociación de cultivos, lo que lleva a lograr, con éxito, una producción que es amigable con el ambiente y que no causa alteraciones en los ciclos de recursos no renovables. 
              p A continuación, se evidencian algunas labores que se realizan en producciones limpias.
          

          .col-lg-5

              figure
                  img(data-aos="fade-left")(src="@/assets/curso/temas/img-agricultura-alternativa.png", alt="alt").imagen-tarj-agricultura-altern
          
          p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod architecto officiis nisi voluptatibus, natus non! Veniam ad provident suscipit rem quam enim voluptatum dignissimos perspiciatis fuga. Quam laborum vitae nemo.
          p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod architecto officiis nisi voluptatibus, natus non! Veniam ad provident suscipit rem quam enim voluptatum 
     
     
    br
    br
    br

    separador

    br

    .row.container.justify-content-around.align-items-center
        
        figure
              img(src="@/assets/curso/temas/img-fondo-izq-prod-altern-tema1.png", alt="alt").img-fondo-izq-prod-alternativa

        
        #labores-de-produccion-alternativa
        .titulo-segundo.color-acento-contenido
          h2 1.3  Labores de producción alternativa
        
        p Las labores en la producción alternativa asociadas a la ganadería ecológica se encuentran descritas a continuación.

        .row.justify-content-center.mb-5
          .col-lg-5
            figure
              img(src="@/assets/curso/temas/img-der-pasos-verticales-prod-altern-tema1.png", alt="alt").img-izq-prod-alternativa
              
          .col-lg-7
            LineaTiempoD.color-secundario
              p(numero="1" titulo="Compostaje") Transforma desechos animales y vegetales en fertilizantes vivos de alta calidad, para uso del suelo.

              p(numero="2" titulo="Uso de abonos verdes") Aportar materia orgánica para aumentar fertilidad y vida al suelo. 

              p(numero="3" titulo="Rotación de cultivo") Aumenta la biodiversidad y aumenta los nutrientes del suelo, al tiempo que aprovecha las propiedades alelopáticas y evita la acumulación de tóxicos y de extracción de nutrientes.

              p(numero="4" titulo="Asociación de cultivos") Aumenta la biodiversidad y aumenta los nutrientes del suelo, al tiempo que aprovecha las propiedades alelopáticas, evita la acumulación de tóxicos y de extracción de nutrientes, y mantiene cubierto el suelo.

              p(numero="5" titulo="Controles biológicos") Proporciona y mantiene el equilibrio de la biodiversidad, evitando plagas y enfermedades.

              p(numero="6" titulo="Producción propia de semillas orgánicas") Disminuye y elimina el riesgo de emplear semillas genéticamente transformadas.
        
        p El bienestar animal representa uno de los principios más importantes a tener en cuenta en la ganadería ecológica, fundamental al momento de hacer adecuaciones en los sistemas productivos.














      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
