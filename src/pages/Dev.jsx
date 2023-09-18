//----- IMPORTS -----//
import '../assets/css/Dev.css';

import github from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.svg';
import portfolio from '../assets/images/briefcase.svg';
import email from '../assets/images/email.svg';

//----- EXPORTS -----//
export default function Dev() {

    const emailAddress = 'dev.lainey@gmail.com';

    return (
        <div className='dev'>
            <div>
                <h3>Meet the Developer</h3>
            </div>
            <div>
                <p>Hello, I'm Lainey Creighton, a passionate developer with a unique journey into the world of web development. With a background of over 8 years in hospitality and events, I recently made an exciting transition into software development by earning a full-stack coding certification through UC Berkeley.</p>
                <p>While I may be a recent graduate, I'm already diving into the world of web development with enthusiasm. My current focus lies in JavaScript and React, where I'm honing my skills to create engaging and interactive web experiences. I'm particularly drawn to the art of web design, using CSS to craft visually appealing and user-friendly websites.</p>
                <p>Beyond the screen, I thrive in the great outdoors. When I'm not coding, you can often find me paddle boarding, rafting, camping, hiking, and exploring the beauty of nature. I believe that just like in coding, the best adventures are the ones where you embrace the journey.</p>
                <p>Thank you for visiting my developer page, and feel free to connect with me for networking, collaboration, or to explore the exciting world of web development together.</p>
            </div>
            <div>
                <a href='https://github.com/laineycreighton' target='_blank'><img src={github} alt='github logo' /></a>
                <a href='https://www.linkedin.com/in/lainey-creighton/' target='_blank'><img src={linkedin} alt='linkedin logo' /></a>
                <a href='https://laineycreighton.netlify.app/' target='_blank'><img src={portfolio} alt='briefcase logo' /></a>
                <a href={`mailto:${emailAddress}`} target='_blank'><img src={email} alt='email logo' /></a>
            </div>
        </div>
    )
}