import React from 'react'

const Preview = (props) => {

    
//   const [isActive, setIsActive] = useState(false);


    const hide=()=>{
        
        const element = document.getElementById('modal');

    // Check if the element has the class, and toggle accordingly
    if (element.classList.contains('block')) {
      element.classList.remove('block'); // Remove the class
      element.classList.add('hidden'); // Add the class
    
    } 
    }
  return (

    <div id='modal' className={`${props.display} w-[100vw] h-[100vh] absolute `}>

        <div onClick={hide} className='w-[100vw] h-[100vh] bg-black opacity-20 cursor-pointer absolute z-10 top-0 bottom-0'> </div>

        <div className='w-[500px] z-20 h-[650px] bg-green-800 m-auto relative mt-6 '>
            <img src={props.image} alt="" />

        </div>


    </div>
  )
}

export default Preview