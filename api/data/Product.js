const products = [
  {
    name: "Thời Trang Nam",
    image: "./images/mainproduct01.png",
    type: "Quần Áo",
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
    type: "Thiết bị điện tử",
    image: "/images/iphone13.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    capacity: ["32GB", "64GB"],
    price: 14900000,
    countInstock: 3,
    rating: 4,
    numReviews: 4,
    specs: [
      {
        color: "Xanh Dương",
        image: "/images/iphone-13-midnight-2-600x600.jpg",
        imageReview: [
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-1.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-2.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-3.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-4.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-5.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-6.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-7.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-8.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-9.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-10.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-11.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-12.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-xanh-13.jpg",
        ],
        image360: [
          "https://cdn.tgdd.vn/Products/Images/42/223602/Image360/",
          "iphone-13-xanh-org-{index}.jpg",
        ],
      },
      {
        color: "Đen",
        image: "/images/iphone-13-midnight-2-600x600.jpg",
        imageReview: [
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-1-2.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-2-1.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-3-1.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-4-1.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-5-1.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-6-1.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-7-1.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-8-1.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-9-1.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-10-1.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-11-1.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-12-1.jpg",
          "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-13-1.jpg",
        ],
        image360: [
          "https://cdn.tgdd.vn/Products/Images/42/226935/Image360/",
          "samsung-galaxy-z-fold-3-360-org-{index}.jpg",
        ],
      },
    ],
  },
  {
    name: "Điện Thoại Samsung Galaxy - Z-Fold",
    type: "Thiết bị điện tử",
    image: "/images/samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    capacity: ["256GB", "512GB"],
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
    type: "Điện Thoại",
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
    type: "Điện Thoại",
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
