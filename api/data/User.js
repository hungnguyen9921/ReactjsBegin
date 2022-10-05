import bcrypt from "bcrypt";

const users = [
  {
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    name: "123",
    phone: "123456789",
    sex: "Nữ",
    dateofbirth: "9/9/2001",
  },
  {
    email: "user@example.com",
    password: bcrypt.hashSync("admin", 10),
    name: "User",
    phone: "123456789",
    sex: "Nam",
    dateofbirth: "9/9/2001",
  },
  {
    email: "admin@gmail.com",
    password: bcrypt.hashSync("admin", 10),
    name: "Hung09092001",
    phone: "123456789",
    sex: "Nữ",
    dateofbirth: "9/9/2001",
  },
];

export default users;
