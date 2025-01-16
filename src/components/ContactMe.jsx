import { motion } from "framer-motion";

const ContactMe = () => (
  <motion.section
    className="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto my-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-600"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-600"
      />
      <textarea
        placeholder="Your Message"
        className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-600"
        rows="4"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        Send Message
      </button>
    </form>
  </motion.section>
);

export default ContactMe;
