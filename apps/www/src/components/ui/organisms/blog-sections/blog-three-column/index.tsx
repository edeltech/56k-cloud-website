import {Article} from '@/models/article.model'
import ArticleCard from '@/components/ui/molecules/cards/article'

export type BlogThreeColumnProps = {
  title: string
  subtitle: string
  articles: Array<Article>
}

export default function BlogThreeColumn(props: BlogThreeColumnProps) { 
  return (
    <div className='py-24 bg-gray-900 sm:py-32'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>{props.title}</h2>
          <p className='mt-2 text-lg leading-8 text-gray-300'>
            {props.subtitle}
          </p>
        </div>
        <div
          className='grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-700 gap-x-8 gap-y-16 \
                     sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'
        >
          {props.articles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
            />
          ))}
        </div>
      </div>
    </div>
  )
}