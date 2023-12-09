import CV from '../assets/CV.pdf';
import imgAomsin from '../images/Aomsinmain.jpg'
import Githubicon from '../assets/Githubicon.svg';
import Linkicon from '../assets/Linkedinicon.svg';

function Aboutmecom() {
  return (
  <main className='relative bg-cover w-screen h-screen bg-slate-50'>

    <div className=' h-screen w-[99%] mx-auto'>
      <div className='grid grid-cols-2 gap-5 mx-auto w-[95%] h-[100%] mt-10'>

        <div className='mt-10 pl-[50px]'>

            <h2 className='flex font-bold font-serif text-[2.6rem] text-left mt-10 text-gray-900' id='Aboutme1'>About me</h2>
            <h4 className='font-bold text-[1.7rem] font-serif text-left mt-5'><span className='underline decoration-[#ee9bfff3] '>Phimvipa Vimolroj</span> / Aomsin / 26</h4>
            <h3 className='text-[1.5rem] text-left font-extralight'>/phimph̒ wip̣hā wiml rocn̒/ <span className='italic font-normal'>noun.</span></h3>

            <p className='pt-5 text-[1.3rem] text-left font-light'>Someone who enjoys drinking Thai tea with less sugar. likes reading books,
            enjoys drawing and want to become a <span className='font-semibold italic'>software developer.</span></p>

          <div className='mt-7'>
            <a className="btn relative py-2 px-8 text-gray-900 text-base font-semibold rounded-[50px] overflow-hidden bg-gray-50 transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-gray-50 hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-orange-200 before:to-purple-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0" href={CV} title="CV" download>Download CV</a>
          </div>

          <div className=' p-[97px] border-2 border-gray-900 mt-[40px] rounded-2xl'>
            <div className='text-left -mt-20 -ml-20 absolute font-sans'>
              <p className='font-bold text-gray-900 text-[22px] text-left'>Skills</p>

                <div className='mt-3 font-normal text-gray-900 text-[17px] text-left'>
                  <p>Tect Skills : HTML / CSS / JS / React / NodeJS / ExpressJS / MongoDB / SQL / Git</p>
                  <p>R / Python / PowerBI</p>
                  <p>Soft Skills : Growth Mindset / Problem-Solving / Empathy / Planning</p>
                  <p>Etc. : Drawing (Digital & Watercolor) / Figma / Baking</p>
                </div>

            </div>
              
          </div>
        </div>

          <div className='flex justify-center'>
              <div>
                  <img src={imgAomsin} className='rounded-[50%] h-[410px] w-[410px] mt-[90px] shadow-lg'/>
              </div>

              <div className='absolute gap-8 flex flex-row bottom-[150px]'>
                  <a href='https://github.com/phimvipa'><img src={Githubicon} className='w-[45px]'/></a>
                  <a href='https://www.linkedin.com/in/phimvipa-vimolroj/'><img src={Linkicon} className='w-[47px]'/></a>
              </div>             

              <div className='absolute bg-gray-900 w-[650px] p-0.5 bottom-[110px] left-[757px] hover:animate-ping'></div>

          </div>

     </div>
    </div>
  </main>
  )
}

export default Aboutmecom