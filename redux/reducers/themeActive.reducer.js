import { CHANGE_THEME } from "../types"

const initialState = {
    autor_image: "Erisiar",
    color_dark: "#3B2942",
    color_l: "#AC7CC0",
    color_ldark: "#4A3D6E",
    color_md: "#84558F",
    color_vdark: "#2A1F49",
    color_vl: "#D08CB1",
    createdAt: "2022-07-24T07:58:13.630Z",
    imageUrl: "http://res.cloudinary.com/syphhy/image/upload/v1658649493/p5mjon3ojdcqem7tajxf.jpg",
    link_image: "https://www.deviantart.com/erisiar/art/Lillia-859185613",
    link_gif: "https://res.cloudinary.com/syphhy/image/upload/v1658883977/pink_jeuwr3.gif",
    name: "Pink Horizon",
    text_color: "#FEFEFE",
    updatedAt: "2022-07-24T07:58:13.630Z",
    _id: "62dcfb954fb12a7fd542dd61"
}

export default function themeActiveReducer(state = initialState, action) {
    switch(action.type){
        case CHANGE_THEME:
            return action.payload
        default:
            return state
    }
};