import React from 'react';
import "../ContactOwner/ContactOwner.css";
import blockchain from "../../Assets/bc.jpg";
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const ContactOwner = () => {
    return (<>
        <nav>
            <div className='ContactOwnerNavbar'>
                <h1><i className="fas fa-1x fa-angle-left"></i>Back</h1>
                <h1>Login</h1>
            </div>
        </nav>
        <div className='Main_div'>
            <div>
                <img className='block_image' src={blockchain} alt='Blockchain'/>
            </div>
            <div>
                <p>
                    Enter the Private Key Or Connect your Metamask Wallet
                </p>
            </div>
            <div>
                <input className='Entity' type="password" name="Private_Key" placeholder='Private Key'/>
            </div>
            <div>
                <button className='conti_btn'>Continue</button>
            </div>
        </div>
    </>)

};

export default ContactOwner;
