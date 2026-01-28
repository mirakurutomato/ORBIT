import { motion } from 'framer-motion'
import { sponsors } from '../../data/sponsors'
import type { Sponsor } from '../../types'

function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  const isImageLogo = sponsor.logoType === 'image' || sponsor.logo.startsWith('http')

  if (isImageLogo) {
    return (
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      />
    )
  }

  return (
    <span className="text-xl font-bold text-gray-400 group-hover:text-gray-900 transition-all duration-300 whitespace-nowrap">
      {sponsor.logo}
    </span>
  )
}

export function SponsorSection() {
  const marqueeItems = [...sponsors, ...sponsors, ...sponsors, ...sponsors]

  return (
    <section id="sponsors" className="py-20 bg-white overflow-hidden">
      {/*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Supported by
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ORBITの活動を支援してくださっているスポンサーの皆様
          </p>
        </motion.div>
      </div>*/}

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="overflow-hidden">
          <div className="flex w-fit animate-marquee-seamless hover:[animation-play-state:paused]">
            {[...marqueeItems, ...marqueeItems].map((sponsor, index) => (
              <a
                key={`${sponsor.id}-${index}`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-48 h-20 flex items-center justify-center">
                  <SponsorLogo sponsor={sponsor} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="bg-gradient-to-r from-orbit-50 to-blue-50 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            スポンサーになりませんか？
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            ORBITは次世代エンジニアの成長を支援するプラットフォームです。<br />
            マイクロスポンサーシップを通じて、この活動を一緒に支えてください。
          </p>
          <a
            href="mailto:second489373@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-orbit-600 text-white font-medium rounded-lg hover:bg-orbit-700 transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </motion.div>
    </section>
  )
}
