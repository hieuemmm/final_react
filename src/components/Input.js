import React, { useEffect, useRef, useState } from 'react'
import { v4 as uid } from 'uuid'
function Input(props) {
    const { classBlock, inline, labelName, nameInput, valueInput, typeInput, placeholderInput, setForm, rules } = props;
    const { required, minLength, maxLength, callBack } = rules;

    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [myValueInput, setMyValueInput] = useState(valueInput);
    const statusFirst = useRef(true);
    const id = useRef(uid());

    useEffect(() => {
        if (valueInput) {
            statusFirst.current = true;
        }
        setMyValueInput(valueInput);
    }, [valueInput]);

    const handleOnBlur = () => {
        let feedback = "";
        if (feedback.length === 0 && required) {
            feedback = !myValueInput ? labelName.replace(":", "") + " required" : "";
        }
        if (feedback.length === 0 && (required || myValueInput) && minLength) {
            feedback = myValueInput.length <= minLength ? `Min ${minLength} characters` : "";
        }
        if (feedback.length === 0 && (required || myValueInput) && maxLength) {
            feedback = myValueInput.length >= maxLength ? `Max ${maxLength} characters` : "";
        }
        if (feedback.length === 0 && (required || myValueInput) && callBack) {
            let matchMessage = callBack(myValueInput);
            feedback = matchMessage.length > 1 ? matchMessage : "";
        }
        setFeedbackMessage(feedback);
        setForm((prev) => {
            let newForm = JSON.parse(JSON.stringify(prev));
            newForm[nameInput].value = myValueInput;
            newForm[nameInput].status = feedback.length === 0;
            return newForm;
        });
        statusFirst.current = false;
    }
    return (
        <div className={`${!inline ? classBlock : ""} ${inline ? "form-group row w-100" : ""}`}>
            <label className={inline ? "with-70" : ""} htmlFor={id.current}>{labelName}</label>
            <div className={inline ? "col p-0" : ""}>
                <input
                    id={id.current}
                    name={nameInput}
                    className={
                        `form-control ${feedbackMessage ? 'is-invalid' : ''} ${!feedbackMessage && !statusFirst.current && rules.required ? 'is-valid' : ''}`
                    }
                    type={typeInput}
                    placeholder={placeholderInput}
                    value={myValueInput}
                    onChange={(event) => { setMyValueInput(event.target.value) }}
                    onBlur={handleOnBlur}
                />
                <div className="invalid-feedback">{feedbackMessage}</div>
            </div>
        </div >
    )
}

export default Input
