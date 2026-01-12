// // // // // // // // // import { QrReader } from "react-qr-reader";
// // // // // // // // // import { useState } from "react";
// // // // // // // // // import api from "../api";

// // // // // // // // // export default function QRValidator() {
// // // // // // // // //   const [status, setStatus] = useState("");
// // // // // // // // //   const [message, setMessage] = useState("");

// // // // // // // // //   const handleScan = async (result) => {
// // // // // // // // //     if (!result) return;

// // // // // // // // //     try {
// // // // // // // // //       const res = await api.post("/qr/validate", {
// // // // // // // // //         ticketCode: result.text
// // // // // // // // //       });

// // // // // // // // //       setStatus(res.data.status);
// // // // // // // // //       setMessage(res.data.message);
// // // // // // // // //     } catch {
// // // // // // // // //       setStatus("ERROR");
// // // // // // // // //       setMessage("Server error");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div style={{ textAlign: "center", marginTop: 40 }}>
// // // // // // // // //       <h2>🎟 Ticket QR Validator</h2>

// // // // // // // // //       <QrReader
// // // // // // // // //         constraints={{ facingMode: "environment" }}
// // // // // // // // //         onResult={(result) => result && handleScan(result)}
// // // // // // // // //         style={{ width: 300, margin: "auto" }}
// // // // // // // // //       />

// // // // // // // // //       {message && (
// // // // // // // // //         <div
// // // // // // // // //           style={{
// // // // // // // // //             marginTop: 20,
// // // // // // // // //             padding: 12,
// // // // // // // // //             color: "#fff",
// // // // // // // // //             background:
// // // // // // // // //               status === "VERIFIED"
// // // // // // // // //                 ? "green"
// // // // // // // // //                 : status === "ALREADY_VERIFIED"
// // // // // // // // //                 ? "orange"
// // // // // // // // //                 : "red"
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           {message}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }



// // // // // // // // import { Html5QrcodeScanner } from "html5-qrcode";
// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import api from "../api";

// // // // // // // // export default function QRValidator() {
// // // // // // // //   const [message, setMessage] = useState("");
// // // // // // // //   const [status, setStatus] = useState("");

// // // // // // // //   useEffect(() => {
// // // // // // // //     const scanner = new Html5QrcodeScanner(
// // // // // // // //       "qr-reader",
// // // // // // // //       {
// // // // // // // //         fps: 10,
// // // // // // // //         qrbox: { width: 250, height: 250 }
// // // // // // // //       },
// // // // // // // //       false
// // // // // // // //     );

// // // // // // // //     scanner.render(
// // // // // // // //       async (decodedText) => {
// // // // // // // //         try {
// // // // // // // //           const res = await api.post("/qr/validate", {
// // // // // // // //             ticketCode: decodedText
// // // // // // // //           });

// // // // // // // //           setStatus(res.data.status);
// // // // // // // //           setMessage(res.data.message);
// // // // // // // //         } catch {
// // // // // // // //           setStatus("ERROR");
// // // // // // // //           setMessage("Server error");
// // // // // // // //         }
// // // // // // // //       },
// // // // // // // //       (error) => {
// // // // // // // //         // Ignore scan errors
// // // // // // // //       }
// // // // // // // //     );

// // // // // // // //     return () => {
// // // // // // // //       scanner.clear().catch(() => {});
// // // // // // // //     };
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <div style={{ textAlign: "center", marginTop: 30 }}>
// // // // // // // //       <h2>🎟 Ticket QR Validator</h2>

// // // // // // // //       <div
// // // // // // // //         id="qr-reader"
// // // // // // // //         style={{ width: "300px", margin: "auto" }}
// // // // // // // //       />

// // // // // // // //       {message && (
// // // // // // // //         <div
// // // // // // // //           style={{
// // // // // // // //             marginTop: 20,
// // // // // // // //             padding: 12,
// // // // // // // //             color: "white",
// // // // // // // //             background:
// // // // // // // //               status === "VERIFIED"
// // // // // // // //                 ? "green"
// // // // // // // //                 : status === "ALREADY_VERIFIED"
// // // // // // // //                 ? "orange"
// // // // // // // //                 : "red"
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           {message}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import { Html5QrcodeScanner } from "html5-qrcode";
// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import api from "../api";

// // // // // // // export default function QRValidator() {
// // // // // // //   const [message, setMessage] = useState("");
// // // // // // //   const [status, setStatus] = useState("");
// // // // // // //   const [scanning, setScanning] = useState(true);

// // // // // // //   useEffect(() => {
// // // // // // //     if (!scanning) return;

// // // // // // //     const scanner = new Html5QrcodeScanner(
// // // // // // //       "qr-reader",
// // // // // // //       {
// // // // // // //         fps: 10,
// // // // // // //         qrbox: { width: 260, height: 260 }
// // // // // // //       },
// // // // // // //       false
// // // // // // //     );

// // // // // // //     scanner.render(
// // // // // // //       async (decodedText) => {
// // // // // // //         try {
// // // // // // //           setScanning(false); // pause after scan

// // // // // // //           const res = await api.post("/qr/validate", {
// // // // // // //             ticketCode: decodedText
// // // // // // //           });

// // // // // // //           setStatus(res.data.status);
// // // // // // //           setMessage(res.data.message);

