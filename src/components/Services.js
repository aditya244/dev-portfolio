import LandingPage from '../assets/landing-page-responsive.png';
import FullStackWebApp from '../assets/agency-website.png';
import JSApplication from '../assets/js-applications.webp';
import Portfolio from '../assets/portfolio.jpeg';
import AgencyWebsite from '../assets/company-website.webp';

export default function Services () {
    return (
        <div className="grid grid-cols-1 pt-8 md:pb-16 md:mt-16 md:pt-16 bg-gray-800 text-center">
            <p 
                className='text-3xl font-bold text-white tracking-wider font-mono antialiased pb-6'>{"<> Services </>"}</p>
            <p className='text-xs pl-4 pr-4 md:pl-auto md:pr-auto font-light text-white font-mono antialiased text-center '>
                Here's some projects and services that I have worked on 
            </p>
            <p className='text-xs pl-4 pr-4 md:pl-auto md:pr-auto font-light text-white font-mono antialiased text-center '>
                and am open to work with various other projects as per your requirement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 pl-10 pr-10 h-fit pb-16 pt-16 md:pt-24 md:pb-24 gap-4 
            flex justify-center items-center">
                <div className="grid grid-cols-1 h-auto md:h-64 bg-white rounded-md p-4">
                    <div className='pb-2'>
                        <img src={LandingPage} alt="Landing Page" 
                        sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                        />
                    </div>
                    <p className="text-xs text-justify">
                        Building Responsive Landing page website for brands with in page on scroll navigation using latest
                        frontend libaries and providing call to Action features.
                    </p>
                </div>
                <div className="grid grid-cols-1 h-auto md:h-80 bg-white rounded-md p-4">
                    <div className='pb-2'>
                        <img src={AgencyWebsite} alt="Landing Page" 
                        className='w-auto xs:w-48 sm:w-96'/>
                    </div>
                    <p className="text-xs text-justify">
                        Developing a full fledged multiple pages website for a business or brand showcasing their various
                        products, services and features. It can we customised with several UI elements like Dialogues, Gallery,
                        Social Media Intergration, User response form and else.
                    </p>
                </div>
                <div className="grid grid-cols-1 h-auto md:h-96 bg-white rounded-md p-4">
                    <div className='pb-2'>
                        <img src={FullStackWebApp} alt="Landing Page" 
                        // height={220} width={220}
                        className='w-auto xs:w-48 sm:w-96'
                        />
                    </div>
                    <p className="text-xs text-justify">
                        Full Stack Applications built with latest JS framworks/libraries like React JS, Angular, Node
                        and Express. Feature rich applications with user login and sign up along with admin/user data upload
                        functionality with various forms and charts for data handling. Mobile first website with Multiple device
                        and browser support.
                    </p>
                </div>
                <div className="grid grid-cols-1 h-auto md:h-80 bg-white rounded-md p-4">
                    <div className='pb-2'>
                        <img src={JSApplication} alt="Landing Page" 
                        //height={150} width={220}
                        className='w-auto xs:w-48 sm:w-96'
                        />
                    </div>
                    <p className="text-xs text-justify">
                        Applications built using JavaScript libaries like Angular and React built with Firebase for the backend 
                        services, with several features like login, sign up with call to Action features.
                    </p>
                </div>
                <div className="grid grid-cols-1 h-auto md:h-64 bg-white rounded-md p-4">
                    <div className='pb-2'>
                        <img src={Portfolio} alt="Landing Page" 
                        className='w-auto xs:w-48 sm:w-96'
                        //height={200} width={220}
                        />
                    </div>
                    <p className="text-xs text-justify">
                        Featured Portfolio for your business and services, responsive design, with multiple devices and browser
                        support along with Call to Action features.
                    </p>
                </div>
            </div>
        </div>
    )
}