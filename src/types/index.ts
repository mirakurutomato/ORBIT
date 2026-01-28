export type ContentType = 'Book' | 'Event' | 'Article' | 'Code'

export type ContentTag = '失敗談' | '技術解説' | '思考過程' | '研究ノート' | 'チュートリアル'

export interface Content {
  id: string
  title: string
  description: string
  thumbnail: string
  type: ContentType
  tags: ContentTag[]
  url: string
  date: string
}

export interface Sponsor {
  id: string
  name: string
  logo: string
  logoType?: 'image' | 'text'
  url: string
}
