// import { useState, useEffect, useRef } from "react";

// export default function Footer() {
//   const [showOops, setShowOops] = useState(false);
//   const issueRef = useRef(null);

//   const handleClick = () => {
//     setShowOops((prev) => !prev); // Toggle on click
//   };

//   const handleClickOutside = (event) => {
//     if (issueRef.current && !issueRef.current.contains(event.target)) {
//       setShowOops(false); // Close when clicking outside
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <footer className="self-center flex gap-16 sm:gap-32 mt-8 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center [&>*]:cursor-pointer [&>*]:gap-2">
//       <div className="position relative">
//         <img src="/happy.svg" alt="Happy face" />
//         <p>Good to go!</p>
//       </div>
//       <div ref={issueRef} onClick={handleClick} className="relative">
//         <img src="/sad.svg" alt="Sad face" />
//         <p>There's an issue!</p>
//         {showOops && (
//           <div className="absolute top-[-100%] left-0 sm:left-full transform -translate-x-1/2 mt-2 w-36 text-center border-2 rounded-2xl p-2 border-accent flex flex-col items-center justify-center gap-2 bg-slate-50">
//             <img src="/info.svg" alt="info" />
//             <p>Oops! Please try again.</p>
//           </div>
//         )}
//       </div>
//     </footer>
//   );
// }
