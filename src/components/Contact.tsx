import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Map } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate elite submission pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact" 
      className="py-24 sm:py-32 bg-[#0E0E0E] text-white relative overflow-hidden border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-xs font-mono uppercase tracking-widest block mb-3"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-heading tracking-tight"
          >
            CONTACT <span className="text-accent">TRANZPIRE GYM</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#BDBDBD] text-sm sm:text-base font-light leading-relaxed mt-4"
          >
            Ready to initiate your transformation? Visit our facility, speak with an athletic counselor, or submit an inquiry below.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Coordinates & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="space-y-8">
              
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#161616] border border-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg tracking-wider text-white">Location</h3>
                  <p className="text-xs text-[#BDBDBD] mt-1 font-light leading-relaxed">
                    Luxury Heights, 4th Floor, Sector 54, Gurugram, Haryana, India - 122011
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#161616] border border-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg tracking-wider text-white">Hotline</h3>
                  <p className="text-xs text-[#BDBDBD] mt-1 font-light font-mono">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#161616] border border-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg tracking-wider text-white">Inquiries</h3>
                  <p className="text-xs text-[#BDBDBD] mt-1 font-light font-mono">
                    membership@tranzpiregym.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#161616] border border-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg tracking-wider text-white">Club Hours</h3>
                  <div className="text-xs text-[#BDBDBD] mt-1 font-light leading-relaxed space-y-0.5">
                    <p>Monday - Friday: <span className="font-mono text-white">24 Hours Open</span></p>
                    <p>Saturday - Sunday: <span className="font-mono text-white">5:00 AM - 11:00 PM</span></p>
                  </div>
                </div>
              </div>

            </div>

            {/* Inverted grayscale map embed */}
            <div className="relative border border-white/5 h-[250px] overflow-hidden">
              <iframe
                title="Tranzpire Gym Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14036.758376510462!2d77.10065267275817!3d28.43265778841498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f5ffffffbf%3A0x889816ffdd47dc2c!2sSector%2054%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full grayscale invert opacity-75 contrast-[1.25]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-black/90 px-2.5 py-1 text-[9px] uppercase tracking-widest font-mono font-bold text-white border border-white/10 flex items-center gap-1">
                <Map className="w-3 h-3 text-accent" />
                Live Map View
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#161616] border border-white/5 p-8 sm:p-10 relative h-full flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <h3 className="font-heading text-2xl tracking-wider text-white">
                        SEND US A SECURE MESSAGE
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="form-name" className="text-[10px] uppercase tracking-widest text-[#BDBDBD] font-mono">
                            Full Name
                          </label>
                          <input
                            id="form-name"
                            type="text"
                            name="name"
                            required
                            placeholder="Alex Mercer"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-black/40 border border-white/10 focus:border-accent text-white px-4 py-3 outline-none transition-all placeholder:text-[#555] rounded-none text-sm font-medium"
                          />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="form-email" className="text-[10px] uppercase tracking-widest text-[#BDBDBD] font-mono">
                            Email Address
                          </label>
                          <input
                            id="form-email"
                            type="email"
                            name="email"
                            required
                            placeholder="alex@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-black/40 border border-white/10 focus:border-accent text-white px-4 py-3 outline-none transition-all placeholder:text-[#555] rounded-none text-sm font-medium"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="form-phone" className="text-[10px] uppercase tracking-widest text-[#BDBDBD] font-mono">
                          Phone Number
                        </label>
                        <input
                          id="form-phone"
                          type="tel"
                          name="phone"
                          required
                          placeholder="+91 99999 88888"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-black/40 border border-white/10 focus:border-accent text-white px-4 py-3 outline-none transition-all placeholder:text-[#555] rounded-none text-sm font-medium"
                        />
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="form-message" className="text-[10px] uppercase tracking-widest text-[#BDBDBD] font-mono">
                          Your Message
                        </label>
                        <textarea
                          id="form-message"
                          name="message"
                          required
                          rows={4}
                          placeholder="Tell us about your fitness ambitions or general club questions..."
                          value={formData.message}
                          onChange={handleChange}
                          className="bg-black/40 border border-white/10 focus:border-accent text-white px-4 py-3 outline-none transition-all placeholder:text-[#555] rounded-none text-sm font-medium resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto self-start px-8 py-4 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white font-semibold uppercase tracking-widest text-xs transition-all hover:scale-105 duration-300 flex items-center justify-center gap-2 cursor-pointer mt-6"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center h-full py-12"
                  >
                    <div className="w-20 h-20 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 rounded-none shadow-neon">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-heading text-3xl tracking-wider text-white mb-3">
                      MESSAGE TRANSMITTED
                    </h3>
                    <p className="text-xs text-[#BDBDBD] font-light max-w-sm leading-relaxed mb-6">
                      Thank you for contacting Tranzpire Gym. An athletic intake counselor will review your inquiry and reach out via phone or email within the next 2 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[10px] uppercase tracking-widest font-semibold transition-all"
                    >
                      Submit Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
