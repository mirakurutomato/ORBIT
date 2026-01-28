import { motion } from 'framer-motion'
import { Book, Calendar, Video, FileText, Code } from 'lucide-react'
import type { Content } from '../../types'

interface ContentCardProps {
  content: Content
  index: number
}

const typeIcons = {
  Book: Book,
  Event: Video,
  Article: FileText,
  Code: Code,
}

const typeColors = {
  Book: 'bg-blue-100 text-blue-700',
  Event: 'bg-purple-100 text-purple-700',
  Article: 'bg-green-100 text-green-700',
  Code: 'bg-orange-100 text-orange-700',
}

const tagColors = {
  '失敗談': 'bg-red-50 text-red-600 border-red-200',
  '技術解説': 'bg-blue-50 text-blue-600 border-blue-200',
  '思考過程': 'bg-purple-50 text-purple-600 border-purple-200',
  '研究ノート': 'bg-green-50 text-green-600 border-green-200',
  'チュートリアル': 'bg-yellow-50 text-yellow-600 border-yellow-200',
}

export function ContentCard({ content, index }: ContentCardProps) {
  const Icon = typeIcons[content.type]

  return (
    <motion.a
      href={content.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={content.thumbnail}
          alt={content.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${typeColors[content.type]}`}>
          <Icon className="w-3.5 h-3.5" />
          {content.type}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <Calendar className="w-3.5 h-3.5" />
          {new Date(content.date).toLocaleDateString('ja-JP')}
        </div>

        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orbit-600 transition-colors line-clamp-2">
          {content.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {content.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {content.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 text-xs font-medium rounded border ${tagColors[tag]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
