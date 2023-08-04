import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './details.css'

const Post = () => {

    const {id} = useParams()
    const [post,setPost] = useState(null)

    useEffect(()=> {
        axios.get(`https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts/${id}`)
        .then((response) => {
            setPost(response.data)
        })
    },[id])

  return (
    <div className="post-details">
    <img src={post?.cover} alt={post?.title} className="post-cover" />
    <h2 className="post-title">{post?.title}</h2>
    <p className="post-description">{post?.description}</p>
    <p className="post-date">Created at: {post?.createdAt}</p>
  </div>
  )
}

export default Post