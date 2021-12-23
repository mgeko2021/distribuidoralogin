import axios from 'axios';


const mailLogin = async (data) => {
    console.log(data)
    const promesa = await axios({
        method:'POST',
        url:'/auth-login',
        baseURL:'http://localhost:9000',
        data:data
    
    })
    console.log(promesa)
    return promesa

    


}

export default mailLogin