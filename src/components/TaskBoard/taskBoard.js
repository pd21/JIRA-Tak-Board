import React  from 'react'
import 'font-awesome/css/font-awesome.min.css';
import firebase from '../../firebase'

import {
    MainContainer,
    ToDoContainer,
    TaskInfoContainer,
    TodoTitle,
    TaskName,
    DeleteIcon,
    TaskNumber,
    ImplementationContainer,
    ImplementTitle,
    BlockedContainer,
    BlockedTitle,
    TestContainer,
    TestTitle
} from './style'



export default function TaskBoard(props){

   const handleDelete = (id) => {
      firebase 
        .firestore()
        .collection('createTask')
        .doc(id)
        .delete()
   }

   const onDragOver = (e) => {
     e.preventDefault()
   }

   const onDragStart = (e,id) => {
     e.dataTransfer.setData('id', id)
   }

   const onDrop= (e, status) =>{
     let id = e.dataTransfer.getData('id')
     debugger
     let tasks = props.taskInfo.filter((task) => {
       if(task.name === id){
           task.taskStatus = status
            firebase
            .firestore()
            .collection('createTask')
            .doc(task.id)
            .update(task)  
       }
       return task
      })
      debugger
   }

    return(
      <MainContainer>
        {/* {console.log('props.taskInfo now' , implemetedTask)} */}
        <ToDoContainer
          className='todo'
          onDragOver={ e => onDragOver(e)}
          onDrop={ e => onDrop(e, "todo")}
        >
          <TodoTitle>TO DO {props.taskInfo.length}</TodoTitle>
          {
            props.taskInfo.map((item, key)=>(
              ( item.taskStatus === 'todo' &&
                <TaskInfoContainer 
                  draggable 
                  className='draggable' 
                  onDragStart={ e => onDragStart(e, item.name)}
                >
                <TaskName>{item.name}</TaskName>
                <DeleteIcon onClick={()=> handleDelete(item.id)}><i className="fa fa-trash-o"></i></DeleteIcon>
                <TaskNumber> TASK {key+1}</TaskNumber>
              </TaskInfoContainer>
            )
            ))
          }
          </ToDoContainer>
          <ImplementationContainer 
            className='droppable' 
            onDragOver={ e => onDragOver(e)}
            onDrop={ e => onDrop(e, "implement")}
          >
            <ImplementTitle>IMPLEMENTATION</ImplementTitle>
            { 
             props.taskInfo.length > 0 && props.taskInfo.map((item, key)=>(
               ( item.taskStatus === 'implement' && 
              <TaskInfoContainer
                draggable 
                className='draggable' 
                onDragStart={ e => onDragStart(e, item.name)}
              >
                <TaskName>{item.name}</TaskName>
                <DeleteIcon onClick={()=> handleDelete(item.id)}><i className="fa fa-trash-o"></i></DeleteIcon>
                <TaskNumber> TASK {key+1}</TaskNumber>
              </TaskInfoContainer>
               )
            ))
          }
          </ImplementationContainer>
          <TestContainer>
            <TestTitle>TEST</TestTitle>
          </TestContainer>
          <BlockedContainer>
            <BlockedTitle>BLOCKED</BlockedTitle>
          </BlockedContainer>
      </MainContainer>
    )
}