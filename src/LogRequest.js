import React, { useState, useEffect } from 'react';
import { Heading, Grid, TimeItem, TimeLabel, Time } from './styles'



function LogRequest(props) {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [saveStartTime, setSaveStartTime] = useState(null);
    const [saveEndTime, setSaveEndTime] = useState(null);
    

    useEffect(() => {
        setTimeout( () => 
            { 
            setStartTime(Date.now());
            fetch(props.url).then( (res) => 
                {
                setEndTime(Date.now());
                return res.json();
                }).then( (result) => 
                {
                    let transaction = (props.db)?.transaction(props.name, "readwrite");
                    if (transaction) {
                        transaction.oncomplete = () => {
                        setSaveEndTime(Date.now());
                        }  
                    }

                    let objectStore = transaction?.objectStore(props.name);
                    if(objectStore) {
                        setSaveStartTime(Date.now());
                        result.forEach( (record) => {
                            let request = objectStore.add(record);
                            request.onsuccess = (event) => {
                                
                            }
                        })
                        
                    }
                }) 
            }, 
        5000)
    }, [props.db, props.name, props.url])

    return (
        <div>
            <Heading>{props.name}</Heading>
            <Grid>
                <tbody>
                    <TimeItem>
                        <TimeLabel>Start</TimeLabel><Time>{startTime}</Time>
                    </TimeItem>
                    <TimeItem>
                        <TimeLabel>End</TimeLabel><Time>{endTime}</Time>
                    </TimeItem>
                    <TimeItem>
                        <TimeLabel>Save</TimeLabel><Time>{saveStartTime}</Time>
                    </TimeItem>
                    <TimeItem>
                        <TimeLabel>Saved</TimeLabel><Time>{saveEndTime}</Time>
                    </TimeItem>
                </tbody>
            </Grid>
        </div>
    )
}

export default LogRequest;