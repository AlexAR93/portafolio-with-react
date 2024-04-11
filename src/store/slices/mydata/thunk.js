
import { getFirebaseData } from "../../../helpers"
import { setData, startLoading } from "./myDataSlice"

export const getData=(collection,orderBy,order)=> async(dispatch, getState)=>{
    dispatch (startLoading())
    // dispatch(setPokemons());
    getFirebaseData(collection,orderBy,order)
    .then(data=> {
        dispatch( setData([...data]))
    }
    )
}
