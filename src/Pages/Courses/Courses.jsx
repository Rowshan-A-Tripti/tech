
import { Link } from "react-router-dom";


const Courses = ({ exam }) => {

    return (
        <div className="flex items-center gap-3">
            <img className="h-[72px] w-[72px]" src={exam.image}  />
            
            <h2 className="text-center text-white font-bold pr-10 text-xl">{exam.course_name}</h2>
                
                
            
        </div>
    );
};

export default Courses;