import type { Metadata } from 'next'
import { cache } from 'react'
import styles from './page.module.css'

type Props = {
  params: Promise<{ id: string }>
}

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const getPost = cache(async (id: string): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = await getPost(id)

  return {
    title: post.title,
    description: post.body,
  }
}

export default async function PostPage({ params }: Props) {
  const { id } = await params
  const post = await getPost(id)

  return (
    <main className={styles.container}>
      <p className={styles.id}>Пост #{post.id}</p>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.body}>{post.body}</p>
    </main>
  )
}