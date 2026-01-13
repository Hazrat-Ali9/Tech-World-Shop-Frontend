import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const handleAddProduct = e =>{
        e.preventDefault()
        const form = e.target
    const name = form.name.value
    const brandName = form.brandName.value
    const price = form.price.value
    const type = form.type.value
    const rating = '★★★★☆'
    const image =  form.image.value
   const NewProduct = {
    name,brandName,price,type,image,rating
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
        fetch('https://tech-world-shop.vercel.app/Product',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(NewProduct)
           })
           .then( res => res.json())
           .then( value => {
            console.log(value)
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
                <h2 className="text-3xl text-center text-[#374151] my-10">Add product</h2>
                   <form onSubmit={handleAddProduct} className='flex  flex-col justify-center mx-auto' >
                    <div className="lg:flex items-center  gap-3 ">
                       <div className="flex flex-col gap-2  mb-5">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="px-3 py-2 "   name="name" placeholder="Product name" />
                       </div>
                       <div className="flex flex-col gap-2 mb-5 lg:w-[205px]">
                           <label htmlFor="Brand">Brand</label>
                        <select id="Brand" name="brandName" className="px-3 py-2" >
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
                            <input type="text"  className="px-3 py-2 "  name="price" placeholder="Product Price" />
                       </div>
                       <div className="flex flex-col gap-2  mb-5">
                            <label htmlFor="Type">Type</label>
                            <input type="text" className="px-3 py-2 "   name="type" placeholder="Product Type" />
                       </div>
                    </div>
                    <div className="lg:flex items-center   gap-3 ">
                        <div className="flex flex-col gap-2 lg:w-[420px]  mb-5">
                        <label htmlFor="Rating">Rating</label>
                            <input type="text" className="px-3 py-2"   name="Extrarating" placeholder="Rating" />

                        </div>
                            
                       </div>
                       <div>
      <div className='flex flex-col gap-2 lg:w-[420px] mb-5'>
        <label htmlFor="Photo">PhotoUrl</label>
        <input  name="image" className="px-3 py-2"    placeholder="Enter photo URL"  />
        
      </div>
      <div className='flex flex-col gap-2 lg:w-[420px] mb-5'>
        <label htmlFor="description">Description</label>
        <input  name="description" className="px-3 py-2"    placeholder="Describe about the product"  />
        
      </div>
    </div>
                     

   <button type='submit' className="py-2 btn bg-[#192655] hover:border-[#192655] text-white border-2 hover:text-[#192655] border-[#331A15] ">Add Product</button>

                    </form>   
            </div>
        </div>
        
    </div>
    );
};

export default AddProduct;