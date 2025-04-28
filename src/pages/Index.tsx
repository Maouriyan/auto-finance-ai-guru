
import React from 'react';
import CarHero from '@/components/CarHero';
import CarSpecs from '@/components/CarSpecs';
import FinancingCalculator from '@/components/FinancingCalculator';
import FinancingOptions from '@/components/FinancingOptions';
import AiInsights from '@/components/AiInsights';
import FinePrintAnalyzer from '@/components/FinePrintAnalyzer';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CarHero />
      <CarSpecs />
      <FinancingCalculator />
      <FinancingOptions />
      <AiInsights />
      <FinePrintAnalyzer />
      <Footer />
    </div>
  );
};

export default Index;
