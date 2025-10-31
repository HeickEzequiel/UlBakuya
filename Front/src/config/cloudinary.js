//import { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET_KEY } from "../../utils/keys"; //solo en local
import {Cloudinary} from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";


  const cld = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUD_NAME,
        api_key: import.meta.env.VITE_CLOUD_API_KEY, 
        api_secret: import.meta.env.VITE_SECRET_KEY
    },
});


const imagen2 = cld.image("ulbakuya/474151623_956224553104658_8127790081122476212_n_gzyd7u").toURL()
const imagen3 = cld.image("ulbakuya/20250619_rkmxhh").toURL()
const imagen4 = cld.image("ulbakuya/505179995_4015451208693113_4222451096396355847_n_jjbug6").toURL()
const imagen5 = cld.image("ulbakuya/20250619pilsung_j8dyzb").toURL()
const imagen6 = cld.image("ulbakuya/20250619ubuntu_v96rzg.jpg").toURL()
const imagen7 = cld.image("ulbakuya/IMG_20240714_165813_u69kp3").toURL()
const fondo = cld.image("ulbakuya/fondo").toURL()


export const fondoverdeazul = fondo.resize(fill().width(1920).height(700))
export const img2 = imagen2.resize(fill().width(1920).height(700))
export const img3 = imagen3.resize(fill().width(1920).height(700))
export const img4 = imagen4.resize(fill().width(1920).height(700))
export const img5 = imagen5.resize(fill().width(1920).height(700))
export const img6 = imagen6.resize(fill().width(1920).height(1080))
export const img7 = imagen7.resize(fill().width(1920).height(700))


const xx = cld.image("redes/x").toURL()
const insta = cld.image("redes/instagram").toURL()
const faceb = cld.image("redes/facebook").toURL()
const tikt = cld.image("redes/tiktok").toURL()

export const x = xx.resize(fill().width(200).height(200))
export const instagram = insta.resize(fill().width(200).height(200))
export const facebook = faceb.resize(fill().width(200).height(200))
export const tiktok = tikt.resize(fill().width(200).height(200))


const ariel = cld.image("ulbakuya/ariel").toURL()
export const farias = ariel.resize(fill().width(150).height(200))

const escariel = cld.image('ulbakuya/ubkcolor').toURL()
const escdiego = cld.image('ulbakuya/pilsung').toURL()
const escleo = cld.image('ulbakuya/gyeomson').toURL()
const escromi = cld.image('ulbakuya/ubuntu2').toURL()

export const ubk = escariel.resize(fill().width(300).height(300)) 
export const pilsung = escdiego.resize(fill().width(300).height(300))
export const gyeomson = escleo.resize(fill().width(300).height(300))
export const ubuntu = escromi.resize(fill().width(300).height(300))

const siluetaSalto = cld.image('ulbakuya/siluetasalto').toURL()
const siluetaHombre = cld.image('ulbakuya/siluetahombre').toURL()
const siluetamujer = cld.image('ulbakuya/siluetamujer').toURL()
const siluets = cld.image('ulbakuya/siluetas').toURL()

export const sombraSalto = siluetaSalto.resize(fill().width(300).height(300))
export const sombraHombre = siluetaHombre.resize(fill().width(300).height(300))
export const sombraMujer = siluetamujer.resize(fill().width(300).height(300))
export const siluetas = siluets.resize(fill().width(300).height(300))