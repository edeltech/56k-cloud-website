import {NotionPostPreview} from '@/models/blog/blog-preview'
import {PageProps} from '@/models/page.model'
import {Tag} from '@/models/tag.model'
// eslint-disable-next-line max-len
import {createPostData, getPost, getPostsTags, getPublishedPosts, replaceNotionImagesInPostList} from '@/utils/notion'
import Head from 'next/head'
import Layout from '@/components/organisms/layout'
import MediumTitleSection from '@/components/molecules/title-section/medium'
import PostCardList from '@/components/organisms/card-list/post'

interface BlogPageProps extends PageProps {
  posts: Array<NotionPostPreview>
  tags: Array<Tag>
}


export default function Blog({t, posts, tags}: BlogPageProps) {
  return (
    <Layout
      t={t}
      fullHeightHero
    >
      <Head>
        <title>56K.Cloud | Blog</title>
      </Head>
      <MediumTitleSection
        title='From the blog'
        subTitle='Tech, stories and thoughts from 56K.Cloud'
        className='mb-5'/>
      <PostCardList
        tags={tags}
        posts={posts}/>
    </Layout>
  )
}

export async function getStaticProps() {
  //PROD
  let posts = await getPublishedPosts()
  await Promise.all(posts.map(async(post) => {
    await createPostData(await getPost(post.id))
  }))
  posts = await replaceNotionImagesInPostList(posts)
  // fs.writeFile(path.join(process.cwd(), 'data/blog/posts.json'), JSON.stringify(posts))
  const tags = await getPostsTags(true)
  // fs.writeFile(path.join(process.cwd(), 'data/blog/tags.json'), JSON.stringify(tags))

  //DEV
  // let posts = []
  // let tags = []
  // let tags = []
  // console.log('DONE !⭐️')

  return {
    props: {
      posts,
      tags
    },
    revalidate: 3600
  }
}