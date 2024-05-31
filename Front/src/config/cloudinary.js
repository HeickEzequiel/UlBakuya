import {Cloudinary} from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { max } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";


  const cld = new Cloudinary({
    cloud: {
        cloudName: 'damoqjwmk',
        api_key: '149737314917288', 
        api_secret: 'EQ6hiwZPwhRqpnunxlhQYv1dTXo'
    },
});

const imagen1 = cld.image("ulbakuya/abswbci8ml7lmczujjii")
const imagen2 = cld.image("ulbakuya/gcsdjecrcflpzihhvar2")
const imagen3 = cld.image("ulbakuya/gts0guemj7fgbw2uago3")
const imagen4 = cld.image("ulbakuya/msyyvjzk6funrlfrvtrn")

export const img1 = imagen1.resize(fill().width(1920).height(700))
export const img2 = imagen2.resize(fill().width(1920).height(700))
export const img3 = imagen3.resize(fill().width(1920).height(700))
export const img4 = imagen4.resize(fill().width(1920).height(700))

const xx = cld.image("redes/x")
const insta = cld.image("redes/instagram")
const faceb = cld.image("redes/facebook")
const tikt = cld.image("redes/tiktok")

export const x = xx.resize(fill().width(200).height(200))
export const instagram = insta.resize(fill().width(200).height(200))
export const facebook = faceb.resize(fill().width(200).height(200))
export const tiktok = tikt.resize(fill().width(200).height(200))

const gral = cld.image("ulbakuya/Choi")

export const choi = gral.resize(fill().width(150).height(200))