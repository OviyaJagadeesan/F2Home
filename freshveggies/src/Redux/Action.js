export const additem=(payload)=>{
    return{
        type:"additem",
        payload:payload,
    }
}

export const removeitem=(payload)=>{
    return{
        type:"removeitem",
        payload:payload,
    }
}

export const deleteitem=(payload)=>{
    return{
        type:"deleteitem",
        payload:payload,
    }
}