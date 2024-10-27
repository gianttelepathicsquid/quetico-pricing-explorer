'use client';

import React, { useState } from 'react';
import { ChevronDown, Package, Truck, Warehouse, Settings, RefreshCcw, Plane, Phone, Box } from 'lucide-react';
import type { ServiceCategory, ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isExpanded, onToggle, index }) => {
  return (
    <div 
      className="mb-4 transform transition-all duration-300 hover:scale-[1.01]"
      style={{
        animation: `fadeSlideIn 0.5s ease-out ${index * 0.1}s backwards`
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 hover:border-sky-400 text-[#00204E] rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <div className="flex items-center gap-3">
          <div className="bg-sky-100 p-2 rounded-lg">
            <service.icon className="h-5 w-5 text-sky-600" />
          </div>
          <span className="font-semibold text-[#00204E]">{service.title}</span>
        </div>
        <ChevronDown 
          className={`h-5 w-5 transition-transform duration-300 text-sky-600 
            ${isExpanded ? 'rotate-180' : 'rotate-0'}`} 
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out transform
          ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 bg-white border-x border-b border-gray-200 rounded-b-lg">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200">
                <th className="pb-3 font-semibold text-[#00204E]">Service</th>
                <th className="pb-3 font-semibold text-[#00204E]">Price Range</th>
                <th className="pb-3 font-semibold text-[#00204E]">Average</th>
              </tr>
            </thead>
            <tbody>
              {service.details.map((item, idx) => (
                <tr 
                  key={idx} 
                  className="border-b border-gray-100 last:border-0"
                  style={{
                    animation: isExpanded ? `slideDown 0.3s ease-out ${idx * 0.05}s backwards` : 'none'
                  }}
                >
                  <td className="py-3 text-[#00204E]">{item.name}</td>
                  <td className="py-3 text-[#00204E]">{item.range}</td>
                  <td className="py-3 text-[#00204E]">{item.avg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const PricingExplorer: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const services: ServiceCategory[] = [
    {
      id: 1,
      title: 'Initial Set-Up',
      icon: Settings,
      details: [
        { name: 'One-time Setup Fee', range: '$150 - $1,500', avg: '$385' },
        { name: 'Monthly Maintenance', range: '$10 - $500', avg: '$198' },
        { name: 'Custom Reporting', range: '$100 - $500', avg: 'Varies' }
      ]
    },
    {
      id: 2,
      title: 'Receiving',
      icon: Truck,
      details: [
        { name: 'Hourly Rate', range: '$35 - $45', avg: '$40.79' },
        { name: 'Per Pallet', range: '$4 - $15', avg: '$12.91' },
        { name: 'Per Item', range: '$0.20 - $0.45', avg: '$0.33' },
        { name: '20-ft Container', range: '$350', avg: '$350' },
        { name: '40-ft Container', range: '$425', avg: '$425' }
      ]
    },
    {
      id: 3,
      title: 'Storage',
      icon: Warehouse,
      details: [
        { name: 'Per Pallet/Month', range: '$8 - $40', avg: '$20.37' },
        { name: 'Cubic Foot', range: '$0.45 - $0.55', avg: '$0.50' },
        { name: 'Bin Storage/Month', range: '$2.67', avg: '$2.67' },
        { name: 'Climate-Controlled', range: '$25 - $35', avg: '$30' }
      ]
    },
    {
      id: 4,
      title: 'Fulfillment',
      icon: Box,
      details: [
        { name: 'B2C Order', range: '$2.97 - $3.18', avg: '$3.08' },
        { name: 'B2B Order', range: '$4.31 - $4.79', avg: '$4.55' },
        { name: 'Per Item', range: '$0.68', avg: '$0.68' },
        { name: 'Packaging', range: '$1.19', avg: '$1.19' },
        { name: 'Order Insert', range: '$0.25', avg: '$0.25' }
      ]
    },
    {
      id: 5,
      title: 'Shipping',
      icon: Plane,
      details: [
        { name: 'Ground Shipping', range: '15-25% off rates', avg: '20%' },
        { name: 'Express Shipping', range: '20-30% off rates', avg: '25%' },
        { name: 'LTL Shipping', range: '45-60% off rates', avg: '52.5%' },
        { name: 'Inbound Shipping', range: 'Carrier dependent', avg: 'Varies' }
      ]
    },
    {
      id: 6,
      title: 'Returns & Support',
      icon: Phone,
      details: [
        { name: 'Per Return', range: '$3.95', avg: '$3.95' },
        { name: 'Account Management', range: '$30 - $1,000+', avg: '$236.67' },
        { name: 'Customer Support', range: '$1 - $3', avg: '$2' },
        { name: 'Call Center (per min)', range: '$1.19', avg: '$1.19' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <style jsx global>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto">
        <div 
          className="mb-8 flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
          style={{ animation: 'fadeSlideIn 0.5s ease-out' }}
        >
          <Package className="h-8 w-8 text-sky-600" />
          <h1 className="text-2xl font-bold text-[#00204E]">Quetico 3PL Services Pricing Explorer</h1>
        </div>
        
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            isExpanded={expandedId === service.id}
            onToggle={() => setExpandedId(expandedId === service.id ? null : service.id)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingExplorer;
