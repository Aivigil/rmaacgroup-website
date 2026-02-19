"use client";

import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Button from "./button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

  // Services dropdown items
  const serviceItems = [
    { name: "Enterprise Automations & IT Solutions", href: "/services/it-solutions" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "App Development", href: "/services/app-development" },
    { name: "Real Estate & Investor Platforms", href: "/services/construction" },
  ];

  // Portfolio dropdown items
  const portfolioItems = [
    { name: "Automation & Cybersecurity", href: "/automations/automations" },
    { name: "Digital Success", href: "/automations/digital-success" },
    { name: "Real Estate", href: "/automations/real-estate" },
    { name: "Mobile Solutions", href: "/automations/mobile-solutions" },
    { name: "Healthcare", href: "/automations/healthcare" },
  ];

  const navigationItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    {
      name: "WHAT WE OFFER",
      href: "/services",
      hasDropdown: true,
      dropdownItems: serviceItems,
    },
    {
      name: "PORTFOLIO",
      href: "/portfolio",
      hasDropdown: true,
      dropdownItems: portfolioItems,
    },
    { name: "OUR APPROACH", href: "/approach" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileDropdown = (dropdownName: string) => {
    setActiveMobileDropdown(
      activeMobileDropdown === dropdownName ? null : dropdownName
    );
  };

  return (
    <nav className="bg-transparent relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
        <div className="flex items-center justify-between h-12 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMobileMenu}>
              <div className="flex-shrink-0">
                <Image
                  src="/image/Logo.svg"
                  alt="RMAAC Logo"
                  width={120}
                  height={40}
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className={`relative group ${
                    item.hasDropdown ? "dropdown-hover" : ""
                  }`}
                >
                  <Link
                    href={item.href}
                    className="text-[#e2e2e2] px-2 sm:px-3 py-2 text-sm sm:text-base font-medium hover:text-white transition-colors duration-200 flex items-center"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div className="dropdown-menu absolute top-full left-0 mt-0 w-64 bg-[#0a0a0a] border border-gray-800 shadow-xl rounded-sm z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 hover:visible hover:opacity-100">
                      {item.dropdownItems?.map((dropdownItem, index) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className={`block px-3 py-2 text-sm text-[#e2e2e2] hover:bg-[#111111] hover:text-white transition-colors duration-200 ${
                            index !== item.dropdownItems!.length - 1
                              ? "border-b border-gray-800/30"
                              : ""
                          }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Contact Us Button */}
          <div className="hidden md:block">
            <Button href="/contact" size="md" className="text-sm">
              CONTACT US
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-[#e2e2e2] hover:text-white p-2 transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />

          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[#0a0a0a] border-l border-gray-800 shadow-2xl transform transition-transform duration-300 ease-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <Image
                  src="/image/Logo.svg"
                  alt="RMAAC Logo"
                  width={100}
                  height={32}
                  className="h-8 w-auto"
                />
                <button
                  onClick={closeMobileMenu}
                  className="text-gray-400 hover:text-white p-2 transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 px-6 py-8">
                <div className="space-y-6">
                  {navigationItems.map((item) => (
                    <div
                      key={item.name}
                      className="border-b border-gray-800/50"
                    >
                      {item.hasDropdown ? (
                        <div>
                          <div className="flex items-center justify-between w-full py-2">
                            <Link
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="text-[#e2e2e2] text-lg font-medium hover:text-white transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                            <button
                              onClick={() => toggleMobileDropdown(item.name)}
                              className="text-[#e2e2e2] hover:text-white p-1"
                            >
                              <ChevronDown
                                className={`h-4 w-4 transition-transform duration-300 ${
                                  activeMobileDropdown === item.name
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                          </div>

                          {activeMobileDropdown === item.name && (
                            <div className="pl-4 pb-4 space-y-4 mt-2">
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={closeMobileMenu}
                                  className="block text-[#e2e2e2] text-base hover:text-white transition-colors duration-200 py-2"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block text-[#e2e2e2] text-lg font-medium hover:text-white transition-colors duration-200 py-2"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <div className="p-6 border-t border-gray-800">
                <Button
                  href="/contact"
                  size="lg"
                  className="w-full justify-center text-base"
                  onClick={closeMobileMenu}
                >
                  CONTACT US
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
