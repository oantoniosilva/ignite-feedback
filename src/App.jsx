import { Header } from './components/Header';
import { Post } from './Post';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Antonio Silva"
        content="Batatinha quando nasce se esparrama pelo chão."
      />
    </div>
  )
}

