import axios from 'axios';


const sendCorreo = async (ObjectDataEmail) => {
    console.log(ObjectDataEmail)
    const promesa = await axios({
        method:'POST',
        url:'/enviar-correo',
        baseURL:'http://localhost:9000',
        data:ObjectDataEmail
        // data:{
        //     "to":"mcamacho@gekoestudio.com",
        //     "contacto":"miguel angel camacho"
        // }
    })
    console.log(promesa)
    return promesa

    


}

export default sendCorreo