export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8" id="contact">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">Connect with me:</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/abhiyanpa" className="hover:text-purple-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/abhiyanpa/" className="hover:text-purple-400 transition-colors">LinkedIn</a>
        </div>
        <p className="mt-8">© 2023 ABHIYAN P A. All rights reserved.</p>
      </div>
    </footer>
  )
}

