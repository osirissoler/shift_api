import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

import User, { user } from "../model/user";

interface AuthRequest extends Request {
  user: Object;
}

const validarJWT = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = <string>req.headers["x-access-token"];
    // console.log(token)
    if (!token) {
      return res.status(401).send({
        ok: false,
        msg: "Unauthorized",
      });
    }
    const apyload: any = Object.values(
      jwt.verify(token, process.env.SECRETORPRIVATEKEY)
    );

    let id = apyload[0]._id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(401).json({
        message: "No existe este usuario",
      });
    }
    req.user = user;

    next();
  } catch (error) {
    // console.log(error, "aqui esta el error");
    if (error instanceof jwt.JsonWebTokenError) {
      console.error("Token mal formado:", error.message);
      return res.status(401).send({
        ok: false,
        msg: "Token mal formado:",
      });
      // Aquí puedes manejar el caso de token mal formado, como enviar un mensaje al usuario o realizar otras acciones según sea necesario
    } else {
      res.status(500).json({
        ok: false,
        error,
        mensaje: "¡Ups! Algo salió mal",
        message: "Ups! Something went wrong",
      });
    }
  }
};

export { validarJWT };
