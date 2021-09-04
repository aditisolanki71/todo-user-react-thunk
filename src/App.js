import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/layout/navbar';
import NotFound from './components/pages/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPost from './components/posts/add-post';
import EditPost from './components/posts/edit-post';
import Post from './components/posts/post';
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello Itaims</h1>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/posts/add" component={AddPost} />
          <Route exact path="/posts/edit/:id" component={EditPost} />
          <Route exact path="/posts/:id" component={Post} />
          <Route exact component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
