<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Alojamiento de las especies pecuarias de interés zootécnico

    .row.container.justify-content-around.align-items-center
      
      p Existen otros lugares para el alojamiento de las especies pecuarias, importantes para el manejo de los animales, como se aprecia a continuación.


      .row
        .col-lg-12
            figure
              img(data-aos="fade-left")(src='@/assets/curso/temas/img1-tema3.png' alt='AvatarTop')
    br
    br
    br
    
    .row.container.justify-content-around.align-items-center

      .tarjeta.p-4
        figure
                img(src='@/assets/curso/temas/img-fondo-slider-tema3.png', alt='Texto que describa la imagen').img-fondo-slider-tema3
        SlyderA(tipo="b")
    
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img1-slider-tema3.png', alt='Texto que describa la imagen').imagenes-slider-tema3
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
                p.texto-slider-tema3 Al diseñar las instalaciones para cualquier especie pecuaria, se debe tomar en consideración el confort y la salud de los animales, la alimentación y la limpieza, como también, las condiciones higiénicas para la producción de los productos de acuerdo a cada especie pecuaria.


          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img2-slider-tema3.png', alt='Texto que describa la imagen').imagenes-slider-tema3
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p.texto-slider-tema3 Durante el día, los niveles de iluminación, natural o artificial, deben ser tales que los animales puedan ver con facilidad. Es importante que los operarios encargados realicen inspecciones a estos niveles.


          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img3-slider-tema3.png', alt='Texto que describa la imagen').imagenes-slider-tema3
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p.texto-slider-tema3 Estas construcciones deben estar libres de bordes cortantes, asegurando que los animales no se hagan daño al momento de realizar algún tipo de movimiento. Igualmente, deben estar hechos de un material que se ajuste a las condiciones económicas del productor y, en lo posible,  se sugiere emplear materiales que están presentes en el predio.

          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img4-slider-tema3.png', alt='Texto que describa la imagen').imagenes-slider-tema3
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p.texto-slider-tema3 Cada instalación pecuaria debe ajustarse a la especie y producción a manejar.


          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6
              figure
                img(src='@/assets/curso/temas/img5-slider-tema3.png', alt='Texto que describa la imagen').imagenes-slider-tema3
                //figcaption Leyenda de la imagen

            .col-md-6.mb-4.mb-md-0
              p.texto-slider-tema3 Existen instalaciones pecuarias importantes para complementar el manejo de los animales, no solo de interés zoonótico, sino para otras labores de manejo de animales, por ejemplo, para la alimentación, la gestación y el ordeño. 

      p.texto-inf-slider-tema3 A continuación, se detallan las instalaciones para los bovinos.
    
    br
    br
    br

    .row.container.justify-content-around.align-items-center
        
        #sanidad-animal-y-bioseguridad
        .titulo-segundo.color-acento-contenido
          h2 3.1 Instalaciones para bovinos
        
        p A continuación, se detallan algunas características a tener en cuenta en las instalaciones pecuarias de bovinos.

        TabsC.color-primario.fondo-tabs-horizontales-tema3
        
          .py-3.py-md-4(titulo="Ubicación")
            .row
              .col-md-6.mb-4.mb-md-0
                //h4 Celebrate your failures 1
                p Se debe ubicar lo más cerca posible a las vías de acceso y a la sala de ordeño para facilitar la salida del producto. Debe contar con buen drenaje y tener la misma orientación de los vientos predominantes, con esto, se evitan las variaciones de temperatura y humedad; generalmente,  la orientación se hace de oriente a occidente.
            
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/imagen1-tabs-tema3.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
          .py-3.py-md-4(titulo="Sala de ordeño")
            .row
              
              .col-md-6
                //h4 Celebrate your failures 2
                p Se sugiere ubicarla en el lugar más tranquilo del predio, así, se evita estrés y no se disminuye producción. Debe contar con sala de espera y una manga al ingreso, los pisos se realizan en materiales como concreto, sin zanjas, para evitar daños en pezuñas y para facilitar limpieza. De igual forma, debe haber separaciones de hierro y contar con iluminación y flujo de agua constante. Estas construcciones son costosas para productores pequeños, por lo cual, ellos pueden emplear un kit de ordeño que disminuya los costos en mano de obra.

              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/imagen2-tabs-tema3.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

          
          .py-3.py-md-4(titulo="Sala de maternidad y sala cunas")
            .row
              .col-md-6
                //h4 Celebrate your failures 2
                p Es el sitio que sirve para alojar a los animales durante los primeros días de vida, aquí se da lugar a la lactancia, por lo que debe contar con buena ventilación.
              
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/imagen3-tabs-tema3.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
          
          .py-3.py-md-4(titulo="Comederos, saladeros y bebederos")
            .row
              .col-md-6
                //h4 Celebrate your failures 2
                p Un comedero es el lugar donde se suministra la comida. Estos implementos deben contar con superficies internas lisas que eviten que el forraje se pegue. Así mismo, debe estar cubierto por un techo en las épocas de lluvia, evitando que el alimento se moje. Los comederos pueden estar elaborados con materiales como concreto o usando materiales que se encuentran dentro del predio como plásticos o maderas. 
          
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/imagen4-tabs-tema3.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
          
          .py-3.py-md-4(titulo="Botalón")
            .row
              .col-md-6
                //h4 Celebrate your failures 2
                p Es un corral de donde se realizan las labores de manejo, marcaje, curaciones, entre otras labores, que facilita el trabajo del operario.
          
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/imagen5-tabs-tema3.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
        P.texto-inf-tabs-vert-tema3 Las instalaciones pecuarias para los porcinos se diferencian de las de los bovinos. A continuación, se aprecian estas diferencias.
    
    br
    separador
    
    .row.container.justify-content-around.align-items-center

        #sanidad-animal-y-bioseguridad
        .titulo-segundo.color-acento-contenido
          h2 3.2 Instalaciones para porcinos
        
        p A continuación, se detallan algunas características a tener en cuenta en las instalaciones pecuarias de porcinos

        .bg--img_03
          .row.justify-content-center.mb-4
            .col-lg-4
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/img-izq-acordeon-tema3.png", alt="alt").img400.m-auto
            .col-lg-8
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-fondo-acordeon-tema3")

                .row(titulo="Orientación")
                  .col-12
                    p.texto-fondo-acordeon-tema3.mb-0 Es importante tener en cuenta la dirección de los vientos para evitar que los malos olores lleguen a la vivienda. La orientación dependerá, también, del clima donde se realice la explotación, por ejemplo, para el clima frío, la cochera debe ir orientada de norte a sur para usar el calor del sol. Por el contrario, en los climas cálidos, la dirección del alojamiento debe ir de oriente a occidente, evitando el exceso de calor. Así mismo, en cuanto a los vientos, la cochera se debe orientar para que estos den en la culata de la construcción.

                .row(titulo="Cimientos")
                  .col-12
                    p.texto-fondo-acordeon-tema3.mb-0 Deben ser sólidos y contar con una buena profundidad, sobre ellos va el peso de las columnas y los muros.

                .row(titulo="Pisos")
                  .col-12
                    p.texto-fondo-acordeon-tema3.mb-0 Se recomienda que sea de concreto, si es en tierra se debe usar cama profunda. Su inclinación mínima debe ser del 3%, esto facilita la limpieza y el drenaje de los corrales. El desnivel debe ir contrario a la postura de los comederos y bebederos para permitir la salida del estiércol sin contaminar.  Por normas de sanidad, cada corral debe contar con un sifón individual.

                .row(titulo="Canales de desagüe")
                  .col-12
                    p.texto-fondo-acordeon-tema3.mb-0 Con pendiente del 3% para facilitar la salida de desperdicios como residuos y materias fecales, de esta forma, son transportados hasta el tanque estercolero.
                
                .row(titulo="Muros y divisiones entre corrales")
                  .col-12
                    p.texto-fondo-acordeon-tema3.mb-0 Deben tener un espesor de 8 a 10 cm, construidos en bloque o ladrillo, a la altura de entre los 1.10 y los 1.30 m. En clima frío, los muros pueden ser más altos para mantener abrigados a los animales.
                
                .row(titulo="Techos")
                  .col-12
                    p.texto-fondo-acordeon-tema3.mb-0 Inclinación para evitar represión de agua, la parte alta de 2.5 a 3 m. y la baja de 2 m todo depende de la ventilación necesaria, por lo menos necesitamos cubrir el 60 % se pueden usar materiales como el zinc, teja de barro, palma, etc.
                
                .row(titulo="Puertas")
                  .col-12
                    p.texto-fondo-acordeon-tema3.mb-0 Que abran hacia afuera, no hacia adentro, su altura puede ser de 80cm, y ser construidas en hierro o madera.
                    
                .row(titulo="Comederos y bebedero")
                  .col-12
                    p.texto-fondo-acordeon-tema3.mb-0 A continuación, en la siguiente infografía, observe cuáles son los requerimientos mínimos para los comederos de los porcinos.
                    
    .row.container.justify-content-around.align-items-center

          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 5. 
            span <em>Requerimientos mínimos en el tamaño del comedero para porcinos</em>

          .row
            .col-lg-12
              
              figure
                  img(src="@/assets/curso/temas/imagen-comedero-cerdos.png", alt="alt").imagen-comedero-cerdos

          p.texto-final-comedero-porcinos Si bien las instalaciones para aves difieren de las de cerdos y bovinos, cumplen con las mismas funciones que ofrecen las demás instalaciones pecuarias. A continuación, se detallan estas instalaciones.
          
    br
    br
    br

    .row.container.justify-content-around.align-items-center
      
      h4 Instalaciones para aves.

      p A continuación, se darán algunas características a tener en cuenta para las instalaciones pecuarias para aves.

      .bg--img_03
          .row.justify-content-center.mb-4
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/img-instalaciones-para-aves.png", alt="alt").img400.m-auto

            .col-lg-8
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-fondo-acordeon-tema3")

                .row(titulo="Ubicación").tar2-acordeon-tema3
                  .col-12
                    p.texto-fondo-acordeon-tema3.mb-0 Para su ubicación se debe tener en cuenta la localización de la vivienda y la dirección de los vientos para evitar los malos olores, el galpón se deberá orientar en la misma dirección de los vientos para evitar afecciones respiratorias en las aves. La temperatura debe estar dentro del rango de los 15 y 20 °C, la humedad relativa es del 50 al 70 % y necesitan de 13 a 14 horas diarias de luz para estimular las aves. Así mismo, requieren suelos con buen drenaje.

                .row(titulo="Dimensiones").tar3-acordeon-tema3
                  .col-12
                    p.texto-fondo-acordeon-tema3.mb-0 Se recomienda un ancho entre 10 a 12 m, si esta medida fuese mayor no habría remoción de aire, aumentando la humedad y la temperatura. La altura en las paredes laterales debe ser de 2,75 m y, la parte central, de 3 m para climas fríos y de 4.5m en las paredes laterales y 5m en el centro, para climas cálidos.

                .row(titulo="Paredes").tar4-acordeon-tema3
                  .col-12
                    p.texto-fondo-acordeon-tema3.mb-0 Las culatas frontales serán de ladrillo o bloque para resistir la presión de los vientos, también, deben medir de 2.75 a 3.25 m. Las paredes posteriores en clima cálido tendrán 40 cm y en el clima 80 cm.

                .row(titulo="Área para insumos").tar5-acordeon-tema3
                  .col-12
                    p.texto-fondo-acordeon-tema3.mb-0 Cada galpón necesita un área de almacenamiento, sobre todo, para el alimento y las provisiones que deben ser, mínimo, para 8 días.
      
      p.texto-final-tema3 Según cada especie, se requieren unas condiciones especiales a tener en cuenta para el bienestar y la reproducción de los animales. A continuación, se describen estas condiciones.


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
