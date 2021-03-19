import React from 'react';
import { TodoPanel } from 'src/modules';

export const StockDisplay: React.FC = () => {
  console.log('I think things are working');

  return (
    <>
      <ul className="divide-y divide-gray-200">
        <li className="py-4 flex">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt=""
          />
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-gray-900">Joey Didner</p>
            <p className="text-sm text-gray-500">Joey.Didner@example.com</p>
          </div>
        </li>
        <li className="py-4 flex">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt=""
          />
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-gray-900">Max Okazaki</p>
            <p className="text-sm text-gray-500">Max.Okazaki@example.com</p>
          </div>
        </li>
        <li className="py-4 flex">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt=""
          />
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-gray-900">Mateo Rey Rosa</p>
            <p className="text-sm text-gray-500">Mateo.Rey@Rosa.com</p>
          </div>
        </li>
        <li className="py-4 flex"></li>
      </ul>
      <TodoPanel />
    </>
  );
};
