
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, TrendingUp, Package } from 'lucide-react';
import FCNCalculatorV2 from '@/components/FCNCalculatorV2';
import FCNAnalysis from '@/components/FCNAnalysis';
import FCNRecommendations from '@/components/FCNRecommendations';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">FCN 詢價平台</h1>
              <p className="text-sm text-gray-600 mt-1">AI 智能報價系統</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              FCN 詢價試算
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              投資建議分析
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              組合推薦
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <FCNCalculatorV2 />
          </TabsContent>

          <TabsContent value="analysis">
            <FCNAnalysis />
          </TabsContent>

          <TabsContent value="recommendations">
            <FCNRecommendations />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
