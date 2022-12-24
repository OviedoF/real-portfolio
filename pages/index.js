import ThemeScreen from '../components/config/theme/ThemesScreen';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Home from '../components/home/Home';
import React, { useState, useEffect } from 'react';
import SocialMedia from '../components/home/SocialMedia';
import AboutMeSection from '../components/aboutme/AboutMeSection';
import ProjectsSection from '../components/projects/ProjectsSection';
import ContactSection from '../components/Contact/ContactSection';
import Aos from 'aos';
import "aos/dist/aos.css";
import LanguageScreen from '../components/config/language/LanguageScreen';
import ScrollIndicator from '../components/ScrollIndicator/ScrollIndicator';
import FullScreenLoading from '../components/loading/FullScreenLoading';

const themes = [
  {
    "_id": "62dcf9f46a4b4316125eb273",
    "name": "Deep Forests",
    "imageUrl": "http://res.cloudinary.com/syphhy/image/upload/v1658649076/tl7hmnq7d9mj0vnvyhtp.jpg",
    "color_vl": "#4BB895",
    "color_l": "#2F7369",
    "color_md": "#214B4E",
    "color_ldark": "#1B363C",
    "color_dark": "#0D1F28",
    "color_vdark": "#09151F",
    "text_color": "#FEFEFE",
    "autor_image": "Nele-Diel",
    "createdAt": "2022-07-24T07:51:16.466Z",
    "updatedAt": "2022-07-24T07:51:16.466Z",
    "link_image": "https://www.deviantart.com/nele-diel/art/Deep-Forests-698759283",
    "link_gif": "https://res.cloudinary.com/syphhy/image/upload/v1658883939/zeldabotw_vnlkmk.gif"
  },
  {
    "_id": "62dcfb2c4fb12a7fd542dd5f",
    "name": "Underwater",
    "imageUrl": "http://res.cloudinary.com/syphhy/image/upload/v1658649388/ewojmnhq7s7486i2scra.jpg",
    "color_vl": "#C7F1EC",
    "color_l": "#70F2EA",
    "color_md": "#54C8C7",
    "color_ldark": "#259696",
    "color_dark": "#1C4770",
    "color_vdark": "#172B43",
    "text_color": "#FEFEFE",
    "autor_image": "Himari Art",
    "link_image": "https://www.deviantart.com/himariart0/art/Underwater-View-853195011",
    "createdAt": "2022-07-24T07:56:28.043Z",
    "updatedAt": "2022-07-24T07:56:28.043Z",
    "link_gif": "https://res.cloudinary.com/syphhy/image/upload/v1658883942/waves_rhjgdo.gif"
  },
  {
    "_id": "62dcfb954fb12a7fd542dd61",
    "name": "Pink Horizon",
    "imageUrl": "http://res.cloudinary.com/syphhy/image/upload/v1658649493/p5mjon3ojdcqem7tajxf.jpg",
    "color_vl": "#D08CB1",
    "color_l": "#AC7CC0",
    "color_md": "#84558F",
    "color_ldark": "#4A3D6E",
    "color_dark": "#3B2942",
    "color_vdark": "#2A1F49",
    "text_color": "#FEFEFE",
    "autor_image": "Erisiar",
    "link_image": "https://www.deviantart.com/erisiar/art/Lillia-859185613",
    "createdAt": "2022-07-24T07:58:13.630Z",
    "updatedAt": "2022-07-24T07:58:13.630Z",
    "link_gif": "https://res.cloudinary.com/syphhy/image/upload/v1658883977/pink_jeuwr3.gif"
  },
  {
    "_id": "62dcfc2b4fb12a7fd542dd63",
    "name": "Cat and sunset",
    "imageUrl": "https://res.cloudinary.com/syphhy/image/upload/v1659922704/neko_and_sunset_by_gauravpaints_dfas5iz-fullview_whqrcg.jpg",
    "color_vl": "#F3F3E5",
    "color_l": "#F3B54A",
    "color_md": "#D9A361",
    "color_ldark": "#9B5A4C",
    "color_dark": "#64303F",
    "color_vdark": "#452A3D",
    "text_color": "#FEFEFE",
    "autor_image": "gauravpaints",
    "link_image": "https://www.deviantart.com/gauravpaints/art/Neko-and-sunset-925102331",
    "createdAt": "2022-07-24T08:00:43.303Z",
    "updatedAt": "2022-08-08T01:43:58.242Z",
    "link_gif": "https://res.cloudinary.com/syphhy/image/upload/v1659923006/6eed6c6cdd760b64261a66d0254e48fe_mr2kyk.gif"
  },
  {
    "_id": "62f06b9ed25baea4b855bb7b",
    "name": "Miracle Night",
    "imageUrl": "http://res.cloudinary.com/syphhy/image/upload/v1659923358/nwpmehc2yxh8exndodcu.jpg",
    "color_vl": "#3AC2F3",
    "color_l": "#DB88EF",
    "color_md": "#712CD8",
    "color_ldark": "#3D18BA",
    "color_dark": "#271A9D",
    "color_vdark": "#1005A4",
    "text_color": "#FEFEFE",
    "autor_image": "ryky",
    "link_image": "https://www.deviantart.com/ryky/art/Miracle-Night-914363328",
    "createdAt": "2022-08-08T01:49:18.737Z",
    "updatedAt": "2022-08-08T01:53:40.768Z",
    "link_gif": "https://res.cloudinary.com/syphhy/image/upload/v1659923576/animated-anime_n32xiv.gif"
  },
  {
    "_id": "62f07007d25baea4b855bb85",
    "name": "Route Dream",
    "imageUrl": "http://res.cloudinary.com/syphhy/image/upload/v1659924486/kmum3nwlqhf6sugukkeo.jpg",
    "color_vl": "#9F78C4",
    "color_l": "#E33147",
    "color_md": "#655599",
    "color_ldark": "#8B3168",
    "color_dark": "#292D67",
    "color_vdark": "#3A1A5E",
    "text_color": "#FEFEFE",
    "autor_image": "kvacm",
    "link_image": "https://www.deviantart.com/kvacm/art/Route-Dream-810732654",
    "createdAt": "2022-08-08T02:08:07.478Z",
    "updatedAt": "2022-08-08T02:08:47.596Z",
    "link_gif": "https://res.cloudinary.com/syphhy/image/upload/v1659924479/5b8626bc2bd5a65d22f2278f57e6ee75_s1bres.gif"
  },
  {
    "_id": "62f0712bd25baea4b855bb8e",
    "name": "No Angels",
    "imageUrl": "http://res.cloudinary.com/syphhy/image/upload/v1659924779/kjzuv4yuxrvlqmpyisow.jpg",
    "color_vl": "#FDF2DB",
    "color_l": "#FBDBC0",
    "color_md": "#E7B29E",
    "color_ldark": "#D27D6F",
    "color_dark": "#4C3939",
    "color_vdark": "#363332",
    "text_color": "#FEFEFE",
    "autor_image": "NanoMortis",
    "link_image": "https://www.deviantart.com/nanomortis/art/A-Sky-With-No-Angels-632888847",
    "createdAt": "2022-08-08T02:12:59.808Z",
    "updatedAt": "2022-08-08T02:16:17.682Z",
    "link_gif": "https://res.cloudinary.com/syphhy/image/upload/v1659924959/4fe92e9aa63f037cd667c0c2240af1b7_mmlxcp.gif"
  },
  {
    "_id": "62f0724bd25baea4b855bb93",
    "name": "Tomorrow",
    "imageUrl": "http://res.cloudinary.com/syphhy/image/upload/v1659925066/uy4m8kbcpilsknog8uta.png",
    "color_vl": "#F6EEF5",
    "color_l": "#E9C7BA",
    "color_md": "#9CB4AD",
    "color_ldark": "#918D90",
    "color_dark": "#4A898B",
    "color_vdark": "#464753",
    "text_color": "#FEFEFE",
    "autor_image": "NanoMortis",
    "link_image": "https://www.deviantart.com/nanomortis/art/Tomorrow-Is-a-Better-Day-669496264",
    "createdAt": "2022-08-08T02:17:47.108Z",
    "updatedAt": "2022-08-08T02:20:04.186Z",
    "link_gif": "https://res.cloudinary.com/syphhy/image/upload/v1659925172/aesthetic-art_mnv33f.gif"
  }
]

