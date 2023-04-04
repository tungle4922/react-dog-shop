const express = require("express");
const app = express();
const cors = require("cors");

//use express.json() to get data into json format
app.use(express.json());
// use cors
app.use(cors());

const dogs = [
  {
    id: 1,
    name: "Theory",
    breed: "Ragdoll",
    price: "200",
    description: "Ragdoll cats love their humans and thrive on interactive play",
    imageUrl:
      "https://www.pumpkin.care/wp-content/uploads/2022/01/ragdoll-cat_best-cats-for-kids-1024x536.jpeg",
  },
  {
    id: 2,
    name: "Butty",
    breed: "American Shorthair",
    price: "500",
    description: "An affectionate breed, American Shorthair cats are known for being friendly, laid-back, and gentle pets",
    imageUrl:
      "https://www.pumpkin.care/wp-content/uploads/2022/01/american-shorthair-1024x536.jpeg",
  },
  {
    id: 3,
    name: "Pity",
    breed: "Birman",
    price: "2200",
    description:
      "Known for being easy going, gentle, and curious, Birman cats are as sociable as they come",
    imageUrl:
      "https://www.pumpkin.care/wp-content/uploads/2022/01/birman-cat_best-cats-for-kids-1024x536.jpg",
  },
  {
    id: 4,
    name: "Puggy",
    breed: "Maine Coon",
    price: "1200",
    description:
      "Well known for their size, Maine Coon cats are large cats with larger personalities",
    imageUrl:
      "https://www.pumpkin.care/wp-content/uploads/2022/01/maine-coon_best-cats-for-kids-1024x536.jpeg",
  },
  {
    id: 5,
    name: "Mally",
    breed: "Abyssinian ",
    price: "2600",
    description: "Master manipulators when it comes to their owners",
    imageUrl:
      "https://www.pumpkin.care/wp-content/uploads/2022/01/abyssinian-cat_best-cats-for-kids-1024x536.jpg",
  },
  {
    id: 6,
    name: "Dachy",
    breed: "DASCHUND",
    price: "2700",
    description: "A dog looks like a sausage",
    imageUrl:
      "https://images.unsplash.com/photo-1612195583950-b8fd34c87093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFzY2h1bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 7,
    name: "Ngao",
    breed: "HUSKY",
    price: "2500",
    description: "A dog looks like a wolf",
    imageUrl:
      "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGh1c2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    id: 8,
    name: "Boxy",
    breed: "BOXER",
    price: "4700",
    description: "A dog knows how to fight",
    imageUrl:
      "https://images.unsplash.com/photo-1543071220-6ee5bf71a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym94ZXIlMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  },
];

app.get("/v1/mydog", (req, res) => {
  res.status(200).json(dogs);
});

app.listen("8080", () => {
  console.log("Server is running...");
});
