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
    //INIT
    return (
        <div className="row">
            <div className='col-12 pr-0'>
                {/* Seach + Order */}
            </div>
            <div className='col-7 '>
                <div className='row p-2'>
                    {/* Table + Cards */}
                </div>
                {/* <Pagination pagination={pagination} setPagination={setPagination} /> */}
            </div>
            <div className='col-5 border p-4 mt-3'>
                {/* Form items */}
                <div className='d-flex justify-content-end w-100'>
                    <button className='btn btn-light border mr-2' onClick={() => console.log(form)}>Show form</button>
                </div>
            </div>
        </div >
    );
}

export default App;
