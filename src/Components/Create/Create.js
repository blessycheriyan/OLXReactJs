import React, { Fragment , useContext,useState} from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/FirebaseContext'
import {useHistory} from 'react-router-dom'
const Create = () => {
const history=useHistory()
const {firebase} =useContext(FirebaseContext)
const {user}= useContext(AuthContext)
const [name, setName] = useState('');
const [category, setCategory] = useState('');
const [price, setPrice] = useState('')

  const [image, setImage] = useState(null)
  const date=new Date()
  const handleSubmit=()=>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
        firebase.firestore().collection('products').add({
          name,
        
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        history.push('/')
      })

    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              onChange={(e)=>
              setName(e.target.value)}
              name="name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={(e)=>
                setCategory(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" onChange={(e)=>
              setPrice(e.target.value)} name="price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="250px" height="250px" src={image ? URL.createObjectURL(image):''}></img>
     
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
      
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
