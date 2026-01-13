import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Footer = () => {
    const { dark } = useContext(AuthContext)
    return (
        <div>
            <footer className={`footer p-10 ${dark? 'bg-neutral text-neutral-content' :'bg-gray-50' }  text-base-content`}>
  <aside>
    <img src="/logo.png"  className='w-[50px]' alt="" />
    <h2 className='font-medium'>TECH<span className={` ${dark? 'text-orange-400' : 'text-orange-600' }`}>WORLD</span></h2>
    <p>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;