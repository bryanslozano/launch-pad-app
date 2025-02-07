import React from 'react';
import LookerReport from './looker-report.jsx';

export default function Route() {
  return (
    <div>
      <h1>Welcome to the Launch Pad App</h1>
      <ul>
        <li>
          <strong>Product feature</strong>. Some detail about your feature and
          its benefit to your customer.
        </li>
      </ul>
    </div>
  );
}

// Add the new route to your routes configuration
const routes = [
  // ... other routes
  {
    path: '/looker-report',
    component: LookerReport,
  },
];

export default routes;