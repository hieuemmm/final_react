import { useRef } from 'react'
import classNames from 'classnames'
import { v4 as uid } from 'uuid'
const Select = (props) => {
    const { labelName, nameSelect, valueInput, inline, validate } = props;
    const id = useRef(uid());
    return (
        <div className={classNames("my-2", { "col-12 p-0": !inline }, { "row mt-2": inline })}>
            <label className={classNames({ "col-2": inline })} htmlFor={id.current}>{labelName}</label>
            <div className={classNames({ "col": inline })}>
                <select
                    id={id.current}
                    name={nameSelect}
                    className={classNames("custom-select", { "is-invalid": valueInput.feedback })}
                    value={valueInput.value}
                    onChange={event => validate({
                        value: event.target.value,
                        nameFormElement: nameSelect,
                        lableNameFormElement: labelName
                    })}
                >
                    {props.children}
                </select>
                <div className="invalid-feedback">{valueInput.feedback}</div>
            </div>
        </div >
    )
}
export default Select