import jwt from "jsonwebtoken";

const generaToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30s",
  });
};

export default generaToken;
