import AllLinks from "@/src/assets/icons/BuildingIcon";
import SVGComponent from "@/src/assets/icons/BuildingIcon";
import {
  Bars,
  Beauty,
  Car,
  CarWash,
  Gyms,
  Homeservices,
  Hotels,
  museum,
  Park,
  Restaurants,
  Shopping,
} from "@/src/components/icons";

export const NavLink = [
  { path: AllLinks, name: "All" },
  { path: Restaurants, name: "Restaurants" },
  { path: Hotels, name: "Hotels" },
  { path: Homeservices, name: "Home services" },
  { path: Shopping, name: "Shopping" },
  { path: Car, name: "Car location" },
  { path: Beauty, name: "Beauty & Spa" },
  { path: Park, name: "Park" },
  { path: museum, name: "museum" },
  { path: CarWash, name: "Car wash" },
  { path: Bars, name: "Bars" },
  { path: Gyms, name: "Gyms" },
];

// data/findCard.ts
export const findCards = [
  {
    id: 1,
    title: "Bottega",
    images: [
      "/findCard/image1.jpg",
      "/findCard/image2.jpg",
      "/findCard/image3.jpg",
      "/findCard/image4.jpg",
    ],
  },
  {
    id: 2,
    title: "Bottega",
    images: [
      "/findCard/image2.jpg",
      "/findCard/image3.jpg",
      "/findCard/image4.jpg",
      "/findCard/image1.jpg",
    ],
  },
  {
    id: 3,
    title: "Bottega",
    images: [
      "/findCard/image3.jpg",
      "/findCard/image4.jpg",
      "/findCard/image1.jpg",
      "/findCard/image2.jpg",
    ],
  },
  {
    id: 4,
    title: "Bottega",
    images: [
      "/findCard/image4.jpg",
      "/findCard/image1.jpg",
      "/findCard/image2.jpg",
      "/findCard/image3.jpg",
    ],
  },
  {
    id: 5,
    title: "Bottega",
    images: [
      "/findCard/image4.jpg",
      "/findCard/image1.jpg",
      "/findCard/image2.jpg",
      "/findCard/image3.jpg",
    ],
  },
  {
    id: 6,
    title: "Bottega",
    images: [
      "/findCard/image4.jpg",
      "/findCard/image1.jpg",
      "/findCard/image2.jpg",
      "/findCard/image3.jpg",
    ],
  },
  {
    id: 7,
    title: "Bottega",
    images: [
      "/findCard/image4.jpg",
      "/findCard/image1.jpg",
      "/findCard/image2.jpg",
      "/findCard/image3.jpg",
    ],
  },
  {
    id: 8,
    title: "Bottega",
    images: [
      "/findCard/image4.jpg",
      "/findCard/image1.jpg",
      "/findCard/image2.jpg",
      "/findCard/image3.jpg",
    ],
  },
];

// The latest trends Cards Details
export const LatestCard = [
  {
    path: "/latestTrand/image1.jpg",
    title: "Bella Italia",
    description:
      "Authentic Italian cuisine with handmade pasta and traditional recipes. A cozy atmosphere perfect.",
    rating: "5.0",
    ratings: 5,
    review: "312",
  },

  {
    path: "/latestTrand/image2.jpg",
    title: "Little Shucker",
    description:
      "Fresh oyster bar featuring daily catches and classic seafood preparations. Ideal for casual gatherings.",
    rating: "3.6",
    ratings: 3,
    review: "189",
  },
  {
    path: "/latestTrand/image3.jpg",
    title: "Marafuku Ramen",
    description:
      "Specialty ramen house with rich broths and premium toppings. A must-visit for authentic Japanese flavors.",
    rating: "5",
    ratings: 5,
    review: "276",
  },
  {
    path: "/latestTrand/image4.jpg",
    title: "Bottega",
    description:
      "Modern Italian dining with contemporary design and seasonal menu. Great for special occasions.",
    rating: "3.5",
    ratings: 3,
    review: "243",
  },
  {
    path: "/latestTrand/image5.jpg",
    title: "Arabia Nights",
    description:
      "Middle Eastern cuisine with vibrant spices and traditional dishes. Warm hospitality and lively ambiance.",
    rating: "5",
    ratings: 5,
    review: "198",
  },
  {
    path: "/latestTrand/image6.jpg",
    title: "Lokma",
    description:
      "Turkish delicacies and Mediterranean flavors in an elegant setting. Known for exceptional service.",
    rating: "5",
    ratings: 5,
    review: "156",
  },
  {
    path: "/latestTrand/image7.jpg",
    title: "The snug",
    description:
      "Cozy pub atmosphere with comfort food and craft beverages. Perfect for relaxed evenings with friends.",
    rating: "4.2",
    ratings: 4,
    review: "127",
  },
  {
    path: "/latestTrand/image8.jpg",
    title: "Starbelly",
    description:
      "Farm-to-table restaurant emphasizing fresh, local ingredients. Creative seasonal menus.",
    rating: "5",
    ratings: 5,
    review: "267",
  },
  {
    path: "/latestTrand/image9.jpg",
    title: "Iori",
    description:
      "Japanese fusion cuisine combining traditional and modern techniques. Elegant presentation and refined taste.",
    rating: "4.7",
    ratings: 4,
    review: "298",
  },
  {
    path: "/latestTrand/image10.jpg",
    title: "Ngalley",
    description:
      "Contemporary African cuisine with bold flavors and artistic plating. Unique dining experience.",
    rating: "3.4",
    ratings: 3,
    review: "142",
  },
  {
    path: "/latestTrand/image11.jpg",
    title: "diogonal",
    description:
      "Minimalist design with innovative small plates and cocktails. Perfect for adventurous palates.",
    rating: "5",
    ratings: 5,
    review: "185",
  },
  {
    path: "/latestTrand/image12.jpg",
    title: "Kitoko",
    description:
      "Pan-Asian restaurant featuring diverse regional cuisines and modern interpretation of classics.",
    rating: "4.3",
    ratings: 2,
    review: "164",
  },
];


