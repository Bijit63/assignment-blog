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

    <div  id='modal' className='hidden w-[100vw] h-[100vh] absolute'>

    <div id='modalback' onClick={hide} className='w-[100vw] h-[100vh] bg-black opacity-60 cursor-pointer absolute z-10 top-0 bottom-0'>
      {/* <p className='text-8xl '>x</p> */}
      
       </div>

  <div className='max-w-[600px] z-20 max-h-[630px]  m-auto relative my-auto flex flex-col  ' >

    <div >
        <img src='' alt="" className='max-w-[650px] z-20 max-h-[610px] bg-black m-auto relative mt-6 '  />

    </div>

  </div>


</div>
  )
}

export default Preview