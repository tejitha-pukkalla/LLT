import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, Loader2, Clock,
  MessageCircle, Instagram, Linkedin, Facebook
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTheme } from '../components/theme/ThemeContext';
import { apiClient } from "@/api/apiClient";
import { toast } from 'sonner';

const services = [
  { value: 'web_development', label: 'Web Development' },
  { value: 'mobile_app', label: 'Mobile App Development' },
  { value: 'software_development', label: 'Software Development' },
  { value: 'digital_marketing', label: 'Digital Marketing' },
  { value: 'ui_ux_design', label: 'UI/UX Design' },
  { value: 'cloud_services', label: 'Cloud Services' },
  { value: 'support_maintenance', label: 'Support & Maintenance' },
  { value: 'other', label: 'Other' },
];

export default function Contact() {
  const { isDark, colors } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_interested: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await base44.entities.Enquiry.create({
      ...formData,
      source: 'contact_page'
    });

    toast.success('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service_interested: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className={`pt-32 pb-20 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ 
              background: `${colors.secondary}20`,
              color: colors.secondary
            }}
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Get In <span style={{ color: colors.secondary }}>Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={`p-8 rounded-3xl h-full ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h2>

              <div className="space-y-6 mb-12">
                <a 
                  href="tel:+919876543210"
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-colors ${
                    isDark ? 'hover:bg-gray-800' : 'hover:bg-white'
                  }`}
                >
                  <div 
                    className="p-3 rounded-xl"
                    style={{ background: `${colors.secondary}20` }}
                  >
                    <Phone className="w-6 h-6" style={{ color: colors.secondary }} />
                  </div>
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Phone
                    </div>
                    <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      +91 98765 43210
                    </div>
                  </div>
                </a>

                <a 
                  href="mailto:info@logiclife.tech"
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-colors ${
                    isDark ? 'hover:bg-gray-800' : 'hover:bg-white'
                  }`}
                >
                  <div 
                    className="p-3 rounded-xl"
                    style={{ background: `${colors.secondary}20` }}
                  >
                    <Mail className="w-6 h-6" style={{ color: colors.secondary }} />
                  </div>
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Email
                    </div>
                    <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      info@logiclife.tech
                    </div>
                  </div>
                </a>

                <div className={`flex items-start gap-4 p-4 rounded-2xl`}>
                  <div 
                    className="p-3 rounded-xl"
                    style={{ background: `${colors.secondary}20` }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: colors.secondary }} />
                  </div>
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Address
                    </div>
                    <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      123 Tech Park, Innovation District,<br />
                      Bangalore, India - 560001
                    </div>
                  </div>
                </div>

                <div className={`flex items-start gap-4 p-4 rounded-2xl`}>
                  <div 
                    className="p-3 rounded-xl"
                    style={{ background: `${colors.secondary}20` }}
                  >
                    <Clock className="w-6 h-6" style={{ color: colors.secondary }} />
                  </div>
                  <div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Business Hours
                    </div>
                    <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      Mon - Fri: 9:00 AM - 6:00 PM IST<br />
                      Sat - Sun: Closed
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: MessageCircle, href: "https://wa.me/919876543210", color: "#25D366" },
                    { icon: Instagram, href: "#", color: "#E4405F" },
                    { icon: Linkedin, href: "#", color: "#0A66C2" },
                    { icon: Facebook, href: "#", color: "#1877F2" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-3 rounded-full"
                      style={{ background: `${social.color}20` }}
                    >
                      <social.icon className="w-5 h-5" style={{ color: social.color }} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form 
              onSubmit={handleSubmit}
              className={`p-8 rounded-3xl ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
            >
              <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Send Us a Message
              </h2>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className={`h-12 rounded-xl ${
                        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                      }`}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className={`h-12 rounded-xl ${
                        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`h-12 rounded-xl ${
                        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                      }`}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`h-12 rounded-xl ${
                        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                      }`}
                    />
                  </div>
                </div>

                <Select 
                  value={formData.service_interested} 
                  onValueChange={(value) => setFormData({ ...formData, service_interested: value })}
                >
                  <SelectTrigger className={`h-12 rounded-xl ${
                    isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}>
                    <SelectValue placeholder="Service Interested In" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className={`rounded-xl resize-none ${
                    isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl text-white font-medium"
                  style={{
                    background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`
                  }}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}