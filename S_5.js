// ЗАДАНИЕ 1

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7
};

for (const key in numbers) {
  if (numbers[key] >= 3) {
    console.log(numbers[key]);
  }
}

// ЗАДАНИЕ 2

const post = {
  author: "John",
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2,
      },
    },
    {
      userId: 5,
      userName: "Jane",
      text: "lorem ipsum 2",
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

// Вывод значений в консоль
console.log(post.author); // выводим имя автора
console.log(post.comments[0].rating.dislikes); // выводим количество дизлайков первого комментария
console.log(post.comments[1].userId); // выводим userId второго комментария
console.log(post.comments[1].text); // выводим текст второго комментария


// ЗАДАНИЕ 3

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products.forEach(product => {
  product.price = product.price * 0.85; // Уменьшаем цену каждого продукта на 15%
});

console.log(products);


// ЗАДАНИЕ 4

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

// 1
const productsWithPhotos = products.filter(product => product.photos && product.photos.length > 0);
console.log(productsWithPhotos);

// 2
const sortedProducts = products.sort((a, b) => a.price - b.price);
console.log(sortedProducts);


// ЗАДАНИЕ 5

const englishWords = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const russianWords = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const merged = englishWords.reduce((acc, key, index) => {
    acc[key] = russianWords[index];
    return acc;
}, {});

console.log(merged);
