import axios from 'axios';

const postEmail = async (token) => {
        console.log(token)
        // const promesa = await axios.get('https://https://myplace.distribuidoranegociemos.com/api.atlas.negociemos/rest/ws/terceros?filtro=farmacia',{
        //     headers: {
        //         "Content-Type" :"application/json",
        //         "Authorization":token
        //         // "Authorization":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJETioqRUMtLVUwMDErKyIsImlzcyI6Imh0dHBzOi8vbXlwbGFjZS5kaXN0cmlidWlkb3JhbmVnb2NpZW1vcy5jb20vYXBpLmF0bGFzLm5lZ29jaWVtb3MvcmVzdC93cy9sb2dpbiIsImlhdCI6MTYzNzA3MDYxOSwiZXhwIjoxNjM3MDcyNDE5fQ.w2AKKMsDyAhnMWOP9df30NjAV1MzwkWy69KYTvq4xoA"
        //     }
        // })

        const promesa = await axios({
            method:'GET',
            url:'/terceros?filtro=farmacia',
            baseURL:'https://myplace.distribuidoranegociemos.com/api.atlas.negociemos/rest/ws',
            headers: {
                "Authorization":token,
                "Content-Type" :"application/json",
            }
        })
        return promesa

    }

export default postEmail;