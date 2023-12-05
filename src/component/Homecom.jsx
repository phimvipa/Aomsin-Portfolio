
import imgMytext from '../images/Mytext.png';
import imgMojime from '../images/Mojime.png';

function Homecom() {
  return (
    <main className='bg-cover w-screen h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300 via-slate-50 to-pink-100 relative scroll-smooth md:scroll-auto'>

    <div className='absolute w-[96%] m-7 -mb-10'>
      <div className=' p-4 pr-10 pb-10 h-screen '>

      <p className='text-right ml-4 text-gray-900 font-semibold text-[1.3rem] font-serif' id='Home1'>Welcome to Aomsin's Portfolio.</p>
      <div className='text-left ml-10 mt-6 absolute '>
          <p className='-mt-5 text-gray-900 text-[2.5rem] font-light -mb-6'>Hello I'm,</p>
          <h1 className='text-[7.0rem] font-bold text-gray-900 drop-shadow-lg [text-shadow:_0_2px_0_rgb(0_0_0_/_30%)]'>Phimvipa</h1>
          <h1 className='text-[7.0rem] font-bold text-gray-900 drop-shadow-lg [text-shadow:_0_2px_0_rgb(0_0_0_/_30%)] -mt-10 '>Vimolroj</h1>
          <p className='text-[2.7rem] -mt-4 font-semibold font-san bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent'>Software Devoloper / Quality Assurance</p>

      </div>

      <div className='flex flex-col-reverse mt-10 h-[87%]'>
      <div className='relative'>
        <img src={imgMytext} className='absolute animate-[spin_8s_linear_infinite] w-[200px] bottom-0 right-0' />
        <img src={imgMojime} className='absolute w-[71px] right-[65px] bottom-[53px]'/>
      </div>
        
      </div>

    </div>
    </div>
  </main>
  )
}

export default Homecom