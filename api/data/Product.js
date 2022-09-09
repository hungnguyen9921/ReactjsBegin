const products = [
  {
    name: "Thời Trang Nam",
    image: "./images/mainproduct01.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 100,
    countInstock: 3,
    review: [
      {
        name: "Nguyễn Quốc Hùng",
        rating: 4,
        comment: "The product is good",
      },
    ],
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Điện thoại và phụ kiện",
    image: "./images/mainproduct02.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 99,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Thiết Bị Điện Tử",
    image: "./images/mainproduct03.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Máy Tính & Laptop",
    image: "./images/mainproduct04.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Máy Ảnh & Máy Quay Phim",
    image: "./images/mainproduct05.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 99,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Đồng Hồ",
    image: "./images/mainproduct06.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Giày Dép Nam",
    image: "./images/mainproduct07.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Thiết Bị Điện Gia Dụng",
    image: "./images/mainproduct08.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 100,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Thể Thao & Du Lịch",
    image: "./images/mainproduct09.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 99,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Ô tô, Xe Máy & Xe Đạp",
    image: "./images/mainproduct10.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Balo & Túi Ví Nam",
    image: "./images/mainproduct11.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Đồ Chơi",
    image: "./images/mainproduct12.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 100,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Chăm Sóc Thú Cưng",
    image: "./images/mainproduct13.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 99,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Nhà Cửa & Đời Sống",
    image: "./images/mainproduct14.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Sắc Đẹp",
    image: "./images/mainproduct15.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Sức Khỏe",
    image: "./images/mainproduct16.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 99,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Túi Ví Nữ",
    image: "./images/mainproduct17.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Voucher & Dịch Vụ",
    image: "./images/mainproduct18.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Nhà Sách Online",
    image: "./images/mainproduct19.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Bách Hóa Online",
    image: "./images/mainproduct20.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Điện Thoại iPhone 13 64GB - Hàng Chính Hãng",
    image: "/images/iphone13.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Điện Thoại Samsung Galaxy - Z-Fold",
    image: "/images/samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 4490000,
    countInstock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Siêu Trí Nhớ - Sách Bán Chạy Tháng 12",
    image: "/images/sieutrinho-book.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 4490000,
    countInstock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Đồng Hồ Samsung Galaxy Watch5 Pro ",
    image: "/images/samsung-galaxy-watch5-pro-xam-thumbn-600x600.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 4490000,
    countInstock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Sách Target",
    image: "/images/target-book.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 4490000,
    countInstock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Điện Thoại Oppo A55 - 4GB",
    image: "/images/oppo-a55-4g-thumb-new-600x600.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
    countInstock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Điện Thoại Redmi 10",
    image: "/images/redmi-10-gray-600x600.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 4490000,
    countInstock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Loa Bluetooth JBL Clip 4",
    image: "/images/loa-bluetooth.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 4490000,
    countInstock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Bộ Lau Nhà 360 Độ Sunhouse Ks-CI350PQ",
    image: "/images/clean-house.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 4490000,
    countInstock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Xiaomi Redmi Note 11",
    image: "/images/redmi-note11.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 4490000,
    countInstock: 3,
    rating: 4,
    numReviews: 4,
  },
];

export default products;
