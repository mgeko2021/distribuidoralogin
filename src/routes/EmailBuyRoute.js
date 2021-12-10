const { Router } = require("express")
const router = Router()


router.post("/",(req, res)=>{
    console.log(req.body)
    res.send("received")
})


// app.post("/mail",(req,res) => {
    
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//         host: "smtp.mailtrap.io",
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//           user: "893a16a87c0049", // generated ethereal user
//           pass: "ba77339ed5d450", // generated ethereal password
//         },
//       });
    
//       // send mail with defined transport object
//       return transporter.sendMail({
//         from: '"Fred Foo 👻" <foo@example.com>', // sender address
//         to: "miguel-angelcr@hotmail.com, mcamacho@gekoestudio.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//       }, (err, info) => {
//           if(err) res.status(200).send({ success:false, error: err})

//           return res.status(200).send({
//               success:true,
//               message: "email sent"
//         })
//       }
//       );
// })


module.exports = router