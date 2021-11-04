const product = {
  _id: 1,
  name: "Fall Limited Edition Sneakers",
  company: "Sneaker Company",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250,
  discount: 0.5,
  images: [
    {
      _id: 1,
      imageUrl: process.env.PUBLIC_URL + "/images/image-product-1.jpg",
      thumbnailUrl: process.env.PUBLIC_URL + "/images/image-product-1-thumbnail.jpg",
      name: "Product Preview 1",
    },
    {
      _id: 2,
      imageUrl: process.env.PUBLIC_URL + "/images/image-product-2.jpg",
      thumbnailUrl: process.env.PUBLIC_URL + "/images/image-product-2-thumbnail.jpg",
      name: "Product Preview 2",
    },
    {
      _id: 3,
      imageUrl: process.env.PUBLIC_URL + "/images/image-product-3.jpg",
      thumbnailUrl: process.env.PUBLIC_URL + "/images/image-product-3-thumbnail.jpg",
      name: "Product Preview 3",
    },
    {
      _id: 4,
      imageUrl: process.env.PUBLIC_URL + "/images/image-product-4.jpg",
      thumbnailUrl: process.env.PUBLIC_URL + "/images/image-product-4-thumbnail.jpg",
      name: "Product Preview 4",
    },
  ],
};

export function getProduct() {
  return product;
}
