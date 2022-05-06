
import './App.css';
import  Input from './component/searchbox/searchbox'
import TextArea from './component/textarea/textarea';


import  Search from   './component/Searchmap/Searchmap'

import { useState} from "react"

function App() {

 const [n,  setn] = useState(0)
 const [Note, SetNotes] = useState([])
 const [value ,SetValue]  = useState("")
 const [edit, setedit] = useState({})
 const [search, setsearch] = useState([])
 const [control , setcontrol] =  useState(false)


     const noteobj = {
       id:"",
       date:'',
       value:"",
       new:"",
       year: '',
       month:''
       

     }

console.log('render')
const input = (event) =>{
  

  const value =  event.target.value;
  console.log(value)
  SetValue(value)
}


const  OnSearch =(e)=> {
  console.log('renderonsearch')
  
  const filtersearch = Note.filter((item)=>{
      return item.value.toLowerCase().includes(e.target.value)
    })
    
    setsearch(filtersearch)
}



const newest =()=>{
  const sortnote  = Note.sort(function(a,b){return b.new-a.new})
    console.log(sortnote)
    setsearch([...sortnote])
}

const oldest =()=>{
  console.log("new")
  const newsortnote  = Note.sort(function(a,b){return a.new-b.new})
    console.log(newsortnote)
    setsearch([...newsortnote])
}


const thisweek =()=>{

  const newthisweek  = Note.sort(function(a,b){return new Date(b.date)- new Date(a.date)})
    console.log(newthisweek)
    setsearch([...newthisweek])
    console.log(...newthisweek)
}
const thisyear =()=>{

  const newthisyear  = Note.sort(function(a,b){return b.year- a.year})
   // console.log(newthisweek)
    setsearch([...newthisyear])
}


const ThisMonth =()=>{

  const newthismonth  = Note.sort(function(a,b){return b.year- a.year})
  console.log(Note)

    setsearch([...newthismonth])
}




const add =() => {


  if(control&& true){
    setcontrol(false)
    console.log("hi from")
   const obj3 ={...edit,...{value:value}}
    console.log(obj3)
   const newFiltr =Note.filter((item)=>{
     return item.id !==edit.id
    })
    

    const arry3 = newFiltr.concat(obj3)
    SetNotes(arry3)
   setsearch(arry3)
    console.log(Note)
    SetValue('')
    
  
  
 }
   else{ console.log(value)
    const newvalue  = n+1
    
    
    const noteobj2 = {...noteobj,...{value:value,new:newvalue,id:Math.random()*1000000,date:new Date(),year:new Date().getFullYear(), month:new Date().getMonth()}}
    setn(newvalue)
    console.log(noteobj2)
    SetNotes([...Note,noteobj2])
   setsearch([...Note,noteobj2])
   // console.log(note)
    SetValue('')

    

  }
}
      




const Delete = (id) =>{
  console.log(id)
    const deleteNote = Note.filter((item)=>{
      return item.id !== id
    

    })
    console.log(deleteNote)
   SetNotes(deleteNote)
    setsearch(deleteNote)
}
    
const Edit =(id)=>{
  const edit = Note.find((item)=>{
    return item.id ===id

  })
  console.log(edit)
  setedit(edit)
 SetValue(edit.value)
 setcontrol(true)

}







    return (
    <div className="App">
      <h1>my diary app</h1>
      <Input className="search-box" changeHandler={(e)=>{OnSearch(e)}} placeholder="search-box"/>
      <TextArea className = "text-area" onChangeHandler = {input} value={value} placeholder="type your notes"/>
    
      <button onClick={add}>add</button>
      <button onClick ={()=>{newest()}}>newwst</button>
      <button onClick={()=>{ThisMonth()}}>thismonth</button>
      <button onClick = {()=>{oldest()}}>oldest</button>
      <button onChange ={()=>{thisweek()}}>thisweek</button>
      <button onClick = {()=>{thisyear()}}>thisyear</button>
       
       <Search search = {search}  DeleteItem={Delete} editItem={Edit}/>
    
          <div>

          
         
        

        
         </div>
    
         </div>
        
         
         
         
      

     
   
  );
}

export default App;
