"use client";
import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen w-full max-sm:max-h-screen flex flex-col justify-center items-center">
      <div className="h-full text-center space-y-6 backdrop-blur-lg bg-white/30 p-6 md:p-10 rounded-lg max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight relative inline-block">
            Welcome to{" "}
            <span className="relative">
              <span className="text-blue-600 relative z-10">QuantumStep</span>
            </span>
          </h1>
          <h3 className="text-base md:text-lg lg:text-2xl font-medium max-w-lg mx-auto">
            One of the Best IT Training Institutes with Placements
          </h3>
        </motion.div>

        {/* Brief Description */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-700">
            At QuantumStep, we specialize in fast-tracking your career in IT.
            Our intensive, industry-relevant courses are designed to get you
            hired quickly—without breaking the bank. Learn essential skills like
            SQL, Python, and more from experts in the field.
          </p>
        </motion.div>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <div className="bg-white/70 p-4 rounded-lg shadow-md w-60">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3 }}
            >
              <h4 className="font-semibold text-lg text-blue-600">
                Quick Job Placement
              </h4>
              <p className="text-sm text-gray-600">
                Our programs are tailored to get you job-ready in record time.
              </p>
            </motion.div>
          </div>
          <div className="bg-white/70 p-4 rounded-lg shadow-md w-60">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3 }}
            >
              <h4 className="font-semibold text-lg text-blue-600">
                Lowest Fees
              </h4>
              <p className="text-sm text-gray-600">
                Affordable courses designed to offer maximum value with minimal
                cost.
              </p>
            </motion.div>
          </div>
          <div className="bg-white/70 p-4 rounded-lg shadow-md w-60">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3 }}
            >
              <h4 className="font-semibold text-lg text-blue-600">
                Comprehensive Courses
              </h4>
              <p className="text-sm text-gray-600">
                Master SQL, Python, and other critical skills with our focused
                curriculum.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6 }}
          >
            <button className="bg-blue-600 text-white py-3 px-6 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        </div>

        {/* Testimonial or Trust Badge */}
        <div className="mt-8 text-gray-600 text-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
          >
            <p>Trusted by over 10,000+ students and leading IT companies.</p>
            <p>
              “QuantumStep helped me land my dream job faster than I ever
              imagined!” - A Satisfied Student
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
