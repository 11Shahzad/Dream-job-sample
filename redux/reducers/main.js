import * as t from '../types'
const main = (state= {
    loginfo: {
        login:'true'
    },

    },
 action)=> {
    switch(action.type){
case t.setLogin:
    return {...state, loginfo:{
        login: action.payload
    }};
    default:
        return{...state}
    }
}
export default main
    
    