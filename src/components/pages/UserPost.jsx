import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

import { Default } from '../templates'
import { AppLoading } from '../organisms';

import perfil from '../../img/perfil.jpg'
import gato6 from '../../img/gato (6).jpg'

export default function UserPost() {
    const {userId, postId} = useParams();

  const [post, setPost] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts/${postId}`
    ).then((response) => response.json())
    .then(data => {
      setPost(data);
      setIsLoading(false);
    });
  }, [postId, userId]);
  return (
    <div>
        <Default/>
        <div className='edit'>
            <div className="post" aria-label="postagem">
                <div className="postTop">
                    <Link to={"/"} aria-label="autor do post">
                        <img src={perfil} alt="perfil" className="icone_post"/>
                    </Link>
                    <Link to={"/"}><h3>FelinoDeTal</h3></Link>
                </div>
                <div className="postPic" aria-label="conteúdo do post">
                    <img src={post.image}/>
                </div>
                <div className="postItens" aria-label="interagir">
                    <Link to="" aria-label="curtir"><i className="fa-solid fa-heart"></i></Link>
                    <Link to="" aria-label="comentar"><i className="fa-solid fa-comment"></i></Link>
                    <Link to="" aria-label="compartilhar"><i className="fa-solid fa-share"></i></Link>
                    <div className="iten-save">
                        <Link to="" aria-label="salvar post"><i className="fa-solid fa-bookmark"></i></Link>
                    </div>
                    <div className="postStats" aria-label="estatísticas da postagem">
                        <h3>Curtido por .....</h3>
                        <Link to=""><h4>Ver todos os N comentários</h4></Link>
                        <h5>HÁ .... HORAS</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
/*<div className="post" aria-label="postagem">


<div className="postStats" aria-label="estatísticas da postagem">
    <h3>Curtido por .....</h3>
    <Link to=""><h4>Ver todos os N comentários</h4></Link>
    <h5>HÁ .... HORAS</h5>
</div>
</div>*/