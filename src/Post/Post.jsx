
import React from 'react';
import axios from 'axios';
import './Post.css'
import { message } from 'antd';
 function Post() {

   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTczNzkzNTUtZDNjYi00NzY1LTgwMGEtNDZhOTU1NWJiOWQyIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImlhdCI6MTcxNTAwNjI0OCwiZXhwIjoxNzQ2NTQyMjQ4fQ.uMRbDZduB_z8LXgdTho8kBggg9Zrz6SNCwqmFcas10E';


    const createCategory =(e) =>{
        e.preventDefault();
        const name_ru = document.getElementById("name_ru").value;
        const name_en = document.getElementById("name_en").value;
        const images = document.getElementById("images").files[0];
        const formData = new FormData();
        formData.append("name_en",name_en)
        formData.append("name_ru",name_ru)
        formData.append("images",images)
    
    const headers = {
        Authorization: `Bearer ${token}`,
    };
        axios({
            url:'https://autoapi.dezinfeksiyatashkent.uz/api/categories',
            method:'POST',
            data:formData,
            headers:headers,
        })
        .then((res) => {
            message.success("Joylandi")
            getCategory();
        })
        .catch((err) =>{
            console.log(err);
            message.err("Xatolik bo'ldi")
        })

    }

    return(
        <div className="form">
            <form onSubmit={createCategory}>
                <input type="text" id="name_en" placeholder="English name"/>
                <input type="text" id="name_ru" placeholder="Russian name"/>
                <input type="file" id="images"/>
                <button id="btn" type="Submit">Send</button>
            </form>
        </div>
    )

}
export default Post