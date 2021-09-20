import React, { useReducer } from 'react'
import ciudadReducer from './CiudadReducer'
import CiudadContext from './CiudadContext';
import Axios from 'axios';

 const CiudadState = (props) => {
    const initialState = {
        noticias : {},
        ciudad :{},
        clima:{},
        notipais : {},
    
    }
    const [state, dispatch] = useReducer(ciudadReducer, initialState)
    
    const getCiudad = async()=>{
        try {
            const resp = await Axios.get("http://ip-api.com/json")
            //console.log(resp.data)
            dispatch({
                type: 'GET_CIUDAD',
                payload : resp.data
            })
        } catch (error) {
            console.log(error)
        }
    }
    const getClima = async(texto)=>{
        try {
            const resp = await Axios.get(`http://127.0.0.1:8080/api/v1/clima/${texto}`)
        console.log(resp.data)
            dispatch({
                type: 'GET_CLIMA',
                payload : resp.data
           })
        } catch (error) {
            console.log(error)
        }
    }
    
    const getNoticias = async (texto)=>{
        try {
            const resp = await Axios.get(`http://127.0.0.1:8080/api/v1/noticias/${texto}`)
        //console.log(resp)
            dispatch({
                type: 'GET_NOTICIAS',
                payload : resp.data
            })
        } catch (error) {
            console.log(error)
        }
    }
    const getNotiPais = async (texto)=>{
        try {
            const resp = await Axios.get(`http://127.0.0.1:8080/api/v1/noticias/${texto}`)
        //console.log(resp)
            dispatch({
                type: 'GET_NOTIPAIS',
                payload : resp.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <CiudadContext.Provider value = {
            {noticias : state.noticias,
            ciudad : state.ciudad,
            clima : state.clima,
            notipais : state.notipais,
            getNoticias,
            getCiudad,
            getClima,
            getNotiPais,
            }
        }>
            {props.children}
        </CiudadContext.Provider>

    )

};

export default CiudadState;