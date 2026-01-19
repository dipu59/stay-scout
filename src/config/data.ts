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
      "/findCard/image1.jpg",
      "/findCard/image2.jpg",
      "/findCard/image4.jpg",
      "/findCard/image2.jpg",
    ],
  },
  {
    id: 6,
    title: "Bottega",
    images: [
      "/findCard/image2.jpg",
      "/findCard/image1.jpg",
      "/findCard/image2.jpg",
      "/findCard/image3.jpg",
    ],
  },
  {
    id: 7,
    title: "Bottega",
    images: [
      "/findCard/image3.jpg",
      "/findCard/image4.jpg",
      "/findCard/image2.jpg",
      "/findCard/image1.jpg",
    ],
  },
  {
    id: 8,
    title: "Bottega",
    images: [
      "/findCard/image4.jpg",
      "/findCard/image2.jpg",
      "/findCard/image1.jpg",
      "/findCard/image3.jpg",
    ],
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

export const allResturarent = [
  {
    path: "/allResturarent/image1.jpg",
    title: "The Snug",
    desc: "A cozy neighborhood pub known for its warm atmosphere, classic comfort food, and friendly service.",
    stars: 4,
    review: "654",
    star: "4.5",
  },
  {
    path: "/allResturarent/image2.png",
    title: "Bottega",
    desc: "An upscale Italian restaurant offering handcrafted pasta, fine wines, and a modern dining experience.",
    stars: 5,
    review: "1672",
    star: "5.0",
  },
  {
    path: "/allResturarent/image3.png",
    title: "Little Shucker",
    desc: "Seafood-focused spot popular for fresh oysters, crab rolls, and a relaxed coastal vibe.",
    stars: 3,
    review: "553",
    star: "3.0",
  },
  {
    path: "/allResturarent/image4.png",
    title: "Lokma",
    desc: "A vibrant Mediterranean restaurant serving authentic Turkish street food and handmade desserts.",
    stars: 4,
    review: "654",
    star: "4.5",
  },
  {
    path: "/allResturarent/image5.png",
    title: "Starbelly",
    desc: "A casual yet refined eatery offering seasonal dishes made with fresh, locally sourced ingredients.",
    stars: 3,
    review: "290",
    star: "3.7",
  },
  {
    path: "/allResturarent/image6.png",
    title: "The Melt",
    desc: "Famous for gourmet grilled cheese sandwiches, comfort meals, and late-night dining.",
    stars: 4,
    review: "709",
    star: "4.9",
  },
  {
    path: "/allResturarent/image7.png",
    title: "Arabia Nights",
    desc: "Middle Eastern restaurant known for rich flavors, traditional platters, and live ambiance.",
    stars: 5,
    review: "893",
    star: "5.0",
  },

  // 🔥 New 10 demo cards start here

  {
    path: "/allResturarent/image2.png",
    title: "Cafe Milano",
    desc: "A stylish European café offering artisan coffee, pastries, and light continental meals.",
    stars: 4,
    review: "421",
    star: "4.2",
  },
  {
    path: "/allResturarent/image3.png",
    title: "Spice Route",
    desc: "Indian fine-dining restaurant serving rich curries, tandoori specials, and aromatic spices.",
    stars: 5,
    review: "1184",
    star: "4.8",
  },
  {
    path: "/allResturarent/image4.png",
    title: "Green Leaf Bistro",
    desc: "A health-focused bistro offering vegan, gluten-free, and organic meal options.",
    stars: 4,
    review: "367",
    star: "4.1",
  },
  {
    path: "/allResturarent/image5.png",
    title: "Sakura House",
    desc: "Japanese restaurant featuring fresh sushi, ramen bowls, and traditional Japanese flavors.",
    stars: 5,
    review: "982",
    star: "4.9",
  },
  {
    path: "/allResturarent/image6.png",
    title: "Urban Grill",
    desc: "A modern grill house specializing in flame-grilled steaks, burgers, and craft beverages.",
    stars: 4,
    review: "615",
    star: "4.3",
  },
  {
    path: "/allResturarent/image7.png",
    title: "La Fiesta",
    desc: "Mexican restaurant serving tacos, burritos, and signature cocktails in a lively setting.",
    stars: 4,
    review: "748",
    star: "4.4",
  },
  {
    path: "/allResturarent/image2.png",
    title: "Ocean Pearl",
    desc: "Premium seafood dining with ocean-fresh fish, elegant plating, and waterfront views.",
    stars: 5,
    review: "1296",
    star: "4.9",
  },
  {
    path: "/allResturarent/image3.png",
    title: "The Rustic Table",
    desc: "Farm-to-table restaurant highlighting seasonal produce and handcrafted rustic dishes.",
    stars: 4,
    review: "532",
    star: "4.2",
  },
  {
    path: "/allResturarent/image4.png",
    title: "Dragon Wok",
    desc: "Asian fusion spot offering bold flavors, quick service, and customizable stir-fry meals.",
    stars: 3,
    review: "284",
    star: "3.6",
  },
  {
    path: "/allResturarent/image4.png",
    title: "Blue Harbor Café",
    desc: "Relaxed waterfront café perfect for brunch, light bites, and scenic sunset views.",
    stars: 4,
    review: "689",
    star: "4.4",
  },
];

// data/restaurantLocations.ts
export const restaurantLocations = [
  {
    id: 1,
    name: "The Snug",
    lat: 1.2868,
    lng: 103.8523,
  },
  {
    id: 2,
    name: "Bottega",
    lat: 1.3009,
    lng: 103.8456,
  },
  {
    id: 3,
    name: "Little Shucker",
    lat: 1.2897,
    lng: 103.8551,
  },
  {
    id: 4,
    name: "Arabia Nights",
    lat: 1.2834,
    lng: 103.8607,
  },
];

// src/data/restaurants.ts
export const restaurants = [
  {
    id: 1,
    title: "Bella Italia",
    slug: "bella-italia",
    desc: "Authentic Italian food with a cozy atmosphere.",
  },
  {
    id: 2,
    title: "Bottega",
    slug: "bottega",
    desc: "Modern Italian cuisine with handcrafted pasta.",
  },
  {
    id: 3,
    title: "The Snug",
    slug: "the-snug",
    desc: "A warm pub-style restaurant with comfort food.",
  },
];
