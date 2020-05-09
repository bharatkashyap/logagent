import React from 'react';
import { Button } from './styles'

function RestartRequestButton(props) {
   
    // useEffect(() => {
    //     setTimeout( () => 
    //         { 
    //         setStartTime(Date.now());
    //         fetch(props.url).then( (res) => 
    //             {
    //             setEndTime(Date.now());
    //             return res.json();
    //             }).then( (result) => 
    //             {
    //                 let transaction = (props.db)?.transaction(props.name, "readwrite");
    //                 if (transaction) {
    //                     transaction.oncomplete = () => {
    //                     setSaveEndTime(Date.now());
    //                     }  
    //                 }

    //                 let objectStore = transaction?.objectStore(props.name);
    //                 if(objectStore) {
    //                     setSaveStartTime(Date.now());
    //                     result.forEach( (record) => {
    //                         let request = objectStore.add(record);
    //                         request.onsuccess = (event) => {
                                
    //                         }
    //                     })
                        
    //                 }
    //             }) 
    //         }, 
    //     5000)
    // }, [props.db, props.name, props.url])

    return (
        
        <Button>Restart {props.name}</Button>
    )
}

export default RestartRequestButton;