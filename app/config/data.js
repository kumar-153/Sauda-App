let products = [
  {
    id: 1,
    type: "rent",
    title: "iPhone X",
    image: [require("../assets/prod-1.jpg")],
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    features: [
      "This is good",
      "You can have it",
      "You can definitely have it",
      "This is good",
    ],
  },
  {
    id: 2,
    type: "sale",
    title: "iPhone X",
    image: [require("../assets/prod-1.jpg")],
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    features: [
      "This is good",
      "You can have it",
      "You can definitely have it",
      "This is good",
    ],
  },
  {
    id: 3,
    type: "rent",
    title: "iPhone X",
    image: [require("../assets/prod-1.jpg")],
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    features: [
      "This is good",
      "You can have it",
      "You can definitely have it",
      "This is good",
    ],
  },
  {
    id: 4,
    type: "rent",
    title: "iPhone X",
    image: [require("../assets/prod-1.jpg")],
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    features: [
      "This is good",
      "You can have it",
      "You can definitely have it",
      "This is good",
    ],
  },
  {
    id: 5,
    type: "sale",
    title: "iPhone X",
    image: [require("../assets/prod-1.jpg")],
    price: "2300",
    owner: "Rajdeep Singh",
    ownerImage: require("../assets/profile.jpg"),
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    features: [
      "This is good",
      "You can have it",
      "You can definitely have it",
      "This is good",
    ],
  },
  {
    id: 5,
    type: "sale exclusive",
    title: "Jio Phone",
    image: [require("../assets/prod-1.jpg")],
    price: "1300",
    owner: "Harsh Kmar",
    ownerImage: require("../assets/profile.jpg"),
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    features: [
      "This is good",
      "You can have it",
      "You can definitely have it",
      "This is good",
    ],
  },
];

export const getProducts = () => products;

export const addProduct = (newProduct) => products.push(newProduct);