// // // // // // //           // Resume scanning after 2 seconds
// // // // // // //           setTimeout(() => {
// // // // // // //             setMessage("");
// // // // // // //             setStatus("");
// // // // // // //             setScanning(true);
// // // // // // //           }, 2000);
// // // // // // //         } catch {
// // // // // // //           setStatus("ERROR");
// // // // // // //           setMessage("Server error");
// // // // // // //           setScanning(true);
// // // // // // //         }
// // // // // // //       },
// // // // // // //       () => {}
// // // // // // //     );

// // // // // // //     return () => {
// // // // // // //       scanner.clear().catch(() => {});
// // // // // // //     };
// // // // // // //   }, [scanning]);

// // // // // // //   const statusStyles = {
// // // // // // //     VERIFIED: "bg-green-100 border-green-500 text-green-700",
// // // // // // //     ALREADY_VERIFIED: "bg-yellow-100 border-yellow-500 text-yellow-700",
// // // // // // //     INVALID: "bg-red-100 border-red-500 text-red-700",
// // // // // // //     ERROR: "bg-red-100 border-red-500 text-red-700"
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
// // // // // // //       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-6">

// // // // // // //         {/* Header */}
// // // // // // //         <div className="text-center">
// // // // // // //           <h1 className="text-2xl font-bold tracking-tight">
// // // // // // //             🎟 Ticket QR Validator
// // // // // // //           </h1>
// // // // // // //           <p className="text-sm text-gray-500 mt-1">
// // // // // // //             Scan tickets to allow entry
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         {/* Scanner Box */}
// // // // // // //         <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-4">
// // // // // // //           <div
// // // // // // //             id="qr-reader"
// // // // // // //             className="w-full flex justify-center"
// // // // // // //           />
// // // // // // //           <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-xs text-gray-400">
// // // // // // //             Camera Scanner
// // // // // // //           </span>
// // // // // // //         </div>

// // // // // // //         {/* Status Message */}
// // // // // // //         {message && (
// // // // // // //           <div
// // // // // // //             className={`border-l-4 rounded-lg p-4 text-sm font-medium transition-all duration-300 ${
// // // // // // //               statusStyles[status] || statusStyles.ERROR
// // // // // // //             }`}
// // // // // // //           >
// // // // // // //             {message}
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //         {/* Footer */}
// // // // // // //         <div className="text-center text-xs text-gray-400">
// // // // // // //           Secure QR validation system
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }




// // // // // // import { Html5QrcodeScanner } from "html5-qrcode";
// // // // // // import { useEffect, useState } from "react";
// // // // // // import api from "../api";
// // // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // // export default function QRValidator() {
// // // // // //   const [popup, setPopup] = useState(null);
// // // // // //   const [scanning, setScanning] = useState(true);

// // // // // //   useEffect(() => {
// // // // // //     if (!scanning) return;

// // // // // //     const scanner = new Html5QrcodeScanner(
// // // // // //       "qr-reader",
// // // // // //       {
// // // // // //         fps: 12,
// // // // // //         qrbox: { width: 260, height: 260 }
// // // // // //       },
// // // // // //       false
// // // // // //     );

// // // // // //     scanner.render(
// // // // // //       async (decodedText) => {
// // // // // //         try {
// // // // // //           setScanning(false);

// // // // // //           const res = await api.post("/qr/validate", {
// // // // // //             ticketCode: decodedText
// // // // // //           });

// // // // // //           setPopup({
// // // // // //             status: res.data.status,
// // // // // //             message: res.data.message
// // // // // //           });

// // // // // //           setTimeout(() => {
// // // // // //             setPopup(null);
// // // // // //             setScanning(true);
// // // // // //           }, 2200);
// // // // // //         } catch {
// // // // // //           setPopup({
// // // // // //             status: "ERROR",
// // // // // //             message: "Server error"
// // // // // //           });
// // // // // //           setScanning(true);
// // // // // //         }
// // // // // //       },
// // // // // //       () => {}
// // // // // //     );

// // // // // //     return () => {
// // // // // //       scanner.clear().catch(() => {});
// // // // // //     };
// // // // // //   }, [scanning]);

// // // // // //   const popupStyles = {
// // // // // //     VERIFIED: "bg-green-500",
// // // // // //     ALREADY_VERIFIED: "bg-yellow-500",
// // // // // //     INVALID: "bg-red-500",
// // // // // //     ERROR: "bg-red-600"
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">

// // // // // //       {/* Main Card */}
// // // // // //       <motion.div
// // // // // //         initial={{ opacity: 0, scale: 0.9 }}
// // // // // //         animate={{ opacity: 1, scale: 1 }}
// // // // // //         transition={{ duration: 0.4 }}
// // // // // //         className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 space-y-6"
// // // // // //       >

// // // // // //         {/* Header */}
// // // // // //         <div className="text-center">
// // // // // //           <h1 className="text-2xl font-bold text-white tracking-wide">
// // // // // //             🎟 Secure QR Validator
// // // // // //           </h1>
// // // // // //           <p className="text-sm text-gray-300 mt-1">
// // // // // //             Event access verification system
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Scanner Frame */}
// // // // // //         <div className="relative flex justify-center">
// // // // // //           <motion.div
// // // // // //             animate={{ boxShadow: scanning ? "0 0 25px #22c55e" : "0 0 0px" }}
// // // // // //             transition={{ repeat: Infinity, duration: 1.5 }}
// // // // // //             className="rounded-xl border-2 border-dashed border-green-400 p-3"
// // // // // //           >
// // // // // //             <div
// // // // // //               id="qr-reader"
// // // // // //               className="w-[260px]"
// // // // // //             />
// // // // // //           </motion.div>

