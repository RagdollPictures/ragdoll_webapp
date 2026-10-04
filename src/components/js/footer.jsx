import React from 'react';
import '../style/footer.css'
import Education from './Education';
import Icons from './Icons';

function Footer() {
   

    return (
        <div className='footerWrap'>
            
            <div className='footerContainer'> 
             <Icons />
                    <Education />
                <div className='footerEmail'>emelie.falk.renstrom@gmail.com</div>
                <div className='copyright'>© Ragdoll 2026</div>
            </div>
            
        </div>
    );
}

export default Footer;
