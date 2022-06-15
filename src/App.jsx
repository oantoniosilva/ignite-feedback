import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';

import styles from './App.module.css';
import { parseWithOptions } from 'date-fns/fp';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/oantoniosilva.png',
      name: 'Antonio Silva',
      role: 'Web Development'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.' }, 
      { type: 'Link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernades',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.' }, 
      { type: 'Link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
]

export function App(props) {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