// // // // // //           {/* Scan Line */}
// // // // // //           {scanning && (
// // // // // //             <motion.div
// // // // // //               animate={{ y: [0, 220, 0] }}
// // // // // //               transition={{ duration: 2, repeat: Infinity }}
// // // // // //               className="absolute top-4 w-[240px] h-1 bg-green-400 rounded-full opacity-70"
// // // // // //             />
// // // // // //           )}
// // // // // //         </div>

// // // // // //         {/* Footer */}
// // // // // //         <div className="text-center text-xs text-gray-400">
// // // // // //           Camera auto-pauses after scan
// // // // // //         </div>
// // // // // //       </motion.div>

// // // // // //       {/* POPUP MESSAGE */}
// // // // // //       <AnimatePresence>
// // // // // //         {popup && (
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 50, scale: 0.8 }}
// // // // // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // // // // //             exit={{ opacity: 0, y: 50, scale: 0.8 }}
// // // // // //             transition={{ duration: 0.3 }}
// // // // // //             className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-4 rounded-xl text-white font-semibold shadow-xl ${
// // // // // //               popupStyles[popup.status]
// // // // // //             }`}
// // // // // //           >
// // // // // //             {popup.message}
// // // // // //           </motion.div>
// // // // // //         )}
// // // // // //       </AnimatePresence>

// // // // // //     </div>
// // // // // //   );
// // // // // // }



// // // // // import { Html5QrcodeScanner } from "html5-qrcode";
// // // // // import { useEffect, useState } from "react";
// // // // // import api from "../api";
// // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // export default function QRValidator() {
// // // // //   const [result, setResult] = useState(null); // { type, message }
// // // // //   const [scannerActive, setScannerActive] = useState(true);

// // // // //   // INIT SCANNER
// // // // //   useEffect(() => {
// // // // //     if (!scannerActive) return;

// // // // //     const scanner = new Html5QrcodeScanner(
// // // // //       "qr-reader",
// // // // //       {
// // // // //         fps: 12,
// // // // //         qrbox: { width: 260, height: 260 }
// // // // //       },
// // // // //       false
// // // // //     );

// // // // //     scanner.render(
// // // // //       async (decodedText) => {
// // // // //         try {
// // // // //           setScannerActive(false);

// // // // //           const res = await api.post("/qr/validate", {
// // // // //             ticketCode: decodedText
// // // // //           });

// // // // //           setResult({
// // // // //             type: res.data.status,
// // // // //             message: res.data.message
// // // // //           });
// // // // //         } catch {
// // // // //           setResult({
// // // // //             type: "ERROR",
// // // // //             message: "Server error"
// // // // //           });
// // // // //         }
// // // // //       },
// // // // //       () => {}
// // // // //     );

// // // // //     return () => {
// // // // //       scanner.clear().catch(() => {});
// // // // //     };
// // // // //   }, [scannerActive]);

// // // // //   // RESET SCAN
// // // // //   const handleOk = () => {
// // // // //     setResult(null);
// // // // //     setScannerActive(true);
// // // // //   };

// // // // //   // ANIMATION CONFIGS
// // // // //   const animations = {
// // // // //     VERIFIED: {
// // // // //       icon: "✔",
// // // // //       color: "text-green-500",
// // // // //       ring: "border-green-500",
// // // // //       title: "DONE"
// // // // //     },
// // // // //     INVALID: {
// // // // //       icon: "✖",
// // // // //       color: "text-red-600",
// // // // //       ring: "border-red-600",
// // // // //       title: "INVALID"
// // // // //     },
// // // // //     ALREADY_VERIFIED: {
// // // // //       icon: "⚠",
// // // // //       color: "text-[#E62B1E]",
// // // // //       ring: "border-[#E62B1E]",
// // // // //       title: "SECURITY ALERT"
// // // // //     },
// // // // //     ERROR: {
// // // // //       icon: "!",
// // // // //       color: "text-red-600",
// // // // //       ring: "border-red-600",
// // // // //       title: "ERROR"
// // // // //     }
// // // // //   };

// // // // //   const current = result ? animations[result.type] : null;

// // // // //   return (
// // // // //     <div className="min-h-screen bg-black flex items-center justify-center px-4">

// // // // //       {/* SCANNER CARD */}
// // // // //       <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 space-y-6">

// // // // //         <div className="text-center">
// // // // //           <h1 className="text-2xl font-bold text-white">
// // // // //             <span className="text-[#E62B1E]">TEDx</span>SMEC
// // // // //           </h1>
// // // // //           <p className="text-sm text-gray-400">
// // // // //             Ticket Validation System
// // // // //           </p>
// // // // //         </div>

// // // // //         <div className="flex justify-center">
// // // // //           <div
// // // // //             id="qr-reader"
// // // // //             className={`w-[260px] rounded-xl border-2 border-dashed ${
// // // // //               scannerActive ? "border-[#E62B1E]" : "border-gray-700"
// // // // //             }`}
// // // // //           />
// // // // //         </div>

// // // // //         <div className="text-center text-xs text-gray-500">
// // // // //           One scan per ticket • Secure entry
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* RESULT MODAL */}
// // // // //       <AnimatePresence>
// // // // //         {result && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             exit={{ opacity: 0 }}
// // // // //             className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
// // // // //           >
// // // // //             <motion.div
// // // // //               initial={{ scale: 0.6, opacity: 0 }}
// // // // //               animate={{ scale: 1, opacity: 1 }}
// // // // //               exit={{ scale: 0.6, opacity: 0 }}
// // // // //               transition={{ type: "spring", stiffness: 120 }}
// // // // //               className="bg-black border border-white/10 rounded-2xl p-8 w-[90%] max-w-sm text-center"
// // // // //             >

