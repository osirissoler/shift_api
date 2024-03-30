import { Request, Response } from "express";
import User from "../model/user";
import Specialists from "../model/specialists";
import bcrypt from 'bcrypt';
import { generarJWT } from "../helper/create-jwt";
import Business from "../model/business";

const loginApp = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).populate({ path: 'rol'})

        if (!user) {
            return res.status(200).send({
                ok: false,
                message: "Wrong email or password",
                mensaje: "Correo o contraseña equivocada",
                status: 404,
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(200).json({
                ok: false,
                message: "Wrong email or password",
                mensaje: "Correo o contraseña equivocada",
                status: 404,
            });
        }

        if (user.isDeleted) {
            return res.status(200).send({
                ok: false,
                message: "This user was isDeleted contact an administrator",
                mensaje: "Usuario Eliminado, contacte un administrador",
            });
        }

        if (!user.isActive) {
            return res.status(200).send({
                ok: false,
                message: "User disabled, contact an administrator",
                mensaje: "Usuario desactivado, contacte un administrador",
            });
        }
        const token = await generarJWT(user);
        res.status(200).send({
            ok: true,
            message: "Welcome",
            user,
            token,

        });


    } catch (error) {
        console.log(error)
        res.status(500).send({
            mensaje: "¡Ups! Algo salió mal",
            message: "Ups! Something went wrong",
            error,
        });
    }
}

const loginAppSpecialists = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await Specialists.findOne({ email }).populate({ path: 'rol'})
        console.log(user)

        if (!user) {
            return res.status(200).send({
                ok: false,
                message: "Wrong email or password user",
                mensaje: "Correo o contraseña equivocada",
                status: 404,
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(200).json({
                ok: false,
                message: "Wrong email or password pass",
                mensaje: "Correo o contraseña equivocada",
                status: 404,
            });
        }

        if (user.isDeleted) {
            return res.status(200).send({
                ok: false,
                message: "This user was isDeleted contact an administrator delete",
                mensaje: "Usuario Eliminado, contacte un administrador",
            });
        }

        if (!user.isActive) {
            return res.status(200).send({
                ok: false,
                message: "User disabled, contact an administrator active",
                mensaje: "Usuario desactivado, contacte un administrador",
            });
        }
        const token = await generarJWT(user);
        res.status(200).send({
            ok: true,
            message: "Welcome",
            user,
            token,
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            mensaje: "¡Ups! Algo salió mal",
            message: "Ups! Something went wrong",
            error,
        });
    }
}

const loginAppbusiness = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await Business.findOne({ email }).populate({ path: 'rol'})
        console.log(user)

        if (!user) {
            return res.status(200).send({
                ok: false,
                message: "Wrong email or password user",
                mensaje: "Correo o contraseña equivocada",
                status: 404,
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(200).json({
                ok: false,
                message: "Wrong email or password pass",
                mensaje: "Correo o contraseña equivocada",
                status: 404,
            });
        }

        if (user.isDeleted) {
            return res.status(200).send({
                ok: false,
                message: "This user was isDeleted contact an administrator delete",
                mensaje: "Usuario Eliminado, contacte un administrador",
            });
        }

        if (!user.isActive) {
            return res.status(200).send({
                ok: false,
                message: "User disabled, contact an administrator active",
                mensaje: "Usuario desactivado, contacte un administrador",
            });
        }
        const token = await generarJWT(user);
        res.status(200).send({
            ok: true,
            message: "Welcome",
            user,
            token,
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            mensaje: "¡Ups! Algo salió mal",
            message: "Ups! Something went wrong",
            error,
        });
    }
}

export {
    loginApp,
    loginAppSpecialists,
    loginAppbusiness
}