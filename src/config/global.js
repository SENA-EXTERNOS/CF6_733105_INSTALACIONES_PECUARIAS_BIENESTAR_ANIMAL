export default {
  global: {
    componenteFormativo: 'Instalaciones pecuarias y bienestar animal',
    descripcionCurso:
      'El objetivo de este componente es comprender,  la producción animal agroecológica, estudiando y evaluando los conceptos de alojamiento de las especies pecuarias, como sus tipos y condiciones de seguridad y habitabilidad, ubicación, orientación, áreas, dimensiones, instalaciones, capacidad instalada, materiales de construcción, equipos, etc.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal1.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/imagen-pcincipal-circulo.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Principios de ganadería agroecológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ganadería ecológica',
            hash: 'ganadería-ecologica',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Agricultura alternativa para la producción ganadera',
            hash: 'agricultura-alternativa-para-la-produccion-ganadera',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Labores de producción alternativa',
            hash: 'labores-de-produccion-alternativa',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Bienestar animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Buenas prácticas pecuarias',
            hash: 'buenas-practicas-pecuarias',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Sanidad animal y bioseguridad',
            hash: 'Sanidad-animal-y-bioseguridad',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estructuras para la sanidad animal',
            hash: 'labores-de-produccion-alternativa',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Alojamiento de las especies pecuarias de interés zootécnico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Instalaciones para bovinos',
            hash: 'Instalaciones-para-bovinos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Instalaciones para porcinos',
            hash: 'instalaciones-para-porcinos',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Comportamiento espacial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Comportamiento espacial para bovinos',
            hash: 'Instalaciones-para-bovinos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Comportamiento espacial para pollo de engorde',
            hash: 'comportamiento-espacial-para-pollo-de-engorde',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Comportamiento espacial para gallinas ponedoras',
            hash: 'comportamiento-espacial-para-gallinas-ponedoras',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Comportamiento espacial para porcinos',
            hash: 'comportamiento-espacial-para-porcinos',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Etapas productivas de las especies pecuarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Ciclo productivo en ganadería',
            hash: 'Instalaciones-para-bovinos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Ciclo productivo de los porcinos',
            hash: 'instalaciones-para-porcinos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Ciclo productivo para las aves',
            hash: 'ciclo-productivo-para-las-aves',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Equipos, insumos y herramientas de manejo animal.',
            hash: 'equipos-insumos-y-herramientas-de-manejo-animal',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Factores climáticos',
            hash: 'factores-climaticos',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Conceptos de limpieza',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Bienestar animal: “concepto y fundamentos”',
      referencia:
        'Torres, M,G., y Peralta J,J. (2021) Bienestar animal: concepto y fundamento. Universidad Autónoma del Estado de Hidalgo.',
      tipo: 'Artículo',
      link: 'https://repository.uaeh.edu.mx/bitstream/handle/123456789/19918',
    },
    {
      tema: 'Buenas prácticas pecuarias (BPP)',
      referencia:
        'Coasgrop. (2021). Buenas prácticas pecuarias (BPP) [Vídeo]. YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/cN6lFxETmr8',
    },
    {
      tema:
        'Manejar alojamientos de infraestructura en el componente pecuario, con criterios técnicos y ecológicos y de bienestar animal',
      referencia:
        'García, A., y Patiño, E. (s.f.) Guía 7: Pecuarias. Servicio Nacional de Aprendizaje.',
      tipo: 'Otro',
      link: 'https://www.webcolegios.com/file/c90ff8.pdf',
    },
    {
      tema: 'Principios de la ganadería agroecológica',
      referencia:
        'Ecología Verde. (2018). ¿Qué es la agroecología? [Video]. YouTube. ',
      tipo: 'video',
      link: 'https://youtu.be/NJ1CBZ34WyQ',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'estado físico y mental de un animal en relación con las condiciones en las que vive y muere.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'parte de la biología que estudia el uso seguro de los recursos biológicos y genéticos',
    },
    {
      termino: 'Buenas prácticas',
      significado:
        'conjunto coherente de acciones que han rendido bien o que, incluso, han prestado un excelente servicio en un contexto determinado. ',
    },
    {
      termino: 'Control biológico',
      significado:
        'se basa en la suelta de enemigos naturales con el objetivo de controlar los organismos que causen daño en el cultivo.',
    },
    {
      termino: 'Etapas productivas',
      significado:
        'conjunto de tareas y procedimientos requeridos realizados por una empresa, para efectuar la elaboración de bienes y servicios.',
    },
    {
      termino: 'Factores climáticos',
      significado: 'elementos del clima que causan efecto sobre algo.',
    },
    {
      termino: 'Plan sanitario',
      significado:
        'técnicas aplicadas, con criterio y habilidad, en cada paso del proceso productivo.',
    },
    {
      termino: 'Producción',
      significado:
        'actividad que aporta valor agregado por creación y suministro de bienes y servicios.',
    },
    {
      termino: 'Sanidad animal',
      significado: 'tareas de seguimiento y vigilancia de enfermedades.',
    },
    {
      termino: 'Semillas orgánicas',
      significado:
        'son aquellas semillas que no han sido tratadas químicamente, ni modificadas genéticamente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cardona, A., Henao, S., Jiménez, H., Mejía, G., Muñoz, F., Naranjo, J., Palomino, P., Ramírez, R., Ruiz, J., & Úsuga, A. (2018). <em>Implementación de buenas prácticas ganaderas: principios básicos.</em> Universidad CES.',
      link:
        'https://repository.ces.edu.co/bitstream/handle/10946/3585/Implemetaci%F3n-de-Buenas-Pr%E1cticas-Ganaderas-principios-b%E1sicos.pdf;jsessionid=001849FA9CBB8A7D4CACEAF2CD4E5E52?sequence=1',
    },
    {
      referencia:
        'Decreto 1500 de 2007. [Ministerio de Protección Social]. Por el cual se establece el reglamento técnico a través del cual se crea el Sistema Oficial de Inspección, Vigilancia y Control de la Carne, Productos Cárnicos Comestibles y Derivados Cárnicos Destinados para el Consumo Humano. Mayo 4 de 2007.',
      link:
        'https://corponarino.gov.co/expedientes/juridica/2007decreto1500.pdf',
    },
    {
      referencia:
        ' Fedegan. (s.f.). <em>Buenas prácticas ganaderas. Fedegan.</em>',
      link: 'https://www.fedegan.org.co/programas/buenas-practicas-ganaderas',
    },
    {
      referencia:
        'Palomino, P. (2018). Las buenas prácticas ganaderas para el mejoramiento de la productividad. <em>Medicina Veterinaria y Zootécnica,</em> 13(2), p. 101.',
      link: 'https://revistas.ces.edu.co/index.php/mvz/article/view/4749/2919',
    },
    {
      referencia:
        'Parés, R. (2018). <em>La importancia de la limpieza y desinfección en instalaciones ganaderas. Revista ganadería.</em> ',
      link:
        'http://www.revistaganaderia.com/instalaciones/instalaciones/la-importancia-de-la-limpieza-y-desinfeccion-en-instalaciones-ganaderas_9914_113_12335_0_1_in.html',
    },
    {
      referencia:
        'Resolución 889 de 2003. [Instituto Colombiano Agropecuario]. Por la cual se establecen requisitos sanitarios para las fincas que produzcan bovinos, ovinos, caprinos y bubalinos para sacrificio con destino a la exportación. Abril 10 de 2003. ',
      link:
        'https://www.ica.gov.co/getattachment/85124f70-b64a-4b45-a243-aaae42e4b7c4/889.aspx',
    },
    {
      referencia:
        'Resolución 2341 de 2007. [Instituto Colombiano Agropecuario]. Por la cual se reglamentan las condiciones sanitarias y de inocuidad en la producción primaria de ganado bovino y bufalino destinado al sacrificio para consumo humano. Agosto 23 de 2007. ',
      link:
        'https://www.ica.gov.co/getattachment/0b5de556-cb4a-43a8-a27a-cd9a2064b1ab/2341.aspx',
    },
    {
      referencia:
        'Rodríguez, A. (2019). Limpieza y desinfección, un paso importante en la bioseguridad. <em>Porcicultura,</em> 21(131), p. 32-41.',
      link:
        'https://bmeditores.mx/porcicultura/revistas/septiembre-octubre-2019/',
    },
    {
      referencia:
        'SAG. (2019). <em>Manual de buenas prácticas sobre bienestar animal en sistemas de producción industrial de cerdos.</em> Ministerio de Agricultura Chile.',
      link:
        'https://www.sag.gob.cl/sites/default/files/gbp-ba_produccion_cerdos_mayo-2019.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
