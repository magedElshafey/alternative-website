// home assets
import hero from "../assets/hero.png";
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
// about assets
import aboutImg from "../assets/about.png";

export const navlinks = [
  {
    title: "home",
    path: "/",
  },

  {
    title: "local products",
    path: "/local-products",
  },
  {
    title: "Foregin Products",
    path: "/foreign-products",
  },
];

export const heroDetails = {
  img: hero,
  main: "discover",
  second: "alternative brands &",
  third: "foreign brands",
  desc: "The best platform to know the difference between alternative brands and boycott brands",
  btns: [
    {
      title: "google play",
      desc: "get it on",
      icon: <FaGooglePlay size={30} />,
    },
    {
      title: "App store",
      desc: "avaiable on the",
      icon: <FaApple size={30} />,
    },
  ],
};
export const aboutDetails = {
  desc: "A platform to introduce the local products, which are locally made, so that the brand name and its manufacture are local and belong to local products. The platform aims to gather local producers in one platform and present them as alternatives to foreign products to the local consumer as a first stage.The website allows the consumer to encourage the local product or reveal the foreign product to the consumer by adding and photographing the product. The platform, through careful research, confirms the identity of the product and then adopts it as an alternative or introduces it to Manj Ahnabi.",
  img: aboutImg,
};
