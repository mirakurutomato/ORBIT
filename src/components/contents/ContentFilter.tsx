import { Search } from 'lucide-react'
import type { ContentType, ContentTag } from '../../types'

interface ContentFilterProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedType: ContentType | 'All'
  setSelectedType: (type: ContentType | 'All') => void
  selectedTag: ContentTag | 'All'
  setSelectedTag: (tag: ContentTag | 'All') => void
}

const types: (ContentType | 'All')[] = ['All', 'Book', 'Event', 'Article', 'Code']
const tags: (ContentTag | 'All')[] = ['All', '失敗談', '技術解説', '思考過程', '研究ノート', 'チュートリアル']

export function ContentFilter({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  selectedTag,
  setSelectedTag,
}: ContentFilterProps) {
  return (
    <div className="space-y-4 mb-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="コンテンツを検索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orbit-500 focus:border-transparent transition-shadow"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">種別</label>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  selectedType === type
                    ? 'bg-orbit-600 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-orbit-300 hover:text-orbit-600'
                }`}
              >
                {type === 'All' ? 'すべて' : type}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">タグ</label>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  selectedTag === tag
                    ? 'bg-orbit-600 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-orbit-300 hover:text-orbit-600'
                }`}
              >
                {tag === 'All' ? 'すべて' : tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
