import AngularLogo from '../assets/2.png';
import ReactLogo from '../assets/9.png';
import JavaScriptLogo from '../assets/5.png';
import HTML5Logo from '../assets/4.png';
import CSS3Logo from '../assets/3.png';
import TailwindLogo from '../assets/10.png';
import NodeLogo from '../assets/8.png';
import MongoDBLogo from '../assets/6.png';
import Firebase from '../assets/firebase.png';


export default function Skills () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center p-6 md:p-20">
            <div className='mt-4 mb-4 md:mt-0 md:mb-0'>
                <img src={AngularLogo} height={130} width={130}/>
            </div>
            <div className='mt-4 mb-4 md:mt-0 md:mb-0'>
                <img src={ReactLogo} height={150} width={150} />
            </div>
            <div className='content-center mt-4 mb-4 md:mt-0 md:mb-0'>
                <img src={JavaScriptLogo} height={150} width={150} className="content-center" />
            </div>
            <div className='md:mt-8 mt-4 mb-4 md:mb-0'>
                <img src={NodeLogo} height={200} width={200} />
            </div>
            <div className='md:mt-8 mt-4 mb-4 md:mb-0'>
                <img src={HTML5Logo} height={180} width={180} />
            </div>
            <div className='items-center md:mt-14 mt-4 mb-4 md:mb-0'>
                <img src={CSS3Logo} height={140} width={140}/>
            </div>
            <div className='mt-4 mb-4 md:mt-0 md:mb-0'>
                <img src={TailwindLogo} height={200} width={200} />
            </div>
            <div className='mt-4 mb-4 md:mt-0 md:mb-0'>
                <img src={MongoDBLogo} height={200} width={200} />
            </div>
            <div className='md:mt-6 mt-4 mb-4 md:mb-0'>
                <img src={Firebase} height={200} width={200} />
            </div>
        </div>
    )
}