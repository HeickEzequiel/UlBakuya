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


const imagen2 = cld.image("ulbakuya/474151623_956224553104658_8127790081122476212_n_gzyd7u").resize(fill().width(1920).height(700)).toURL()
const imagen3 = cld.image("ulbakuya/20250619_rkmxhh").resize(fill().width(1920).height(700)).toURL()
const imagen4 = cld.image("ulbakuya/505179995_4015451208693113_4222451096396355847_n_jjbug6").resize(fill().width(1920).height(700)).toURL()
const imagen5 = cld.image("ulbakuya/20250619pilsung_j8dyzb").resize(fill().width(1920).height(700)).toURL()
const imagen6 = cld.image("ulbakuya/20250619ubuntu_v96rzg.jpg").resize(fill().width(1920).height(1080)).toURL()
const imagen7 = cld.image("ulbakuya/IMG_20240714_165813_u69kp3").resize(fill().width(1920).height(700)).toURL()
const fondo = cld.image("ulbakuya/fondo").resize(fill().width(1920).height(700)).toURL()


export const fondoverdeazul = fondo
export const img2 = imagen2
export const img3 = imagen3
export const img4 = imagen4
export const img5 = imagen5
export const img6 = imagen6
export const img7 = imagen7


const xx = cld.image("redes/x").resize(fill().width(200).height(200)).toURL()
const insta = cld.image("redes/instagram").resize(fill().width(200).height(200)).toURL()
const faceb = cld.image("redes/facebook").resize(fill().width(200).height(200)).toURL()
const tikt = cld.image("redes/tiktok").resize(fill().width(200).height(200)).toURL()

export const x = xx
export const instagram = insta
export const facebook = faceb
export const tiktok = tikt


const ariel = cld.image("ulbakuya/ariel").resize(fill().width(150).height(200)).toURL()
export const farias = ariel

const escariel = cld.image('ulbakuya/ubkcolor').resize(fill().width(300).height(300)).toURL()
const escdiego = cld.image('ulbakuya/pilsung').resize(fill().width(300).height(300)).toURL()
const escleo = cld.image('ulbakuya/gyeomson').resize(fill().width(300).height(300)).toURL()
const escromi = cld.image('ulbakuya/ubuntu2').resize(fill().width(300).height(300)).toURL()

export const ubk = escariel 
export const pilsung = escdiego
export const gyeomson = escleo
export const ubuntu = escromi

const siluetaSalto = cld.image('ulbakuya/siluetasalto').resize(fill().width(300).height(300)).toURL()
const siluetaHombre = cld.image('ulbakuya/siluetahombre').resize(fill().width(300).height(300)).toURL()
const siluetamujer = cld.image('ulbakuya/siluetamujer').resize(fill().width(300).height(300)).toURL()
const siluets = cld.image('ulbakuya/siluetas').resize(fill().width(300).height(300)).toURL()

export const sombraSalto = siluetaSalto
export const sombraHombre = siluetaHombre
export const sombraMujer = siluetamujer
export const siluetas = siluets