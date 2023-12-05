
function Navbar() {
  return (
    <nav className="sticky items-start top-0 flex justify-center py-4 bg-slate-50">
      <div className="absolute bg-pink-200 rounded-full p-[100px] left-[550px] blur " ></div>
      <div className="absolute bg-purple-200 rounded-full p-[100px] bottom-[1px] blur"></div>
            
              <ul className="relative items-start flex justify-between gap-x-7 font-sans font-semibold text-[18px] text-gray-900 ">
                 <li><a href='#Home1' className="hover:underline hover:text-purple-700">Home</a></li>
                 <li><a href="#Aboutme1" className="hover:underline hover:text-purple-700">About me</a></li>
                 <li><a href="#Exper1" className="hover:underline hover:text-purple-700">Experience</a></li>
                 <li><a href="#Projects1" className="hover:underline hover:text-purple-700">Projects</a></li>
                 <li><a href="#Contact1" className="hover:underline hover:text-purple-700">Contact</a></li>
              </ul>

              
              
    </nav>

  )
}

export default Navbar