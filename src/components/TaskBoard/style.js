import styled from 'styled-components'

export const MainContainer = styled.div`
 padding-top: 20px;
 padding-left: 20px;
 margin-top:70px;
 margin-left:10px;
 display: flex;
`

export const ToDoContainer = styled.div`
  border-radius:2px;
  width: 450px;
  background-color: #f5f5f5;
  min-height: 400px;
`
export const TaskInfoContainer = styled.div`
  height:100px;
  margin:10px;
  background-color: #fff;
  border-radius: 2px;
  padding: 15px;
  box-sizing:border-box;
  border:1px solid #abb7b7;
  position: relative;
`

export const TodoTitle = styled.div`
padding: 15px 10px;
font-weight: 600;
color:  #3971ac;
font-size: 16px;
`

export const TaskName = styled.div``

export const DeleteIcon = styled.div`
  position: absolute;
  right:15px;
  bottom: 15px;
  cursor:pointer;
`
export const TaskNumber = styled.div`
  position:absolute;
  bottom: 15px;
  left: 15px;
  color: #abb7b7;
  font-size: 14px;
`
export const ImplementationContainer = styled(ToDoContainer)`
  margin:0 20px;
`
export const ImplementTitle = styled(TodoTitle)`
`
export const BlockedContainer = styled(ToDoContainer)`
margin:0 20px;
`

export const BlockedTitle = styled(TodoTitle)``

export const TestContainer = styled(ToDoContainer)`

`

export const TestTitle = styled(TodoTitle)``