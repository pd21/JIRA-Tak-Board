import React  , {useState} from 'react'
import firebase from '../../firebase'

import {
    MainContainer,
    SubContainer,
    TaskHeading,
    TaskInformation,
    TaskName,
    TaskLabel,
    TaskInput,
    TaskDescription,
    TaskDate,
    TaskSelect,
    TaskOption,
    TaskNotes,
    TaskButtonContainer,
    Primarybutton,
    SecondaryButton,
    Form
} from './style.js'

export default function CreateTask(props){
    const [name, setName] = useState('')
    const [description,setDescription]= useState('')
    const [date,setDate] = useState('')
    const [priority,setPriority] = useState('High')
    const [category,setCategory] = useState('FrontEnd')
    const [riskLevel,setRiskLevel] = useState('High')
    const [additionalNotes,setAdditionalNotes] = useState('')
    const taskStatus = "todo"
    
    const handleClick = (e) => {
       e.preventDefault()
           
       firebase
       .firestore()
       .collection('createTask')
       .add({
         name,
         description,
         date,
         priority,
         category,
         riskLevel,
         additionalNotes,
         taskStatus
       })
       .then(()=>{
         setName('')
         setDescription('')
         setDate('')
         setPriority('')
         setCategory('')
         setRiskLevel('')
         setAdditionalNotes('')
         props.onClose(false)
       })

    }

    const handleClose = (e) => {
       e.preventDefault()

       props.onClose(false)
    }
    return(
       <MainContainer>
        <SubContainer>
        <TaskHeading>Create New Task</TaskHeading>
        <Form onSubmit={handleClick}>
        <TaskInformation>
            <TaskName>
                <TaskLabel>Task Name</TaskLabel> 
                <TaskInput type='text'value={name} placeholder='Enter your task' onChange={e => setName(e.target.value)} />
            </TaskName>
            <TaskName>
               <TaskLabel>Task Description</TaskLabel>
               <TaskDescription value={description} onChange={ e => setDescription(e.target.value)} ></TaskDescription>
            </TaskName>
            <TaskName>
               <TaskLabel>Due Date</TaskLabel>
               <TaskDate type='date' value={date} onChange={ e=> setDate(e.target.value)} />
            </TaskName>
            <TaskName>
               <TaskLabel>Priority</TaskLabel>
                <TaskSelect onChange={e => setPriority(e.target.value)} value={priority}>
                   <TaskOption>High</TaskOption>
                   <TaskOption>Medium</TaskOption>
                   <TaskOption>Low</TaskOption>
                </TaskSelect>
            </TaskName>
            <TaskName>
               <TaskLabel>Category</TaskLabel>
               <TaskSelect onChange={e => setCategory(e.target.value)} value={category}>
                   <TaskOption>FrontEnd</TaskOption>
                   <TaskOption>BackEnd</TaskOption>
                   <TaskOption>Android</TaskOption>
                   <TaskOption>IOS</TaskOption>
                </TaskSelect>
            </TaskName>
            <TaskName>
               <TaskLabel>Risk Level</TaskLabel>
                <TaskSelect onChange={e => setRiskLevel(e.target.value)} value={riskLevel}>
                   <TaskOption>High</TaskOption>
                   <TaskOption>Medium</TaskOption>
                   <TaskOption>Low</TaskOption>
                </TaskSelect>
            </TaskName>
            <TaskName>
               <TaskLabel>Additional Notes</TaskLabel>
               <TaskNotes value={additionalNotes} onChange={e => setAdditionalNotes(e.target.value)}></TaskNotes>
            </TaskName> 
        </TaskInformation>
        <TaskButtonContainer>
                <Primarybutton onClick={handleClick}> Save</Primarybutton>
                <SecondaryButton onClick={handleClose}>Cancel</SecondaryButton>
        </TaskButtonContainer>
        </Form>
        </SubContainer>
        </MainContainer>
    )
}