import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import ReadProduct from "./components/ReadProduct";
import CreateProduct from "./components/CreateProduct";

// import Table from "./components/Table";
// import Login from "./components/Login";
// import Form from "./components/Form";
// import InputChecker from "./components/InputChecker";
// import PasswordChecker from "./components/PasswordChecker";
// import Marksheet from "./components/MarkSheet";
// import Accordian from "./components/Accordian";
// import Cards from "./components/cards";
// import Examplestate from "./components/Examplestate";
// import Post from "./components/Post";
// import QuizApp from "./components/Quiz";
// import MovieBooking from "./components/MovieBooking";
// import Pricing from "./components/pricing";
// import Materialtext from "./components/Materialtext";
// import Materialform from "./components/Materialform";
// import PizzaOrder from "./components/PizzzaOrder";
// import BottomNav from "./components/BottomNav";
// import TodoList from "./components/TodoList";
//  import Quizapp from "./components/Quizapp";

function App(){
  return(
    <>
    {/* <Pricing/>
    <Cards/>
    <Examplestate/>
    <Accordian head="Heading 01" desc="It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow." count="a"/>
    <Accordian head="Heading 02" desc="It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow." count="b"/>
    <Accordian head="Heading 03" desc="It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow." count="c"/> */}
    {/* <Post/>
    <PasswordChecker/>
    <Form/>
    <InputChecker/>
   <Marksheet/>
   <QuizApp/>
   <MovieBooking/>
   <Materialtext/>
   <Materialform/>
   <PizzaOrder/>
   <BottomNav/>
   <TodoList/> */}
   {/* <Login/>  */}
    {/* <Table/>
  <Quizapp/> */}
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<CreateProduct/>}/>
    <Route path="/display-products" element={<ReadProduct/>}/>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;