import { useState } from "react";
import './App.css';
import inputs from './components/inputs';
import FormInput from './components/FormInput';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "", 
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {inputs.map((input) => (
          <FormInput 
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            className="input"
          />
        ))}
        <button className="disabledContent">Submit</button>
      </form>
    </div>
  );
}

export default App;
