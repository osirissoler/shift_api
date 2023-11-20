import { Request, Response } from 'express';
import Shifts, { shifts } from '../model/shifts'
import { Types } from 'mongoose';
import { generateCode } from '../helper/generate-code';


const createShifts = async (req: Request, res: Response) => {
    try {
        const { ...data } = req.body
        let numeros = []
        let number = 0;
        const query = {
            specialists: new Types.ObjectId(data.specialists),
            isDeleted: false,
            isActive: true
        }
        //verificar si ya este usuario tiene un ticker en este estableciemiento y tipo de establecimiento
        const query2 = {
            specialists: new Types.ObjectId(data.specialists),
            isDeleted: false,
            isActive: true,
            user: new Types.ObjectId(data.user)
        }
        const count = await Shifts.find(query).count()
        if (count == 0) {
            number = 1
        } else {
            // buscar todos los que hay y tomar el numero mayor y sumar uno
            const values = await Shifts.find(query)
            values.map(e => {
                console.log(e.number, 'numeros')
                numeros.push(e.number)
            })
            const numeroMasGrande = Math.max(...numeros);
            console.log(numeroMasGrande, "numeroMasGrande")
            number = numeroMasGrande + 1
        }

        const create: shifts = await new Shifts({ ...data, number })
        await create.save()

        res.status(201).send({
            ok: true,
            count,
            numero_de_turno: count + 1,
            shifts: create,
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

const verifyShifts = async (req: Request, res: Response) => {
    try {
        const { ...data } = req.body
        const query = {
            specialists: new Types.ObjectId(data.specialists),
            isDeleted: false,
            isActive: true,
            user: new Types.ObjectId(data.user),
            typeBusiness:new Types.ObjectId(data.typeBusiness)
        }

        console.log(query)

        const shifts = await Shifts.findOne(query)
            .populate({ path: 'specialists', populate: { path: 'business', } })
            .populate({ path: 'services' })

        if (shifts) {
            return res.status(200).send({
                ok: false,
                shifts,
                mensaje: "ya hay un ticket creado con estos datos",
                message: "there is a tickect created yet"
            })
        }
        res.status(200).send({
            ok: true,
            shifts,
            mensaje: "no hay ticket creado",
            message: "there are no tickect created"
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

const getShiftsNumber = async (req: Request, res: Response) => {
    try {
        const { specialists_id, } = req.params
        let numeros = []
        let number = 0;

        const query = {
            specialists: new Types.ObjectId(specialists_id),
            isDeleted: false,
            isActive: true
        }
        const count = await Shifts.find(query).count()
        if (count == 0) {
            number = 1
        } else {
            // buscar todos los que hay y tomar el numero mayor y sumar uno
            const values = await Shifts.find(query)
            values.map(e => {
                numeros.push(e.number)
            })
            const numeroMasGrande = Math.max(...numeros);
            number = numeroMasGrande + 1
        }

        //codigo
        const code = await generateCode()

        res.status(201).send({
            ok: true,
            count,
            shifNnumber: number,
            code,
            number
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


// const getSpecialistsByBusiness = async (req: Request, res: Response) => {
//     try {
//       const {id} = req.params

//       const getSpecialist = await Specialists.find({business:id})

//       res.status(200).send({
//         ok: true,
//         specialists: getSpecialist,
//         mensaje: "tipo de negocio creado con éxito",
//         message: "Type of business created successfully"
//       })
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({
//         ok: false,
//         error,
//         mensaje: "¡Ups! Algo salió mal",
//         message: "Ups! Something went wrong",
//       });
//     }
//   }

export { createShifts, getShiftsNumber, verifyShifts }