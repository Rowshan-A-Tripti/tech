import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

import Footer from '../../Components/Banner/Footer';
import SecondSection from '../../Components/Banner/SecondSection';
import ThirdSection from '../../Components/Banner/ThirdSection';




const Home = () => {
  const study = useLoaderData()
  const [studyItems, setStudyItems] = useState([]);
  useEffect(() => {
    setStudyItems(study)
  }, [study])

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='bg-black' style={{ backgroundImage: 'url(https://i.ibb.co/LC94N7X/3d-render-rainbow-coloured-low-poly-plexud-design.jpg)' }}>
        <div className='grid lg:pl-96'>
          <p className='text-white pt-40 pl-16'>introduction</p>
          <h1 className='text-white font-semibold pl-16 pb-3 text-3xl'>Overview. </h1>
          <p className='text-white pb-16 pl-16 w-2/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi molestiae esse dicta accusamus culpa nemo impedit minus. Eius, aperiam ducimus rem corrupti vero, impedit fugit velit voluptatum ex modi repudiandae facere blanditiis debitis ad quas libero? Dicta a similique minima ipsum voluptas optio beatae amet velit fuga? Provident eveniet quas labore? Commodi ad voluptatem, ipsa cum laborum nemo. Rerum, quibusdam. Sapiente ipsum rerum sint, debitis dolorem, illo itaque at fugiat architecto quia incidunt numquam labore! </p>
          <div className='grid lg:grid-cols-2 pb-44 pl-16 gap-10 w-2/4'>

            {
              studyItems.map(exam => <Courses key={exam.id} exam={exam}></Courses>)
            }
          </div>
        </div>

      </div>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <Footer></Footer>

    </div>
  );
};

export default Home;