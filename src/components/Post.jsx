import styles from './Post.module.css';

export function Post() {
  return (
    <article className={ styles.post }>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/ThaisPinheiro.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Thais Picioli</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='12 de Janeiro às 21h09' datetime="2025-01-12 21:09:38">Publicado há 1h</time>
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
    </article>
  );
}