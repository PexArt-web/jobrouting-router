import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData()
  return <div className="careers">
    {careers.map(career => (
      <Link to={career.id.toString()} key={career.id}>
        <p>{career.title}</p>
        <p>Based in {career.location}</p>
      </Link>
    ))}
  </div>;
};

export default Careers;

export const careersLoader = async () => {
      try {
        const response = await fetch("http://localhost:4000/Careers")

        if (!response.ok) {
          throw new Error("could not find the specified   resource");
          
        }

        return response.json()
      } catch (error) {
        throw Error('Could not find the specified resource')
      }
}