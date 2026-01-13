import { fromJSON } from 'postcss';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateForm = () => {
    const loadedData = useLoaderData()
    const {
        _id,
        image,
        name,
        brandName,
        type,
        price,
        rating,
        Extrarating,
        viewId
      } = loadedData
//     const [selectedFile, setSelectedFile] = useState(null);
//   const [previewImage, setPreviewImage] = useState(image);
 

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       // Handle the selected file
//       // For example, you can display a preview of the image:
//       const reader = new FileReader();
//       reader.onload = () => {
//         setPreviewImage(reader.result); // Set the preview image URL
//       };
//       reader.readAsDataURL(file);

//       // You can also save the file in your component's state for later use, e.g., for form submission:
//       setSelectedFile(file);
//     } else {
//       // Handle the case where no file is selected
//       setPreviewImage(image); // Clear the preview image
//       setSelectedFile(null); // Clear the selected file
//     }
//   };

  const handleUpdate = e =>{
    e.preventDefault()
    const form = e.target
    const NewName = form.Newname.value
    const NewBrand = form.NewBrand.value
    const NewPrice = form.NewPrice.value
    const NewType = form.NewType.value
    const NewRating = form.NewRating.value
    const NewPhoto =  form.NewPhoto.value
    

    const Newdata = {
        NewName,NewPrice,NewBrand,NewType,NewRating, NewPhoto
    }
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`https://tech-world-shop.vercel.app/update/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(Newdata)
    })
        .then(res => res.json())
       .then( value  => {
         console.log(value)
       history.back()
      })
        Swal.fire('Saved!', '', 'success')

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    

  }

 
    return (
        <div className=''>
        <div className='container  mx-auto'>
          <div className="p-5 bg-[#f4f3f0] flex flex-col mx-auto justify-center">
                <h2 className="text-3xl text-center text-[#374151] my-10">Update the Product details</h2>
                   <form onSubmit={handleUpdate} className='flex  flex-col justify-center mx-auto' >
                    <div className="lg:flex items-center  gap-3 ">
                       <div className="flex flex-col gap-2  mb-5">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="px-3 py-2 " defaultValue={name}  name="Newname" placeholder="Product name" />
                       </div>
                       <div className="flex flex-col gap-2 mb-5 lg:w-[205px]">
                           <label htmlFor="Brand">Brand</label>
                        <select id="Brand" name="NewBrand" className="px-3 py-2" defaultValue={brandName}>
                          <option value="Google"  >Google</option>
                          <option value="Apple">Apple</option>
                          <option value="Microsoft">Microsoft</option>
                           <option value="Intel">Intel</option>
                           <option value="Sony">Sony</option>
                         <option value="Samsung">Samsung</option>
                        </select>
                </div>
                    </div>
                    <div className="lg:flex items-center  gap-3 ">
                       <div className="flex flex-col gap-2  mb-5">
                            <label htmlFor="Price">Price</label>
                            <input type="text" defaultValue={price} className="px-3 py-2 "  name="NewPrice" placeholder="Product Price" />
                       </div>
                       <div className="flex flex-col gap-2  mb-5">
                            <label htmlFor="Type">Type</label>
                            <input type="text" className="px-3 py-2 " defaultValue={type}  name="NewType" placeholder="Product Type" />
                       </div>
                    </div>
                    <div className="lg:flex items-center   gap-3 ">
                        <div className="flex flex-col gap-2 lg:w-[420px]  mb-5">
                        <label htmlFor="Rating">Rating</label>
                            <input type="text" className="px-3 py-2"  defaultValue={'5'} name="NewRating" placeholder="Rating" />

                        </div>
                            
                       </div>
                       <div>
      {/* <div className='flex flex-col gap-2 lg:w-[420px] mb-5'>
        <label htmlFor="Photo">Photo</label>
        <input type="file" name="NewPhoto" accept='image/*' onChange={(e)=> handleFileUpload(e)} />
        {
            previewImage && (
                <img src={previewImage} alt="Uploaded Preview" className='mt-2 max-w-[500px] max-h-[200px]'/>
            )
        }
      </div> */}
      <div className='flex flex-col gap-2 lg:w-[420px] mb-5'>
        <label htmlFor="Photo">PhotoUrl</label>
        <input  name="NewPhoto" className="px-3 py-2"  defaultValue={image}  placeholder="Enter photo URL"  />
        
      </div>
    </div>
                     

   <button type='submit' className="py-2 btn bg-[#192655] hover:border-[#192655] text-white border-2 hover:text-[#192655] border-[#331A15] ">Update Product</button>

                    </form>   
            </div>
        </div>
        
    </div>
    );
};

export default UpdateForm;