// // // // //               {/* ICON */}
// // // // //               <motion.div
// // // // //                 initial={{ scale: 0 }}
// // // // //                 animate={{ scale: 1 }}
// // // // //                 transition={{ delay: 0.15, type: "spring" }}
// // // // //                 className={`mx-auto mb-4 w-24 h-24 rounded-full border-4 flex items-center justify-center text-5xl font-bold ${current.ring} ${current.color}`}
// // // // //               >
// // // // //                 {current.icon}
// // // // //               </motion.div>

// // // // //               {/* TITLE */}
// // // // //               <h2 className={`text-2xl font-bold ${current.color}`}>
// // // // //                 {current.title}
// // // // //               </h2>

// // // // //               {/* MESSAGE */}
// // // // //               <p className="text-gray-300 mt-2">
// // // // //                 {result.message}
// // // // //               </p>

// // // // //               {/* OK BUTTON */}
// // // // //               <button
// // // // //                 onClick={handleOk}
// // // // //                 className="mt-6 w-full py-3 rounded-xl bg-[#E62B1E] text-white font-semibold hover:bg-red-700 transition"
// // // // //               >
// // // // //                 OK — Scan Next Ticket
// // // // //               </button>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import { Html5Qrcode } from "html5-qrcode";
// // // // import { useEffect, useRef, useState } from "react";
// // // // import api from "../api";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // export default function QRValidator() {
// // // //   const scannerRef = useRef(null);
// // // //   const isProcessingRef = useRef(false);

// // // //   const [result, setResult] = useState(null); // { type, message }

// // // //   // INIT SCANNER ONCE
// // // //   useEffect(() => {
// // // //     scannerRef.current = new Html5Qrcode("qr-reader");

// // // //     scannerRef.current
// // // //       .start(
// // // //         { facingMode: "environment" },
// // // //         { fps: 10, qrbox: 260 },
// // // //         handleScanSuccess,
// // // //         () => {}
// // // //       )
// // // //       .catch(() => {});

// // // //     return () => {
// // // //       scannerRef.current?.stop().catch(() => {});
// // // //     };
// // // //   }, []);

// // // //   // HANDLE SCAN
// // // //   const handleScanSuccess = async (decodedText) => {
// // // //     if (isProcessingRef.current) return;
// // // //     isProcessingRef.current = true;

// // // //     try {
// // // //       await scannerRef.current.stop();

// // // //       const res = await api.post("/qr/validate", {
// // // //         ticketCode: decodedText
// // // //       });

// // // //       setResult({
// // // //         type: res.data.status,
// // // //         message: res.data.message
// // // //       });
// // // //     } catch {
// // // //       setResult({
// // // //         type: "ERROR",
// // // //         message: "Server error"
// // // //       });
// // // //     }
// // // //   };

// // // //   // RESUME SCAN
// // // //   const handleOk = async () => {
// // // //     setResult(null);
// // // //     isProcessingRef.current = false;

// // // //     await scannerRef.current.start(
// // // //       { facingMode: "environment" },
// // // //       { fps: 10, qrbox: 260 },
// // // //       handleScanSuccess,
// // // //       () => {}
// // // //     );
// // // //   };

// // // //   // UI CONFIG
// // // //   const animations = {
// // // //     VERIFIED: {
// // // //       icon: "✔",
// // // //       title: "DONE",
// // // //       color: "text-green-500",
// // // //       ring: "border-green-500"
// // // //     },
// // // //     INVALID: {
// // // //       icon: "✖",
// // // //       title: "INVALID",
// // // //       color: "text-red-600",
// // // //       ring: "border-red-600"
// // // //     },
// // // //     ALREADY_VERIFIED: {
// // // //       icon: "⚠",
// // // //       title: "SECURITY ALERT",
// // // //       color: "text-[#E62B1E]",
// // // //       ring: "border-[#E62B1E]"
// // // //     },
// // // //     ERROR: {
// // // //       icon: "!",
// // // //       title: "ERROR",
// // // //       color: "text-red-600",
// // // //       ring: "border-red-600"
// // // //     }
// // // //   };

// // // //   const current = result ? animations[result.type] : null;

// // // //   return (
// // // //     <div className="min-h-screen bg-black flex items-center justify-center px-4">

// // // //       {/* SCANNER CARD */}
// // // //       <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 space-y-6">

// // // //         <div className="text-center">
// // // //           <h1 className="text-2xl font-bold text-white">
// // // //             <span className="text-[#E62B1E]">TEDx</span>SMEC
// // // //           </h1>
// // // //           <p className="text-sm text-gray-400">
// // // //             Ticket Validation System
// // // //           </p>
// // // //         </div>

// // // //         <div className="flex justify-center">
// // // //           <div
// // // //             id="qr-reader"
// // // //             className="w-[260px] h-[260px] rounded-xl border-2 border-dashed border-[#E62B1E]"
// // // //           />
// // // //         </div>

// // // //         <div className="text-center text-xs text-gray-500">
// // // //           One scan per ticket • Secure entry
// // // //         </div>
// // // //       </div>

// // // //       {/* RESULT MODAL */}
// // // //       <AnimatePresence>
// // // //         {result && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //             className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
// // // //           >
// // // //             <motion.div
// // // //               initial={{ scale: 0.6 }}
// // // //               animate={{ scale: 1 }}
// // // //               exit={{ scale: 0.6 }}
// // // //               transition={{ type: "spring", stiffness: 140 }}
// // // //               className="bg-black border border-white/10 rounded-2xl p-8 w-[90%] max-w-sm text-center"
// // // //             >

