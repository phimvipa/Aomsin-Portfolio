import Loveicon from '../assets/18bitlove.svg';

function Expercom() {
  return (
    <main className='relative bg-cover w-screen h-screen bg-slate-50 '>

      <div className='absolute h-[100%] w-[98%] mx-auto'>
        <div className='grid grid-cols-2 gap-5 grid-flow-col m-[50px] mt-[65px]'>
            <div className='ml-10 bg-gradient-to-r from-violet-100 to-pink-200 w-[100%] h-full rounded-3xl '>

              <div className="text-left mt-6 absolute">
                  <p className='mx-8 mt-5 font-serif text-[2.7rem] text-left font-bold text-gray-900' id='Exper1'>Experience</p>
              
              </div>

               <div className="p-9 mt-[115px] text-right mr-3 font-bold text-[4.1rem] uppercase text-gray-50">
                  <p>Life too Short,</p>
                  <p>but it is wide</p>
                  <p>This too shall pass.</p>

                  <img src={Loveicon} className='w-[45px] h-[45px]'></img>
               </div>
            </div>

            <div className='bg-pink-800 p-8 rounded-3xl shadow-xl mr-[65px]'>
              <div>
                    <h2 className='font-bold text-[1.8rem] text-left text-stone-50 underline decoration-pink-400'>Education</h2>

                    <p className='pt-3 text-[1.4rem] text-left font-semibold text-stone-50'>Generation Thailand</p>
                    <p className='text-[1.2rem] text-left font-light text-stone-50'>Junior Software Devoloper Bootcamp</p>

                <div className='bg-slate-50 rounded-lg pb-2 pt-1 mt-3'>
                    <p className='pt-2 text-center text-[1.050rem] font-normal text-gray-900'>Tech Skills : HTML / CSS / JS / React / NodeJS / ExpressJS / MongoDB / SQL / Git</p>
                    <p className='pt-4 text-center text-[1.1rem] font-normal text-gray-900'>Tools : Figma / Postman / Power BI / Visual Studio Code</p>
                    <p className='pt-4 text-center text-[1.1rem] font-normal text-gray-900'>Soft Skills : Teamwork / Proactiveness / Time Management / Growth Mindset</p>
                </div>

                    <p className='pt-3 text-[1.4rem] text-left font-semibold text-stone-50'>Ramkhamhaeng University</p>
                    <p className='text-[1.2rem] text-left font-light text-stone-50'>English major, Faculty of Humanities / In Progress</p>

                <div className='pb-2 pt-1 mt-7'>
                    <p className='font-bold text-[1.8rem] text-left text-stone-50 underline decoration-pink-400'>Experience</p>
                    <p className='pt-3 text-[1.4rem] text-left font-semibold text-stone-50'>Specialty Barista</p>
                    <p className='text-[1.2rem] text-left font-light text-stone-50'>RIM Bingsu & Coffee Bar / Nov 2022 - Jan 2023</p>
                </div>
              </div>
          </div>
        </div>
        </div>
    </main>
  )
}

export default Expercom