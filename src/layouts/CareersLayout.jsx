import { Outlet } from "react-router-dom"


const CareersLayout = () => {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae optio ducimus saepe sequi rerum quisquam, quae iste? Enim, repudiandae eaque adipisci voluptatibus, nihil eum sequi nobis quia modi nulla provident?</p>

        <Outlet/>
    </div>
  )
}

export default CareersLayout
