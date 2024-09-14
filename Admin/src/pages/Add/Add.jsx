import React, {  useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'


const Add = ({url}) => {

    // const url = "http://localhost:4000";
 
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Kashbon"
    })

    const onChangeHandler =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    // useEffect(()=>{
    //     console.log(data);
    // },[data])

    const onSubmitHandler =async(event)=>{
        event.preventDefault();
        const fromData = new FormData();
        fromData.append("name",data.name)
        fromData.append("description",data.description)
        fromData.append("price",Number(data.price))
        fromData.append("category",data.category)
        fromData.append("image",image)
        const response = await axios.post(`${url}/api/food/add`,fromData);
        if(response.data.success){
            setData({
                    name:"",
                    description:"",
                    price:"",
                    category:"Kashbon"
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
            <p>Upload Image</p>
            <label htmlFor="image">
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt=''/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className='add-product-name flex-col'>
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here' />
        </div>
        <div className='add-product-description flex-col'>
            <p>Product description</p>
            <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write description of item' required></textarea>
        </div>
        <div className='add-category-price'>
            <div className='add-category flex-col'>
                <p>Restaurant Name</p>
                <select onChange={onChangeHandler} name='category'>
                    <option value="Kashbon">Kashbon</option>
                    <option value="Carbon">Carbon</option>
                    <option value="Astana">Astana</option>
                    <option value="TSC">TSC</option>
                    <option value="Aimins">Aimins</option>
                    <option value="Bachababa">Bachababa</option>
                    <option value="Habibi">Habibi</option>
                    <option value="Canada">Canada</option>
                </select>
            </div>
            <div className='add-price flex-col'>
                <p>Product price</p>
                <input onChange={onChangeHandler}  value={data.price} type="Number" name='price' placeholder='20tk'/>
            </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add