const projectsPrincipal = [
  {
    "_id": "62e5dd4fd96be0d8d492f826",
    "name": "e-Basquet Commerce",
    "imagesUrls": [
      "https://res.cloudinary.com/syphhy/image/upload/v1659231557/uvwzvrjmkjndvmqls6il.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659231559/doijyk5bfchhtmknm31k.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659231563/d858zgygb373pcvbuwoq.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659231565/cnzbogjcj1c6xd1uhh7s.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659231566/nalzoik4lskbqybsqiqb.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659231567/rpgafcf4pbeddhe9nqnw.png"
    ],
    "description": "An E-Commerce with Login, CRUD (create, read, update, delete) of products and messages for the admin. Based on Nike's basquetball shoes and famous players of many franchises.",
    "tools": [
      "Next.js",
      "Sass",
      "ExpressJS",
      "MongoDB Atlas",
      "Cloudinary"
    ],
    "github_link": "https://github.com/OviedoF/basketcommerce-frontend",
    "deploy_link": "https://basketcommerce.vercel.app/",
    "type": "principal",
    "createdAt": "2022-07-31T01:39:27.153Z",
    "updatedAt": "2022-08-06T02:41:49.706Z",
    "description_es": "Un E-Commerce con Login, CRUD (crear, leer, actualizar, borrar) de productos y mensajes para el administrador. Basado en las zapatillas de basquetbol de Nike y los jugadores famosos de muchas franquicias.",
    "description_en": "An E-Commerce with Login, CRUD (create, read, update, delete) of products and messages for the admin. Based on Nike's basquetball shoes and famous players of many franchises."
  },
  {
    "_id": "62e5e02cd96be0d8d492f828",
    "name": "Alura Geek eCommerce",
    "imagesUrls": [
      "https://res.cloudinary.com/syphhy/image/upload/v1659232285/qn7wicryfkemyj3nlf6j.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659232290/fohpjq78bzf2winwluyv.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659232293/qnareg9l6qsnzh70hqx8.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659232295/bfnvs5azygsasq2zdttb.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659232297/qczanoi8ufmcixwbta8s.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659232300/uupunmpoafpe9ne8qh1z.png"
    ],
    "description": "Another E-Commerce but only Front-End side. It support different categories, a searcher, many languages, contact form and more features what you can discover! :D",
    "tools": [
      "React",
      "Sass",
      "FormSubmit API"
    ],
    "github_link": "https://github.com/OviedoF/alura-ecommerce",
    "deploy_link": "https://oviedof.github.io/alura-ecommerce",
    "type": "principal",
    "createdAt": "2022-07-31T01:51:40.417Z",
    "updatedAt": "2022-08-06T02:43:29.627Z",
    "description_en": "Another E-Commerce but only Front-End side. It support different categories, a searcher, many languages, contact form and more features what you can discover! :D",
    "description_es": "Otro E-Commerce pero solo del lado del Front-End. ¡Soporta diferentes categorías, un buscador, muchos idiomas, formulario de contacto y más características que puedes descubrir! :D"
  },
  {
    "_id": "637976b13c8bce10e3b4c054",
    "name": "OvDev Course",
    "imagesUrls": [
      "https://res.cloudinary.com/syphhy/image/upload/v1668904616/h9voqevhmagtj8n1mflu.jpg",
      "https://res.cloudinary.com/syphhy/image/upload/v1668904617/yjhru6m3zplc8vojz1ca.jpg",
      "https://res.cloudinary.com/syphhy/image/upload/v1668904619/fgbyslhuoysawvtkwtdy.jpg",
      "https://res.cloudinary.com/syphhy/image/upload/v1668904621/zndavr3nvgcv37z5tezc.jpg",
      "https://res.cloudinary.com/syphhy/image/upload/v1668904623/bhj8ugy635bsuxevynmy.jpg",
      "https://res.cloudinary.com/syphhy/image/upload/v1668904625/oficwdj9dyd41pwuhijp.jpg",
      "https://res.cloudinary.com/syphhy/image/upload/v1668904627/prepbqzeheu5osg4k18z.jpg"
    ],
    "tools": [
      "Sass",
      "React",
      "Redux",
      "MarkDown",
      "NodeJS",
      "MongoDB"
    ],
    "github_link": "https://github.com/OviedoF/ovdev-course-frontend",
    "deploy_link": "https://ovdev-course.vercel.app/",
    "type": "principal",
    "description_es": "Una plataformas de cursos dedicada a la enseñanza y a mi utilidad. Donde hay registro de usuarios, historial, favoritos y más cosas a futuro. El uso que le doy es para poder tener mis anotaciones y aprendizaje en una página donde, como administrador, puedo crear archivos MarkDown y utilizarlos para el renderizado :)\r\n",
    "description_en": "A course platform dedicated to teaching and my utility. Where there is user registration, history, favorites and more things to come. The use I give it is to be able to have my annotations and learning on a page where, as an administrator, I can create MarkDown files and use them for rendering :)",
    "createdAt": "2022-11-20T00:37:05.634Z",
    "updatedAt": "2022-11-20T00:37:05.634Z"
  }
]