// // // //               {/* ICON */}
// // // //               <motion.div
// // // //                 initial={{ scale: 0 }}
// // // //                 animate={{ scale: 1 }}
// // // //                 className={`mx-auto mb-4 w-24 h-24 rounded-full border-4 flex items-center justify-center text-5xl font-bold ${current.ring} ${current.color}`}
// // // //               >
// // // //                 {current.icon}
// // // //               </motion.div>

// // // //               <h2 className={`text-2xl font-bold ${current.color}`}>
// // // //                 {current.title}
// // // //               </h2>

// // // //               <p className="text-gray-300 mt-2">
// // // //                 {result.message}
// // // //               </p>

// // // //               <button
// // // //                 onClick={handleOk}
// // // //                 className="mt-6 w-full py-3 rounded-xl bg-[#E62B1E] text-white font-semibold hover:bg-red-700 transition"
// // // //               >
// // // //                 OK — Scan Next Ticket
// // // //               </button>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </div>
// // // //   );
// // // // }


// // // import { Html5Qrcode } from "html5-qrcode";
// // // import { useEffect, useRef, useState } from "react";
// // // import api from "../api";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // export default function QRValidator() {
// // //   const scannerRef = useRef(null);
// // //   const isRunningRef = useRef(false);
// // //   const isProcessingRef = useRef(false);
// // //   const hasInitializedRef = useRef(false);

// // //   const [result, setResult] = useState(null); 
// // //   // result = { type: "VERIFIED" | "INVALID" | "ALREADY_VERIFIED" | "ERROR", message }

// // //   /* ================= INITIALIZE SCANNER (ONCE) ================= */
// // //   useEffect(() => {
// // //     if (hasInitializedRef.current) return;
// // //     hasInitializedRef.current = true;

// // //     scannerRef.current = new Html5Qrcode("qr-reader");
// // //     startScanner();

// // //     return () => {
// // //       safeStopScanner();
// // //     };
// // //   }, []);

// // //   /* ================= SAFE START ================= */
// // //   const startScanner = async () => {
// // //     if (!scannerRef.current) return;
// // //     if (isRunningRef.current) return;

// // //     try {
// // //       await scannerRef.current.start(
// // //         { facingMode: "environment" },
// // //         { fps: 10, qrbox: 260 },
// // //         handleScanSuccess,
// // //         () => {}
// // //       );
// // //       isRunningRef.current = true;
// // //     } catch (err) {
// // //       console.warn("Scanner start skipped");
// // //     }
// // //   };

// // //   /* ================= SAFE STOP ================= */
// // //   const safeStopScanner = async () => {
// // //     if (!scannerRef.current) return;
// // //     if (!isRunningRef.current) return;

// // //     try {
// // //       await scannerRef.current.stop();
// // //       isRunningRef.current = false;
// // //     } catch {
// // //       // ignore stop errors
// // //     }
// // //   };

// // //   /* ================= HANDLE SCAN ================= */
// // //   const handleScanSuccess = async (decodedText) => {
// // //     if (isProcessingRef.current) return;
// // //     isProcessingRef.current = true;

// // //     await safeStopScanner();

// // //     try {
// // //       const res = await api.post("/qr/validate", {
// // //         ticketCode: decodedText
// // //       });

// // //       setResult({
// // //         type: res.data.status,
// // //         message: res.data.message
// // //       });
// // //     } catch {
// // //       setResult({
// // //         type: "ERROR",
// // //         message: "Server error"
// // //       });
// // //     }
// // //   };

// // //   /* ================= OK BUTTON ================= */
// // //   const handleOk = async () => {
// // //     setResult(null);
// // //     isProcessingRef.current = false;
// // //     await startScanner();
// // //   };

// // //   /* ================= UI CONFIG ================= */
// // //   const animations = {
// // //     VERIFIED: {
// // //       icon: "✔",
// // //       title: "DONE",
// // //       color: "text-green-500",
// // //       ring: "border-green-500"
// // //     },
// // //     INVALID: {
// // //       icon: "✖",
// // //       title: "INVALID",
// // //       color: "text-red-600",
// // //       ring: "border-red-600"
// // //     },
// // //     ALREADY_VERIFIED: {
// // //       icon: "⚠",
// // //       title: "SECURITY ALERT",
// // //       color: "text-[#E62B1E]",
// // //       ring: "border-[#E62B1E]"
// // //     },
// // //     ERROR: {
// // //       icon: "!",
// // //       title: "ERROR",
// // //       color: "text-red-600",
// // //       ring: "border-red-600"
// // //     }
// // //   };

// // //   const current = result ? animations[result.type] : null;

// // //   return (
// // //     <div className="min-h-screen bg-black flex items-center justify-center px-4">

// // //       {/* ================= SCANNER CARD ================= */}
// // //       <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 space-y-6">

// // //         <div className="text-center">
// // //           <h1 className="text-2xl font-bold text-white">
// // //             <span className="text-[#E62B1E]">TEDx</span>SMEC
// // //           </h1>
// // //           <p className="text-sm text-gray-400">
// // //             Ticket Validation System
// // //           </p>
// // //         </div>

// // //         <div className="flex justify-center">
// // //           <div
// // //             id="qr-reader"
// // //             className="w-[260px] h-[260px] rounded-xl border-2 border-dashed border-[#E62B1E]"
// // //           />
// // //         </div>