// Recent Activities Data
export const SRecentActivities = [
  {
    username: "Leslie Sakho",
    location: "Toronto, Canada",
    star: 5,
    date: "09/11/2023",
    desc1:
      "Amazing experience overall. The restaurant ambiance was calm and welcoming, perfect for a relaxed dinner.",
    desc2:
      "Staff were very attentive and the food quality was outstanding. Would definitely recommend to others.",
    path: [
      "/review/group1/image1.jpg",
      "/review/group1/image2.jpg",
      "/review/group1/image3.jpg",
    ],
  },
  {
    username: "Arjun Mehta",
    location: "Mumbai, India",
    star: 4,
    date: "21/12/2023",
    desc1:
      "Great place for family dinners. The menu offers a wide variety and the pricing feels reasonable.",
    desc2:
      "Service was slightly slow during rush hours, but the staff handled it professionally.",
    path: [
      "/review/group2/image1.jpg",
      "/review/group2/image2.jpg",
      "/review/group2/image3.jpg",
    ],
  },
  {
    username: "Sophia Martinez",
    location: "Barcelona, Spain",
    star: 5,
    date: "04/01/2024",
    desc1:
      "Absolutely loved this place. The environment was clean, modern, and very well maintained.",
    desc2:
      "Desserts were exceptional and the presentation was beautiful. A must-visit spot.",
    path: [
      "/review/group3/image1.jpg",
      "/review/group3/image2.jpg",
      "/review/group3/image3.jpg",
    ],
  },
  {
    username: "Daniel Thompson",
    location: "London, UK",
    star: 3,
    date: "15/01/2024",
    desc1:
      "Decent experience overall. The food was good but didn’t stand out compared to nearby options.",
    desc2:
      "Service could be faster, especially during peak times, but still worth trying once.",
    path: [
      "/review/group1/image1.jpg",
      "/review/group1/image2.jpg",
      "/review/group1/image3.jpg",
    ],
  },
  {
    username: "Emily Carter",
    location: "New York, USA",
    star: 5,
    date: "28/01/2024",
    desc1:
      "Fantastic experience from start to finish. The staff were friendly and very professional.",
    desc2:
      "Loved the attention to detail in both food and service. Will definitely return.",
    path: [
      "/review/group2/image1.jpg",
      "/review/group2/image2.jpg",
      "/review/group2/image3.jpg",
    ],
  },
  {
    username: "Rahul Verma",
    location: "Bangalore, India",
    star: 4,
    date: "02/02/2024",
    desc1:
      "Nice ambiance and comfortable seating. The place feels suitable for both work meetings and casual visits.",
    desc2:
      "Food was fresh and flavorful, though the menu could include more vegetarian options.",
    path: [
      "/review/group3/image1.jpg",
      "/review/group3/image2.jpg",
      "/review/group3/image3.jpg",
    ],
  },
  {
    username: "Isabella Rossi",
    location: "Milan, Italy",
    star: 5,
    date: "10/02/2024",
    desc1:
      "One of the best dining experiences I’ve had recently. Everything felt premium and well organized.",
    desc2:
      "Staff recommendations were spot on. Truly enjoyed every dish served.",
   path: [
      "/review/group2/image1.jpg",
      "/review/group2/image2.jpg",
      "/review/group2/image3.jpg",
    ],
  },
  {
    username: "Ahmed Hassan",
    location: "Dubai, UAE",
    star: 4,
    date: "18/02/2024",
    desc1:
      "Very good experience overall. The interior design is modern and gives a luxury feel.",
    desc2:
      "Food portions were generous and the quality matched the pricing. Would visit again.",
    path: [
      "/review/group3/image1.jpg",
      "/review/group3/image2.jpg",
      "/review/group3/image3.jpg",
    ],
  },
];