const projectsSecundario = [
  {
    "_id": "62e5e1e1d96be0d8d492f82a",
    "name": "KittyNotes APP",
    "imagesUrls": [
      "https://res.cloudinary.com/syphhy/image/upload/v1659232725/qbfwzxmqw1yw5qbwn8uf.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659232728/nfnorcmulico4ubru1sm.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659232731/vszjkarbuhwlkoww6kod.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659232734/owh8q5iizpa6zzdiisjr.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659232737/eccsahixetubxd4omo38.png"
    ],
    "description": "Simple Notes APP with login, register and CRUD of the user's notes. This is my first project made in NodeJS.",
    "tools": [
      "NodeJS",
      "ExpressJS",
      "MongoDB Atlas",
      "EJS",
      "CSS",
      "Heroku"
    ],
    "github_link": "https://github.com/OviedoF/KittyNotes",
    "deploy_link": "http://kittynotes-2022.herokuapp.com/notes/add",
    "type": "secundario",
    "createdAt": "2022-07-31T01:58:57.018Z",
    "updatedAt": "2022-08-06T02:45:29.742Z",
    "description_es": "Simple aplicacion de Notas con login, registro y CRUD de las notas del usuario. Este es mi primer proyecto hecho en NodeJS.",
    "description_en": "Simple Notes APP with login, register and CRUD of the user's notes. This is my first project made in NodeJS."
  },
  {
    "_id": "62e5e3bdd96be0d8d492f82c",
    "name": "Veterinarian Single Page",
    "imagesUrls": [
      "https://res.cloudinary.com/syphhy/image/upload/v1659233203/uitildgfwkd8n6kyqmhn.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659233208/is2enoocibwskugsu8je.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659233213/ykrllijtqkpz68m4brle.png"
    ],
    "description": "Landing Page based on a template, i do it in a class of Html & Css.",
    "tools": [
      "Html",
      "Css"
    ],
    "github_link": "https://github.com/OviedoF/veterinarian",
    "deploy_link": "https://oviedof.github.io/veterinarian/",
    "type": "secundario",
    "createdAt": "2022-07-31T02:06:53.205Z",
    "updatedAt": "2022-08-06T02:46:38.362Z",
    "description_es": "Landing Page basada en una plantilla, la hice cuando estaba dando clase de Html y Css.",
    "description_en": "Landing Page based on a template, I made it when I was teaching Html and Css."
  },
  {
    "_id": "62e5e4cfd96be0d8d492f82e",
    "name": "Portfolio Vanilla",
    "imagesUrls": [
      "https://res.cloudinary.com/syphhy/image/upload/v1659233481/yjzdoymcfhm7seyud4of.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659233483/bblfiemmow3574necayg.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659233485/twctjafzidrnb70iybtx.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659233487/tjyeubc1zlntmefvdexm.png"
    ],
    "description": "My first portfolio maded when i learn Html, Css and Javascript. It isn't not actualized.",
    "tools": [
      "Html",
      "Css",
      "Javascript"
    ],
    "github_link": "https://github.com/OviedoF/portfolioVanilla",
    "deploy_link": "https://oviedof.github.io/portfolioVanilla",
    "type": "secundario",
    "createdAt": "2022-07-31T02:11:27.009Z",
    "updatedAt": "2022-08-06T02:48:09.249Z",
    "description_en": "My first portfolio, i made it when i learn Html, Css and Javascript. It isn't not actualized.",
    "description_es": "Mi primer portafolio, lo hice cuando aprendí Html, Css y Javascript. No está actualizado."
  },
  {
    "_id": "62e5e627d96be0d8d492f830",
    "name": "Portfolio React",
    "imagesUrls": [
      "https://res.cloudinary.com/syphhy/image/upload/v1659233824/uag3o5jhfljgebh7v7z2.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659233826/saxcc9lxvby8frk6pjo5.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659233828/vneo2rzuphhicwtdwhob.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659233830/lwn8xco43pwvyqba8hf4.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659233831/zdcitebywdk4v3wmmvww.png"
    ],
    "description": "My second portfolio made for Oracle Next Education.",
    "tools": [
      "React",
      "Sass"
    ],
    "github_link": "https://github.com/OviedoF/alura-portfolio",
    "deploy_link": "https://oviedof.github.io/alura-portfolio/",
    "type": "secundario",
    "createdAt": "2022-07-31T02:17:11.809Z",
    "updatedAt": "2022-08-06T02:49:19.168Z",
    "description_en": "My second portfolio made for Oracle Next Education.",
    "description_es": "Mi segundo portafolio, fue realizado para Oracle Next Education.."
  },
  {
    "_id": "62e5e6b1d96be0d8d492f832",
    "name": "ToDo App",
    "imagesUrls": [
      "https://res.cloudinary.com/syphhy/image/upload/v1659233969/wvhs4apjbotoxaefxq5c.png"
    ],
    "description": "When i learn Javascript LocalStorage and DOM, i do this.",
    "tools": [
      "Html",
      "Css",
      "Javascript"
    ],
    "github_link": "https://github.com/OviedoF/App-de-Tareas",
    "deploy_link": "https://oviedof.github.io/App-de-Tareas/",
    "type": "secundario",
    "createdAt": "2022-07-31T02:19:29.301Z",
    "updatedAt": "2022-08-06T02:51:37.058Z",
    "description_en": "I do a simple ToDo app when i learn Javascript, contains concepts of storage, arrays, objects, json, etc.",
    "description_es": "Hago una sencilla aplicación ToDo cuando aprendo Javascript, contiene conceptos de storage, arrays, objetos, json, etc."
  },
  {
    "_id": "62e5e81ed96be0d8d492f834",
    "name": "Lyrics Finder",
    "imagesUrls": [
      "https://res.cloudinary.com/syphhy/image/upload/v1659234334/gi4z3natw1dcblcelmsi.png"
    ],
    "description": "Lyrics Finder using the AudioDb API. The API not currently work.",
    "tools": [
      "React",
      "TheAudiodb",
      "Sass"
    ],
    "github_link": "https://github.com/OviedoF/lyricsfinder",
    "deploy_link": "https://oviedof.github.io/lyricsfinder/",
    "type": "secundario",
    "createdAt": "2022-07-31T02:25:34.415Z",
    "updatedAt": "2022-08-06T02:52:20.729Z",
    "description_en": "Lyrics Finder using the AudioDb API. The API not currently work.",
    "description_es": "Buscador de letras utilizando la API de AudioDb. La API no funciona actualmente."
  },
  {
    "_id": "62e5e914d96be0d8d492f836",
    "name": "Nostrus Airlines",
    "imagesUrls": [
      "https://res.cloudinary.com/syphhy/image/upload/v1659234569/xzjswei6b1e83o8s1ydf.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659234575/wunvlwio2eicevyyl8qh.png",
      "https://res.cloudinary.com/syphhy/image/upload/v1659234580/k6uovft0ialwuqy7xvjk.png"
    ],
    "description": "Landing Page made following a Youtube's video, my second page.",
    "tools": [
      "Html",
      "Css"
    ],
    "github_link": "https://github.com/OviedoF/NostrusAirlines",
    "deploy_link": "https://oviedof.github.io/NostrusAirlines/",
    "type": "secundario",
    "createdAt": "2022-07-31T02:29:40.763Z",
    "updatedAt": "2022-08-06T02:53:11.610Z",
    "description_en": "Landing Page made following a Youtube video tutorial.",
    "description_es": "Landing Page realizada siguiendo un video tutorial de Youtube."
  }
]

