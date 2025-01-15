// import React, { useState } from 'react'
// import './Add.css'
// import { assets, url } from '../../assets/assets';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Add = () => {


//     const [image, setImage] = useState(false);
//     const [data, setData] = useState({
//         name: "",
//         description: "",
//         price: "",
//         category: "Salad"
//     });

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();

//         if (!image) {
//             toast.error('Image not selected');
//             return null;
//         }

//         const formData = new FormData();
//         formData.append("name", data.name);
//         formData.append("description", data.description);
//         formData.append("price", Number(data.price));
//         formData.append("category", data.category);
//         formData.append("image", image);
//         const response = await axios.post(`${url}/api/food/add`, formData);
//         if (response.data.success) {
//             toast.success(response.data.message)
//             setData({
//                 name: "",
//                 description: "",
//                 price: "",
//                 category: data.category
//             })
//             setImage(false);
//         }
//         else {
//             toast.error(response.data.message)
//         }
//     }

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data => ({ ...data, [name]: value }))
//     }

//     return (
//         <div className='add'>
//             <form className='flex-col' onSubmit={onSubmitHandler}>
//                 <div className='add-img-upload flex-col'>
//                     <p>Upload image</p>
//                     <input onChange={(e) => { setImage(e.target.files[0]); e.target.value = '' }} type="file" accept="image/*" id="image" hidden />
//                     <label htmlFor="image">
//                         <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
//                     </label>
//                 </div>
//                 <div className='add-product-name flex-col'>
//                     <p>Product name</p>
//                     <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required />
//                 </div>
//                 <div className='add-product-description flex-col'>
//                     <p>Product description</p>
//                     <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Write content here' required />
//                 </div>
//                 <div className='add-category-price'>
//                     <div className='add-category flex-col'>
//                         <p>Product category</p>
//                         <select name='category' onChange={onChangeHandler} >
                            
//                             <option value="Beef">Beef</option>
//                             <option value="Chicken">Chicken</option>
//                             <option value="Pet-feast">Pet Feast</option>
//                             <option value="Beef-Marinate">Beef Marinate</option>
//                             <option value="Beef-Boneless-and-Fatless">Beef Boneless and Fatless</option>
//                             <option value="Beef-Boneless-with-Fat">Beef Boneless with Fat</option>
//                             <option value="Beef-with-Bone">Beef with Bone</option>
//                             <option value="Beef-Undercut">Beef Undercut</option>
//                             <option value="Beef-Extras">Beef Extra's</option>
//                             <option value="Beef-Bone">Beef Bone</option>
//                             <option value="Chicken-with-Skin">Chicken With Skin</option>
//                             <option value="Chicken-without-Skin">Chicken Without Skin</option>
//                             <option value="Boneless-and-Skinless-Chicken">Boneless and Skinless Chicken</option>
//                         </select>
//                     </div>
//                     <div className='add-price flex-col'>
//                         <p>Product Price</p>
//                         <input type="Number" name='price' onChange={onChangeHandler} value={data.price} placeholder='25' />
//                     </div>
//                 </div>
//                 <button type='submit' className='add-btn' >ADD</button>
//             </form>
//         </div>
//     )
// }

// export default Add

import React, { useState } from 'react';
import './Add.css';
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Beef",
        imageUrl: ""
    });

    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const { name, description, price, category, imageUrl } = data;

        if (!name || !description || !price || !category || !imageUrl) {
            toast.error('All fields are required');
            return;
        }

        if (isNaN(price) || price <= 0) {
            toast.error('Invalid price');
            return;
        }

        if (!isValidUrl(imageUrl)) {
            toast.error('Invalid image URL');
            return;
        }

        const payload = {
            name,
            description,
            price: Number(price),
            category,
            imageUrl,
        };

        try {
            const response = await axios.post(`${url}/api/food/add`, payload);
            if (response.data.success) {
                toast.success(response.data.message);
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: data.category,
                    imageUrl: "",
                });
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = error.response?.data?.message || 'Error adding product';
            toast.error(errorMessage);
        }
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;

        if (name === 'price' && (value < 0 || isNaN(value))) {
            toast.error('Price must be a positive number');
            return;
        }

        if (name === 'imageUrl' && value && !isValidUrl(value)) {
            toast.error('Invalid URL');
            return;
        }

        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Image URL</p>
                    <input
                        name='imageUrl'
                        onChange={onChangeHandler}
                        value={data.imageUrl}
                        type="text"
                        placeholder='Enter image URL'
                        required
                    />
                    {data.imageUrl && (
                        <img src={data.imageUrl} alt="Preview" className='image-preview' />
                    )}
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product name</p>
                    <input
                        name='name'
                        onChange={onChangeHandler}
                        value={data.name}
                        type="text"
                        placeholder='Type here'
                        required
                    />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Product description</p>
                    <textarea
                        name='description'
                        onChange={onChangeHandler}
                        value={data.description}
                        rows={6}
                        placeholder='Write content here'
                        required
                    />
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product category</p>
                        <select
                            name='category'
                            onChange={onChangeHandler}
                            value={data.category}
                        >
                            <option value="Beef">Beef</option>
                            <option value="Chicken">Chicken</option>
                            <option value="Pet Feast">Pet Feast</option>
                            <option value="Beef Marinate">Beef Marinate</option>
                            <option value="Chicken Marinate">Chicken Marinate</option>
                            <option value="Beef Steaks">Beef Steaks</option>
                            <option value="Beef Boneless & fatless">Beef Boneless and Fatless</option>
                            <option value="Beef Boneless with Fat">Beef Boneless with Fat</option>
                            <option value="Beef with Bone">Beef with Bone</option>
                            <option value="Beef Extras">Beef Extras</option>
                            <option value="Beef Bone">Beef Bone</option>
                            <option value="Chicken With Skin">Chicken with Skin</option>
                            <option value="Chicken Without SKin">Chicken without Skin</option>
                            <option value="Boneless & Skinless Chicken">Chicken Boneless and Skinless</option>
                            <option value="Best Sellers">Best Sellers</option>
                                
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input
                            type="number"
                            name='price'
                            onChange={onChangeHandler}
                            value={data.price}
                            placeholder='25'
                            required
                        />
                    </div>
                </div>
                <button type='submit' className='add-btn'>
                    ADD
                </button>
            </form>
        </div>
    );
};

export default Add;
