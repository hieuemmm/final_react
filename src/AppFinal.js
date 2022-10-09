import { useRef, useState } from 'react';
import './styles/App.css';
import Input from './components/Input'
import Select from './components/Select'
import CheckBox from './components/CheckBox'
import Radio from './components/Radio'
import TextArea from './components/TextArea'
import Pagination from './components/Pagination'
import { isEmail, isPassword, isName, isAddress, isNumber } from './utils/ValidateUtils'
import { currencyFormat } from './utils/FormatUtils'
import dataNote from "./dataNote.json"
const INIT_FORM = {
    id: { value: "", feedback: "" },
    note: { value: "", feedback: "" },
    dateNote: { value: "", feedback: "" },
    groupNote: { value: "", feedback: "" },
};
function App() {
    const [mode, setMode] = useState("Read");
    const [searchInput, setSearchInput] = useState("");
    const [orderSelect, setOrderSelect] = useState("");
    const [nodes, SetNodes] = useState(dataNote);
    const [form, setForm] = useState(INIT_FORM);
    const rulesForm = useRef({
        note: {
            required: true,
            minLength: 25,
        },
        dateNote: {
            required: true,
        },
        groupNote: {
            required: true,
        },
    });
    const [pagination, setPagination] = useState({
        totalCount: 4,
        currentPage: 1,
        pageSize: Math.ceil(dataNote.length / 4)
    });
    //HANDLE EVENT
    const handelOnSubmit = (callBack) => {
        validate({ newValue: form.note.value, nameFormElement: "note" });
        validate({ newValue: form.dateNote.value, nameFormElement: "dateNote" });
        validate({ newValue: form.groupNote.value, nameFormElement: "groupNote" });
        let isSubmit = true;
        for (const key in form) {
            isSubmit &= !form[key].feedback;
        }
        if (isSubmit) {
            callBack();
        }
    }
    const handelOnAddNode = () => {
        SetNodes([...nodes, {
            id: nodes[nodes.length - 1].id + 1,
            note: form.note.value,
            dateNote: form.dateNote.value,
            groupNote: form.groupNote.value,
        }]);
        handelOnCancel();
    }
    const handelOnDeleteNode = (id) => {
        SetNodes(nodes.filter(node => id !== node.id));
    }
    const handelOnCancel = () => {
        setForm(INIT_FORM);
        setMode("Read");
    }
    const handelOnEditNode = () => {
        let editNodes = nodes.map(node => {
            if (node.id === form.id.value) {
                return {
                    id: form.id.value,
                    note: form.note.value,
                    dateNote: form.dateNote.value,
                    groupNote: form.groupNote.value,
                }
            }
            return node;
        });
        SetNodes(editNodes);
        handelOnCancel();
    }
    const handelMapNodeToForm = (node) => {
        setForm({
            id: { value: node.id, feedback: "" },
            note: { value: node.note, feedback: "" },
            dateNote: { value: node.dateNote, feedback: "" },
            groupNote: { value: node.groupNote, feedback: "" },
        });
        setMode("Edit");
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
        <div className="row">
            <div className='col-12 pr-0'>
                <div className="input-group mb-2">
                    <div className="input-group-prepend ">
                        <span className="input-group-text" id="basic-addon1">search:</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        value={searchInput}
                        onChange={event => setSearchInput(event.target.value)}
                        placeholder="Enter your key of note to search..."
                    />
                </div>
                <div className="input-group mb-2">
                    <div className="input-group-prepend ">
                        <span className="input-group-text" id="basic-addon1">Order :</span>
                    </div>
                    <select
                        id="selectOrder"
                        className="custom-select col"
                        name="selectOrder"
                        value={orderSelect}
                        onChange={(event) => setOrderSelect(event.target.value)}
                    >
                        <option value="">--Select field to sort--</option>
                        <option value="note">note</option>
                        <option value="dateNote">dateNote</option>
                        <option value="groupNote">groupNote</option>
                    </select>
                </div>
            </div>
            <div className='col-7 '>
                <div className='row p-2'>
                    {nodes.filter(node => {
                        return (node.note + node.groupNote + node.dataNote)
                            .toLocaleLowerCase()
                            .includes(searchInput.toLocaleLowerCase());
                    }).sort((node1, node2) => {
                        let value1 = node1[orderSelect] ?? node1["id"];
                        let value2 = node2[orderSelect] ?? node2["id"];
                        if (orderSelect === "id" || !orderSelect) {
                            return value1 < value2 ? 1 : value1 > value2 ? -1 : 0;//DESC
                        }
                        return value1 > value2 ? 1 : value1 < value2 ? -1 : 0;//ASC
                    }).slice(
                        pagination.currentPage * pagination.totalCount - pagination.totalCount, pagination.currentPage * pagination.totalCount
                    ).map((node, index) => {
                        return (
                            <div className="card p-0 m-1" style={{ width: "32%" }} key={index} data-control-color={node.groupNote}>
                                <div className="card-header">
                                    {node.groupNote}
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{node.note}</p>
                                    <span className='mr-2'>{node.dateNote}</span>
                                </div>
                                <div className="card-footer d-flex flex-nowrap justify-content-end">
                                    <button className='btn btn-light border mr-2' onClick={() => handelMapNodeToForm(node)}>Edit</button>
                                    <button className='btn btn-light border mr-2' onClick={() => handelOnDeleteNode(node.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Pagination pagination={pagination} setPagination={setPagination} />
            </div>
            <div className='col-5 border p-4 mt-3'>
                <Select labelName={"Group:"}
                    inline
                    nameSelect={"groupNote"}
                    valueInput={form.groupNote}
                    validate={validate}
                >
                    <option value="">--Pick Group--</option>
                    <option value="Must do" data-control-color="Must do">Must do</option>
                    <option value="Could do" data-control-color="Could do">Could do</option>
                    <option value="Can do" data-control-color="Can do">Can do</option>
                </Select>
                <Input labelName={"Note:"}
                    inline
                    nameInput={"note"}
                    typeInput={"text"}
                    valueInput={form.note}
                    validate={validate}
                />
                <Input labelName={"Date Note:"}
                    inline
                    nameInput={"dateNote"}
                    typeInput={"datetime-local"}
                    valueInput={form.dateNote}
                    validate={validate}
                />
                <div className='d-flex justify-content-end w-100'>
                    <button className='btn btn-success mr-2' onClick={() => console.log(nodes)} >nodes</button>
                    {mode === "Read" && (
                        <button className='btn btn-success' onClick={() => handelOnSubmit(handelOnAddNode)} >Save</button>
                    )}
                    {mode === "Edit" && (
                        <>
                            <button className='btn btn-success mr-2' onClick={() => handelOnSubmit(handelOnEditNode)} >Edit</button>
                            <button className='btn btn-light border' onClick={handelOnCancel}>Cancel</button>
                        </>
                    )}
                </div>
            </div>
        </div >
    );
}

export default App;
