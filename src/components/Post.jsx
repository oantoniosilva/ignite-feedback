import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/oantoniosilva.png' />
          <div className={styles.authorInfo}>
            <strong>Antonio Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='06 de Junho às 01:00h' dateTime='2022-06-04 01:00:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera Fala galeraa 👋</p>
        <p>Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da
          Rocketseat. O nome do projeto é DoctorCare.</p>
        <p><a href=''>jane.design/doctorcare</a></p>
        <p>
          <a href=''>#novoprojeto</a>{' '}
          <a href=''>#nlw</a>{' '}
          <a href=''>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
