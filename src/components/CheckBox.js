import { useRef } from 'react'
import classNames from 'classnames'
import { v4 as uid } from 'uuid'
const CheckBox = (props) => {
    const { labelName, nameCheckBox, valueInput, validate } = props;
    const id = useRef(uid());

    return (
        <div className="col-12 p-0 my-2">
            <div className={classNames("custom-control custom-checkbox", { "is-invalid": valueInput.feedback })}>
                <input id={id}
                    type="checkbox"
                    className="custom-control-input"
                    checked={valueInput.value}
                    onChange={event => validate({
                        value: event.target.checked,
                        nameFormElement: nameCheckBox,
                        lableNameFormElement: labelName,
                    })}
                />
                <label className="custom-control-label" htmlFor={id}>{labelName}</label>
            </div>
            <div className="invalid-feedback">{valueInput.feedback}</div>
        </div >
    )
}
export default CheckBox