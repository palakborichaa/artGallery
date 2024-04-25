import p1_img from "./Angela.png";
import p2_img from "./Laura_Abraham.png";
import p3_img from "./Otto.png";
import p4_img from "./Rectangle 2.png";
import p5_img from "./Rectangle 3.png";
import p6_img from "./Rectangle 4.png";
import p7_img from "./Rectangle 5.png";
import p8_img from "./Seidel.png";
import p9_img from "./fairlady.png";
import p10_img from "./voyage.png";
import p11_img from "./bengal pat/image1.jpg";
import p12_img from "./bengal pat/image2.jpg";
import p13_img from "./bengal pat/image3.jpg";
import p14_img from "./bengal pat/image4.jpg";
import p15_img from "./bengal pat/image5.jpg";
import p16_img from "./bengal pat/image6.jpg";
import p17_img from "./bengal pat/image7.jpg";
import p18_img from "./bengal pat/image8.jpg";
import p19_img from "./bengal pat/image9.jpg";
import p20_img from "./bengal pat/image10.jpg";
import sculpt1 from'./sculpt1.jpg';
import sculpt2 from'./sculpt2.jpg';
import sculpt3 from'./sculpt3.jpg';
import sculpt4 from'./sculpt4.jpg';
import sculpt5 from'./sculpt5.jpg';
import sculpt6 from'./sculpt6.jpg';
import pot1 from '../Assets/Potraits/pot1.jpg';
import pot2 from '../Assets/Potraits/pot2.jpg';
import pot3 from '../Assets/Potraits/pot3.jpg';
import pot4 from '../Assets/Potraits/pot4.jpg';
import pot5 from '../Assets/Potraits/pot5.jpg';
import pot6 from '../Assets/Potraits/pot6.jpg';


let all_product = [
  {
    id: 1,
    name: "Angela",
    category: "portraits",
    image: p1_img,
    new_price: 5000.0,
    old_price: 8000.5,
  },
  {
    id: 2,
    name: "Whispers of the Cosmos",
    category: "portraits",
    image: p2_img,
    new_price: 8520.0,
    old_price: 12000.5,
  },
  {
    id: 3,
    name: "Ethereal Symphony",
    category: "portraits",
    image: p3_img,
    new_price: 6000.0,
    old_price: 10000.5,
  },
  {
    id: 4,
    name: "Sunset Serenade",
    category: "sculptures",
    image: p4_img,
    new_price: 1230.0,
    old_price: 1550.0,
  },
  {
    id: 5,
    name: "Dreams in Bloom",
    category: "sculptures",
    image: p5_img,
    new_price: 8523.0,
    old_price: 12009.5,
  },
  {
    id: 6,
    name: "Celestial Harmony",
    category: "sculptures",
    image: p6_img,
    new_price: 8522.0,
    old_price: 12000.5,
  },
  {
    id: 7,
    name: "Enchanted Melodies",
    category: "sculptures",
    image: p7_img,
    new_price: 3255.0,
    old_price: 5056.5,
  },
  {
    id: 8,
    name: "Mystic Reverie",
    category: "sculptures",
    image: sculpt1,
    new_price: 1500.00,
    old_price: 1800.50,
  },
  {
    id: 9,
    name: "Aurora Dreamscape",
    category: "sculptures",
    image: sculpt2,
    new_price: 1800.00,
    old_price: 2200.50,
  },
  {
    id: 10,
    name: "Serenity's Embrace",
    category: "sculptures",
    image: sculpt3,
    new_price: 2000.00,
    old_price: 2500.50,
  },
  {
    id: 11,
    name: "ranquil Reflectionst",
    category: "sculptures",
    image: sculpt4,
    new_price: 2500.00,
    old_price: 3000.00,
  },
  {
    id: 12,
    name: "Echoes of Eternity",
    category: "sculptures",
    image: sculpt5,
    new_price: 2500.00,
    old_price: 3000.00,
  },
  {
    id: 13,
    name: "Sculpture with a twist!",
    category: "sculptures",
    image: sculpt6,
    new_price: 2500.00,
    old_price: 3000.00,
  },
  {
    id: 14,
    name: "Sapphire Mirage",
    category: "portraits",
    image: p8_img,
    new_price: 9405.0,
    old_price: 12000.5,
  },
  {
    id: 15,
    name: "Whirlwind Whispers",
    category: "portraits",
    image: p9_img,
    new_price: 2395.0,
    old_price: 2500.5,
  },
  {
    id: 16,
    name: "Emerald Enchantment",
    category: "paintings",
    image: p10_img,
    new_price: 1200.0,
    old_price: 1500.5,
  },
  {
    id: 17,
    name: "Nebula Dreams",
    category: "paintings",
    image: p11_img,
    new_price: 4466.0,
    old_price: 5000.5,
  },
  {
    id: 18,
    name: "Golden Horizon",
    category: "paintings",
    image: p12_img,
    new_price: 1234.0,
    old_price: 1299.5,
  },
  {
    id: 19,
    name: "Paintings",
    category: "paintings",
    image: p13_img,
    new_price: 1299.0,
    old_price: 1599.5,
  },
  {
    id: 20,
    name: "Paintings",
    category: "paintings",
    image: p14_img,
    new_price: 1256.0,
    old_price: 3344.5,
  },
  {
    id: 21,
    name: "Paintings",
    category: "paintings",
    image: p15_img,
    new_price: 1266.0,
    old_price: 1300.5,
  },
  {
    id: 22,
    name: "Paintings",
    category: "paintings",
    image: p16_img,
    new_price: 1599.0,
    old_price: 1899.5,
  },
  {
    id: 23,
    name: "Paintings",
    category: "paintings",
    image: p17_img,
    new_price: 2599.0,
    old_price: 2899.5,
  },
  {
    id: 24,
    name: "Paintings",
    category: "paintings",
    image: p18_img,
    new_price: 1200.0,
    old_price: 1599.5,
  },
  {
    id: 25,
    name: "Paintings",
    category: "paintings",
    image: p19_img,
    new_price: 1200.0,
    old_price: 1599.5,
  },
  {
    id: 25,
    name: "Paintings",
    category: "paintings",
    image: p20_img,
    new_price: 1200.0,
    old_price: 1599.5,
  },
  {
    id: 26,
    name: "Sylvan Symphony",
    category: "portraits",
    image: pot1,
    new_price: 2395.0,
    old_price: 2500.5,
  },
  {
    id: 27,
    name: "Midnight Mirage",
    category: "portraits",
    image: pot2,
    new_price: 2395.0,
    old_price: 2500.5,
  },
  {
    id: 28,
    name: "Oceanic Overture",
    category: "portraits",
    image: pot3,
    new_price: 2395.0,
    old_price: 2500.5,
  },
  {
    id: 29,
    name: "Crimson Cascade",
    category: "portraits",
    image: pot4,
    new_price: 2395.0,
    old_price: 2500.5,
  },
  {
    id: 30,
    name: "Celestial Serenade",
    category: "portraits",
    image: pot5,
    new_price: 2395.0,
    old_price: 2500.5,
  },
  {
    id: 31,
    name: "Enchanted Echo",
    category: "portraits",
    image: pot6,
    new_price: 2395.0,
    old_price: 2500.5,
  },
];

export default all_product;
