import portfolioPic from '../assets/portfolio-pic.jpg'

export default function Container () {

    const portfolio_pic = portfolioPic;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:pb-40 md:pt-40
            bg-gradient-to-r from-gray-700 to-white-100">
            <div className='w-50 flex flex-col mt-24 ml-6 mb-10 md:ml-10 xl:ml-16'>
                <h1 
                className="text-3xl text-white text-left
                    font-bold"> Hello, I am Aditya! </h1>
                <p className="text-left text-white pt-5  text-sm">
                    I sip coffee, and code web applications. Have 10+ years of experience as web developer, 
                    and have been building production ready applications since last 6+ years in my corporate experience.
                </p>
                <button className="text-center text-sm pt-1 pb-1 mt-4 rounded-md bg-white w-24">Hire Me!</button>
            </div>
            <div className='grid justify-center content-center mt-10 md:mt-16 ml-6 mb-10'>
                <div className='rounded-full' 
                    style={{ backgroundImage: `url(${portfolio_pic})`, height: 250, width: 250, backgroundSize: 250 }}>
                    
                </div>
            </div>
        </div>
    )   
}
// add a div instead of image and add the image as the background color
// will resolve the flex issue as well as border radius