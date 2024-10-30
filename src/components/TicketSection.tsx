import React from 'react';

const TicketSection: React.FC = () => {
  return (
    <div className="bg-black text-yellow-500 p-4 rounded-lg">
      <div className="text-xl font-bold">Murang'a Seal Tickets</div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-yellow-500 text-lg">MEN'S FOOTBALL</h3>
          <img src="https://via.placeholder.com/200x150" alt="Men's Football" />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-yellow-500 text-lg">MEN'S FOOTBALL</h3>
          <img src="https://via.placeholder.com/200x150" alt="Men's Football" />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-yellow-500 text-lg">WOMEN'S FOOTBALL</h3>
          <img src="https://via.placeholder.com/200x150" alt="Women's Football" />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-yellow-500 text-lg">MEN'S FOOTBALL</h3>
          <img src="https://via.placeholder.com/200x150" alt="Men's Football" />
        </div>
      </div>
    </div>
  );
}

export default TicketSection;