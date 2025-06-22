const images = import.meta.glob("../../assets/*", { eager: true });

const menuData = [
  { name: "Pizza", image: images["../../assets/pizza1.jpg"].default, rating: 5, time: 120, type: "Non Veg", place: "India", price: 499, category: "Pizza" },
  { name: "Burger", image: images["../../assets/burger1.jpg"].default, rating: 4.3, time: 80, type: "Non Veg", place: "India", price: 359, category: "Burger" },
  { name: "Chicken Biryani", image: images["../../assets/biryani.jpeg"].default , rating: 4, time: 100, type: "Veg", place: "India", price: 149, category: "Non veg" },
  { name: "Chicken", image: images["../../assets/chiken1.webp"].default , rating: 4.5, time: 120, type: "Non Veg", place: "India", price: 379, category: "Non veg" },
  { name: "Bread Chicken Sandwich", image: images["../../assets/sandwich2.jpg"].default , rating: 5, time: 120, type: "Non Veg", place: "India", price: 99, category: "Non veg" },
  { name: "Sandwich", image: images["../../assets/shanvege1.jpg"].default , rating: 5, time: 120, type: "Veg", place: "India", price: 159, category: "Veg" },
];

export default menuData;
