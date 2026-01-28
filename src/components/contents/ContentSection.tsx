import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { contents } from '../../data/contents'
import type { ContentType, ContentTag } from '../../types'
import { ContentCard } from './ContentCard'
import { ContentFilter } from './ContentFilter'

export function ContentSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<ContentType | 'All'>('All')
  const [selectedTag, setSelectedTag] = useState<ContentTag | 'All'>('All')

  const filteredContents = useMemo(() => {
    return contents.filter((content) => {
      const matchesSearch =
        searchQuery === '' ||
        content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesType = selectedType === 'All' || content.type === selectedType

      const matchesTag = selectedTag === 'All' || content.tags.includes(selectedTag)

      return matchesSearch && matchesType && matchesTag
    })
  }, [searchQuery, selectedType, selectedTag])

  return (
    <section id="contents" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contents
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            電子書籍、講演動画、技術記事など、エンジニアリングの知見を幅広く公開しています。
          </p>
        </motion.div>

        <ContentFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />

        {filteredContents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContents.map((content, index) => (
              <ContentCard key={content.id} content={content} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500">該当するコンテンツが見つかりませんでした。</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
