import React, { useRef, useState } from 'react'
import { v4 as uid } from 'uuid'
const CheckBox = (props) => {
    const { classBlock, labelName, nameCheckBox, setForm, required } = props;

    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [valueCheckBox, setValueCheckBox] = useState("");
    const statusFirst = useRef(true);
    const id = useRef(uid());

    const handleOnChange = (valueCurrent) => {
        setValueCheckBox(valueCurrent);
        let feedback = "";
        if (required) {
            feedback = !valueCurrent ? "Required" : "";
        }
        setFeedbackMessage(feedback);
        setForm((prev) => {
            let newForm = JSON.parse(JSON.stringify(prev));
            newForm[nameCheckBox].value = valueCurrent;
            newForm[nameCheckBox].status = feedback.length === 0;
            return newForm;
        });
        statusFirst.current = false;
    }
    return (

        <div className={classBlock}>
            <div className={
                `custom-control custom-checkbox ${feedbackMessage ? 'is-invalid' : ''} ${!feedbackMessage && !statusFirst.current && required ? 'is-valid' : ''}`}
            >
                <input id={id}
                    type="checkbox"
                    className="custom-control-input"
                    onChange={event => handleOnChange(event.target.checked)}
                />
                <label className="custom-control-label" htmlFor={id}>{labelName}</label>
            </div>
            <div className="invalid-feedback">{feedbackMessage}</div>
        </div >
    )
}
export default CheckBox