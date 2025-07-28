import React from "react";

const Skeleton = ({ count = 8 }) => {
  return (
    <div className="container mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array(count)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                <div className="w-full h-48 bg-gray-300 animate-pulse"></div>
                <div className="p-4">
                  <div className="w-5/6 h-6 mb-4 bg-gray-300 rounded-lg animate-pulse"></div>
                  <div className="w-1/2 h-4 mb-4 bg-gray-300 rounded-lg animate-pulse"></div>
                  <div className="w-1/3 h-6 bg-gray-300 rounded-lg animate-pulse"></div>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
};

export default Skeleton;