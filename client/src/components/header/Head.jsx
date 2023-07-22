// import { Link } from "react-router-dom";
// import "./header.css";
// import { useState } from "react";
// import { MdNavigateNext } from "react-icons/md";
// import { GrFormPrevious } from "react-icons/gr";

// const slideStyles = {
//   width: "100%",
//   height: "100%",
//   borderRadius: "10px",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };

// export default function Head({ slides }) {
//   const [currIdx, setCurrIdx] = useState(0);
//   const goToPrevious = () => {
//     const isFirstSlide = currIdx === 0;
//     const newIdx = isFirstSlide ? slides.length - 1 : currIdx - 1;
//     setCurrIdx(newIdx);
//   };
//   const goToNext = () => {
//     const isLastSlide = currIdx === slides.length - 1;
//     const newIdx = isLastSlide ? 0 : currIdx + 1;
//     setCurrIdx(newIdx);
//   };
//   const goToSlide = (slideIndex) => {
//     setCurrIdx(slideIndex);
//   };
//   const slideStylesWidthBackground = {
//     ...slideStyles,
//     backgroundImage: `url(${slides[currIdx].cover})`,
//     width: "100%",
//   };
//   return (
//     <div className="sliderStyles">
//       <div>
//         <div onClick={goToPrevious} className="right">
//           <MdNavigateNext />
//         </div>
//         <div onClick={goToNext} className="left">
//           <GrFormPrevious />
//         </div>
//       </div>
//       <div className="slideStyles" style={slideStylesWidthBackground}>
//         <slid
//       </div>
//       <div className="dots">
//         {slides.map((slide, slideIdx) => {
//           return (
//             <div
//               className="dotstyle"
//               key={slides.id}
//               onClick={() => goToSlide(slideIdx)}
//             ></div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
