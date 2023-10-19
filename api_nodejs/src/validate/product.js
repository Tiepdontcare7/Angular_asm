import Joi from "joi"

const schema = Joi.object({
    name: Joi.string().required().min(5).max(255),
    price: Joi.number().required().min(0),
    desc: Joi.string().min(3),
    img: Joi.string(),
    categoryId: Joi.string()
})

export default schema