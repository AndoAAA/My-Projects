import { IMAGES } from "../../../assets";

export const productServices = {
  getProducts: () => {
    const data = [
      {
        name: "Persimmon",
        id: 52,
        img: IMAGES.persimmon,
        price: 450,
        family: "Ebenaceae",
        order: "Rosales",
        genus: "Diospyros",
        nutritions: {
          calories: 81,
          fat: 0.0,
          sugar: 18.0,
          carbohydrates: 18.0,
          protein: 0.0
        }
      },
      {
        name: "Strawberry",
        id: 3,
        img: IMAGES.strawberry,
        price: 350,
        family: "Rosaceae",
        order: "Rosales",
        genus: "Fragaria",
        nutritions: {
          calories: 29,
          fat: 0.4,
          sugar: 5.4,
          carbohydrates: 5.5,
          protein: 0.8
        }
      },
      {
        name: "Banana",
        id: 1,
        img: IMAGES.banana,
        price: 400,
        family: "Musaceae",
        order: "Zingiberales",
        genus: "Musa",
        nutritions: {
          calories: 96,
          fat: 0.2,
          sugar: 17.2,
          carbohydrates: 22.0,
          protein: 1.0
        }
      },
      {
        name: "Tomato",
        id: 5,
        img: IMAGES.tomato,
        price: 850,
        family: "Solanaceae",
        order: "Solanales",
        genus: "Solanum",
        nutritions: {
          calories: 74,
          fat: 0.2,
          sugar: 2.6,
          carbohydrates: 3.9,
          protein: 0.9
        }
      },
      {
        name: "Pear",
        id: 4,
        img: IMAGES.pear,
        price: 500,
        family: "Rosaceae",
        order: "Rosales",
        genus: "Pyrus",
        nutritions: {
          calories: 57,
          fat: 0.1,
          sugar: 10.0,
          carbohydrates: 15.0,
          protein: 0.4
        }
      },
      {
        name: "Durian",
        id: 60,
        img: IMAGES.durian,
        price: 600,
        family: "Malvaceae",
        order: "Malvales",
        genus: "Durio",
        nutritions: {
          calories: 147,
          fat: 5.3,
          sugar: 6.75,
          carbohydrates: 27.1,
          protein: 1.5
        }
      },
      {
        name: "Blackberry",
        id: 64,
        img: IMAGES.blackberry,
        price: 850,
        family: "Rosaceae",
        order: "Rosales",
        genus: "Rubus",
        nutritions: {
          calories: 40,
          fat: 0.4,
          sugar: 4.5,
          carbohydrates: 9.0,
          protein: 1.3
        }
      },
      {
        name: "Kiwi",
        id: 66,
        img: IMAGES.kiwi,
        price: 950,
        family: "Actinidiaceae",
        order: "Struthioniformes",
        genus: "Apteryx",
        nutritions: {
          calories: 61,
          fat: 0.5,
          sugar: 9.0,
          carbohydrates: 15.0,
          protein: 1.1
        }
      },
      {
        name: "Pineapple",
        id: 10,
        img: IMAGES.pineapple,
        price: 1000,
        family: "Bromeliaceae",
        order: "Poales",
        genus: "Ananas",
        nutritions: {
          calories: 50,
          fat: 0.12,
          sugar: 9.85,
          carbohydrates: 13.12,
          protein: 0.54
        }
      },
      {
        name: "Orange",
        id: 2,
        img: IMAGES.orange,
        price: 550,
        family: "Rutaceae",
        order: "Sapindales",
        genus: "Citrus",
        nutritions: {
          calories: 43,
          fat: 0.2,
          sugar: 8.2,
          carbohydrates: 8.3,
          protein: 1.0
        }
      },
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
};
