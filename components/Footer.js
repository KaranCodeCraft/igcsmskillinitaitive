import { Facebook, X, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between">
        {/* Left Side - Logo & Address */}
        <div className="space-y-4">
          <img src="/logo.png" alt="IGCSM LOGO" className="h-12" />
          <p className="text-gray-300">
            Address: 16th Floor,  <br />
            Okhla<br />
            New Delhi - 110001 INDIA
          </p>
          <p className="text-gray-300">Tel: +91 11 77227722</p>
          <p className="text-gray-300">E-mail: info.abc@adf.org</p>
          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            <Facebook className="cursor-pointer hover:text-gray-400" />
            <X className="cursor-pointer hover:text-gray-400" />
            <Youtube className="cursor-pointer hover:text-gray-400" />
            <Instagram className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 md:mt-0">
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Brand India</li>
              <li>Indian Economy</li>
              <li>Industry</li>
              <li>Exports</li>
              <li>States/UT</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Research</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Media & Events</li>
              <li>About IBEF</li>
              <li>Contact us</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Terms of Use</li>
              <li>National Portal - MyGov</li>
              <li>Citizens’ Charters</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-green-600 text-white text-sm text-center p-4">
        All material, information, data, images or content on this website is
        subject to copyright or other applicable intellectual property laws and
        no part of it can be reproduced in any form without prior written
        consent and approval from IGCSM. For consent-related queries and
        conditions, please write to info@igcsm.com.
      </div>
    </footer>
  );
};

export default Footer;
