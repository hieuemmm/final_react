import React, { useRef, useState } from 'react'
import { v4 as uid } from 'uuid'
const Select = (props) => {
    const { classBlock, labelName, nameSelect, placeholderSelect, setForm, required } = props;

    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [valueSelect, setValueSelect] = useState("");
    const selectDOM = useRef("");
    const statusFirst = useRef(true);
    const id = useRef(uid());

    const handleOnChange = () => {
        let valueCurrent = selectDOM.current.value;
        setValueSelect(valueCurrent);//re-render
        let feedback = "";
        if (required) {
            feedback = !valueCurrent ? "Required" : "";
        }
        setFeedbackMessage(feedback);
        setForm((prev) => {
            // let newForm = JSON.parse(JSON.stringify(prev));
            let newForm = { ...prev };
            newForm[nameSelect].value = valueCurrent;
            newForm[nameSelect].status = feedback.length === 0;
            return newForm;
        });
        statusFirst.current = false;
    }
    return (
        <div className={classBlock}>
            <label htmlFor={id.current}>{labelName}</label>
            <select
                id={id.current}
                name={nameSelect}
                className={
                    `custom-select ${feedbackMessage ? 'is-invalid' : ''} ${!feedbackMessage && !statusFirst.current && required ? 'is-valid' : ''}`
                }
                ref={selectDOM}
                onChange={handleOnChange}
            >
                <option value={""}>{placeholderSelect}</option>
                {props.children}
            </select>
            <div className="invalid-feedback">{feedbackMessage}</div>
        </div >
    )
}
export default Select