import React from 'react'
import firebase from '../../firebase'

import {
    TaskInfoContainer,
    TaskName,
    DeleteIcon,
    TaskNumber
} from './style'

export default function TaskBoardItem(props){
    const handleDelete = (id) => {
        firebase 
          .firestore()
          .collection('createTask')
          .doc(id)
          .delete()
     }

     const onDragStart = (e,id) => {
        e.dataTransfer.setData('id', id)
    }

    const {item,key} = props

    return(
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
}