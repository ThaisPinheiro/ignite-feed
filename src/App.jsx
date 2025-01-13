import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';
 
export function App() {
  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Thais Picioli"
            content="trocar para lorem ipsum"
          />  
          <Post
            author="Matheus Picioli"
            content="trocar para lorem ipsum"
          />
        </main>
      </div>
    </div>
  );
}