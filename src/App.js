import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Create from "./components/Create";
import BlogDetail from "./components/BlogDetail";
import NotFound from './components/notFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />}/>
          <Route path="/blog/:id" element={<BlogDetail />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
