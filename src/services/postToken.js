import axios from 'axios';


const postToken = async () => {

    const promesa = await axios.post('https://myplace.distribuidoranegociemos.com/api.atlas.negociemos/rest/ws/login', {
        login: "DN**EC--U001++",
        password: "D1STR1B1D0R4_==_N3G0C13M0$_"
    }
    ,{
        headers: {
            "Content-Type" :"application/json"
        }
    })

    return promesa

}

export default postToken