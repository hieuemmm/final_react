import React, { cloneElement, useRef, useState } from 'react'
import { v4 as uid } from 'uuid'
const Group = (props) => {
    const { classBlock, labelName, inline, nameRadio, setForm, required } = props;

    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [valueGroup, setValueGroup] = useState("");
    const statusFirst = useRef(true);
    const id = useRef(uid());

    const handelOnChange = (valueCurrent) => {
        setValueGroup(valueCurrent);//re-render
        let feedback = "";
        if (required) {
            feedback = !valueCurrent ? "Required" : "";
        }
        setFeedbackMessage(feedback);
        setForm((prev) => {
            let newForm = JSON.parse(JSON.stringify(prev));
            newForm[nameRadio].value = valueCurrent;
            newForm[nameRadio].status = feedback.length === 0;
            return newForm;
        });
        statusFirst.current = false;
    }
    return (
        <div className={classBlock}>
            <div className={
                `${feedbackMessage ? 'is-invalid' : ''} ${!feedbackMessage && !statusFirst.current && required ? 'is-valid' : ''}`
            }>
                <label className='mr-3' htmlFor={id.current}>{labelName}</label>
                {props.children.map((child, index) => {
                    return cloneElement(child, { ...child.props, key: index, inline, nameRadio, handelOnChange });
                })}
            </div>
            <div className="invalid-feedback">{feedbackMessage}Required</div>
        </div >
    )
}
const Item = (props) => {
    const { key, labelName, nameRadio, inline, handelOnChange } = props;
    const id = useRef(uid());

    const handelOnChangeInside = (event) => {
        if (event.target.checked) {
            handelOnChange(labelName);
        }
    }
    const classBlock = `custom-control custom-radio ${inline ? 'custom-control-inline' : ''}`
    return (
        <div key={key} className={classBlock}>
            <input
                id={id.current}
                className="custom-control-input"
                name={nameRadio} type="radio"
                value={labelName}
                onChange={event => handelOnChangeInside(event)}
            />
            <label className="custom-control-label" htmlFor={id.current}>{labelName}</label>
        </div >
    )
}
const Radio = { Group, Item }
export default Radio