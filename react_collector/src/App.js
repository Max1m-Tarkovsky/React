
import './App.css';
import {Component} from "react";

const Header = () => {
    return <h2>Hello Word</h2>
}

class  Field extends Component{
    render() {
        const holder = 'Enter here'
        const styledField ={
            width :"300px"

        };
        return <input
            placeholder={holder}
            type={"text"}
            style={styledField}/>
    }
}

function Btn (){
   const text = 'Log in';
   const logged = true;
   const res = ()=>{
        return 'Log in2'
    }
  const p = <p> Log in 3</p>
    return <button>{logged ? 'Enter': text}</button>
}
function App() {
    return (
        <div className="App">
            <Header/>
            <Field/>
            <Btn/>

        </div>
    );
}
export {Header};
export default App;
