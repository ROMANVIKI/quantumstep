"use client";
import { motion } from "framer-motion";
import React from "react";
import { useRef } from "react";

export const Promises = () => {
  return (
    <div className="mt-12 max-sm:mt-[280px] max-sm:text-center p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto text-gray-800">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-600">
          Our Assurance
        </h2>
      </motion.div>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Practical Training */}
          <div className="bg-white/70 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">
              Practical Training
            </h3>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              QuantumStep IT offers a comprehensive course that immerses you in
              100% practical training, ensuring you gain complete mastery of
              your chosen field. Our expert mentors consistently provide
              hands-on experience with real-time projects, equipping you with
              the practical skills needed to excel.
            </p>
          </div>
        </motion.div>

        {/* Flexible Training */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
        >
          <div className="bg-white/70 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">
              Flexible Training
            </h3>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              QuantumStep IT offers flexible timing and dates to suit your
              schedule. We hire experts who are available whenever you need,
              allowing you to learn at your convenience on days and times that
              work best for you.
            </p>
          </div>
        </motion.div>

        {/* Hands-On Training */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          <div className="bg-white/70 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">
              Hands-On Training
            </h3>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Our industry-leading trainers, each with over 14 years of
              experience, provide step-by-step guidance tailored to your career
              goals. With their expert instruction, our training ensures that
              every student is equipped to succeed in their chosen field.
            </p>
          </div>
        </motion.div>

        {/* 100% Job Guarantee */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="bg-white/70 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">
              100% Job Guarantee
            </h3>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Our training courses are designed to ensure that students secure
              placement immediately after completion. With hands-on experience
              in real-world project scenarios, our practical training prepares
              you to confidently tackle projects in your career.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
