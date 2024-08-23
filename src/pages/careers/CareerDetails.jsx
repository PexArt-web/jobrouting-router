import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  // const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location} </p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          expedita? Laborum harum, nostrum culpa nisi illo iure eius nemo odit
          ullam eum nesciunt fuga error doloremque quae illum voluptas porro!
        </p>
      </div>
    </div>
  );
};

export default CareerDetails;

// loader function

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  try {
    const response = await fetch("http://localhost:4000/Careers/" + id);

    if (!response.ok) {
      throw Error("Could not find that career");
    }

    return response.json();
  } catch (error) {
    throw Error("could not find the specified resource")
  }
};
