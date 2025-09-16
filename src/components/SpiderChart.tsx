import React, { useState } from 'react';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';

interface DataPoint {
  subject: string;
  A: number;
  B: number;
  fullMark: number;
}

interface Dataset {
  title: string;
  data: DataPoint[];
  legend: { A: string; B: string };
}

const SpiderChart: React.FC = () => {
  const [selectedDataset, setSelectedDataset] = useState<string>('skills');

  // Sample data for different scenarios
  const datasets: Record<string, Dataset> = {
    skills: {
      title: "Developer Skills Assessment",
      data: [
        { subject: 'JavaScript', A: 120, B: 110, fullMark: 150 },
        { subject: 'React', A: 98, B: 130, fullMark: 150 },
        { subject: 'Node.js', A: 86, B: 90, fullMark: 150 },
        { subject: 'CSS', A: 99, B: 85, fullMark: 150 },
        { subject: 'TypeScript', A: 85, B: 105, fullMark: 150 },
        { subject: 'Testing', A: 65, B: 95, fullMark: 150 },
      ],
      legend: { A: 'Current Level', B: 'Target Level' }
    },
    performance: {
      title: "App Performance Metrics",
      data: [
        { subject: 'Load Time', A: 80, B: 95, fullMark: 100 },
        { subject: 'Responsiveness', A: 90, B: 85, fullMark: 100 },
        { subject: 'Memory Usage', A: 75, B: 88, fullMark: 100 },
        { subject: 'Battery Life', A: 85, B: 92, fullMark: 100 },
        { subject: 'Network Efficiency', A: 70, B: 80, fullMark: 100 },
        { subject: 'User Experience', A: 95, B: 90, fullMark: 100 },
      ],
      legend: { A: 'iOS App', B: 'Android App' }
    },
    features: {
      title: "Feature Completeness",
      data: [
        { subject: 'Authentication', A: 100, B: 85, fullMark: 100 },
        { subject: 'Offline Mode', A: 60, B: 80, fullMark: 100 },
        { subject: 'Push Notifications', A: 90, B: 95, fullMark: 100 },
        { subject: 'Data Sync', A: 75, B: 70, fullMark: 100 },
        { subject: 'UI/UX', A: 85, B: 90, fullMark: 100 },
        { subject: 'Analytics', A: 40, B: 65, fullMark: 100 },
      ],
      legend: { A: 'MVP Version', B: 'v2.0 Goals' }
    }
  };

  const currentDataset = datasets[selectedDataset];

  const handleSegmentChange = (event: CustomEvent) => {
    setSelectedDataset(event.detail.value);
  };

  const generateRandomData = () => {
    const newData = currentDataset.data.map(item => ({
      ...item,
      A: Math.floor(Math.random() * item.fullMark * 0.8) + 20,
      B: Math.floor(Math.random() * item.fullMark * 0.8) + 20,
    }));

    datasets[selectedDataset] = {
      ...currentDataset,
      data: newData
    };

    // Force re-render by updating state
    setSelectedDataset(selectedDataset + '');
    setSelectedDataset(selectedDataset);
  };

  return (

    // <ResponsiveContainer width="30vw" height="100%" minWidth="30vw">
      <RadarChart width={400} height={50} data={currentDataset.data}>
        <PolarGrid stroke="#e5e7eb" />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fontSize: 12, fill: '#374151' }}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 'dataMax']}
          tick={{ fontSize: 10, fill: '#6b7280' }}
          tickCount={4}
        />
        <Radar
          name={currentDataset.legend.A}
          dataKey="A"
          stroke="var(--ion-color-primary)"
          fill="var(--ion-color-primary)"
          fillOpacity={0.2}
          strokeWidth={2}
        />
        <Radar
          name={currentDataset.legend.B}
          dataKey="B"
          stroke="var(--ion-color-secondary)"
          fill="var(--ion-color-secondary)"
          fillOpacity={0.2}
          strokeWidth={2}
        />
        <Legend
          wrapperStyle={{
            paddingTop: '20px',
            fontSize: '14px'
          }}
        />
      </RadarChart>
    // </ResponsiveContainer>



  );
};

export default SpiderChart;

