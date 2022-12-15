import React, { useState } from "react";


export default function Home(){
   const [mystyle,setMyStyle]=useState({
        
            backgroundColor:"white",
            color:"black"
              

    })

    const[btn,setBtn]=useState("Enable Ligth mode")
      const handleChangeColor=()=>{
        if (mystyle.color==='white'){
             setMyStyle({
                backgroundColor:"white",
                color:"black"

             })
             setBtn("Enable Dark mode")
            }
            else{
                setMyStyle({
                    backgroundColor:"black",
                    color:"white"
                    
                })
                setBtn("Enable Ligth mode")

        }
    }
      

    // const[date,setdate]=useState(new Date())
  

    return(
        <div className="container" style={mystyle}>
            <div ClassName="accordion" id="accordionExample">
  
  <div ClassName="accordion-item">
    <h2 ClassName="accordion-header" id="headingThree">
      <button ClassName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseThree" ClassName="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div ClassName="accordion-body">
        <strong>This is the third item's accordion body.</strong> 
        It is hidden by default, until the collapse plugin adds the
         appropriate ClassNamees that we use to style each element. 
         These ClassNamees control the overall appearance, as well as the showing and hiding via CSS transitions.
          You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about 
          any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div>
            
     <button ClassNameName='btn btn-primary mx-2'
 style={{backgroundColor:"#ff0040" }}
     onClick={handleChangeColor} >{btn}</button>
     </div>
        </div>
    )
}
