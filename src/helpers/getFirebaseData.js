import {getFirestore,collection,getDocs, query, orderBy} from 'firebase/firestore';
export const getFirebaseData = async(collectionName,order='name',orderType='desc') => {
    const querydb=getFirestore();
    const queryCollection=query(collection(querydb,collectionName))
    const getData=await getDocs(query(queryCollection,orderBy(order,orderType)))
  
    const data=getData.docs.map(proyect=>({id:proyect?.id,...proyect.data()})).map(item=>({...item,createAt:JSON.stringify(item.createAt)}))
    return data;
}
