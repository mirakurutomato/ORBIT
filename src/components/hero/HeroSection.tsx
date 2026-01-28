import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-orbit-50/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orbit-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orbit-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orbit-100 text-orbit-700 rounded-full text-sm font-medium mb-8">
            <Rocket className="w-4 h-4" />
            Open Engineering Platform
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
        >
          結果ではなく、
          <br />
          <span className="text-orbit-600">成長プロセス</span>から学ぶ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-4"
        >
          成功・失敗・思考過程を含めて体系的に公開する
          <br className="hidden sm:block" />
          次世代エンジニアのためのオープンエンジニアリング基盤
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm font-medium tracking-widest text-orbit-600 uppercase mb-12"
        >
          Deep Dive into Process
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contents"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orbit-600 text-white font-medium rounded-lg hover:bg-orbit-700 transition-colors shadow-lg shadow-orbit-600/25"
          >
            コンテンツを見る
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
          >
            ORBITについて
          </a>
        </motion.div>

      </div>
    </section>
  )
}
