const images = [
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
];

export function getImages() {
  return images;
}
