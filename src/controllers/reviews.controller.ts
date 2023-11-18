import { Request, Response } from 'express';
import Reviews, { reviews } from '../model/reviews'
import { Types } from 'mongoose';
import moment from 'moment';


const createReviews = async (req: Request, res: Response) => {
    try {
        const { ...data } = req.body
        const create: reviews = await new Reviews({ ...data, time:new Date().toISOString() })
        await create.save()

        res.status(201).send({
            ok: true,
            user: create,
            mensaje: "reseña creado con éxito",
            message: "reviews created successfully"
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

const getReviewsByspecialist = async (req: Request, res: Response) => {
    try {
        const { specialists_id } = req.params
        const filter: any = {
            isDeleted: false,
            specialists: new Types.ObjectId(specialists_id),
        };

        const getreviews = await Reviews.find(filter).populate({ path: 'user' }).sort({ _id: -1 })
        const total = await Reviews.aggregate([
            { $match: { ...filter } },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 },

                }
            },
        ])
        let total1 = (total[0]?.count) ? total[0]?.count : 0

        const reviewsWithTimeDifference = getreviews.map((review: reviews) => {
            const now = moment();
            const time = moment(review.time);
            const duration = moment.duration(now.diff(time));
            console.log(time, moment());


            if (duration.years() > 0) {
                review.time = `${duration.years()} ${duration.years() === 1 ? 'año' : 'años'}`;
            } else if (duration.months() > 0) {
                review.time = `${duration.months()} ${duration.months() === 1 ? 'mes' : 'meses'}`;
            } else if (duration.days() > 0) {
                review.time = `${duration.days()} ${duration.days() === 1 ? 'día' : 'días'}`;
            } else if (duration.hours() > 0) {
                review.time = `${duration.hours()} ${duration.hours() === 1 ? 'hora' : 'horas'}`;
            } else if (duration.minutes() > 0) {
                review.time = `${duration.minutes()} ${duration.minutes() === 1 ? 'minuto' : 'minutos'}`;
            }
            else {
                review.time = 'Hace menos de un minuto';
            }

            return review;
        });


        res.status(200).send({
            ok: true,
            total: total1,
            reviews: reviewsWithTimeDifference,
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

export { createReviews, getReviewsByspecialist }