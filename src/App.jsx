import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ThaisPinheiro.png"',
      name: 'Thais Picioli',
      role: 'Desenvolvedora Web'
    },
    content: [
      { type: 'pharagraph', content: 'Fala galeraa 👋' },
      { type: 'pharagraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-02-02 14:45:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ThaisPinheiro.png"',
      name: 'Matheus Picioli',
      role: 'Desenvolvedor Web'
    },
    content: [
      { type: 'pharagraph', content: 'Fala galeraa 👋' },
      { type: 'pharagraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-05-05 14:45:00')
  }
];

export function App() {
  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
          <Sidebar />
        <main>
         {posts.map(post => {
          return (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
      </div>
    </div>
  );
}