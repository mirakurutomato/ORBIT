import { motion } from 'framer-motion'
import { Target, Eye, Users, BookOpen, Code, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: '成長プロセスの共有',
    description: '論文や成果物だけでなく、研究の舞台裏、意思決定の過程、未公開のソースコードまで公開します。',
  },
  {
    icon: Code,
    title: '失敗からの学び',
    description: '成功事例だけでなく、失敗事例も包み隠さず共有。リアルなエンジニアリングを伝えます。',
  },
  {
    icon: Lightbulb,
    title: '思考過程の可視化',
    description: '「なぜそう考えたのか」「どう意思決定したのか」まで深く掘り下げて解説します。',
  },
]

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: '次世代エンジニアが「結果」ではなく「成長プロセス」から学べる環境を提供する。',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'エンジニアリングの透明性を高め、誰もが先人の知見から学べる世界を実現する。',
  },
  {
    icon: Users,
    title: 'Target',
    description: '高専生、大学生、若手エンジニアなど、成長意欲の高い次世代エンジニア。',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About ORBIT
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ORBITは、奥河董馬およびSecondのエンジニアリング活動を、
            成功・失敗・思考過程を含めて体系的に公開するオープンエンジニアリング基盤です。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-orbit-50/50 to-transparent border border-orbit-100"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-orbit-100 text-orbit-600 rounded-xl mb-5">
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ORBITが提供する価値
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            従来の技術記事や論文では見えない、エンジニアリングの「裏側」を公開します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white text-orbit-600 rounded-lg mb-4 shadow-sm group-hover:bg-orbit-600 group-hover:text-white transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 bg-gray-900 rounded-2xl">
            <p className="text-orbit-400 text-sm font-medium tracking-widest uppercase mb-2">
              Presented by
            </p>
            <p className="text-white text-2xl font-bold">Second</p>
            <p className="text-gray-400 text-sm mt-2">個人事業主 / エンジニアリング</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
