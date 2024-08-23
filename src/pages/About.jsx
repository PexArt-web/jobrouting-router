import { useState } from "react"
import { Navigate } from "react-router-dom"


const About = () => {

  const [ user,  setUser ] = useState('pex')

  if(!user) {
    return <Navigate to={'/'} replace = {true}/>
  }

  return (
    <div className="about">
        <h2>About Us</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae incidunt neque dolore omnis, commodi provident sed! Similique dolore ea maxime cupiditate nemo unde ab, voluptate dignissimos, officiis voluptatibus accusamus nesciunt!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ipsam, ab veniam ex animi excepturi enim nemo! Corporis sit eos illo beatae est? Hic eaque, quis dignissimos esse voluptate vel?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, blanditiis eius molestias aliquid nemo repellat voluptate dolores nisi praesentium tempora aliquam omnis delectus error dicta qui aspernatur et fugiat pariatur?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti delectus reprehenderit quidem consectetur nobis quibusdam et, ut ratione eius maiores? Laboriosam, aspernatur soluta velit dolorem voluptas eius ipsa quo laborum.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum accusantium rerum sequi aliquam ullam quam hic repellendus consectetur eligendi id, illum nam neque molestiae exercitationem. Voluptas adipisci assumenda hic quidem?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto hic delectus similique pariatur minima. Omnis enim suscipit, quae delectus, laudantium deserunt dolores, ad illo nostrum a impedit. Aliquid, itaque sint!
        </p>

        <button onClick={()=>{setUser(null)}}>LogOut</button>
    </div>
  )
  
}

export default About
