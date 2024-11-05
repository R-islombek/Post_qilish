
import './App.css'
import axios from 'axios'
import Post from './Post/Post'
import { message } from 'antd';
import { useState, useEffect } from 'react';
import Modal from './Modal';






function App() {
  // GET funksiya
  const [category, setCategory] = useState([])
  const imgurl = `https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/`
  const getCategory = () =>{
    axios({
      url:'https://autoapi.dezinfeksiyatashkent.uz/api/categories',
      method:`GET`,
    })
    .then((res) =>{
      setCategory(res.data.data)
    })
    .catch((err) =>{
      console.log(err);
    } )
  }
  useEffect(() =>{
    getCategory()
  },[])

  // Delete funksiya
  const deleteCategory = (id) =>{
    const headers = {
      Authorization: `Bearer${id}`,
    }
    axios({
      url: `https://autoapi.dezinfeksiyatashkent.uz/api/categories/${id}`,
      method: 'DELETE',
      headers: headers,
    })
    .then((res)=>{
      message.success("Deleted")
      getCategory();
    })
    .catch((err)=>{
      console.log(err);
      message.console.error("Don't delete")
    })
  }
  // modal
  


  


 

  return (
 <div className="container">
    <Post/>
    <Modal/>
    <div className="header">
      {
        category && category.map((item,index) =>(
          <div key={index}>
            <div className="card">
            <img className="header__img" src={`${imgurl}${item.image_src}`} alt="car"/>
            <p>{item.name_en}</p>
            <p>{item.name_ru}</p>
            <button id="delete" type="button" onClick={() => deleteCategory(item.id)}>Delete</button>
            <button id="edit">Edit</button>
            </div>
          </div>
        ))
      }
    </div>
 </div>

  );
}

export default App



