import GithubLogo from '../assets/github_logo.png';
import TwitterLogo from '../assets/twitter_logo.png';

export default function Contact() {
    return (
        <div className="grid grid-cols-2 bg-gray-800 md:pt-16 md:pb-16 ">
            <div className="bg-white border-slate-700 border-2 shadow-sm m-16 text-center md:pt-16 md:pb-16 shadow-inner rounded-md">
                <div className='grid grid-rows-1 md:grid-cols-2 mt-4 justify-items-center md:mr-6'>
                    <p className="text-black text-sm font-serif "> Please enter your name </p>
                    <input className="rounded-sm ml-8 bg-slate-200 shadow-inner" type="text"/>
                </div>
                <div className='grid grid-rows-1 md:grid-cols-2 mt-4 justify-items-center md:mr-6'>
                    <p className="text-black text-sm mt-4 font-serif"> Enter your email id </p>
                    <input className="rounded-sm ml-8 bg-slate-200 shadow-inner" type="text"/>
                </div>
                <div className='grid grid-rows-1 md:grid-cols-2 mt-4 justify-items-center md:mr-6'>
                    <p className="text-black text-sm mt-4 font-serif text-justify"> Contact number </p>
                    <input className="rounded-sm ml-8 bg-slate-200 shadow-inner" type="text"/>
                </div>
                <div className='md:mt-6'>
                    <p className="text-black text-sm mt-4 font-serif"> Leave your message for me on my email</p>
                    <input type="text" className="h-20 w-60 rounded-sm mt-4 bg-slate-200 shadow-inner"/>
                    <p> <button className="text-center text-sm pt-1 pb-1 mt-4 rounded-md bg-black text-white w-24">
                            Email Me
                        </button> 
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 bg-white gap-4 p-6 border-slate-700 border-2 shadow-sm m-16 text-center md:pt-16 md:pb-16 shadow-inner rounded-md">
                <div className="bg-white border-slate-900 border-0 shadow-md shadow-slate-300">
                    <img src={GithubLogo} height="90" width="90" />
                    <p className='text-sm font-serif pt-6 antialiased text-justify p-4'> Check my work on Github. There are various projects based on different
                        tech stack that I have worked on. Fellow developers, you can star the respositories that you want to keep updated with.
                    </p>
                </div>
                <div className="bg-white border-slate-900 border-0 shadow-md shadow-slate-300">
                    <img src={TwitterLogo} height="90" width="90" />
                    <p className='text-sm font-serif pt-6 antialiased text-justify p-4'>
                        Follow me on twitter to get updates about my latest work and other tech related tweets where I share
                        about my years of learning and understand, and about my professional journey.
                    </p>
                </div>
            </div>
        </div>
    )
}