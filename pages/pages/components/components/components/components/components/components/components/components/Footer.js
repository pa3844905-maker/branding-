export default function Footer(){
  return (
    <footer className="bg-primary border-t border-white/30 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-semibold text-lg">Hamsha Studio</div>
          <div className="text-sm text-gray-600 mt-2">© 2026 Hamsha Studio. All Rights Reserved.</div>
        </div>
        <div className="flex gap-6">
          <div>
            <div className="font-medium">Quick Links</div>
            <div className="text-sm text-gray-600 mt-2">Services<br/>Portfolio<br/>Reviews<br/>Contact</div>
          </div>
          <div>
            <div className="font-medium">Follow</div>
            <div className="text-sm text-gray-600 mt-2">LinkedIn · Instagram · Facebook · Behance · Dribbble</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
