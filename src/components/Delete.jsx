import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const Delete = () => {
    const handleDelete = (e)=>{
        e.preventDefault();
        const form = e.target
        const data = e.target.productId.value;

        axios.delete(`https://assignment-11-server-six-sage.vercel.app/delete/${data}`)
        .then((res)=>{
           if (res.data.acknowledged) {
                               Swal.fire({
                                   title: 'Success!',
                                   text: 'Product deleted successfully.',
                                   icon: 'success',
                                   confirmButtonText: 'OK'
                               });
                               form.reset();
                           }
        })
        console.log(data);
    }
    return (
        <div>
            <p>Delete product by id</p>
            <form onSubmit={handleDelete}>
                <input className='input' type="text" name='productId'  placeholder='enter your product id'/>
                <button className='btn'>Delete</button>
            </form>
        </div>
    );
};

export default Delete;