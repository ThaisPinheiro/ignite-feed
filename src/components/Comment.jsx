import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className = {styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ThaisPinheiro.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thais Pinheiro</strong>
              <time title='28 de jan às 22h' datetime="2025-05-05">Cerda de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}