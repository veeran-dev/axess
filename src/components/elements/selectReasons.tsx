import React, { useState } from 'react';

interface SelectReasonProps {
  onReasonSelect: (reason: string) => void; // Callback to pass the selected reason to the parent
}

const SelectReason: React.FC<SelectReasonProps> = ({ onReasonSelect }) => {
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [customReason, setCustomReason] = useState<string>('');

  const reasons = [
    'Tickets were accidentally purchased multiple times.',
    'The organizer has officially called off the event.',
    'Changed my plan to be somewhere else',
    'Mistake in ticket details',
    'My Reason not listed'
  ];

  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reason = event.target.value;
    setSelectedReason(reason);
    if (reason !== 'My Reason not listed') {
      setCustomReason(''); // Reset custom reason
      onReasonSelect(reason);
    }
  };

  const handleCustomReasonChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const reason = event.target.value;
    setCustomReason(reason);
    onReasonSelect(reason); // Pass the custom reason to the parent
  };

  return (
    <div className=" rounded-lg max-w-md">
      <h2 className=" font-semibold mb-4">Select a Reason</h2>
      <div className="space-y-4">
        {reasons.map((reason, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name="reason"
              value={reason}
              checked={selectedReason === reason}
              onChange={handleReasonChange}
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">{reason}</span>
          </label>
        ))}
      </div>
      {selectedReason === 'My Reason not listed' && (
        <textarea
          value={customReason}
          onChange={handleCustomReasonChange}
          placeholder="Please specify your reason"
          className="mt-4 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
};

export default SelectReason;
