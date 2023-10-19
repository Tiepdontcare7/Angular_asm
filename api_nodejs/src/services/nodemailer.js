import nodemailer from 'nodemailer';

const sendMail = async (email) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS_MAIL,
        }
    })

    const info = await transporter.sendMail({
        from: '"TShop" <tatiep179@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Bạn đã đặt đơn hàng thành công!", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>SẢn phẩm: ..., Số lượng: ..., Địa chỉ giao hàng: ..., Price: ... </b> <br/> <b>Đơn hàng của m sẽ được giao đến trong khoản vài ngày nữa, cảm ơn!</b>", // html body
    });
}

export default sendMail