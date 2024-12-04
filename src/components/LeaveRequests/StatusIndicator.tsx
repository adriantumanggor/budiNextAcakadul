// import React from 'react';
// import { CheckCircle2, XCircle, Clock } from 'lucide-react';

// interface StatusIndicatorProps {
//   status: 'Pending' | 'Approved' | 'Rejected';
// }

// export function StatusIndicator({ status }: StatusIndicatorProps) {
//   const getStatusIcon = () => {
//     switch (status) {
//       case 'Approved':
//         return <CheckCircle2 className="w-5 h-5 text-green-500" />;
//       case 'Rejected':
//         return <XCircle className="w-5 h-5 text-red-500" />;
//       default:
//         return <Clock className="w-5 h-5 text-orange-500" />;
//     }
//   };

//   return (
//     <div className="flex items-center space-x-2">
//       {getStatusIcon()}
//       <span className={`text-sm ${
//         status === 'Pending' ? 'text-orange-500' :
//         status === 'Approved' ? 'text-green-500' :
//         'text-red-500'
//       }`}>
//         {status}
//       </span>
//     </div>
//   );
// }

