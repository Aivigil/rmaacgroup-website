"use client";

import React from "react";

interface AboutProjectSectionProps {
  title?: string;
  content?: string;
  scope?: string[];
  focus?: string[];
  rightTitle?: string;
  rightContent?: string;
  challenges?: string[];
  roles?: string[];
  technical?: string[];
}

const AboutProjectSection = ({
  title = "",
  content,
  scope = [],
  focus = [],
  rightTitle = "",
  rightContent = "",
  challenges = [],
  roles = [],
  technical = [],
}: AboutProjectSectionProps) => {
  // Split the content into paragraphs if provided
  const contentParagraphs = content ? content.split("\n\n") : ["", ""];

  return (
    <section className="bg-[#0f1114] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-32">
          {/* Left Column - Details About The Project */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white">
              {title}
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {contentParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-400 text-sm sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {scope && scope.length > 0 && (
              <div className="space-y-3 sm:space-y-4 mt-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-white">
                  Scope
                </h3>
                <ul className="space-y-2">
                  {scope.map((scope, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - A Comprehensive Revamp */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white">
              {rightTitle}
            </h2>

            <div className="space-y-6 sm:space-y-8">
              <p className="text-gray-400 text-sm sm:text-base">
                {rightContent}
              </p>

              {focus && focus.length > 0 && (
                <div className="space-y-3 sm:space-y-4 mt-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-white">
                    We Focused On:
                  </h3>
                  <ul className="space-y-2">
                    {focus.map((focus, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-3 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {challenges && challenges.length > 0 && (
                <div className="space-y-3 sm:space-y-4 mt-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-white">
                    Challenges
                  </h3>
                  <ul className="space-y-2">
                    {challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-3 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Role Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8">
                {/* Our Role */}
                {roles && roles.length > 0 && (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-full h-px bg-gray-600"></div>
                    <h4 className="text-base sm:text-lg font-normal text-white">
                      Our Role
                    </h4>
                    <ul className="space-y-2">
                      {roles.map((role, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-3 text-gray-400 text-xs"
                        >
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technical */}
                {technical && technical.length > 0 && (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-full h-px bg-gray-600"></div>
                    <h4 className="text-base sm:text-lg font-normal text-white">
                      Technical
                    </h4>
                    <ul className="space-y-2">
                      {technical.map((tech, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-3 text-gray-400 text-xs"
                        >
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectSection;
