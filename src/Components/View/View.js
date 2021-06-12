import React,{useState,useEffect,useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';

import {PostContext} from '../../store/PostContext'
import './View.css';
function View() {
  const [userdetail, setuserdetail] = useState()
  const {firebase}=useContext(FirebaseContext)
  const {postdetail}=useContext(PostContext)
  
  useEffect(()=>{
    const {userId}=postdetail
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
    res.forEach(doc=>{
      setuserdetail(doc.data())

    });
  })
},[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img  
          src={postdetail.url} 
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postdetail.price} </p>
          <span>{postdetail.name}</span>
          <p>{postdetail.category}</p>
          <span>{postdetail.createdAt}</span>
        </div>

        {userdetail && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userdetail.username}</p>
          <p>{userdetail.phoneno}</p>
        </div> }
      </div>
    </div>
  );
}
export default View;
