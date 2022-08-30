import bcrypt from "bcrypt";

const users = [
  {
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    name: "Admin",
  },
  {
    email: "user@example.com",
    password: bcrypt.hashSync("admin", 10),
    name: "User",
  },
];

export default users;
