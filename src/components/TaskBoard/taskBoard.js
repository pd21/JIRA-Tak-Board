import React  from 'react'
import 'font-awesome/css/font-awesome.min.css';
import firebase from '../../firebase'
import TaskBoardItem from '../TaskBoardItem/taskBoardItem'

import {
    MainContainer,
    ToDoContainer,
    TodoTitle,
    ImplementationContainer,
    ImplementTitle,
    BlockedContainer,
    BlockedTitle,
    TestContainer,
    TestTitle
} from './style'



export default function TaskBoard(props){

   const onDragOver = (e) => {
     e.preventDefault()
   }

   const onDrop= (e, status) =>{
     let id = e.dataTransfer.getData('id')
     props.taskInfo.filter((task) => {
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
                 <TaskBoardItem item={item} key={key} />
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
               <TaskBoardItem item={item} key={key} />
              )
            ))
          }
          </ImplementationContainer>
          <TestContainer
            onDragOver={ e => onDragOver(e)}
            onDrop={ e => onDrop(e, "test")}
          >
            <TestTitle>TEST</TestTitle>
            { 
            props.taskInfo.length > 0 && props.taskInfo.map((item, key)=>(
              ( item.taskStatus === 'test' && 
               <TaskBoardItem item={item} key={key} />
              )
            ))
          }
          </TestContainer>
          <BlockedContainer
            onDragOver={ e => onDragOver(e)}
            onDrop={ e => onDrop(e, "blocked")}
          >
            <BlockedTitle>BLOCKED</BlockedTitle>
            { 
            props.taskInfo.length > 0 && props.taskInfo.map((item, key)=>(
              ( item.taskStatus === 'blocked' && 
               <TaskBoardItem item={item} key={key} />
              )
            ))
          }
          </BlockedContainer>
      </MainContainer>
    )
}