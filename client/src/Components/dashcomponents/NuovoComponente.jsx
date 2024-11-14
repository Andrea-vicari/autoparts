import React, { useState } from 'react'
import axios from 'axios'
import  {useNavigate} from 'react-router-dom'

const NuovoComponente = () => {

    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/api/componenti', {name, author, imageUrl})
        .then(res => {
            if(res.data.added) {
                navigate('/dashboard')
            }
            else {
                console.log(res)
            }
        })
        .catch(err => console.log(err))
      }

  return (
    <div className="post_container">
      <div className="post_form">
        <form onSubmit={handleSubmit}>
            <h2>Create Post</h2>
          <input type="text" placeholder="Enter Title" onChange={e => setTitle(e.target.value)}/>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            placeholder="Enter Description"
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <input type="file" className="file" placeholder="Select File"
          onChange={e => setFile(e.target.files[0])}/>
          <button>Post</button>
        </form>
      </div>
    </div>
  )
}

export default NuovoComponente