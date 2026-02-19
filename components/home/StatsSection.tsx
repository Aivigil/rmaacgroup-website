export default function StatsSection() {
  return (
    <div className="mt-16 sm:mt-20 lg:mt-24 border-t border-gray-600">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-b border-gray-600">
        {/* Stat 1 */}
        <div className="border-r border-b border-l lg:border-l-0 lg:border-b-0 border-gray-600">
          <div className="text-center px-2 sm:px-4 lg:pr-8 py-8 sm:py-10 lg:py-14 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 group">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 group-hover:text-gray-500">
              98%
            </div>
            <div className="text-xs sm:text-sm uppercase">
              HAPPY CUSTOMERS
            </div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="border-b border-r lg:border-b-0 border-gray-600">
          <div className="text-center px-2 sm:px-4 lg:px-8 py-8 sm:py-10 lg:py-14 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 group">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 group-hover:text-gray-500">
              31+
            </div>
            <div className="text-xs sm:text-sm uppercase">
              YEAR OF EXPERIENCE
            </div>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="border-r border-b border-l lg:border-l-0 border-gray-600">
          <div className="text-center px-2 sm:px-4 lg:px-8 py-8 sm:py-10 lg:py-14 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 group">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 group-hover:text-gray-500">
              26K
            </div>
            <div className="text-xs sm:text-sm uppercase">
              PROJECT COMPLETED
            </div>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="border-gray-600 border-r lg:border-r-0">
          <div className="text-center px-2 sm:px-4 lg:pl-8 py-8 sm:py-10 lg:py-14 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 group">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 group-hover:text-gray-500">
              145+
            </div>
            <div className="text-xs sm:text-sm uppercase">
              AWARDS WINNING
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
