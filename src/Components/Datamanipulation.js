import React, { useState } from 'react';
import Preview from './Preview'
import { AiOutlineLoading } from 'react-icons/ai';
import axios from 'axios';

const DataManipulation = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const removeImage = (imageNumber) => {
    if (imageNumber === 1) {
      setImage1(null);
    } else if (imageNumber === 2) {
      setImage2(null);
    }
  };

  const handleImageUpload = (e, setImage, setLoading) => {
    const file = e.target.files[0];

    if (file) {
      setLoading(true);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setLoading(false);
      };

      reader.readAsDataURL(file);
    }
  };


  const [activeimage, setactiveimage] = useState()


  const Previewimage = (image) => {
    setactiveimage(image);
  
    const element = document.getElementById('modal');
    element.classList.remove('hidden');
    element.classList.add('flex', 'popup'); // Add the popup animation class
  };
  
  const hide = () => {
    const element = document.getElementById('modal');
  
    if (element.classList.contains('flex')) {
      element.classList.remove('flex', 'popup'); // Remove the popup animation class
      element.classList.add('hidden');
    }
  };








  const handleButtonClick = async () => {
    document.getElementById('datatext').classList.add('hidden')
    document.getElementById('spin').classList.remove('hidden')

    document.getElementById('datatext').classList.add('hidden')
  document.getElementById('spin').classList.remove('hidden')
    try {
      const originalImage = image1; 
      const editedImage = image2; 
      const response = await axios.get('https://bajajhealthapi.onrender.com/data_manipulation', {
        original_image: originalImage,
        edited_image: editedImage,
      });
  
      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }

  };





  return (
    <div className='bg-gradient-to-r from-[#2d1c5a] to-[#1F1B2A]'>



{/* MOdal  */}

        <div  id='modal' className='hidden w-[100vw] h-[100vh] absolute'>

        <div id='modalback' onClick={hide} className='w-[100vw] h-[100vh] bg-black opacity-60 cursor-pointer absolute z-10 top-0 bottom-0'>
          {/* <p className='text-8xl '>x</p> */}
          
           </div>

        <div className='max-w-[600px] z-20 max-h-[650px]  m-auto relative my-auto flex ' >
            <img src={activeimage} alt="" className='max-w-[650px] z-20 max-h-[650px] bg-black m-auto relative mt-6 '  />

        </div>


    </div>
      

{/* MOdal  */}





    <div className="p-4 h-screen flex justify-center ">
      <div className="text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4 mt-24">Data Manipulation Detector</h1>

        <div className="flex justify-around mt-20  h-[220px]">
          {/* Image 1 */}
          <div className="relative">
            {loading1 && <div className="bg-gray-300 h-2 w-40 absolute bottom-0"></div>}
            {image1 && (
              <>
                <img
                  src={image1}
                  alt="Image 1"
                  className="w-40 h-40 object-cover rounded-lg mb-2"
                  style={{ maxWidth: '180px', maxHeight: '180px', minWidth: '180px', minHeight: '180px' }}
                />
                <button
                  onClick={() => removeImage(1)}
                  className="absolute top-0 right-0 p-1 rounded-full bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 p-[3px] font-bold text-white bg-black rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </>
            )}
            {!image1 && (
              <label className="cursor-pointer block w-[180px] h-[180px] border-2 border-dashed border-white rounded-lg">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, setImage1, setLoading1)}
                  className="hidden"
                />
                <div className="flex flex-col items-center justify-center h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-8 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="text-white">Add Image</span>
                </div>
              </label>
            )}
            {
              image1 &&

          <div onClick={()=>{Previewimage(image1)}} className='text-sm bg-blue-800 w-fit m-auto px-[15px] py-[5px] rounded-md cursor-pointer '>Preview</div>
            }
          </div>

          {/* Image 2 */}
          <div className="relative">
            {loading2 && <div className="bg-gray-300 h-2 w-40 absolute bottom-0"></div>}
            {image2 && (
              <>
                <img
                  src={image2}
                  alt="Image 2"
                  className="w-[180px] h-[180px] object-cover rounded-lg mb-2"
                  style={{ maxWidth: '180px', maxHeight: '180px', minWidth: '180px', minHeight: '180px' }}
                />
                <button
                  onClick={() => removeImage(2)}
                  className="absolute top-0 right-0 p-1 rounded-full bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 p-[3px] font-bold text-white bg-black rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </>
            )}
            {!image2 && (
              <label className="cursor-pointer block w-[180px] h-[180px] border-2 border-dashed border-white rounded-lg">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, setImage2, setLoading2)}
                  className="hidden"
                />
                <div className="flex flex-col items-center justify-center h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-8 w-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="text-white">Add Image</span>
                </div>
              </label>
            )}
            
            {
              image2 &&

          <div onClick={()=>{Previewimage(image2)}} className='text-sm bg-blue-800 w-fit m-auto px-[15px] py-[5px] rounded-md cursor-pointer '>Preview</div>
            }
          </div>

        </div>

        {/* Check Data Manipulation Button */}
        <button
        disabled={!image1 || !image2}
          className="hover:bg-[#483381] shadow-lg w-[230px] m-auto rounded-md px-4 py-2 mt-12 bg-[#3c2677] cursor-pointer transition duration-300 ease-in-out"
          onClick={handleButtonClick}
        >
          <p id='datatext' className=' '>Check Data Manipulation</p>
          
          <AiOutlineLoading id='spin' className='animate-spin font-bold m-auto text-[25px] hidden  '/>
        </button>


      </div>
    </div>
    </div>
  );
};

export default DataManipulation;
