import React,{useState,useEffect,useContext} from 'react';
import {FirebaseContext} from '../../store/FirebaseContext'

import {PostContext} from '../../store/PostContext'
import Heart from '../../assets/Heart';
import './Post.css';
import {useHistory} from 'react-router-dom'
function Posts() {
const{firebase}=useContext(FirebaseContext)
const[products,setProduct]=useState([])
const {setpostdetail} = useContext(PostContext)
const history = useHistory()
useEffect(() => {
 firebase.firestore().collection('products').get().then((snapshot) =>{
   const allposts = snapshot.docs.map((product) => {
     return{
       ...product.data(),
       id: product.id

     }
   })
   setProduct(allposts)
   console.log(allposts)

 } )

   
 
}, [])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
       {products.map(product=>{
         return (
       <div className="card"
       onClick={()=>{
       setpostdetail(product)
       history.push('/view')
       }}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div> 
         )
       })
          }
      
        </div>
    
      </div>
       
      <div className="recommendations">
     
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/shoes1.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 2100</p>
              <span className="kilometer">Shoes</span>
              <p className="name"> Celine Triomphe</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/phone1.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 10,999</p>
              <span className="kilometer">Phoner</span>
              <p className="name">  Redmi Note 7 Pro 64gb</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/guitar.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 4,000</p>
              <span className="kilometer">Guitar</span>
              <p className="name"> Brown Classical  Guitar</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/watch.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 2500</p>
              <span className="kilometer">Smart Watches</span>
              <p className="name"> ZUCCA I5 Watches Black</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/speaker.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 2,799</p>
              <span className="kilometer">Bluetooth speakerr</span>
              <p className="name">Amazon ECHO DOT</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
       
          
      
        </div>
        
      </div>
         
      
 
    </div>
 
  );
}

export default Posts;
