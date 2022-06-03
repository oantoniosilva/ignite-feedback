import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './Post';

import './global.css';

import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Antonio Silva'
            content='Lorem ipsum dolor sit amet'
          />
        </main>
      </div>
    </div>
  )
}

