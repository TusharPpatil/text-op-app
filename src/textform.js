import React, { useState } from 'react'

function Textform(props) {
     const[text,setText]=useState('Enter text here')

     const HandleUpCase=()=>{
        console.log("upper case changed")
         let newtext=text.toLocaleUpperCase();
         setText(newtext)
     }
      const handleOnchage=(event)=>{
         setText(event.target.value)

      }
      const HandleLoCase=()=>{
        console.log("upper case changed")
         let newtext=text.toLowerCase();
         setText(newtext)
     }
     const HandleReverse=()=>{
        console.log("upper case changed")
         
       
         const arrayStrings = text.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const newtext = reverseArray.join("");
    
         setText(newtext)
     }
     const HandleClear=()=>{
        console.log("upper case changed")
         let newtext=""
         setText(newtext)
     }





     const [mystyle,setMyStyle]=useState({
        
      backgroundColor:"white",
      color:"black"
        

})

const[btn,setBtn]=useState("Enable Ligth mode")
debugger;
const handleChangeColor=()=>{
  if (mystyle.color==='white'){
       setMyStyle({
          backgroundColor:"white",
          color:"black"

       }) 
       setBtn("Enable Dark mode")
       document.title="TextUtitle-Light mode";
      //  setInterval(()=>{
      //   document.title="TextUtils is Amazing Mode";
      //  },2000);
      //  setInterval(()=>{
      //   document.title="Install TextUtils NOW";
      //  },1500);
      }
      else{
        setMyStyle({
              backgroundColor:"black",
              color:"white"
              
            })
            setBtn("Enable Ligth mode")
            
            document.title="TextUtitle -Dark mode";
  }
}
      
const handleCopy=()=>{
var text=document.getElementById("Textarea");
text.select();
navigator.clipboard.writeText(text.value);

}


const handleExtraSpace=()=>{
  //  let newText=text.split('');
  //  setText(newText.join(""))
  let newText=text.replace(/\s+/g, " ");
  setText(newText);

}


const CurrentDate=new Date().toLocaleDateString()

const CurrentTime=new Date().toLocaleTimeString()

  return (
    <div  style={{background:"#ccffcc"}}>
<div className="container mb-3">
  <label htmlFor="myBox" className="form-label text-danger" style={{marginLeft:"20px"}}>
    <h1>{props.heading}</h1>
    </label>
    <span style={{color:"#035754" }} className=' mx-2'><b>Today's Date={CurrentDate}</b></span>
     <span style={{color:"#035754" }}  className=' mx-2'><b>Current Time={CurrentTime}</b></span>
    <button className=' mx-2'
 style={{backgroundColor:"#ff0040" }}
     onClick={handleCopy}  >Copy text</button>
   


  <textarea className="form-control" 
  style={mystyle}
  id="Textarea" rows="8" 
   onChange={handleOnchage} 
  value={text}></textarea>
</div>


<diV style={{marginLeft:"20px"}}>

<button className='btn btn-primary mx-2'
 style={{backgroundColor:"#ff0040"}}
     onClick={HandleUpCase} >Convert to Uppercase</button>
 
 
     
     <button className='btn btn-primary mx-2'
 style={{backgroundColor:"#ff0040" }}
     onClick={HandleLoCase} >Convert to lowerCase</button>


<button className='btn btn-primary mx-2'
 style={{backgroundColor:"#ff0040" }}
     onClick={HandleReverse} >Reverse the Words</button>


     <button className='btn btn-primary mx-2'
 style={{backgroundColor:"#ff0040" }}
     onClick={HandleClear}>Clear Text</button>

<button className='btn btn-primary mx-2'
 style={{backgroundColor:"#ff0040" }}
     onClick={handleChangeColor} >{btn}</button>



<button className='btn btn-primary mx-2'
 style={{backgroundColor:"#ff0040" }}
     onClick={handleExtraSpace} >Remove extra space</button>


     

</diV>

     <div className='my-3' style={{backgroundColor:"#00ff80", textAlign:"center" }}>
         <h1 className='mx-2'> Total Words</h1>
         <p className='mx-2'> total characters  <b>{text.length}</b>    And total Words <b>{text.split(" ").length}</b></p>
         <p className='mx-2'><b>{0.008* text.split(" ").length}</b> Minutes to read</p>
         
     </div>
    </div>
  )
}

export default Textform;
