import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import Button from "./button";

export default function Footer() {
  // Quick links data
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies/shiptquick" },
  ];

  // Address lines data
  const addressLines = [
    "Plaza No. 31/32, 1st",
    "Floor, Westeria Road,",
    "Sector C, DHA 2",
    "Islamabad.",
  ];

  // Contact info data
  const contactInfo = [
    { value: "+92 309 188 8879", href: "tel:+923091888879" },
    { value: "info@rmaacpk.com", href: "mailto:info@rmaacpk.com" },
  ];

  // Social media data
  const socialMedia = [
    {
      name: "Facebook",
      href: "https://web.facebook.com/rmaactechnologies/",
      icon: (
        <Facebook
          className="size-4 sm:size-5 lg:size-6 text-white fill-white"
          strokeWidth={0.3}
        />
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/rmaac-group/",
      icon: (
        <Linkedin
          className="size-4 sm:size-5 lg:size-6 text-white fill-white"
          strokeWidth={0.3}
        />
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/rmaacgroup",
      icon: <Instagram className="size-4 sm:size-5 lg:size-6 text-white" />,
    },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-16 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 lg:mr-20 text-center sm:text-left">
            <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
              <Image
                src="/image/Logo.svg"
                alt="RMAAC Logo"
                width={120}
                height={40}
                className="h-10 sm:h-8 lg:h-10 w-auto"
              />
            </div>
            <p className="text-[#bebebe] text-lg sm:text-sm lg:text-base mb-4 sm:mb-6 max-w-sm lg:max-w-md mx-auto sm:mx-0">
              From code to concrete — RMAAC reshapes industries through digital,
              healthcare, AI, and real estate innovation.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Button
                href="/contact"
                size="md"
                className="text-lg sm:text-sm lg:text-base w-full sm:w-auto"
              >
                GET STARTED
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1 lg:col-span-1 mt-4 sm:mt-6 lg:mt-0 text-center sm:text-left">
            <h3 className="text-white text-xl sm:text-base lg:text-lg xl:text-xl font-normal mb-3 sm:mb-4 lg:mb-6">
              QUICK LINKS
            </h3>
            <ul className="">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#bebebe] hover:text-white text-lg sm:text-sm lg:text-base transition-colors duration-200 block py-1 sm:py-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="sm:col-span-1 lg:col-span-1 mt-4 sm:mt-6 lg:mt-0 text-center sm:text-left">
            <h3 className="text-white text-xl sm:text-base lg:text-lg xl:text-xl font-normal mb-3 sm:mb-4 lg:mb-6">
              ADDRESS
            </h3>
            <div className="text-[#bebebe] text-lg sm:text-sm lg:text-base space-y-1 sm:space-y-2">
              {addressLines.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1 mt-4 sm:mt-6 lg:mt-0 text-center sm:text-left">
            <h3 className="text-white text-xl sm:text-base lg:text-lg xl:text-xl font-normal mb-3 sm:mb-4 lg:mb-6">
              CONTACT
            </h3>
            <div className="">
              {contactInfo.map((contact, index) => (
                <div key={index}>
                  <Link
                    href={contact.href}
                    className="text-[#bebebe] hover:text-white text-lg sm:text-sm lg:text-base transition-colors duration-200 block py-1 sm:py-2 break-all"
                  >
                    {contact.value}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-[#4d4d4d]">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-[#bebebe] text-xs sm:text-sm lg:text-base text-center sm:text-left order-2 sm:order-1">
              Copyright © 2025 Rmaacgroup. All Rights Reserved.
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 sm:space-x-4 lg:space-x-6 order-1 sm:order-2 justify-center sm:justify-start">
              {socialMedia.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="size-14 sm:size-12 lg:size-14 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label={item.name}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
