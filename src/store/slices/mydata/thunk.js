
import { getFirebaseData } from "../../../helpers"
import { setData, startLoading } from "./myDataSlice"

export const getData=(collection='aboutMe')=> async(dispatch, getState)=>{
    dispatch (startLoading())
    // dispatch(setPokemons());
    getFirebaseData(collection)
    .then(data=> {
        dispatch( setData([...data]))
    }
    )
}