// // //         <div className="text-center text-xs text-gray-500">
// // //           One scan per ticket • Secure entry
// // //         </div>
// // //       </div>

// // //       {/* ================= RESULT MODAL ================= */}
// // //       <AnimatePresence>
// // //         {result && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
// // //           >
// // //             <motion.div
// // //               initial={{ scale: 0.6 }}
// // //               animate={{ scale: 1 }}
// // //               exit={{ scale: 0.6 }}
// // //               transition={{ type: "spring", stiffness: 140 }}
// // //               className="bg-black border border-white/10 rounded-2xl p-8 w-[90%] max-w-sm text-center"
// // //             >
// // //               <div
// // //                 className={`mx-auto mb-4 w-24 h-24 rounded-full border-4 flex items-center justify-center text-5xl font-bold ${current.ring} ${current.color}`}
// // //               >
// // //                 {current.icon}
// // //               </div>

// // //               <h2 className={`text-2xl font-bold ${current.color}`}>
// // //                 {current.title}
// // //               </h2>

// // //               <p className="text-gray-300 mt-2">
// // //                 {result.message}
// // //               </p>

// // //               <button
// // //                 onClick={handleOk}
// // //                 className="mt-6 w-full py-3 rounded-xl bg-[#E62B1E] text-white font-semibold hover:bg-red-700 transition"
// // //               >
// // //                 OK — Scan Next Ticket
// // //               </button>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //     </div>
// // //   );
// // // }



// // import { Html5Qrcode } from "html5-qrcode";
// // import { useEffect, useRef, useState } from "react";
// // import api from "../api";
// // import { motion, AnimatePresence } from "framer-motion";

// // export default function QRValidator() {
// //   const scannerRef = useRef(null);
// //   const isRunningRef = useRef(false);
// //   const isProcessingRef = useRef(false);
// //   const hasInitializedRef = useRef(false);

// //   const [result, setResult] = useState(null);
// //   // result = { type, message }

// //   /* ================= INIT SCANNER (ONCE) ================= */
// //   useEffect(() => {
// //     if (hasInitializedRef.current) return;
// //     hasInitializedRef.current = true;

// //     scannerRef.current = new Html5Qrcode("qr-reader");
// //     startScanner();

// //     return () => {
// //       safeStopScanner();
// //     };
// //   }, []);

// //   /* ================= SAFE START ================= */
// //   const startScanner = async () => {
// //     if (!scannerRef.current) return;
// //     if (isRunningRef.current) return;

// //     try {
// //       await scannerRef.current.start(
// //         { facingMode: "environment" },
// //         { fps: 10, qrbox: 260 },
// //         handleScanSuccess,
// //         () => {}
// //       );
// //       isRunningRef.current = true;
// //     } catch {
// //       // Ignore duplicate start attempts (React dev mode)
// //     }
// //   };

// //   /* ================= SAFE STOP ================= */
// //   const safeStopScanner = async () => {
// //     if (!scannerRef.current) return;
// //     if (!isRunningRef.current) return;

// //     try {
// //       await scannerRef.current.stop();
// //       isRunningRef.current = false;
// //     } catch {
// //       // Ignore stop errors
// //     }
// //   };

// //   /* ================= HANDLE SCAN ================= */
// //   const handleScanSuccess = async (decodedText) => {
// //     if (isProcessingRef.current) return;
// //     isProcessingRef.current = true;

// //     await safeStopScanner();

// //     try {
// //       const res = await api.post("/qr/validate", {
// //         ticketCode: decodedText
// //       });

// //       setResult({
// //         type: res.data.status,
// //         message: res.data.message
// //       });
// //     } catch {
// //       setResult({
// //         type: "ERROR",
// //         message: "Server error"
// //       });
// //     }
// //   };

// //   /* ================= OK BUTTON ================= */
// //   const handleOk = async () => {
// //     setResult(null);
// //     isProcessingRef.current = false;
// //     await startScanner();
// //   };

// //   /* ================= UI CONFIG ================= */
// //   const animations = {
// //     VERIFIED: {
// //       icon: "✔",
// //       title: "DONE",
// //       color: "text-green-500",
// //       ring: "border-green-500"
// //     },
// //     INVALID: {
// //       icon: "✖",
// //       title: "INVALID",
// //       color: "text-red-600",
// //       ring: "border-red-600"
// //     },
// //     ALREADY_VERIFIED: {
// //       icon: "⚠",
// //       title: "SECURITY ALERT",
// //       color: "text-[#E62B1E]",
// //       ring: "border-[#E62B1E]"
// //     },
// //     ERROR: {
// //       icon: "!",
// //       title: "ERROR",
// //       color: "text-red-600",
// //       ring: "border-red-600"
// //     }
// //   };

// //   const current = result ? animations[result.type] : null;

// //   return (
// //     <div className="min-h-screen bg-black flex items-center justify-center px-4">

// //       {/* ================= SCANNER CARD ================= */}
// //       <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 space-y-6">

// //         <div className="text-center">
// //           <h1 className="text-2xl font-bold text-white">
// //             <span className="text-[#E62B1E]">TEDx</span>SMEC
// //           </h1>
// //           <p className="text-sm text-gray-400">
// //             Ticket Validation System
// //           </p>
// //         </div>

// //         <div className="flex justify-center">
// //           <div
// //             id="qr-reader"
// //             className="w-[260px] h-[260px] rounded-xl border-2 border-dashed border-[#E62B1E]"
// //           />
// //         </div>

