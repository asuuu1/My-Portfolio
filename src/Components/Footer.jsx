const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto px-6 flex flex-col items-center text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <p>📧 Gmail: <a href="mailto:asutoshpadhy2000@gmail.com" className="hover:text-gray-400 transition">asutoshpadhy2000@gmail.com</a></p>
                    <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/asutoshpadhy637/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">linkedin.com/in/asutoshpadhy637</a></p>
                    <p>🐱 GitHub: <a href="https://github.com/asuuu1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">github.com/asuuu1</a></p>
                    <p>📞 Phone: +91 6370867411</p>
                    <p>📍 Address: Hyderabad, Telangana</p>
                </div>
            </div>
  
            <div className="mt-6 text-center border-t border-gray-700 pt-4">
                <p className="text-blue-500 text-sm font-semibold">
                    All rights reserved @Asutosh Padhy - 2025
                </p>
            </div>
        </footer>
    );
};
  
  export default Footer;
  