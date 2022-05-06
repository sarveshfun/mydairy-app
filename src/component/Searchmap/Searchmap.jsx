const  Search =(props)=>{
const search = props.search
const  Delete = props.DeleteItem
const Edit =  props.editItem
console.log(props.editItem)
console.log(props.DeleteItem)

return(
<div>
 {search.map((item)=>{return(
           <div className="list"key ={item.id}>
           <h1 >{item.value}</h1>
           <button onClick={()=>{Delete(item.id)}}>delete</button>
           <button onClick={()=>{Edit(item.id)}} >edit</button>
           </div>)

         
         })}

</div>
)



}

export default Search