const tecnologies = [
  {
    "_id": "62e836ae2e891aac65765189",
    "name": "Html",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1659385519/rgnlb2zg4knfuwx38ilj.png"
    ],
    "description": "undefined",
    "documentation_link": "https://developer.mozilla.org/es/docs/Web/HTML",
    "type": "frontend",
    "createdAt": "2022-08-01T20:25:18.821Z",
    "updatedAt": "2022-08-02T01:07:58.053Z",
    "color": "#E44F26"
  },
  {
    "_id": "62e837662e891aac6576518c",
    "name": "CSS",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1659385703/ctdsxvh3svpbqg5cvzs5.png"
    ],
    "description": "undefined",
    "documentation_link": "https://developer.mozilla.org/es/docs/Web/CSS",
    "type": "frontend",
    "createdAt": "2022-08-01T20:28:22.989Z",
    "updatedAt": "2022-08-01T20:57:45.596Z",
    "color": "#2196F3"
  },
  {
    "_id": "62e837bb2e891aac6576518f",
    "name": "Javascript",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1659385788/aty5hgejlk5r1fzhov9m.png"
    ],
    "description": "undefined",
    "documentation_link": "https://devdocs.io/javascript/",
    "type": "frontend",
    "createdAt": "2022-08-01T20:29:47.775Z",
    "updatedAt": "2022-08-01T20:58:16.696Z",
    "color": "#D4B830"
  },
  {
    "_id": "62e837f22e891aac65765192",
    "name": "SASS",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1659385843/itsatr9hjjx7oiombx7i.png"
    ],
    "description": "undefined",
    "documentation_link": "https://sass-lang.com/documentation/",
    "type": "frontend",
    "createdAt": "2022-08-01T20:30:42.351Z",
    "updatedAt": "2022-08-01T20:58:49.498Z",
    "color": "#CD6799"
  },
  {
    "_id": "62e8389b2e891aac65765194",
    "name": "React",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1659386012/yrbmoyubx4nuibczgdwn.png"
    ],
    "description": "undefined",
    "documentation_link": "https://es.reactjs.org/",
    "type": "frontend",
    "createdAt": "2022-08-01T20:33:31.380Z",
    "updatedAt": "2022-08-01T20:59:25.406Z",
    "color": "#222222"
  },
  {
    "_id": "62e838e32e891aac65765196",
    "name": "Angular",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1659386084/ryckxo6boijavvv8dpvg.png"
    ],
    "description": "undefined",
    "documentation_link": "https://angular.io/cli",
    "type": "frontend",
    "createdAt": "2022-08-01T20:34:43.463Z",
    "updatedAt": "2022-08-01T20:59:57.217Z",
    "color": "#DD0031"
  },
  {
    "_id": "62e839162e891aac65765198",
    "name": "Bootstrap",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1659386135/djhab5bnaymqfirhm8wg.png"
    ],
    "description": "undefined",
    "documentation_link": "https://getbootstrap.com/",
    "type": "frontend",
    "createdAt": "2022-08-01T20:35:34.864Z",
    "updatedAt": "2022-08-01T21:00:30.458Z",
    "color": "#8612FB"
  },
  {
    "_id": "62e83a2d2e891aac6576519a",
    "name": "Next.JS",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1659386413/lqn6tz6wkskfp0j8dksv.png"
    ],
    "description": "undefined",
    "documentation_link": "https://nextjs.org/",
    "type": "frontend",
    "createdAt": "2022-08-01T20:40:13.144Z",
    "updatedAt": "2022-08-01T21:00:52.555Z",
    "color": "#000000"
  },
  {
    "_id": "62e83a862e891aac6576519d",
    "name": "Node.js",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1659386503/c5cnwxdyopbnxiciipdf.png"
    ],
    "description": "undefined",
    "documentation_link": "https://nodejs.org/",
    "type": "backend",
    "createdAt": "2022-08-01T20:41:42.483Z",
    "updatedAt": "2022-08-01T21:01:15.936Z",
    "color": "#8BC500"
  },
  {
    "_id": "62e83ae82e891aac6576519f",
    "name": "MongoDB",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1659386601/xg1igd2nzktlm6xqmabe.png"
    ],
    "description": "undefined",
    "documentation_link": "https://www.mongodb.com/",
    "type": "backend",
    "createdAt": "2022-08-01T20:43:20.336Z",
    "updatedAt": "2022-08-01T21:01:38.322Z",
    "color": "#412F1F"
  },
  {
    "_id": "62e83b4c2e891aac657651a1",
    "name": "MySQL",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1659386701/zuozic3xihd6hebq8xvr.png"
    ],
    "description": "undefined",
    "documentation_link": "https://www.mysql.com/",
    "type": "backend",
    "createdAt": "2022-08-01T20:45:00.281Z",
    "updatedAt": "2022-08-01T21:02:03.118Z",
    "color": "#E87812"
  },
  {
    "_id": "62e83c392e891aac657651a5",
    "name": "ExpressJS",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1659386938/lxsu3juvbhxeczfs0yo9.png"
    ],
    "description": "undefined",
    "documentation_link": "https://expressjs.com/es/",
    "type": "backend",
    "createdAt": "2022-08-01T20:48:57.320Z",
    "updatedAt": "2022-08-01T21:02:32.247Z",
    "color": "#2E2E2E"
  },
  {
    "_id": "632e939419990867cd705e7c",
    "name": "GraphQL",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1663996819/o2axb8dspzjxakdg7jiy.png"
    ],
    "description": "Query Language for APIS!",
    "documentation_link": "https://graphql.org/",
    "type": "backend",
    "color": "#E535AB",
    "createdAt": "2022-09-24T05:20:20.379Z",
    "updatedAt": "2022-09-24T05:20:20.379Z"
  },
  {
    "_id": "63797b273c8bce10e3b4c067",
    "name": "Git",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1668905768/o06ueeaxqy06wb7mmuqx.png"
    ],
    "description": "Controlador de versiones",
    "documentation_link": "https://git-scm.com/",
    "type": "util",
    "color": "#F05033",
    "createdAt": "2022-11-20T00:56:07.021Z",
    "updatedAt": "2022-11-20T00:56:07.021Z"
  },
  {
    "_id": "63797b983c8bce10e3b4c06e",
    "name": "GitHub",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1668905882/kep62kn7wbxbvc9zspz0.png"
    ],
    "description": "Repositorio de archivos",
    "documentation_link": "https://github.com/",
    "type": "undefined",
    "color": "#000000",
    "createdAt": "2022-11-20T00:58:00.933Z",
    "updatedAt": "2022-11-20T00:58:00.933Z"
  },
  {
    "_id": "63797ba33c8bce10e3b4c070",
    "name": "GitHub",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1668905893/bnzexu1kpqrdiouigtrd.png"
    ],
    "description": "Repositorio de archivos",
    "documentation_link": "https://github.com/",
    "type": "util",
    "color": "#000000",
    "createdAt": "2022-11-20T00:58:11.569Z",
    "updatedAt": "2022-11-20T00:58:11.569Z"
  },
  {
    "_id": "63797c093c8bce10e3b4c076",
    "name": "Jest",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1668905994/qnvzr2gv00nguwjwyfxx.png"
    ],
    "description": "Librería de testing",
    "documentation_link": "https://jestjs.io/",
    "type": "util",
    "color": "#99425B",
    "createdAt": "2022-11-20T00:59:53.008Z",
    "updatedAt": "2022-11-20T00:59:53.008Z"
  },
  {
    "_id": "63797c733c8bce10e3b4c07c",
    "name": "React Native",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1668906101/f1z2qa9isjjh0crlgnpr.png"
    ],
    "description": "Framework basado en React para aplicaciones móviles",
    "documentation_link": "https://reactnative.dev/",
    "type": "frontend",
    "color": "#61DAFB",
    "createdAt": "2022-11-20T01:01:39.794Z",
    "updatedAt": "2022-11-20T01:01:39.794Z"
  },
  {
    "_id": "63797ceb3c8bce10e3b4c07e",
    "name": "Markdown",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1668906220/mllsyf9fqisuasixlb99.png"
    ],
    "description": "Conversor de texto a HTML, útil para blogs.",
    "documentation_link": "https://markdown.es/",
    "type": "util",
    "color": "#000000",
    "createdAt": "2022-11-20T01:03:39.684Z",
    "updatedAt": "2022-11-20T01:03:39.684Z"
  },
  {
    "_id": "63797d8e3c8bce10e3b4c084",
    "name": "Websockets",
    "imageUrl": [
      "http://res.cloudinary.com/syphhy/image/upload/v1668906384/cyacg75vqottdzhvqmb0.png"
    ],
    "description": "Un websocket permite la interconexión en tiempo real entre el back y el front, por ejemplo un chat.",
    "documentation_link": "https://socket.io/",
    "type": "backend",
    "color": "#000000",
    "createdAt": "2022-11-20T01:06:22.829Z",
    "updatedAt": "2022-11-20T01:06:22.829Z"
  }
]

