import React from 'react';
import { LineChart } from '@shopify/polaris-viz';

const data = [
  {
    name: 'Series 1',
    data: [
      { key: 'Jan', value: 30 },
      { key: 'Feb', value: 50 },
      { key: 'Mar', value: 40 },
      { key: 'Apr', value: 70 },
      { key: 'May', value: 60 },
    ],
  },
];

const MyChart = () => {
  return <LineChart data={data} />;
};

export default MyChart;