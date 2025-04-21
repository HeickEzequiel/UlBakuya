import { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET_KEY } from "../../utils/keys";
import {Cloudinary} from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";



  const cld = new Cloudinary({
    cloud: {
        cloudName: CLOUD_NAME,
        api_key: CLOUD_API_KEY, 
        api_secret: CLOUD_API_SECRET_KEY
    },
});


const imagen2 = cld.image("ulbakuya/gcsdjecrcflpzihhvar2")
const imagen3 = cld.image("ulbakuya/torneo")
const imagen4 = cld.image("ulbakuya/clase")
const imagen5 = cld.image("ulbakuya/curso")
const imagen6 = cld.image("ulbakuya/grupalclase1")
const imagen7 = cld.image("ulbakuya/clase2")
const fondo = cld.image("ulbakuya/fondo")


export const fondoverdeazul = fondo.resize(fill().width(1920).height(700))
export const img2 = imagen2.resize(fill().width(1920).height(700))
export const img3 = imagen3.resize(fill().width(1920).height(700))
export const img4 = imagen4.resize(fill().width(1920).height(700))
export const img5 = imagen5.resize(fill().width(1920).height(700))
export const img6 = imagen6.resize(fill().width(1920).height(700))
export const img7 = imagen7.resize(fill().width(1920).height(700))


const xx = cld.image("redes/x")
const insta = cld.image("redes/instagram")
const faceb = cld.image("redes/facebook")
const tikt = cld.image("redes/tiktok")

export const x = xx.resize(fill().width(200).height(200))
export const instagram = insta.resize(fill().width(200).height(200))
export const facebook = faceb.resize(fill().width(200).height(200))
export const tiktok = tikt.resize(fill().width(200).height(200))


const ariel = cld.image("ulbakuya/ariel")
export const farias = ariel.resize(fill().width(150).height(200))

const escariel = cld.image('ulbakuya/ubkcolor')
const escdiego = cld.image('ulbakuya/pilsung')
const escleo = cld.image('ulbakuya/gyeomson')
const escromi = cld.image('ulbakuya/ubuntu2')

export const ubk = escariel.resize(fill().width(300).height(300)) 
export const pilsung = escdiego.resize(fill().width(300).height(300))
export const gyeomson = escleo.resize(fill().width(300).height(300))
export const ubuntu = escromi.resize(fill().width(300).height(300))

const siluetaSalto = cld.image('ulbakuya/siluetasalto')
const siluetaHombre = cld.image('ulbakuya/siluetahombre')
const siluetamujer = cld.image('ulbakuya/siluetamujer')
const siluets = cld.image('ulbakuya/siluetas')

export const sombraSalto = siluetaSalto.resize(fill().width(300).height(300))
export const sombraHombre = siluetaHombre.resize(fill().width(300).height(300))
export const sombraMujer = siluetamujer.resize(fill().width(300).height(300))
export const siluetas = siluets.resize(fill().width(300).height(300))