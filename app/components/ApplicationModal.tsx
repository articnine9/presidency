"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const educationLevels = [
  { value: "12th", label: "12th Pass" },
  { value: "diploma", label: "Diploma" },
  { value: "bachelor", label: "Bachelor's Degree" },
  { value: "master", label: "Master's Degree" },
  { value: "other", label: "Other" },
];

const programmes = [
  { value: "cse", label: "Computer Science & Engineering" },
  { value: "engineering", label: "Engineering" },
  { value: "management", label: "Management" },
  { value: "commerce", label: "Commerce" },
  { value: "law", label: "Law" },
  { value: "design", label: "Design" },
  { value: "media", label: "Media Studies" },
  { value: "liberal-arts", label: "Liberal Arts & Sciences" },
  { value: "allied-health", label: "Allied Health Sciences" },
  { value: "information-science", label: "Information Science" },
];

const studyLevels = [
  { value: "ug", label: "Undergraduate" },
  { value: "pg", label: "Postgraduate" },
  { value: "phd", label: "PhD/Doctoral" },
  { value: "diploma", label: "Diploma" },
];

const countries = [
  { value: "india", label: "India" },
  { value: "usa", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "singapore", label: "Singapore" },
  { value: "other", label: "Other" },
];

export function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "india",
    currentEducation: "",
    educationLevel: "",
    studyLevel: "",
    programme: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call - replace with your actual API endpoint
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form after 2 seconds
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            country: "india",
            currentEducation: "",
            educationLevel: "",
            studyLevel: "",
            programme: "",
            message: "",
          });
          setSubmitted(false);
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 right-0 float-right p-4 text-gray-500 hover:text-gray-700 transition z-10 bg-white"
        >
          <X size={24} />
        </button>

        {submitted ? (
          // Success Message
          <div className="flex items-center justify-center min-h-[400px] px-6 py-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for your interest in Presidency University. We will
                contact you shortly.
              </p>
            </div>
          </div>
        ) : (
          // Form
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-[#1e3a5f] mb-2">
                Apply Now
              </h2>
              <p className="text-gray-600">
                Fill in your details and we'll be in touch soon
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                >
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Education Details Section */}
              <div className="border-t pt-5 mt-5">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4">
                  Education Details
                </h3>

                {/* Current Education */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current School/College Name
                  </label>
                  <input
                    type="text"
                    name="currentEducation"
                    value={formData.currentEducation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                    placeholder="e.g., ABC Senior Secondary School"
                  />
                </div>

                {/* Current Education Level */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Education Level *
                  </label>
                  <select
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                  >
                    <option value="">Select your current education level</option>
                    {educationLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Programme Preferences Section */}
              <div className="border-t pt-5">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4">
                  Programme Preferences
                </h3>

                {/* Study Level */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Study Level *
                  </label>
                  <select
                    name="studyLevel"
                    value={formData.studyLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                  >
                    <option value="">Select study level</option>
                    {studyLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Programme Interest */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Programme of Interest *
                  </label>
                  <select
                    name="programme"
                    value={formData.programme}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                  >
                    <option value="">Select a programme</option>
                    {programmes.map((prog) => (
                      <option key={prog.value} value={prog.value}>
                        {prog.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                  placeholder="Tell us anything else about yourself..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-6 py-3 bg-[#0A8F96] text-white font-semibold rounded-lg hover:bg-[#088b91] transition disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                  {!loading && <ArrowRight size={18} />}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
