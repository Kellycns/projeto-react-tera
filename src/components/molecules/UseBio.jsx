import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import config from '../../img/icones/configuracoes.png';

export default function UseBio(props) {
   // const navigate = useNavigate();

   // const[users, setUsers] = React.useState([]);
  //  const[currentUser, setCurrentUser] = React.useState("");
    
  //  const onClick = () => navigate(`/user/${}/edit`)
  return (
    <section className="detalhes" aria-label="informações do perfil">
        <figure className="detalhes_foto" aria-label="imagem de perfil">
            <img src={props.avatar}/>
        </figure>
        <div className="detalhes_info">
            <div className="detalhes_info_container">
                <div className="detalhes_info_nome">
                    <h2 className="nome_perfil" aria-label="nome de usuáro">{props.username}</h2> 
                    <div className="detalhes_botoes">
                        <input type="button" value="Editar perfil" className="botao"/>
                        <Link to=""><img src={config} alt="configurações" className="configuracoes"/></Link>
                    </div>
                    <ul className="detalhes_info_numeros">
                        <li><span>23</span>Publicações</li>
                        <li><span>3.107</span>Seguidores</li>
                        <li><span>1.998</span>Seguindo</li>
                    </ul>
                    <div className="detalhes_info_bio">
                        <h2 aria-label="nome">{props.name}</h2>
                        <p aria-label="bio">{props.bio}</p>   
                    </div>
                </div>      
            </div>
        </div>
    </section>
  )
}
//{users
 //   .map((user) => (
   //   <option key={user.Id} value={user.id}>{`${user.fn} ${user.ln}`}</option>
     // ))}

//      {props.users
  //      .map(user => (
    //    <UserListItem 
      //    key={user.id}
       //   id={user.id} 
        //  src={user.avatar} 
         // name={`${user.fn} ${user.ln}`}
       // />  
      //  ))}  
