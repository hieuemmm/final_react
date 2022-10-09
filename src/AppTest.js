import { useRef, useState } from 'react';
import './styles/App.css';
import Input from './components/Input'
import Select from './components/Select'
import CheckBox from './components/CheckBox'
import Radio from './components/Radio'
import TextArea from './components/TextArea'
import { isEmail, isPassword, isName, isAddress, isNumber } from './utils/ValidateUtils'
import { currencyFormat } from './utils/FormatUtils'
function App() {
  const [form, setForm] = useState({
    emailInput: { newValue: "", feedback: "" },
    passwordInput: { newValue: "", feedback: "" },
    timeInput: { newValue: "", feedback: "" },
    dateInput: { newValue: "", feedback: "" },
    dateTimeInput: { newValue: "", feedback: "" },
    numberSelect: { newValue: "", feedback: "" },
    GenderRadio: { newValue: "", feedback: "" },
    AgreeCheckBox: { newValue: false, feedback: "" },
    descTextArea: { newValue: "", feedback: "" },
  });
  const rulesForm = useRef({
    emailInput: {
      required: true,
      minLength: 10,
      maxLength: 30,
      callBack: isEmail,
    },
    passwordInput: {
      required: true,
      minLength: 10,
      maxLength: 30,
      callBack: isPassword
    },
    timeInput: {
      required: true,
      callBack: () => true
    },
    dateInput: {
      required: true,
      callBack: () => true
    },
    dateTimeInput: {
      required: true,
      callBack: () => true
    },
    numberSelect: {
      required: true,
    },
    GenderRadio: {
      required: true,
    },
    AgreeCheckBox: {
      required: true,
    },
    descTextArea: {
      required: true,
      maxLength: 200,
      callBack: () => true,
    },
  });
  //HANDLE EVENT
  const handelOnSubmit = () => {
    validate({ value: form.emailInput.value, nameFormElement: "emailInput" });
    validate({ value: form.passwordInput.value, nameFormElement: "passwordInput" });
    validate({ value: form.timeInput.value, nameFormElement: "timeInput" });
    validate({ value: form.dateInput.value, nameFormElement: "dateInput" });
    validate({ value: form.dateTimeInput.value, nameFormElement: "dateTimeInput" });
    validate({ value: form.numberSelect.value, nameFormElement: "numberSelect" });
    validate({ value: form.GenderRadio.value, nameFormElement: "GenderRadio" });
    validate({ value: form.AgreeCheckBox.value, nameFormElement: "AgreeCheckBox" });
    validate({ value: form.descTextArea.value, nameFormElement: "descTextArea" });
    let isSubmit = true;
    for (const key in form) {
      isSubmit &= !form[key].feedback;
    }
    if (isSubmit) {
      alert("Success");
    }
  }
  // INSTANCE METHOD
  const validate = ({ newValue, nameFormElement, lableNameFormElement }) => {
    const { required, minLength, maxLength, callBack } = rulesForm.current[nameFormElement];
    let feedback = "";
    if (feedback.length === 0 && required) {
      feedback = !newValue ? (lableNameFormElement ?? "") + " required" : "";
    }
    if (feedback.length === 0 && (required || newValue) && minLength) {
      feedback = newValue.length <= minLength ? `Min ${minLength} characters` : "";
    }
    if (feedback.length === 0 && (required || newValue) && maxLength) {
      feedback = newValue.length >= maxLength ? `Max ${maxLength} characters` : "";
    }
    if (feedback.length === 0 && (required || newValue) && callBack) {
      let matchMessage = callBack(newValue);
      feedback = matchMessage.length > 1 ? matchMessage : "";
    }
    let newForm = { ...form };
    newForm[nameFormElement].value = newValue;
    newForm[nameFormElement].feedback = feedback.replace(":", "");
    setForm(newForm);
  }
  return (
    <div className="App">
      <div className='col-6 border p-4 mx-auto mt-3'>
        <Input labelName={"Email:"}
          inline
          nameInput={"emailInput"}
          typeInput={"email"}
          valueInput={form.emailInput}
          placeholderInput={"Enter email..."}
          validate={validate}
        />
        <Input labelName={"Password:"}
          inline
          nameInput={"passwordInput"}
          typeInput={"password"}
          placeholderInput={"Enter password..."}
          valueInput={form.passwordInput}
          validate={validate}
        />
        <Input labelName={"Time:"}
          inline
          nameInput={"timeInput"}
          typeInput={"time"}
          valueInput={form.timeInput}
          validate={validate}
        />
        <Input labelName={"Date:"}
          inline
          nameInput={"dateInput"}
          typeInput={"date"}
          valueInput={form.dateInput}
          validate={validate}
        />
        <Input labelName={"Date time:"}
          inline
          nameInput={"dateTimeInput"}
          typeInput={"datetime-local"}
          valueInput={form.dateTimeInput}
          validate={validate}
        />
        <TextArea labelName={"Description:"}
          inline
          nameInput={"descTextArea"}
          row={4}
          placeholderInput={"Enter description..."}
          valueInput={form.descTextArea}
          validate={validate}
        />
        <Select labelName={"Pick number:"}
          inline
          nameSelect={"numberSelect"}
          valueInput={form.numberSelect}
          validate={validate}
        >
          <option value="">--Pick number--</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Select>
        <Radio.Group labelName={"Gender:"}
          inline
          nameRadio={"GenderRadio"}
          valueInput={form.GenderRadio}
          validate={validate}
        >
          <Radio.Item value={"Male"} inline />
          <Radio.Item value={"Female"} inline />
        </Radio.Group>
        <CheckBox labelName={"I agree with conventions above"}
          nameCheckBox={"AgreeCheckBox"}
          valueInput={form.AgreeCheckBox}
          validate={validate}
        />
        <div className='d-flex justify-content-end w-100'>
          <button className='btn btn-light border mr-2' onClick={() => console.log(form)}>Show form</button>
          <button className='btn btn-success' onClick={handelOnSubmit} >Submit</button>
        </div>
      </div>
    </div >
  );
}

export default App;
