"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motiom";

const App = () => {
  const [showUploadPage, setShowUploadPage] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src={showUploadPage ? "/blackhole.webm" : "/try_2.mp4"}
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-1"></div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowUploadPage(!showUploadPage)}
        className="absolute top-4 left-4 px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md z-10 hover:bg-purple-700"
      >
        {showUploadPage ? "Go to Home" : "Go to Upload"}
      </button>

      {showUploadPage ? (
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 flex items-center justify-between w-full max-w-6xl p-10 bg-black bg-opacity-70 rounded-lg shadow-lg"
        >
          {/* Upload Page */}
          <div className="w-1/2 flex flex-col items-start space-y-6">
            <motion.h2
              variants={slideInFromLeft(0.5)}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400"
            >
              Upload Your Image
            </motion.h2>
            <motion.input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="cursor-pointer py-2 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-red-500 text-white font-semibold"
              variants={slideInFromLeft(1)}
            />
          </div>
          <motion.div
            variants={slideInFromRight(0.5)}
            className="w-1/2 flex items-center justify-center"
          >
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="rounded-lg shadow-lg object-contain max-w-full max-h-[400px]"
              />
            ) : (
              <p className="text-xl text-gray-400">
                Your uploaded image will appear here
              </p>
            )}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 px-8 max-w-[80%] mx-auto flex flex-col items-center text-center gap-8"
        >
          {/* Home Page */}
          <motion.div
            variants={slideInFromTop}
            className="welcome-box flex items-center justify-center py-4 px-6 border border-purple-500 bg-[#ffffff14] backdrop-blur-md rounded-lg shadow-lg"
          >
            <SparklesIcon className="text-purple-300 mr-2 h-6 w-6" />
            <h1
              className="text-[50px] md:text-[60px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400 tracking-wide 
              animate-gradient-shimmer"
              style={{
                textShadow:
                  "0px 0px 10px rgba(128, 0, 128, 0.6), 0px 0px 20px rgba(255, 0, 255, 0.6)",
                filter: "blur(0.5px)",
              }}
            >
              ANONYMIZING AI
            </h1>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="text-xl font-bold text-white max-w-lg"
            >
              <p>For Privacy</p>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
                Of your Images
              </span>
              <p>Project for Future</p>
            </motion.div>
            <motion.div
              variants={slideInFromRight(0.8)}
              className="w-[250px] h-[250px] rounded-lg overflow-hidden shadow-lg border-4 border-purple-500"
            >
              <video
                src="/Face Detection, Recognition and Emotion Detection in 8 lines of code!.mp4"
                autoPlay
                loop
                muted
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-200 max-w-[600px]"
          >
            We are a team of engineering students learning and growing every day
            to benefit society in technology.
          </motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            whileHover={{ scale: 1.05 }}
            className="py-3 px-8 bg-purple-500 text-white text-lg font-bold rounded-full shadow-md cursor-pointer transition-transform transform hover:shadow-xl hover:bg-purple-600"
          >
            Learn Together!
          </motion.a>
        </motion.div>
      )}
    </div>
  );
};

export default App;
