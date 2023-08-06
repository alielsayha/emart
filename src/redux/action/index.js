
export const AddCart = (Product)=>{
    return {type : 'addCart' , payload : Product}
}

export const DeleteCart = (Product)=>{
    return {type : 'deleteCart' , payload : Product}
}