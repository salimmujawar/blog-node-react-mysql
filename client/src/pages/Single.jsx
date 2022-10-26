import React from "react"
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png"

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/6272/wood-free-wooden-home.jpg?cs=srgb&dl=pexels-kaboompics-com-6272.jpg" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg" alt="" />
          <div className="info">
            <span>Sam</span>
            <p>Posted 2 days ago</p>
          </div>  
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>            
            <img src={Delete} alt="" />
          </div>        
        </div>
        
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vero.</h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil, a laboriosam ducimus iure quam omnis nulla atque vero, pariatur consectetur ipsam cumque, debitis aspernatur necessitatibus esse? Doloribus, placeat est nihil mollitia illum vero architecto nam vel veritatis beatae minima.
          </p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam est fugiat suscipit sapiente iusto pariatur tempore dolorem neque soluta sit? Eveniet totam dolor facere corporis dicta commodi ex aut perspiciatis consequatur atque soluta reiciendis earum maiores debitis, animi tempora magni nobis sequi amet eius molestiae laborum sapiente. Quasi, fuga natus.
          </p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam est fugiat suscipit sapiente iusto pariatur tempore dolorem neque soluta sit? Eveniet totam dolor facere corporis dicta commodi ex aut perspiciatis consequatur atque soluta reiciendis earum maiores debitis, animi tempora magni nobis sequi amet eius molestiae laborum sapiente. Quasi, fuga natus.
          </p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam est fugiat suscipit sapiente iusto pariatur tempore dolorem neque soluta sit? Eveniet totam dolor facere corporis dicta commodi ex aut perspiciatis consequatur atque soluta reiciendis earum maiores debitis, animi tempora magni nobis sequi amet eius molestiae laborum sapiente. Quasi, fuga natus.
          </p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam est fugiat suscipit sapiente iusto pariatur tempore dolorem neque soluta sit? Eveniet totam dolor facere corporis dicta commodi ex aut perspiciatis consequatur atque soluta reiciendis earum maiores debitis, animi tempora magni nobis sequi amet eius molestiae laborum sapiente. Quasi, fuga natus.
          </p>
        </p>
      </div>
      <Menu/>
    </div>
  );
}

export default Single;