import { useLoaderData, Link } from "react-router-dom";
import { data } from "../../data/data";

export default function Careers() {
  const careers = useLoaderData();
  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

//loader function
//offline server spinned locally using json-server package
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  if (!res.ok) {
    throw Error("Could not fetch the list of careers");
  }
  return res.json();
};
