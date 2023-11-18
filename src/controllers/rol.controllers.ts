import { Request, Response } from 'express';
import Roles, { rol } from '../model/rol'

const createRol = async (req: Request, res: Response) => {
    try {
      const { ...data } = req.body
      const createRol: rol = await new Roles({ ...data })
      await createRol.save()
  
      res.status(201).send({
        ok: true,
        rol: createRol,
        mensaje: "Rol creado con éxito",
        message: "Role created successfully"
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

  export {createRol}