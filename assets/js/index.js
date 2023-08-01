const navBlock = document.querySelector('#nav-block');
const searchContainer = document.querySelector('#searchContainer');
const Links = document.querySelector('#Links')
const user = document.querySelector('#user-menu-button')
const input = document.querySelector('#searchInput');
const searchIcon = document.querySelector('#searchIcon');
searchIcon.addEventListener('click',()=>{
    Links.className='hidden'
    user.className = 'hidden'
    navBlock.className=' flex flex-row flex-wrap items-center justify-around m-auto p-4'
    input.className='w-[60vw] p-4 float-right bg-transparent border border-gray-300 rounded-full transition-all duration-300  focus:ring-2 focus:ring-blue-500';
    
});
searchIcon.addEventListener('focusout',()=>{
    Links.className="bg-white flex flex-col  lg:h-auto h-screen w-full lg:p-0  text-white lg:flex-row lg:space-x-3 lg:bg-[#4D148C] bg-transparent";
    user.className='flex justify-center items-center   rounded-full   ml-8 p-2'
    searchIcon.className='absolute transform text-[20px] top-2 right-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:z-full'
    navBlock.className='w-full-xl flex flex-row flex-wrap items-center lg:justify-center justify-between m-auto p-4'
    input.className='w-0 pl-10 pr-3 float-right py-2 bg-transparent  transition-all duration-300'
})