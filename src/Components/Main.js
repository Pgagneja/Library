import React ,{useState} from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const[search,setSearch]=useState("")
    const[bookData,setData]=useState([])
    const searchBook=(evt)=>{
        if(evt.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'s&key=AIzaSyCfJA71urk7K8QD9sN3mAui1Y9pW2AB5r4'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
          <div className="header">
            <div className="row1">
                <h1>A room without books is like<br/> a body without soul</h1>
            </div>
            <div className="row2">
                <h2>Find Your Books</h2>
                <div className="search">
                    <input type="text" placeholder="Enter Your Book Name"
                    value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchBook}/>
                    <button><i class="fa-solid fa-magnifying-glass" ></i></button>
                </div>
                <img src="./images/bg2.png"/>
            </div>
          </div>
          <div className="container">{
            <Card book={bookData}/>
            }
          </div>
        </>
    )
}
export default Main;