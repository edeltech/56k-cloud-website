import BlogCard, {BlogCardProps} from '../../components/molecules/blog-card'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import TabsFilter from '../molecules/tabs-filter'

export type BlogCardsWrapperProps = {
  posts: Array<BlogCardProps>
  tags: Array<string>
}

export default function BlogCardsWrapper({posts, tags}: BlogCardsWrapperProps) {
  return (
    <section className='section-padding'>
      <div className='mx-auto max-w-7xl'>
        <TabsFilter tags={tags} />
        <ResponsiveMasonry
          columnsCountBreakPoints={{300: 1, 700: 2, 1000: 3}}
        >
          <Masonry gutter='2.5rem'>
            {posts.map((post, idx) => (
              <BlogCard key={idx} post={post}/>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  )
}