// //         <div className="text-center text-xs text-gray-500">
// //           One scan per ticket • Secure entry
// //         </div>
// //       </div>

// //       {/* ================= RESULT MODAL ================= */}
// //       <AnimatePresence>
// //         {result && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
// //           >
// //             <motion.div
// //               initial={{ scale: 0.6 }}
// //               animate={{ scale: 1 }}
// //               exit={{ scale: 0.6 }}
// //               transition={{ type: "spring", stiffness: 140 }}
// //               className="bg-black border border-white/10 rounded-2xl p-8 w-[90%] max-w-sm text-center"
// //             >

// //               <div
// //                 className={`mx-auto mb-4 w-24 h-24 rounded-full border-4 flex items-center justify-center text-5xl font-bold ${current.ring} ${current.color}`}
// //               >
// //                 {current.icon}
// //               </div>

// //               <h2 className={`text-2xl font-bold ${current.color}`}>
// //                 {current.title}
// //               </h2>

// //               <p className="text-gray-300 mt-2">
// //                 {result.message}
// //               </p>

// //               <button
// //                 onClick={handleOk}
// //                 className="mt-6 w-full py-3 rounded-xl bg-[#E62B1E] text-white font-semibold hover:bg-red-700 transition"
// //               >
// //                 OK — Scan Next Ticket
// //               </button>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //     </div>
// //   );
// // }



// import { Html5Qrcode } from "html5-qrcode";
// import { useEffect, useRef, useState } from "react";
// import api from "../api";
// import { motion, AnimatePresence } from "framer-motion";

// export default function QRValidator() {
//   const scannerRef = useRef(null);
//   const isRunningRef = useRef(false);
//   const isProcessingRef = useRef(false);

//   // 🔥 REQUIRED FOR MOBILE (iOS needs user interaction)
//   const [cameraStarted, setCameraStarted] = useState(false);

//   const [result, setResult] = useState(null);
//   // result = { type, message }

//   /* ================= START CAMERA (USER ACTION) ================= */
//   const startScanner = async () => {
//     if (cameraStarted) return;

//     setCameraStarted(true);

//     scannerRef.current = new Html5Qrcode("qr-reader");

//     try {
//       await scannerRef.current.start(
//         // ✅ SAFE for Android + iOS
//         { facingMode: "environment" },

//         {
//           fps: 10,
//           qrbox: { width: 240, height: 240 },
//           aspectRatio: 1,
//           disableFlip: true
//         },

//         handleScanSuccess,
//         () => {}
//       );

//       isRunningRef.current = true;
//     } catch (err) {
//       console.error(err);
//       alert("Camera permission denied or unavailable");
//     }
//   };

//   /* ================= SAFE STOP ================= */
//   const safeStopScanner = async () => {
//     if (!scannerRef.current) return;
//     if (!isRunningRef.current) return;

//     try {
//       await scannerRef.current.stop();
//       isRunningRef.current = false;
//     } catch {
//       // ignore
//     }
//   };

//   /* ================= HANDLE SCAN ================= */
//   const handleScanSuccess = async (decodedText) => {
//     if (isProcessingRef.current) return;
//     isProcessingRef.current = true;

//     await safeStopScanner();

//     try {
//       const res = await api.post("/qr/validate", {
//         ticketCode: decodedText
//       });

//       setResult({
//         type: res.data.status,
//         message: res.data.message
//       });
//     } catch {
//       setResult({
//         type: "ERROR",
//         message: "Server error"
//       });
//     }
//   };

//   /* ================= OK BUTTON ================= */
//   const handleOk = async () => {
//     setResult(null);
//     isProcessingRef.current = false;
//     setCameraStarted(false); // 🔥 reset for next scan
//   };

//   /* ================= UI CONFIG ================= */
//   const animations = {
//     VERIFIED: {
//       icon: "✔",
//       title: "DONE",
//       color: "text-green-500",
//       ring: "border-green-500"
//     },
//     INVALID: {
//       icon: "✖",
//       title: "INVALID",
//       color: "text-red-600",
//       ring: "border-red-600"
//     },
//     ALREADY_VERIFIED: {
//       icon: "⚠",
//       title: "SECURITY ALERT",
//       color: "text-[#E62B1E]",
//       ring: "border-[#E62B1E]"
//     },
//     ERROR: {
//       icon: "!",
//       title: "ERROR",
//       color: "text-red-600",
//       ring: "border-red-600"
//     }
//   };

//   const current = result ? animations[result.type] : null;

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center px-4">

//       {/* ================= SCANNER CARD ================= */}
//       <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 space-y-6">

//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-white">
//             <span className="text-[#E62B1E]">TEDx</span>SMEC
//           </h1>
//           <p className="text-sm text-gray-400">
//             Ticket Validation System
//           </p>
//         </div>

//         {/* 🔥 START BUTTON (REQUIRED FOR MOBILE) */}
//         {!cameraStarted && (
//           <button
//             onClick={startScanner}
//             className="w-full py-4 rounded-xl bg-[#E62B1E] text-white font-semibold text-lg active:scale-95 transition"
//           >
//             Start Camera
//           </button>
//         )}

//         {/* CAMERA VIEW */}
//         <div className="flex justify-center">
//           <div
//             id="qr-reader"
//             className="w-[240px] h-[240px] sm:w-[260px] sm:h-[260px] rounded-xl border-2 border-dashed border-[#E62B1E] overflow-hidden"
//           />
//         </div>

//         <div className="text-center text-xs text-gray-500">
//           Allow camera permission • Use rear camera
//         </div>
//       </div>

