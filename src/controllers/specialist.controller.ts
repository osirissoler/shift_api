import { Request, Response } from 'express';
import Specialists, { specialists } from '../model/specialists'
import { encrypt } from '../helper/password-bcrypts';


const createspecilist = async (req: Request, res: Response) => {
    try {
        const { ...data } = req.body

        const encrypts = await encrypt(data.password);
        data.password = encrypts;

        const create: specialists = await new Specialists({ ...data })
        await create.save()

        res.status(201).send({
            ok: true,
            specialists: create,
            mensaje: "negocio creado con éxito",
            message: "business created successfully"
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


const getSpecialistsByBusiness = async (req: Request, res: Response) => {
    try {
      const {id} = req.params
     
      const getSpecialist = await Specialists.find({business:id})
      
      res.status(200).send({
        ok: true,
        specialists: getSpecialist,
        mensaje: "tipo de negocio creado con éxito",
        message: "Type of business created successfully"
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

export { createspecilist, getSpecialistsByBusiness }