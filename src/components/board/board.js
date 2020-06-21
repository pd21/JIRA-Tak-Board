import React , {useState,  useEffect} from 'react'
import firebase from '../../firebase'
import 'font-awesome/css/font-awesome.min.css';

import CreateTask from '../create-task/create-task'
import TaskBoard from '../TaskBoard/taskBoard'


import {
    MainContainer,
    Title,
    CreateNew
} from './style'

// firebase.firestore().collection('tasks').add({
//     name : 'Cart button',
// })

function useTimes (){
    const [ taskInfo, setTaskInfo ] = useState([])


    useEffect(()=>{
     const unsubscribe=  firebase
        .firestore()
        .collection('createTask')
        .onSnapshot((snapshot)=>{
            const newTimes = snapshot.docs.map(doc => ({
                id : doc.id,
                ...doc.data()
            }))
            setTaskInfo(newTimes)
        })
        return () => unsubscribe()
    }, [])
    return taskInfo
}

  
export default function Board(){

    const taskInfo = useTimes()
    const [createNew, setNew] = useState(false)

    // function handleDelte(id){
    //     firebase 
    //       .firestore()
    //       .collection('times')
    //       .doc(id)
    //       .delete()   
    // }
    

    return (
        <MainContainer>
            <Title>JIRA</Title>
            <CreateNew onClick={()=> setNew(true)}>Create New Task</CreateNew>
            {
               createNew && <CreateTask onClose={(close)=> setNew(close)}
               /> 
            }
            <TaskBoard taskInfo={taskInfo}/>
            
        </MainContainer>
    )
}