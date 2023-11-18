import { Request, Response } from 'express';
import User, { user } from '../model/user'
import { encrypt } from "../helper/password-bcrypts";

const createUser = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body

    const encrypts = await encrypt(data.password);
    data.password = encrypts;

    const create: user = await new User({ ...data })
    await create.save()

    res.status(201).send({
      ok: true,
      user: create,
      mensaje: "usuario creado con éxito",
      message: "user created successfully"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      error,
      mensaje: "¡Ups! Algo salió mal",
      message: "Ups! Something went wrong",
    });
  }
}

export { createUser }