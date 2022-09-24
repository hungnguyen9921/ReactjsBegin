import bcrypt from "bcrypt";

const users = [
  {
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    name: "Admin",
    phone: "123456789",
  },
  {
    email: "user@example.com",
    password: bcrypt.hashSync("admin", 10),
    name: "User",
    phone: "123456789",
  },
  {
    email: "admin",
    password: bcrypt.hashSync("admin", 10),
    name: "Hung",
    phone: "123456789",
  },
];

export default users;
