import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color:rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content:center;
  align-items: center;
  box-sizing:border-box;
  top: 0%;
  left:0%;
  position:absolute;
  z-index:3;
`

export const SubContainer = styled.div`
  width:600px;
  height:800px;
  border:2px solid white;
  padding:10px;
  box-sizing:border-box;
  font-family:'Libre Franklin', sans-serif;
  background-color: #3971ac;
 
`

export const TaskHeading = styled.h1`
  text-align: center;
  color: rgba(255,255,255,0.8);
  font-family:'Libre Franklin', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100&display=swap');
`

export const TaskInformation = styled.div`
 padding:10px;
 border-bottom:2px solid rgba(255,255,255,0.8);
`
export const TaskName = styled.div`
  color: #fff;
  display:flex;
  flex-direction:row;
  margin-bottom:20px;
`

export const TaskLabel = styled.div`
  flex:1;
  padding:5px;
  font-size:18px;
  min-width:200px;
`

export const TaskInput = styled.input`
   flex:2;
   padding:8px;
   font-size:16px;
`

export const TaskDescription = styled.textarea`
  flex:2;
  height:151px;
  padding:5px;
  font-size:16px;
  text-transform: capitalize;
`
export const TaskDate = styled.input`
  flex:2;
  padding:8px;
  font-size:16px;
`

export const  TaskSelect = styled.select`
  flex:2;
  padding:8px;
`

export const  TaskOption = styled.option`
 font-size:16px;
 `

export const TaskNotes = styled.textarea`
  flex:2;
  height: 75px;
  font-size:16px;
  text-transform: capitalize;
`

export const TaskButtonContainer = styled.div`
  margin-top: 20px;
  position:relative;
`

export const Primarybutton = styled.button`
  background: none;
  border:2px solid #fff;
  color: #fff;
  width: 150px;
  height:40px;
  margin-left:10px;
  font-size:14px;
  font-weight:bold;
  cursor:pointer;
`

export const SecondaryButton = styled(Primarybutton)`
  position: absolute;
  right: 0;
  margin-right:10px;
  background: #f06060;
  border:none;
`

export const Form = styled.form``