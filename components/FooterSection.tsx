export default function FooterSection() {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800 text-center">
      <h3 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h3>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Reach out directly for engineering or AI consulting:
      </p>
      
      <a
        href="mailto:josh@joshandco.cc"
        className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-medium rounded-lg hover:opacity-90 transition-opacity"
      >
        josh@joshandco.cc
      </a>

      <p className="mt-8 text-xs text-gray-500">
        © {new Date().getFullYear()} Josh & Co. All rights reserved.
      </p>
    </footer>
  );
}