export default function Index() {
  const screensActive = useSelector(state => state.screensActive);
  const themeActive = useSelector(state => state.themeActive);
  
  useEffect(() => {
    Aos.init({
        duration: 1200
    });
  }, []);
  
  return (
    <main style={{padding: '0px 15%', backgroundColor: 'var(--color-dark)'}} theme={themeActive._id} >
      <ScrollIndicator />

      {screensActive.themes ? <ThemeScreen themes={themes} screen={'themes'}/> : ''}

      {screensActive.isLoading ? <FullScreenLoading /> : ''}

      <SocialMedia />

      {screensActive.language ? <LanguageScreen /> : ''}

      <Home />

      <AboutMeSection tecnologies={tecnologies}/>

      <ProjectsSection projectsPrincipal={projectsPrincipal} projectsSecundario={projectsSecundario}/>

      <ContactSection/>

      <style jsx>{`
        main{
          overflow: hidden;
            --color-vl: ${themeActive.color_vl} ;
            --color-l: ${themeActive.color_l};
            --color-md: ${themeActive.color_md};
            --color-ldark: ${themeActive.color_ldark};
            --color-dark: ${themeActive.color_dark};
            --color-verydark: ${themeActive.color_vdark};
            --text-color: ${themeActive.text_color};
        }  
      `}</style>
    </main>
  )
}