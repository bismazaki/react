import "./App.css"
import Form from "./components/Form";
import InputChecker from "./components/InputChecker";
import PasswordChecker from "./components/PasswordChecker";
import Marksheet from "./components/MarkSheet";
// import Accordian from "./components/Accordian";
// import Cards from "./components/cards";
// import Examplestate from "./components/Examplestate";
import Post from "./components/Post";
import QuizApp from "./components/Quiz";
// import Pricing from "./components/pricing";

function App(){
  return(
    <>
    {/* <Pricing/>
    <Cards/>
    <Examplestate/>
    <Accordian head="Heading 01" desc="It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow." count="a"/>
    <Accordian head="Heading 02" desc="It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow." count="b"/>
    <Accordian head="Heading 03" desc="It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow." count="c"/> */}
    <Post/>
    <PasswordChecker/>
    <Form/>
    <InputChecker/>
   <Marksheet/>
   <QuizApp/>
    </>
  );
}

export default App;