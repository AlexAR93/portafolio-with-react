import {getFirestore,collection,getDocs, query, orderBy} from 'firebase/firestore';
const getFirebaseData = async(collectionName,order='name',orderType='asc') => {
    const querydb=getFirestore();
    const queryCollection=query(collection(querydb,collectionName))
    const getData=await getDocs(query(queryCollection,orderBy(order,orderType)))
  
    const data=getData.docs.map(proyect=>({id:proyect.id,...proyect.data()}))
    return data;
}

export default getFirebaseData