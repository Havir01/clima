import {GET_CIUDAD,GET_NOTICIAS,GET_CLIMA,GET_NOTIPAIS} from '../Type'


export default (state,action) =>{
    const {payload,type} = action;
    switch (type) {
        case GET_CIUDAD:
             return {
                 ...state,
                 ciudad : payload
             }
        case GET_NOTICIAS:
            return {
                ...state,
                noticias : payload
            }
        case GET_CLIMA:
            return {
                ...state,
                clima : payload
            }
        case GET_NOTIPAIS:
             return {
                ...state,
                notipais : payload
            }
        default:
            return state;
    
    }

}