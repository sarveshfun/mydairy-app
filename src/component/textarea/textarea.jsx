








const TextArea = (props)=>{
    //console.log(props)
    

    return(

<textarea className= {props.className} 
onChange={props.onChangeHandler} value={props.value} 
 placeholder={props.placeholder}>
 </textarea>)
 

}

export default TextArea