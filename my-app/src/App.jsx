import react, { Profiler } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Profile from "./components/Profile/Profile.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music";
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

  return (
    <BrowserRouter>
        <div className='app-wrapper'>
              <Header />
              <Nav />
         <div className='app-wrapper-content'>
             <Routes>
                 <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>
                 <Route path="/profile" element={<Profile store={props.store}/>}/>
                 <Route path="/news" element={<News/>}/>
                 <Route path="/music" element={<Music/>}/>
                 <Route path="/users" element={<UsersContainer/>}/>
             </Routes>
         </div>
        </div>
     </BrowserRouter>
  );
};

export default App;
