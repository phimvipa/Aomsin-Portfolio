
function Contactcom() {
  return (
    <footer className="footer p-10 bg-slate-50 pt-10">
        <div>
            <p className='mt-2 mx-8 font-serif text-[2.8rem] text-left font-bold text-gray-900' id='Contact1'>Contact</p>
        </div>
        <nav>
            <header className="footer-title">Email</header> 
            <a href="mailto:phimvipa.vimolroj@gmail.com" className="link link-hover text-[1.3rem] hover:text-purple-400">phimvipa.vimolroj@gmail.com</a> 
        </nav>
        <div>
            <header className="footer-title">Social</header> 
            <div className="grid grid-col gap-2">
              <a href="https://github.com/phimvipa" className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2' >Github</a>
              <a href="https://www.linkedin.com/in/phimvipa-vimolroj/" className='px-10 text-gray-900 bg-gradient-to-r from-purple-300 via-orange-100 to-pink-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-sm py-2.5 text-center me-2 mb-2'>LinkedIn</a>
            </div>
        </div>
    </footer>
  )
}

export default Contactcom