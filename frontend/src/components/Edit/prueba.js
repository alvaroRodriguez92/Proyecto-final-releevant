const infoUser =   {
    user: [
      {
        ID: 14,
        NOMBRE: 'NUEVA MENTE PSICOLOGOS',
        EMAIL: 'info@nuevamentepsicologos.com',
        TLF: '951325269',
        URL: 'nuevamentepsicologos.com',
        DESCRIPCION: 'Gabinete Psicológico',
        PASSWORD: '81dc9bdb52d04dc20036dbd8313ed055',
        FECHA_REG: '2023-05-31T10:15:58.000Z',
        ESTADO: 1
      }
    ],
    address: [
      {
        ID: 2,
        ID_USER: 14,
        LATITUD: '36.7185866',
        LONGITUD: '-4.4338799',
        TIPO_VIA: 'CALLE',
        NOMBRE_VIA: 'ESPERANTO',
        NUMERO: 3,
        URBANIZACION: '',
        BLOQUE: '',
        PISO: 2,
        PUERTA: 'B',
        CP: '29007',
        LOCALIDAD: 'MALAGA',
        PROVINCIA: 'MALAGA',
        PAIS: 'ESPAÑA'
      }
    ],
    images: Array(10) [
      {
        ID: 19,
        ID_USER: 14,
        PATH: '/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/logonuevamente.png',
        IMG_NOMBRE: 'logonuevamente.png',
        TIPO: 1
      }, {
        ID: 20,
        ID_USER: 14,
        PATH: '/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente001.png',
        IMG_NOMBRE: 'nuevamente001.png',
        TIPO: 0
      },
      {
        ID: 21,
        ID_USER: 14,
        PATH: '/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente002.png',
        IMG_NOMBRE: 'nuevamente002.png',
        TIPO: 0
      },
      {
        ID: 22,
        ID_USER: 14,
        PATH: '/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente003.png',
        IMG_NOMBRE: 'nuevamente003.png',
        TIPO: 0
      },
      {
        ID: 23,
        ID_USER: 14,
        PATH: '/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente005.png',
        IMG_NOMBRE: 'nuevamente005.png',
        TIPO: 0
      },
      {
        ID: 24,
        ID_USER: 14,
        PATH: '/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente004.png',
        IMG_NOMBRE: 'nuevamente004.png',
        TIPO: 0
      },
      {
        ID: 25,
        ID_USER: 14,
        PATH: '/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente006.png',
        IMG_NOMBRE: 'nuevamente006.png',
        TIPO: 0
      },
      {
        ID: 26,
        ID_USER: 14,
        PATH: '/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente007.png',
        IMG_NOMBRE: 'nuevamente007.png',
        TIPO: 0
      },
      {
        ID: 27,
        ID_USER: 14,
        PATH: '/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente009.jpeg',
        IMG_NOMBRE: 'nuevamente009.jpeg',
        TIPO: 0
      },
      {
        ID: 28,
        ID_USER: 14,
        PATH: '/Users/Francis-Mac/Desktop/mapas/api/public/imagenes/nuevamente008.jpeg',
        IMG_NOMBRE: 'nuevamente008.jpeg',
        TIPO: 0
      }
      
    ]
  }

  console.log(infoUser.images)

// async function fetchUser(){
//     const response = await fetch("http://localhost:3000/perfil/"+14)
//     const data = await response.json()
//     console.log(data)
//   }

//   fetchUser();