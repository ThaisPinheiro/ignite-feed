import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt }) {
  return (
    <article className={ styles.post }>
      <header>
        <div className={styles.author}>
          <div className={styles.authorInfo}>
            <Avatar src={author.avatarUrl}/>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title='12 de Janeiro às 21h09' dateTime="2025-01-12 21:09:38">{ publishedAt.toString() }</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>👉&nbsp; <a href="">jane.design/doctorcare</a></p>
          <p><a href="">#novoprojeto</a>&nbsp;<a href="">#nlw</a>&nbsp;<a href="">#rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>

      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}