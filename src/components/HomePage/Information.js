import "../../Styles/HomePageStyle/Information.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import PopUp from "./Information/PopUp";
import TextField from '@material-ui/core/TextField';
import CallIcon from '@material-ui/icons/Call';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
//autenticacion
import useAuth from '../../Auth/useAuth';
import { useForm } from 'react-hook-form';
import postToken from '../../services/postToken';
import postEmail from '../../services/postEmail';
import mailLogin from '../../services/mailLogin';




const Information = () => {

    const [buttonPopUp, setButtonPopUp] = useState(false)
    const [dataForm, setDataForm] = useState()
    const { register, handleSubmit,reset } = useForm()

    const auth = useAuth()

    const handleLogin = (data) => {
        setDataForm(data)
        reset()
    }

    
  useEffect(()=> {
    if(dataForm){
        const postFunc = async () => {
        // const token = await postToken()
        //     if(token.status == "200"){
        //         const postEmailFunc = async () => {
        //         const dataUser = await postEmail(token.data.token)
        //         if(dataUser.status == "200"){
        //             for (let i = 0; i < dataUser.data.length; i++) {
        //                 console.log(dataUser.data[i].EMAIL) 
        //                 if (dataUser.data[i].EMAIL == dataForm.username) {
                            const data = {
                                // to: dataForm.username,
                                to: "mcamacho@gekoestudio.com",
                                // token: token.data.token
                                token:"Bearer 1//049GqkZCJDZgECgYIARAAGAQSNwF-L9IrXuXALibPF_aZKt0FA9wtz74LgcDFvQ-_N_rNMwNyq48Byw6yw6QGf4IvhaOAr7gQcYs"
                            }
                            const postLoginFunc  =  async () =>{
                                const tokenLogin = await mailLogin(data) 

                                console.log(tokenLogin)
                            }
                            postLoginFunc() 
                                      
                            // setButtonPopUp(false)
                            // auth.upToken(token.data.token || localStorage.getItem("token"))
                //         }
                //     }
                // }
            
                // setButtonPopUp(false)
                // auth.upToken(token.data.token || localStorage.getItem("token"))
            // } 
            // postEmailFunc()
        // }
    }
        postFunc() 
    }
  },[dataForm])


//   useEffect(()=> {
//     if(dataForm){
//         if(dataForm.username == "distribuidora@negociemos.com"){
//             const postFunc = async () => {
//             const datauser = await postToken(dataForm)
//                 if(datauser){
//                 //   auth.login(datauser.name);
//                     // console.log(datauser.data.token)
//                     setButtonPopUp(false)
//                     auth.upToken(datauser.data.token || localStorage.getItem("token"))
//                 } 
//             }
//                 postFunc() 
//         }
//     }
//   },[dataForm])

    return (
        <div className="Information row col-md-11 col-lg-10 col-xl-8 mx-auto">
            <div className="NetworkInformation col-md-8 p-0">
                <span className="Track " >
                <a href={'https://www.google.com/maps'}><LocalShippingIcon style={{ color:"#51BAFF"}}/></a>
                Rastrea mi pedido
                </span>
                <span className="PBX">
                <CallIcon style={{ color:"#51BAFF"}}/><p>PBX: 57 (2) 386 5770</p>
                </span>
                <span className="References">Siguenos en
                   <a href="https://www.facebook.com/negociemosdistribuidora/"><FacebookIcon color="primary"/></a>
                   <a href={"https://www.instagram.com/distribuidoranegociemos/?hl=es"}><InstagramIcon color="secondary"/></a></span>
                
            </div>
            <div className="Loginbtn col-md-4 ">
                <Button className="Loginbtn" onClick={()=>setButtonPopUp(true)} variant="contained" color="secondary">
                    <AccountCircleIcon />
                    Inciar Sesion
                </Button>
                <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                    <div className="popup-text"> 
                        <h2>Acceso a Clientes</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non sit eveniet molestiae tenetur quam facilis quibusdam distinctio. Numquam dolorum placeat rem saepe commodi alias. Nihil labore incidunt impedit iste?</p>
                        <h5>Correo Electronico</h5>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="popup-send">
                                <TextField
                                {...register("username", {required: true})}
                                // required
                                id="outlined-required"
                                label="correo"
                                variant="outlined"
                                />
                                {/* <input {...register("username", {required: true})} placeholder={"User"} type="text" /> */}
                                <button>Inciar Sesion</button>
                            </div>
                        </form>
                    </div>
                </PopUp>
            </div>
        </div>
    );
};

export default Information;