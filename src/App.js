import { useEffect, useRef, useState } from 'react';
import './styles/App.css';
import Input from './components/Input'
import Select from './components/Select'
import CheckBox from './components/CheckBox'
import Radio from './components/Radio'
import { isEmail, isPassword } from './utils/ValidateUtils'
function App() {
  const [form, setForm] = useState({
    emailInput: { value: "", status: false },
    passwordInput: { value: "", status: false },
    dateTimeInput: { value: "", status: false },
    numberSelect: { value: "", status: false },
    AgreeCheckBox: { value: undefined, status: false },
    GenderRadio: { value: undefined, status: false }
  });
  const allowSubmit = useRef(false);
  const submitDOM = useRef();
  //handle
  const handelOnCancel = (event) => {
    event.preventDefault();
    console.log(form);
  }
  const handelOnSubmit = (event) => {
    event.preventDefault();
    if (allowSubmit.current) {
      alert("Success");
    }
  }
  return (
    <div className="App">
      <form className='col-6 border p-4 mx-auto mt-3'>
        <div className="form-row">
          <Input classBlock={"col-12"}
            inline={true}
            labelName={"Email:"}
            nameInput={"emailInput"}
            typeInput={"email"}
            placeholderInput={"Enter email..."}
            setForm={setForm}
            rules={{
              required: true,
              minLength: 10,
              maxLength: 30,
              callBack: isEmail
            }} />
          <Input classBlock={"col-12"}
            labelName={"Password:"}
            nameInput={"passwordInput"}
            typeInput={"password"}
            placeholderInput={"Enter password..."}
            setForm={setForm}
            rules={{
              required: true,
              minLength: 10,
              maxLength: 30,
              callBack: isPassword
            }} />
          <Input classBlock={"col-12"}
            labelName={"Date time:"}
            nameInput={"dateTimeInput"}
            typeInput={"datetime-local"}
            // placeholderInput={"Enter password..."}
            setForm={setForm}
            rules={{
              required: true,
              // minLength: 10,
              // maxLength: 30,
              callBack: () => true
            }} />
          <Select classBlock={"col-12"}
            labelName={"Pick number:"}
            nameSelect={"numberSelect"}
            placeholderSelect={"Pick number"}
            setForm={setForm}
            required={true}
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Select>
          <Radio.Group classBlock={"col-12 my-2"}
            inline={true}
            labelName={"Gender:"}
            nameRadio={"GenderRadio"}
            setForm={setForm}
            required={true}
          >
            <Radio.Item labelName={"Male"} />
            <Radio.Item labelName={"Female"} />
          </Radio.Group>
          <CheckBox classBlock={"col-12 my-2"}
            labelName={"I agree with conventions above"}
            nameCheckBox={"AgreeCheckBox"}
            setForm={setForm}
            required={true}
          />
          <div className='d-flex justify-content-end w-100'>
            <button className='btn btn-light border mr-1' onClick={handelOnCancel}>Cancel</button>
            <button className='btn btn-success' ref={submitDOM} onClick={handelOnSubmit} >Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
