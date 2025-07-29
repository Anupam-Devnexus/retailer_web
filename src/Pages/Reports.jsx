<<<<<<< HEAD
import React from 'react';
import Data from "../DataStore/DataStore.json";
import FeedbackCard from '../Component/Cards/FeedbackCard';

function Reports() {
  const feedbackData = Data.feedback;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Feedback Reports</h1>

      {feedbackData.length === 0 ? (
        <div className="text-center text-gray-500">No feedback reports available.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {feedbackData.map((item) => (
            <FeedbackCard
              key={item.feedback_id}
              avatar={item.avatar}
              name={item.name}
              role={item.role}
              content={item.content}
              targetRetailer={item.target_retailer}
              status={item.status}
              submitted_on={item.submitted_on}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Reports;
=======
import React from 'react';
import Data from "../DataStore/DataStore.json";
import FeedbackCard from '../Component/Cards/FeedbackCard';

function Reports() {
  const feedbackData = Data.feedback;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Feedback Reports</h1>

      {feedbackData.length === 0 ? (
        <div className="text-center text-gray-500">No feedback reports available.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {feedbackData.map((item) => (
            <FeedbackCard
              key={item.feedback_id}
              avatar={item.avatar}
              name={item.name}
              role={item.role}
              content={item.content}
              targetRetailer={item.target_retailer}
              status={item.status}
              submitted_on={item.submitted_on}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Reports;
>>>>>>> master
