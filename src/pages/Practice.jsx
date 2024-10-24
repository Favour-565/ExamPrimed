import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Footer from '../components/common/Footer';
import PracticeExam from '../components/Exams/PracticeExam';
import BackButton from '../components/Exams/BackButton';


const exams = [
  { title: 'COMMON ENTRANCE', imageSrc: '/images/commonEntrance.png', path: '/subjects/' },
  { title: 'BECE', imageSrc: '/images/bece.png', path: '/subjects/' },
  { title: 'NECO', imageSrc: '/images/neco.png', path: '/subjects/' },
  { title: 'WAEC', imageSrc: '/images/waec.png', path: '/subjects/' },
  { title: 'GCE', imageSrc: '/images/gce.png', path: '/subjects/' },
  { title: 'JAMB', imageSrc: '/images/jamb.png', path: '/subjects/' },
  { title: 'IELTS', imageSrc: '/images/ielts.png', path: '/subjects/' }
];

function Practice() {
  return (
    <main className="flex overflow-hidden relative flex-col pt-5" style={{ backgroundImage: `url('/images/profilebg.svg')` }}>
      <div className="flex relative flex-col m-auto w-full max-w-[1300px] max-md:max-w-full">
        <header className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          <img loading="lazy" src="/images/logo (2).svg" alt="Logo" className="object-contain shrink-0 self-start max-w-full aspect-[2.43] w-[107px]" />
          <div className="flex-auto ml-8 self-end mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col ml-24 w-9/12 max-md:ml-0 max-md:w-full">
                <h1 className="self-stretch mx-auto my-auto text-4xl font-semibold text-teal-700 tracking-[18px] max-md:mt-10">
                  SELECT EXAM
                </h1>
              </div>
              <div className="flex flex-col mr-[320px] w-3/12 max-md:ml-0 max-md:w-full">
                <img loading="lazy" src="/Icons/GoIcon.png" alt="Decorative element" className="object-contain grow shrink-0 max-w-full aspect-[1.14] w-[122px] max-md:mt-8" />
              </div>
            </div>
            <BackButton/>
          </div>
        </header>

        <section className="self-center mr-16 mt-16 w-full max-w-[985px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {exams.slice(0, 3).map((exam, index) => (
              <Link key={index} to={exam.path}>  {/* Add Link to navigate */}
                <PracticeExam title={exam.title} imageSrc={exam.imageSrc} />
              </Link>
            ))}
          </div>
        </section>

        <section className="self-center mr-16 mt-8 w-full max-w-[985px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {exams.slice(3, 6).map((exam, index) => (
              <Link key={index + 3} to={exam.path}>  {/* Add Link to navigate */}
                <PracticeExam title={exam.title} imageSrc={exam.imageSrc} />
              </Link>
            ))}
          </div>
        </section>

        <section className="flex relative flex-col ml-[7rem] mt-8 pb-28 max-w-full text-lg font-bold text-white whitespace-nowrap rounded-xl aspect-[1.603] w-[295px] max-md:ml-2.5">
          <Link to={exams[6].path}> {/* Add Link to navigate */}
            <PracticeExam title={exams[6].title} imageSrc={exams[6].imageSrc} />
          </Link>
        </section>
      </div>

      <Footer />
    </main>
  );
}

export default Practice;
