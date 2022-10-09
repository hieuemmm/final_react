import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { v4 as uid } from 'uuid'
function TextArea(props) {
    const { inline, labelName, nameInput, valueInput, rows, placeholderInput, validate } = props;

    const [myValueInput, setMyValueInput] = useState(valueInput.value);
    const id = useRef(uid());

    useEffect(() => {
        setMyValueInput(valueInput.value);
    }, [valueInput.value]);

    return (
        <div className={classNames("my-2", { "col-12 p-0": !inline }, { "row": inline })}>
            <label className={classNames({ "col-2": inline })} htmlFor={id.current}>{labelName}</label>
            <div className={classNames({ "col": inline })}>
                <textarea
                    id={id.current}
                    name={nameInput}
                    className={classNames("form-control", { "is-invalid": valueInput.feedback })}
                    rows={rows}
                    placeholder={placeholderInput}
                    value={myValueInput}
                    onChange={(event) => { setMyValueInput(event.target.value) }}
                    onBlur={() =>
                        validate({
                            value: myValueInput,
                            nameFormElement: nameInput,
                            lableNameFormElement: labelName,
                        })
                    }
                />
                <div className="invalid-feedback">{valueInput.feedback}</div>
            </div>
        </div >
    )
}

export default TextArea
