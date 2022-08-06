import { CHANGE_THEME } from "../types"

const initialState =   {
    _id: "62dcf9f46a4b4316125eb273",
    name: "Deep Forests",
    imageUrl: "http://res.cloudinary.com/syphhy/image/upload/v1658649076/tl7hmnq7d9mj0vnvyhtp.jpg",
    color_vl: "#4BB895",
    color_l: "#2F7369",
    color_md: "#214B4E",
    color_ldark: "#1B363C",
    color_dark: "#0D1F28",
    color_vdark: "#09151F",
    text_color: "#FEFEFE",
    autor_image: "Nele-Diel",
    createdAt: "2022-07-24T07:51:16.466Z",
    updatedAt: "2022-07-24T07:51:16.466Z",
    link_image: "https://www.deviantart.com/nele-diel/art/Deep-Forests-698759283",
    link_gif: "https://res.cloudinary.com/syphhy/image/upload/v1658883939/zeldabotw_vnlkmk.gif"
}

export default function themeActiveReducer(state = initialState, action) {
    switch(action.type){
        case CHANGE_THEME:
            return action.payload
        default:
            return state
    }
};