import { cloneElement, useRef } from 'react'
import classNames from 'classnames'
import { v4 as uid } from 'uuid'
const Group = (props) => {
    const { labelName, inline, nameRadio, valueInput, validate } = props;

    const id = useRef(uid());

    const handelOnChange = (valueCurrent) => {
        validate({
            newValue: valueCurrent,
            nameFormElement: nameRadio,
            lableNameFormElement: labelName,
        })
    }
    return (
        <div className={classNames("my-2", { "col-12 p-0": !inline }, { "row mt-2": inline })}>
            <label className={classNames({ "col-2": inline })} htmlFor={id.current}>{labelName}</label>
            <div className={classNames({ "col": inline })}>
                <div className={classNames({ "is-invalid": valueInput.feedback })}>
                    {props.children.map((child, index) => {
                        return cloneElement(child, { ...child.props, key: index, nameRadio, valueInput, handelOnChange });
                    })}
                </div>
                <div className="invalid-feedback">{valueInput.feedback}</div>
            </div>
        </div >
    )
}
const Item = (props) => {
    const { key, value, nameRadio, inline, handelOnChange, valueInput } = props;
    const id = useRef(uid());

    return (
        <div key={key} className={classNames("custom-control custom-radio", { "custom-control-inline": inline })}>
            <input
                id={id.current}
                className="custom-control-input"
                name={nameRadio} type="radio"
                checked={valueInput.value === value}
                onChange={() => handelOnChange(value)}
            />
            <label className="custom-control-label" htmlFor={id.current}>{value}</label>
        </div >
    )
}
const Radio = { Group, Item }
export default Radio