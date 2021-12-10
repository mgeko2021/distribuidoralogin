let nodemailer = require("nodemailer")

// import main from "./main.js";

const PORT =  9000 //aqui creamos servidor y correspondeinte puerto

// mi apliacacion estara escuchandoa al servidor creado

let express = require("express")

let main = express()

// let PORT = 8000;
main.use(express.json())
main.get("/", (req, resp )=> {
    resp.send("llego")
})

main.post("/distribuidoranegociemos.com/api.atlas.negociemos/rest/ws/pedidos", (req, resp )=> {
    console.log(req.body)
    resp.send("solicitud recibida")
    const sendMail =async () => {
        let transporter = nodemailer.createTransport({
          host: "smtp.mailtrap.io",
          port: 2525,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "893a16a87c0049",
            pass: "ba77339ed5d450"// generated ethereal password
          },
        });
      
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: '"Distribuidora negociemos"<administraciongj@example.com>', // sender address
          to: req.body.email, // list of receivers
          subject: `Confirmación pedido Distribuidora Negociemos`, // Subject line
          text: "Distribuidora negociemos", // plain text body
          html: 
          ` <html>
            <body>
            <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color: white; padding:50px; font-size:14px; font-family: tahoma,geneva,sans-serif;" width="60%; border-top: #fd0276 solid 20px; top center no-repeat; background-size: cover;">
                <tbody>
                    <tr>
                        <td align="center" style="padding:10px 0; background-color: #1bb1ecb9;">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; max-width:600px; min-width:450px;">
                                <tbody>
                                    <tr>
                                        <td align="center">
                                            <img  style="margin: center; margin: 5px auto 5px;display: block;max-width:150px" src="https://www.tecnoideas20.com/wp-content/uploads/2021/06/logo-google-transparent.png">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height="30" align="center" style="padding:10px 0;">
                            <h3 style="margin: 10px auto;">Tu orden esta en camino</h3>
                            <img  style="margin: center; margin: 5px auto 5px;display: block;max-width:80px" src="https://cdn-icons-png.flaticon.com/512/181/181578.png">
                            <p style="width: 80%; margin: 20px auto;">¡Gracias por comprar en nuestra tienda online! 
                                Estamos muy contentos de que hayas encontrado lo que estabas buscando. Trabajamos para que siempre obtengas la máxima satisfacción 
                                <br>
                                <br>
                                Tus amigos de la tienda <b> Distribuidora Negociemos. </b>
                            </p>
                        </td>
                    </tr>
                        <td align="center" style="padding:20px;background-color: #1bb1ecb9;">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:#f9f9f9; max-width:600px; min-width:450px;">
                                <tbody>
                                    <tr>
                                        <td  style="line-height:18px; ">
                                            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:100%; background-color: #1bb1ecb9;">
                                                <tbody>
                                                    <tr height="30">
                                                        <td align="center" style="color: white;text-align:left; padding: 20px;"><span style="font-size:14px; font-family: tahoma,geneva,sans-serif; color: white;">
                                                            <div class="cliente" style="border-radius: 1rem; background-color:#1bb1ecb9;padding: 0.5rem;">
                                                                <h3 style="text-align: center; font-size: 20px;">${req.body.contacto}</h3>
                                                                <p>Los articulos que ordenaste llegaran a la siguiente dirección <b>${req.body.direccion}</b> en la ciudad de <b>${req.body.ciudad_corres_desc}</b> <br> <br>
                                                                Si presenta retraso en la entrega no dudes en comunicarte <b> (2) 4896900</b><br>
                                                            </div>
                                                            <br>
                                                            <br>
                                                            <a href="" target="_blank" style="text-align:center; color: rgb(40, 71, 180); font-size: 20px;"><b style="text-align: center;">Distribuidora negociemos</b></a>
                                                            <p style="text-align: center; color: rgb(11, 21, 56); font-size: 10px;">Usted está recibiendo este correo electrónico por estar por compra de nuestros pruductos
                                                                Distribuidora Negociemos no solicita datos confidenciales como: claves o PIN, fechas de vencimiento a través de correo electrónico, mensajes de texto ni llamadas telefónicas, si esto llegara a ocurrir le solicitamos nos lo notifique enviándonos la información al correo distribuidora_negociemos@example.com.co
                                                                https://www.distribuidoranegociemos.com.co</p>
                                                            <div style="display: flex; justify-content:center;">
                                                                <img  style="cursor:pointer; max-width:30px" src="https://cdn-icons-png.flaticon.com/512/20/20673.png">
                                                                <img  style=" cursor:pointer; margin-left: 1rem;max-width:30px" src="https://cdn-icons-png.flaticon.com/512/87/87390.png">
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </body>
            </html>
            `
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    sendMail()
})

// main.listen(8000, ()=> {
//     console.log("server en localhost", PORT)
// } )

main.listen(PORT, () => console.log(`Servidor escuchando sobre el puerto ${PORT}`));