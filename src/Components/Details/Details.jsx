import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Details = () => {
    const [education, setEducation] = useState({});
    const { id } = useParams();
    const detailsLoader = useLoaderData();

    useEffect(() => {
        const isHeaven = detailsLoader.find(details => details.id == id)
        setEducation(isHeaven)
    }, [detailsLoader, id]);

    return (
        <div className="bg-blue-100">
            <Navbar></Navbar>
            <div className="grid p-5 justify-center">
                <img className="w-3/4" src={education.image} />
                <h1 className="py-5 text-gray-700 font-semibold text-4xl">{education.course_name}</h1>
                <p className="pb-2 text-xl font-normal text-gray-700">Price: {education.price}</p>
                <p className="text-xl font-normal text-gray-700">{education.description}</p>
            </div>
        </div>
    );
};

export default Details;