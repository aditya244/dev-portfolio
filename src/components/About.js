import DeveloperPoster from '../assets/developer.jpeg'

export default function About () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="grid-rows-2">
                <div>
                    <img src={DeveloperPoster} className="md:h-auto"/>
                </div>
                <div>
                    <p className='text-2xl font-bold pt-8 pb-8'>
                        Aditya Sinha
                    </p>
                    <p>
                        <button 
                            className="text-center text-sm pt-1 pb-1 mt-4 rounded-md bg-black text-white w-24">
                                Email Me
                        </button> 
                    </p>
                    <p>
                        <button className="text-center text-sm p-2 pt-1 pb-1  mt-4 rounded-md bg-black text-white">
                            @sinha.aditya244@gmail.com
                        </button>
                    </p>

                </div>
            </div>
                <div className="grid grid-cols-1 p-6 md:pb-12 md:pt-16 text-left w-auto text-justify 
                    md:pr-10 text-md md:ml-auto md:mr-auto antialiased font-serif leading-8 tracking-wide">
                    <div className="">
                        <h2 className="text-center text-3xl font-bold pb-8 pt-8 md:pt-0">About Me!</h2>
                        <p className="pb-8">Hello!</p>
                        <p>Well, I am a professional Frontend Developer and have been working from the times of jQuery and BOOTSTRAP
                            and have now evolved to working with Angular and React JS, JavaScript's latest framworks and libraries.
                            I have been working in corporate for over 6+ years now, and have worked in service based as well as large
                            product bases MNCs.
                        </p>
                        <p>
                            I have around 3+ years of experience with Angular and around 3 years of experience working with React JS. 
                            In my overall carreer, have worked on several proejcts, built them from scratch, rewamped some, redo a few.
                        </p>
                        <p className="pt-8">So, that's all about me.</p>
                        <p className='font-bold pt-4'> Happy Scrolling!</p>
                    </div>
                </div>
        </div>
    )
}