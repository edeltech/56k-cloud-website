import {Article} from '@/models/article.model'
import {DateTime} from 'luxon'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import ArticleCard from '@/components/ui/molecules/cards/article'
import MasonryLayout from '../masonry'
import slugify from 'slugify'

export type ArticleListProps = {
  articles: Array<Article>
}

export default function ArticleList({articles}: ArticleListProps) {
  const router = useRouter()
  const queryTag = router.query.tag
  const [filteredPosts, setFilteredPosts] = useState<Array<Article>>([])

  useEffect(() => {
    setFilteredPosts([])
    if (router.isReady) {
      const filteredArticles = articles
        .filter(article => queryTag ? article.tags.map(tag => slugify(tag.name).toLowerCase())
          .includes(queryTag?.toString()) : true)
      setTimeout(() => {
        setFilteredPosts(filteredArticles.sort((a,b) => DateTime.fromISO(b.publishedOn).toMillis()
         - DateTime.fromISO(a.publishedOn).toMillis()))
      }, 100)
    }
  }, [router.isReady, queryTag])

  return (
    <MasonryLayout>
      {filteredPosts.map((article, index) => (
        <ArticleCard
          key={index}
          article={article}
        />
      ))}
    </MasonryLayout>
  )
}
