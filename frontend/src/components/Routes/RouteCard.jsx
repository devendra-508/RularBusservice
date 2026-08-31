// export default function RouteCard({ route }) {
//   return (
//     <div className="bg-chalk rounded-md border border-ink/10 overflow-hidden shrink-0 w-72">
//       <div className="p-5">
//         <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-3">
//           <span>{route.frequency}</span>
//           <span>{route.stops} stops</span>
//         </div>
//         <div className="flex items-center justify-between font-display text-xl font-semibold">
//           <span>{route.from}</span>
//           <span className="text-route text-sm">→</span>
//           <span>{route.to}</span>
//         </div>
//         <div className="flex items-center gap-3 mt-2 text-sm text-ink/60 font-body">
//           <span>{route.duration}</span>
//           <span aria-hidden="true">·</span>
//           <span>{route.distance}</span>
//         </div>
//       </div>
//       <div className="ticket-edge flex items-center justify-between px-5 py-3 bg-signal text-chalk">
//         <span className="font-mono text-xs uppercase tracking-widest">From</span>
//         <span className="font-display font-semibold text-lg">₹{route.fare}</span>
//       </div>
//     </div>
//   )
// }