//       {/* ================= RESULT MODAL ================= */}
//       <AnimatePresence>
//         {result && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
//           >
//             <motion.div
//               initial={{ scale: 0.6 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.6 }}
//               transition={{ type: "spring", stiffness: 140 }}
//               className="bg-black border border-white/10 rounded-2xl p-8 w-[90%] max-w-sm text-center"
//             >

//               <div
//                 className={`mx-auto mb-4 w-20 h-20 rounded-full border-4 flex items-center justify-center text-4xl font-bold ${current.ring} ${current.color}`}
//               >
//                 {current.icon}
//               </div>

//               <h2 className={`text-xl font-bold ${current.color}`}>
//                 {current.title}
//               </h2>

//               <p className="text-gray-300 mt-2">
//                 {result.message}
//               </p>

//               <button
//                 onClick={handleOk}
//                 className="mt-6 w-full py-3 rounded-xl bg-[#E62B1E] text-white font-semibold hover:bg-red-700 transition"
//               >
//                 OK — Scan Next Ticket
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// }


import { Html5Qrcode } from "html5-qrcode";
import { useRef, useState } from "react";
import api from "../api";
import { motion, AnimatePresence } from "framer-motion";

export default function QRValidator() {
  const scannerRef = useRef(null);
  const isRunningRef = useRef(false);
  const isProcessingRef = useRef(false);

  const [cameraStarted, setCameraStarted] = useState(false);
  const [result, setResult] = useState(null);
  const [ticket, setTicket] = useState(null);

  /* ================= START CAMERA ================= */
  const startScanner = async () => {
    if (cameraStarted) return;

    setCameraStarted(true);
    scannerRef.current = new Html5Qrcode("qr-reader");

    try {
      await scannerRef.current.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: { width: 240, height: 240 },
          aspectRatio: 1,
          disableFlip: true
        },
        handleScanSuccess
      );

      isRunningRef.current = true;
    } catch {
      alert("Camera permission denied");
    }
  };

  /* ================= SAFE STOP ================= */
  const safeStopScanner = async () => {
    if (!scannerRef.current || !isRunningRef.current) return;
    await scannerRef.current.stop();
    isRunningRef.current = false;
  };

  /* ================= HANDLE SCAN ================= */
  const handleScanSuccess = async (decodedText) => {
    if (isProcessingRef.current) return;
    isProcessingRef.current = true;

    await safeStopScanner();

    try {
      // 1️⃣ Fetch ticket details (always)
      const detailsRes = await api.post("/qr/details", {
        ticketCode: decodedText
      });

      if (detailsRes.data.status === "INVALID") {
        setResult({ type: "INVALID", message: "❌ Invalid QR Code" });
        return;
      }

      setTicket(detailsRes.data.ticket);

      // 2️⃣ Validate ticket (every scan)
      const validateRes = await api.post("/qr/validate", {
        ticketCode: decodedText
      });

      setResult({
        type: validateRes.data.status,
        message: validateRes.data.message
      });

    } catch {
      setResult({
        type: "ERROR",
        message: "Server error"
      });
    }
  };

  /* ================= RESET ================= */
  const handleOk = () => {
    setResult(null);
    setTicket(null);
    isProcessingRef.current = false;
    setCameraStarted(false);
  };

  /* ================= UI CONFIG ================= */
  const animations = {
    VERIFIED: { color: "text-green-500", ring: "border-green-500" },
    INVALID: { color: "text-red-600", ring: "border-red-600" },
    ALREADY_VERIFIED: { color: "text-yellow-400", ring: "border-yellow-400" },
    ERROR: { color: "text-red-600", ring: "border-red-600" }
  };

  const current = result ? animations[result.type] : null;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      {/* ================= CARD ================= */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-6">

        <h1 className="text-center text-2xl font-bold text-white">
          <span className="text-[#E62B1E]">TEDx</span>SMEC
        </h1>

        {!cameraStarted && (
          <button
            onClick={startScanner}
            className="w-full py-4 rounded-xl bg-[#E62B1E] text-white font-semibold"
          >
            Start Camera
          </button>
        )}

        <div className="flex justify-center">
          <div
            id="qr-reader"
            className="w-[240px] h-[240px] border-2 border-dashed border-[#E62B1E] rounded-xl"
          />
        </div>
      </div>

      {/* ================= RESULT MODAL ================= */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              className="bg-black border border-white/10 rounded-2xl p-6 w-[90%] max-w-sm"
            >
              <h2 className={`text-xl font-bold ${current.color}`}>
                {result.message}
              </h2>

              {/* 🎫 TICKET DETAILS */}
              {ticket && (
                <div className="mt-4 text-gray-300 text-sm space-y-1">
                  <p><b>Name:</b> {ticket.studentName}</p>
                  <p><b>Event:</b> {ticket.eventName}</p>
                  <p><b>Roll:</b> {ticket.rollNumber}</p>
                  <p><b>Dept:</b> {ticket.department}</p>
                  <p><b>Phone:</b> {ticket.phone}</p>
                  <p><b>Quantity:</b> {ticket.quantity}</p>
                 <p><b>Seats:</b> {Array.isArray(ticket.seats) ? ticket.seats.join(", ") : ticket.seats}</p>
                  <p><b>Status:</b> {ticket.status}</p>
                </div>
              )}

              <button
                onClick={handleOk}
                className="mt-6 w-full py-3 rounded-xl bg-[#E62B1E] text-white font-semibold"
              >
                OK — Scan Next
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
