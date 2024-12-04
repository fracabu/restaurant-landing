const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} La Cucina Italiana. Tutti i diritti riservati.
          </p>
          <div className="mt-4 space-x-4">
            <a
              href="/privacy"
              className="text-amber-500 hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-amber-500 hover:underline"
            >
              Termini e Condizioni
            </a>
          </div>
          <div className="mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-400 hover:text-amber-500 mx-2"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-400 hover:text-amber-500 mx-2"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-400 hover:text-amber-500 mx-2"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  