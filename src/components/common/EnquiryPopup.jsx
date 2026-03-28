import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from '../theme/ThemeContext';
import Logo from './Logo';
import { apiClient } from "@/api/apiClient";
import { toast } from 'sonner';

const services = [
  { value: 'web_development',      label: 'Web Development' },
  { value: 'mobile_app',           label: 'Mobile App Development' },
  { value: 'software_development', label: 'Software Development' },
  { value: 'digital_marketing',    label: 'Digital Marketing' },
  { value: 'ui_ux_design',         label: 'UI/UX Design' },
  { value: 'cloud_services',       label: 'Cloud Services' },
  { value: 'support_maintenance',  label: 'Support & Maintenance' },
  { value: 'other',                label: 'Other' },
];

export default function EnquiryPopup() {
  const { isDark, colors } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_interested: '',
    message: ''
  });

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('enquiry_popup_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('enquiry_popup_seen', 'true');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await apiClient.post('/enquiries', { ...formData, source: 'popup' });
    toast.success('Thank you! We will get back to you soon.');
    setIsSubmitting(false);
    handleClose();
  };

  const inputClass = `h-12 rounded-xl ${
    isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
  }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={`relative w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            {/* Gradient Header */}
            <div
              className="relative px-8 pt-8 pb-6"
              style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex justify-center mb-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                  <Logo size="sm" animated={true} showText={false} />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white text-center">
                Get in Touch with Us
              </h2>
              <p className="text-white/80 text-center mt-2">
                Share your project requirements and we'll get back to you within 24 hours
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 max-h-[60vh] overflow-y-auto space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className={inputClass}
                />
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                />

                {/* ── Native <select> — works inside modals, no z-index issues ── */}
                <div className="relative">
                  <select
                    value={formData.service_interested}
                    onChange={(e) => setFormData({ ...formData, service_interested: e.target.value })}
                    className={`w-full h-12 px-4 pr-10 rounded-xl border text-sm appearance-none cursor-pointer
                      focus:outline-none focus:ring-2 transition-colors
                      ${isDark
                        ? 'bg-gray-800 border-gray-700 text-white focus:ring-gray-600'
                        : 'bg-gray-50 border-gray-200 focus:ring-gray-300'
                      }
                      ${!formData.service_interested
                        ? 'text-gray-400'
                        : isDark ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    <option value="" disabled hidden>Service Interested In</option>
                    {services.map((s) => (
                      <option
                        key={s.value}
                        value={s.value}
                        className={isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
                      >
                        {s.label}
                      </option>
                    ))}
                  </select>
                  {/* Chevron icon */}
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <Textarea
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className={`rounded-xl resize-none ${
                  isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
                }`}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl text-white font-medium"
                style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})` }}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Enquiry
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}