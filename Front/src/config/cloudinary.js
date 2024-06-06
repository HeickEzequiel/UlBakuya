import { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET_KEY } from "../../utils/keys";
import {Cloudinary} from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { max } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";


  const cld = new Cloudinary({
    cloud: {
        cloudName: CLOUD_NAME,
        api_key: CLOUD_API_KEY, 
        api_secret: CLOUD_API_SECRET_KEY
    },
});

const imagen1 = cld.image("ulbakuya/abswbci8ml7lmczujjii")
const imagen2 = cld.image("ulbakuya/gcsdjecrcflpzihhvar2")
const imagen3 = cld.image("ulbakuya/torneo")
const imagen4 = cld.image("ulbakuya/clase")
const imagen5 = cld.image("ulbakuya/curso")
const imagen6 = cld.image("ulbakuya/grupalclase1")
const imagen7 = cld.image("ulbakuya/clase2")

export const img1 = imagen1.resize(fill().width(1920).height(700))
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

const gral = cld.image("ulbakuya/Choi")
const ariel = cld.image("ulbakuya/farias")
const escudo = cld.image("ulbakuya/abswbci8ml7lmczujjii")
export const choi = gral.resize(fill().width(150).height(200))
export const farias = ariel.resize(fill().width(150).height(200))
export const logo = escudo.resize(fill().width(300).height(300))