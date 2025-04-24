'use client';

import React, { useEffect, useState } from 'react';
import { Payment, columns } from './columns';
import { DataTable } from './data-table';

const Demo = () => {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // API-аас өгөгдөл авах хэсэг
      const result: Payment[] = [
        {
          id: '728ed52f',
          amount: 100,
          status: 'pending',
          email: 'm@example.com',
        },
        {
          id: '489e1d42',
          amount: 125,
          status: 'processing',
          email: 'example@gmail.com',
        },
      ];
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Demo;
