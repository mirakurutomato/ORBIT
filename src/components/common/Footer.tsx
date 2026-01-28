import { Instagram, Mail } from 'lucide-react'
import { XIcon } from '../icons/XIcon'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ORBIT</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              エンジニアリングの成功・失敗・思考過程を体系的に公開する
              オープンエンジニアリング基盤
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-sm hover:text-white transition-colors">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#contents" className="text-sm hover:text-white transition-colors">
                  Contents
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/second4893736/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Second489373"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:second489373@gmail.com"
                className="hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Second. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
