import React, { Suspense } from 'react'
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from '../lib/data'
import { lusitana } from '../ui/fonsts/fonts';
import RevenueChart from '../ui/dashboard/revenue-chart';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import { Card } from '../ui/dashboard/cards';
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from '../ui/skeletons';

const Page = async () => {
  const card = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <Card title="Collected" value={card.totalPaidInvoices} type='collected'/>
        <Card title="Pending" value={card.totalPendingInvoices} type='pending'/>
        <Card title="total Invoice" value={card.numberOfInvoices} type='invoices'/>
        <Card title="total Costumers" value={card.numberOfCustomers} type='customers'/>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart/>
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton/>}>
          <LatestInvoices/>
        </Suspense>
      </div>
    </main>
  )
}

export default Page
