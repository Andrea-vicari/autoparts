import React, { useState } from 'react'
import axios from 'axios'
import  {useNavigate} from 'react-router-dom'

const NuovoComponente = () => {

     const [title, setTitle] = useState()
    	const [description, setDescription] = useState()
    	const [file, setFile] = useState()
       const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('file', file)

        axios.post('http://localhost:8080/api/componenti', formData)
        .then(res => {
            if(res.data === "Success") {
                window.location.href = "/"
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