// https://dummyjson.com/products?limit=8

const data = {
    "products": [
      {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/1/1.jpg",
          "https://cdn.dummyjson.com/product-images/1/2.jpg",
          "https://cdn.dummyjson.com/product-images/1/3.jpg",
          "https://cdn.dummyjson.com/product-images/1/4.jpg",
          "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        ]
      },
      {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/2/1.jpg",
          "https://cdn.dummyjson.com/product-images/2/2.jpg",
          "https://cdn.dummyjson.com/product-images/2/3.jpg",
          "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
        ]
      },
      {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/3/1.jpg"
        ]
      },
      {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/4/1.jpg",
          "https://cdn.dummyjson.com/product-images/4/2.jpg",
          "https://cdn.dummyjson.com/product-images/4/3.jpg",
          "https://cdn.dummyjson.com/product-images/4/4.jpg",
          "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
        ]
      },
      {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/5/1.jpg",
          "https://cdn.dummyjson.com/product-images/5/2.jpg",
          "https://cdn.dummyjson.com/product-images/5/3.jpg"
        ]
      },
      {
        "id": 6,
        "title": "MacBook Pro",
        "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
        "price": 1749,
        "discountPercentage": 11.02,
        "rating": 4.57,
        "stock": 83,
        "brand": "Apple",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
        "images": [
          "https://cdn.dummyjson.com/product-images/6/1.png",
          "https://cdn.dummyjson.com/product-images/6/2.jpg",
          "https://cdn.dummyjson.com/product-images/6/3.png",
          "https://cdn.dummyjson.com/product-images/6/4.jpg"
        ]
      },
      {
        "id": 7,
        "title": "Samsung Galaxy Book",
        "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        "price": 1499,
        "discountPercentage": 4.15,
        "rating": 4.25,
        "stock": 50,
        "brand": "Samsung",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/7/1.jpg",
          "https://cdn.dummyjson.com/product-images/7/2.jpg",
          "https://cdn.dummyjson.com/product-images/7/3.jpg",
          "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
        ]
      },
      {
        "id": 8,
        "title": "Microsoft Surface Laptop 4",
        "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        "price": 1499,
        "discountPercentage": 10.23,
        "rating": 4.43,
        "stock": 68,
        "brand": "Microsoft Surface",
        "category": "laptops",
        "thumbnail": "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/8/1.jpg",
          "https://cdn.dummyjson.com/product-images/8/2.jpg",
          "https://cdn.dummyjson.com/product-images/8/3.jpg",
          "https://cdn.dummyjson.com/product-images/8/4.jpg",
          "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
        ]
      }
    ],
    "total": 100,
    "skip": 0,
    "limit": 8
  };
  
  const locations = ["Saint Petersburg, Gorkovskaya", "Moscow, Red Square", "Novosibirsk, Lenin Square"]; // Add more locations as needed
  const times = ["Yesterday 22:49", "Today 10:30", "Today 15:45"]; // Add more times as needed
  
  const products = data.products.map(product => {
    return {
      imageUrls: product.images,
      title: product.title,
      price: `${product.price} ₽`,
      location: locations[Math.floor(Math.random() * locations.length)],
      time: times[Math.floor(Math.random() * times.length)],
    };
  });

// const products = [
//     {
//         imageUrls: ["/placeholder.svg"],
//         title: "Massage",
//         price: "from 3,500 ₽ per service",
//         location: "Saint Petersburg, Gorkovskaya",
//         time: "Yesterday 22:49",
//     },
//     {
//         imageUrls: ["/placeholder.svg"],
//         title: "Maybelline color tattoo eyeshadow",
//         price: "450 ₽",
//         location: "Saint Petersburg, Moskovskaya",
//         time: "Today 13:54",
//     },
//     {
//         imageUrls: ["/placeholder.svg"],
//         title: "Wallet dkny furla",
//         price: "225 ₽",
//         location: "Saint Petersburg, Admiralteyskaya",
//         time: "Today 13:45",
//     },
//     {
//         imageUrls: ["/placeholder.svg"],
//         title: "Commercial space, 15 m²",
//         price: "130,000 ₽ per month",
//         location: "Saint Petersburg, Mayakovskaya",
//         time: "Yesterday 19:41",
//     },
//     {
//         imageUrls: ["/placeholder.svg"],
//         title: "Whatsminer m30s++ 110th",
//         price: "96,000 ₽",
//         location: "Saint Petersburg, Technopolitensky Institute",
//         time: "Today 13:11",
//     },
//     {
//         imageUrls: ["/placeholder.svg"],
//         title: "1-room apartment, 32.2 m², 1/16 floor",
//         price: "8,290,000 ₽",
//         location: "Saint Petersburg, Akademicheskaya",
//         time: "Today 13:35",
//     },
//     {
//         imageUrls: ["/placeholder.svg"],
//         title: "Fornica in a network of apartments",
//         price: "Salary not specified",
//         location: "Saint Petersburg, Primorskaya",
//         time: "Today 12:26",
//     },
//     {
//         imageUrls: ["/placeholder.svg"],
//         title: "Toyota Land Cruiser Prado 4.0 AT, 2011, 193,900 km",
//         price: "2,999,555 ₽",
//         location: "Saint Petersburg, Staraya Derevnya",
//         time: "Yesterday 22:31",
//     },
//     // {
//     //     imageUrls: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
//     //     title: "Toyota Land Cruiser Prado 4.0 AT, 2011, 193,900 km",
//     //     price: "2,999,555 ₽",
//     //     location: "Saint Petersburg, Staraya Derevnya",
//     //     time: "Yesterday 22:32",
//     // },
// ];

export { products };