// import { departureBoard } from '../../data/routes.js'

// const statusStyles = {
//   'ON TIME': 'text-green-600 bg-green-50',
//   'BOARDING': 'text-blue-600 bg-blue-50',
//   'DELAYED': 'text-red-600 bg-red-50',
// }

// export default function DepartureBoard() {
//   return (
//     <section className="py-16 sm:py-24 scroll-mt-16">
//       <div className="max-w-6xl mx-auto px-5 sm:px-8">
//         <div className="mb-8">
//           <p className="font-mono text-xs tracking-[0.2em] text-signal uppercase mb-2">
//             Right now
//           </p>
//           <h2 className="font-display font-semibold uppercase text-3xl sm:text-4xl">
//             Live departures
//           </h2>
//         </div>

//         <div className="bg-chalk rounded-md border border-ink/10 overflow-hidden">
//           <table className="w-full text-left text-sm">
//             <thead className="bg-ink/5 font-mono text-[10px] uppercase tracking-widest text-ink/50">
//               <tr>
//                 <th className="px-5 py-3">Bus</th>
//                 <th className="px-5 py-3">Route</th>
//                 <th className="px-5 py-3">Time</th>
//                 <th className="px-5 py-3 text-right">Status</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-ink/10">
//               {departureBoard.map((dep) => (
//                 <tr key={dep.code} className="font-body">
//                   <td className="px-5 py-4 font-mono font-semibold text-ink/80">
//                     {dep.code}
//                   </td>
//                   <td className="px-5 py-4">{dep.route}</td>
//                   <td className="px-5 py-4 font-mono">{dep.time}</td>
//                   <td className="px-5 py-4 text-right">
//                     <span
//                       className={`inline-block rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-widest ${
//                         statusStyles[dep.status] || 'text-ink/60 bg-ink/5'
//                       }`}
//                     >
//                       {dep.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   )
// }