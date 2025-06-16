import React from 'react';

const ScrollingAlert = ({ alerts, isLoading, error }) => {
  let content;

  if (isLoading) {
    content = (
      <div className="flex-shrink-0 px-6 py-2">
        <span className="font-semibold text-sm text-white">Loading alerts...</span>
      </div>
    );
  } else if (error) {
    content = (
      <div className="flex-shrink-0 px-6 py-2">
        <span className="font-semibold text-sm text-white">Error loading alerts.</span>
      </div>
    );
  } else if (alerts && alerts.length > 0) {
    content = alerts.map((alert, index) => {
      const formattedDate = new Date(alert.dateTime).toISOString().split('T')[0];
      const key = alert.id || index; // Fallback to `index` if `alert.id` is missing
      return (
        <div
          key={key}
          className="flex-shrink-0 px-6 py-2 border-l border-gray-300 first:border-none"
        >
          <span className="font-semibold text-sm text-white">
            {alert.location.address.split(',')[0]} | {alert.type} | {formattedDate}
          </span>
        </div>
      );
    });
  } else {
    content = (
      <div className="flex-shrink-0 px-6 py-2">
        <span className="font-semibold text-sm text-white">No active alerts.</span>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* bg-blue-100 */}
      <div className="overflow-hidden bg-teal-500 text-gray-800 shadow-md">
        {/* Scrolling container */}
        <div className="scroll-container flex animate-marquee">{content}</div>
      </div>
    </div>
  );
};

export default ScrollingAlert;
