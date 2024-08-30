"use client";
import Image from "next/image";
import React from "react";
import expertImage from "../../public/expert-instructors.jpeg";
import liveImpImage from "../../public/live-implementation.jpeg";
import modelCertImage from "../../public/model-certificate.jpeg";
import practicalImage from "../../public/practical.jpeg";
import { motion } from "framer-motion";

const QuantumAcademy = () => {
  return (
    <div className="mt-12  max-sm:mt-[80px] p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto text-gray-800 fade-in">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-600">
          Why Choose QuantumStep IT?
        </h2>
      </motion.div>
      <div className="space-y-8">
        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="bg-white/70 p-6 rounded-lg shadow-md flex items-center max-sm:flex-col max-sm:text-center fade-in">
            <Image
              src={practicalImage}
              alt="Practical Training"
              width={128} // Adjust size as needed
              height={128} // Adjust size as needed
              className="rounded-full mr-4 max-sm:mr-0"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-600">
                100% Practical Training
              </h3>
              <p className="text-sm md:text-base text-gray-600 mt-2">
                Learn by doing with real-world projects that enhance your
                practical skills and industry knowledge.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
        >
          <div className="bg-white/70 p-6 rounded-lg shadow-md flex items-center max-sm:flex-col max-sm:text-center fade-in">
            <Image
              src={expertImage}
              alt="Expert Instructors"
              width={128} // Adjust size as needed
              height={128} // Adjust size as needed
              className="rounded-full mr-4 max-sm:mr-0"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-600">
                Expert Instructors
              </h3>
              <p className="text-sm md:text-base text-gray-600 mt-2">
                Benefit from the guidance of instructors with over 5 years of
                industry experience, providing personalized support throughout
                your learning journey.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
        >
          <div className="bg-white/70 p-6 rounded-lg shadow-md flex items-center max-sm:flex-col max-sm:text-center fade-in">
            <Image
              src={liveImpImage}
              alt="Live Project"
              width={128} // Adjust size as needed
              height={128} // Adjust size as needed
              className="rounded-full mr-4 max-sm:mr-0"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-600">
                Live Project Implementation
              </h3>
              <p className="text-sm md:text-base text-gray-600 mt-2">
                Apply your learning in real-time with live projects that mirror
                the challenges faced in the industry.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="bg-white/70 p-6 rounded-lg shadow-md flex items-center max-sm:flex-col max-sm:text-center fade-in">
            <Image
              src={modelCertImage}
              alt="Certification"
              width={128} // Adjust size as needed
              height={128} // Adjust size as needed
              className="rounded-full mr-4 max-sm:mr-0"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-600">
                Industry-Recognized Certification
              </h3>
              <p className="text-sm md:text-base text-gray-600 mt-2">
                Earn a certification that is highly valued by employers, helping
                you stand out in the competitive job market.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumAcademy;
