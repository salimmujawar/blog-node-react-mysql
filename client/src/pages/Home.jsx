import React from "react"
import { Link } from "react-router-dom";

const Home = () => {

  const posts = [
    {
      id:1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate esse quibusdam dolor. Rerum, impedit laborum. Dolore, ex libero quis sequi porro qui. Molestiae culpa aliquam mollitia error totam iure alias sapiente cumque voluptatum odio, id atque, ratione doloribus aliquid!",
      img: "https://images.pexels.com/photos/6272/wood-free-wooden-home.jpg?cs=srgb&dl=pexels-kaboompics-com-6272.jpg&fm=jpg&_gl=1*7f5w2x*_ga*MTEzNzUyNTc0LjE2NjY2OTc0MDc.*_ga_8JE65Q40S6*MTY2NjY5NzQwOC4xLjEuMTY2NjY5NzQxNi4wLjAuMA.."
    },
    {
      id:2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate esse quibusdam dolor. Rerum, impedit laborum. Dolore, ex libero quis sequi porro qui. Molestiae culpa aliquam mollitia error totam iure alias sapiente cumque voluptatum odio, id atque, ratione doloribus aliquid!",
      img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg&_gl=1*1f27hoo*_ga*MTEzNzUyNTc0LjE2NjY2OTc0MDc.*_ga_8JE65Q40S6*MTY2NjY5NzQwOC4xLjEuMTY2NjY5NzUyNy4wLjAuMA.."
    },
    {
      id:3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate esse quibusdam dolor. Rerum, impedit laborum. Dolore, ex libero quis sequi porro qui. Molestiae culpa aliquam mollitia error totam iure alias sapiente cumque voluptatum odio, id atque, ratione doloribus aliquid!",
      img: "https://images.pexels.com/photos/6272/wood-free-wooden-home.jpg?cs=srgb&dl=pexels-kaboompics-com-6272.jpg&fm=jpg&_gl=1*7f5w2x*_ga*MTEzNzUyNTc0LjE2NjY2OTc0MDc.*_ga_8JE65Q40S6*MTY2NjY5NzQwOC4xLjEuMTY2NjY5NzQxNi4wLjAuMA.."
    },
    {
      id:4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate esse quibusdam dolor. Rerum, impedit laborum. Dolore, ex libero quis sequi porro qui. Molestiae culpa aliquam mollitia error totam iure alias sapiente cumque voluptatum odio, id atque, ratione doloribus aliquid!",
      img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg&_gl=1*1f27hoo*_ga*MTEzNzUyNTc0LjE2NjY2OTc0MDc.*_ga_8JE65Q40S6*MTY2NjY5NzQwOC4xLjEuMTY2NjY5NzUyNy4wLjAuMA.."
    },
    {
      id:5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate esse quibusdam dolor. Rerum, impedit laborum. Dolore, ex libero quis sequi porro qui. Molestiae culpa aliquam mollitia error totam iure alias sapiente cumque voluptatum odio, id atque, ratione doloribus aliquid!",
      img: "https://images.pexels.com/photos/6272/wood-free-wooden-home.jpg?cs=srgb&dl=pexels-kaboompics-com-6272.jpg&fm=jpg&_gl=1*7f5w2x*_ga*MTEzNzUyNTc0LjE2NjY2OTc0MDc.*_ga_8JE65Q40S6*MTY2NjY5NzQwOC4xLjEuMTY2NjY5NzQxNi4wLjAuMA.."
    }

  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;