import React from 'react'

import { Link } from 'react-router-dom';


export default function UserPostItem(props) {
  return (
    <Link to={`/user/${props.userId}/post/${props.postId}`}>
    <div className="fotos_galeria">
        <img src={props.image}/>
    </div>
    </Link>

  )
}
