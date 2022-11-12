import gibson from '../assets/logosMarcas/gibson.png'
import fender from '../assets/logosMarcas/fender.png'
import cort from '../assets/logosMarcas/cort.png'
import ibanez from '../assets/logosMarcas/ibanez.png'


// img product

import gibsonLesPaul from '../assets/imgProducts/Les Paul Standard 50s Faded.png'
import fenderfenderfloydrose from '../assets/imgProducts/fender floyd rose.png'
import CortVX2VBK from '../assets/imgProducts/Cort VX 2V BK.png'
import IBANEZAZS2200BK from '../assets/imgProducts/IBANEZ AZS2200-BK.png'

export const Data = [

    {
        ID:1,
        name: 'Les Paul Standard 50s Faded',
        price: 3500,
        marca:gibson ,
        modelo: 'les paul',
        imgProduct:gibsonLesPaul,
        descripcion: 'The new Les Paul™ Standard 50s Faded returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson`s Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50s features a satin nitrocellulose lacquer finish that gives it the look and feel of a long-treasured musical companion. It has a solid mahogany body with an AA figured maple top and a rounded 50s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It`s equipped with an ABR-1 Tune-O-Matic bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and gold Top Hat knobs with dial pointers. The open-coil Burstbucker™ 1 (neck) and Burstbucker 2 (bridge) pickups are . . .',
    },
    {
        ID:2,
        name: 'fender floyd rose',
        price: 2000,
        marca:fender,
        modelo: 'stratocaster',
        imgProduct: fenderfenderfloydrose,
        descripcion:'El sonido inspirador de una Stratocaster es uno de los fundamentos de Fender. Con este clásico sonido de agudos campanilleantes, medios pronunciados y bajos robustos, combinados con una articulación cristalina, la Player Stratocaster Floyd Rose HSS está repleta de auténtico estilo y sensación Fender. Está lista para hacer realidad tus ideas musicales, es lo suficientemente versátil para cualquier estilo de música y es la plataforma perfecta para crear tu propio sonido.',
    },
    {
        ID:3,
        name: 'Cort VX 2V BK',
        price: 4000,
        marca:cort,
        modelo: 'Flying V',
        imgProduct:CortVX2VBK,
        descripcion:'Las formas agresivas del cuerpo del VX se complementan con pastillas EMG-HZ y trémolo de bloqueo doble. El VX-2X tiene un mástil reforzado de 5 piezas para mayor resistencia y estabilidad. Pastillas pasivas muy dinámicas con toneladas de salida y un aspecto tradicional de bobina abierta.'
    },
    {
        ID:4,
        name: 'IBANEZ AZS2200-BK',
        price: 3900,
        marca:ibanez,
        modelo: 'telecaster',
        imgProduct:IBANEZAZS2200BK,
        descripcion: 'The Magic Touch-mini™ pickup in the neck position offers iconic tonal clarity for which this style of guitar is known, yet with extra body and articulation. The output level is also carefully configured to perfectly match the bridge pickup. The Alnico II Pro™ Custom pickup in bridge position offers up an ample supply of clarity and twang, while also delivering a nice mid-range bark.',
    }
]