
import React from 'react';
import CarHero from '@/components/CarHero';
import CarGallery from '@/components/CarGallery';
import CarSpecs from '@/components/CarSpecs';
import VehicleUsage from '@/components/VehicleUsage';
import DealerInfo from '@/components/DealerInfo';
import VehicleHistory from '@/components/VehicleHistory';
import FinancingCalculator from '@/components/FinancingCalculator';
import FinancingOptions from '@/components/FinancingOptions';
import AiInsights from '@/components/AiInsights';
import FinePrintAnalyzer from '@/components/FinePrintAnalyzer';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CarHero />
      <CarGallery />
      <CarSpecs />
      <VehicleUsage />
      <DealerInfo />
      <VehicleHistory />
      <FinancingCalculator />
      <FinancingOptions />
      <AiInsights />
      <FinePrintAnalyzer />
      <Footer />
    </div>
  );
};

export default Index;
