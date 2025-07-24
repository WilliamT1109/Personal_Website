import React from 'react'
 /* bg-cover bg-center bg-no-repeat
    "style={{ backgroundImage: "url('/Tnhf.gif')" }}  bg-white/10*/
const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className='container max-w-4xl mx-auto text-center z-10 '>
            <div className="absolute inset-0 z-0" />
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in'>
                William Thibault
                </h1>
                <p className="text-lg md:text-xl max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    I specialize in managing servers, networking, and infrastructure through code. 
                    My focus is on building scalable, automated systems that run reliably and efficiently.
                </p>
            </div>
            <div className='flex gap-5 p-3 items-center justify-center'>
                <a href="https://www.linkedin.com/in/william-thibault-5390ba326/" 
                 className='text-3xl text-blue-700'>
                    <i class="uil uil-linkedin"></i>
                </a>

                 <a href="https://github.com/WilliamT1109/" 
                className='text-3xl text-gray-900'>
                    <i class="uil uil-github"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home