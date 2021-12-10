import axios from "axios"

const postPedido = async (dataPedido) => {

        var requestOptions = {
            method:'POST',
            url:'/pedidos',
            baseURL:'http://localhost:9000/distribuidoranegociemos.com/api.atlas.negociemos/rest/ws/',
            data: dataPedido
        }
        const promise = await axios(requestOptions)
        console.log(promise)
        return promise
}

  
  export default postPedido