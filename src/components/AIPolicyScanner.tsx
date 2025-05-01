
import React from 'react';
import { AlertCircle, ShieldAlert, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface PolicyIssue {
  type: 'critical' | 'warning' | 'info';
  description: string;
  detail: string;
}

interface AIPolicyScannerProps {
  policyIssues: PolicyIssue[];
  dealerId: string;
}

const AIPolicyScanner = ({ policyIssues, dealerId }: AIPolicyScannerProps) => {
  if (policyIssues.length === 0) {
    return (
      <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/10 rounded-md border border-green-200 dark:border-green-900">
        <Badge className="bg-green-500 text-white mr-2">All Clear</Badge>
        <span className="text-sm text-green-700 dark:text-green-400">No policy issues detected</span>
      </div>
    );
  }

  return (
    <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-md border border-amber-200 dark:border-amber-800/30">
      <div className="flex items-center mb-3">
        <ShieldAlert className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
        <h3 className="font-semibold text-amber-800 dark:text-amber-300">AI Policy Scanner Detected Issues</h3>
      </div>
      
      <div className="space-y-3">
        {policyIssues.map((issue, idx) => (
          <TooltipProvider key={idx}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={`
                  flex items-start p-2 rounded-md cursor-help
                  ${issue.type === 'critical' ? 'bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30' : ''}
                  ${issue.type === 'warning' ? 'bg-amber-100 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/30' : ''}
                  ${issue.type === 'info' ? 'bg-blue-100 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/30' : ''}
                `}>
                  {issue.type === 'critical' && <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2 flex-shrink-0 mt-0.5" />}
                  {issue.type === 'warning' && <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0 mt-0.5" />}
                  {issue.type === 'info' && <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />}
                  
                  <div>
                    <div className={`text-sm font-medium
                      ${issue.type === 'critical' ? 'text-red-800 dark:text-red-300' : ''}
                      ${issue.type === 'warning' ? 'text-amber-800 dark:text-amber-300' : ''}
                      ${issue.type === 'info' ? 'text-blue-800 dark:text-blue-300' : ''}
                    `}>
                      {issue.description}
                    </div>
                    <div className={`text-xs
                      ${issue.type === 'critical' ? 'text-red-600 dark:text-red-400' : ''}
                      ${issue.type === 'warning' ? 'text-amber-600 dark:text-amber-400' : ''}
                      ${issue.type === 'info' ? 'text-blue-600 dark:text-blue-400' : ''}
                    `}>
                      Click for details
                    </div>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{issue.detail}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      
      <p className="mt-3 text-xs text-amber-700 dark:text-amber-400">
        AI-detected policy issues for dealer #{dealerId}. Verified by our algorithm.
      </p>
    </div>
  );
};

export default AIPolicyScanner;
