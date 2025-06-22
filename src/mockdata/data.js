import Biryani from "../assets/biryani.jpeg";
import Burger from "../assets/burgger.png";
import Pizza from "../assets/pizza.webp";
import Chicken from "../assets/chiken.png";

export const NavbarMenu = [
    {
        id:1,
        title: "Home",
        link: "/",
    },
    {
        id:2,
        title: "Offer",
        link: "/offers",
    },
    {
        id:3,
        title: "About",
        link: "/About",
    },

];

export const products = [
    {
        id: 1,
        name: "Biryani",
        price: "$10.99",
        image: Biryani,
    },
    {
        id: 2,
        name: "Burger",
        price: "$5.49",
        image: Burger,
    },
    {
        id: 3,
        name: "Pizza",
        price: "$8.99",
        image: Pizza,
    },
    {
        id: 4,
        name: "Chicken",
        price: "$12.99",
        image: Chicken,
    },
];
