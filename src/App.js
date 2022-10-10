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
import image from "./image.png"
const INIT_FORM = {
    id: { value: "", feedback: "" },
    book: { value: "", feedback: "" },
    type: { value: "", feedback: "" },
    author: { value: "", feedback: "" },
    publicDate: { value: "", feedback: "" },
    price: { value: 0, feedback: "" },
    quantity: { value: 0, feedback: "" },
    total: { value: 0, feedback: "" },
};
function App() {
    const [books, setBooks] = useState([]);
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
            {/* BOOK */}
            <div className='border p-3 col-7'>
                <div className='h4 border-bottom-1'>Book-list</div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Book</th>
                            <th scope="col">Type</th>
                            <th scope="col">Author</th>
                            <th scope="col">Price</th>
                            <th scope="col">Public date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <div className='d-flex align-content-center'>
                                    <img className="book-image" src={image} />
                                    <div>
                                        <strong>Text Text Text</strong>
                                        <div>Text Text Text</div>
                                    </div>
                                </div>
                            </th>
                            <td>âsas</td>
                            <td>âsas</td>
                            <td>âsas</td>
                            <td>âsas</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='col-5'>
                {/* FORM */}
                <div className='border p-3'>
                    <div className='h4 border-bottom-1'>Form</div>
                    <Input labelName={"Book:"}
                        nameInput={"book"}
                        typeInput={"text"}
                        valueInput={form.book}
                        validate={validate}
                    />
                    <div className='d-flex w-100 justify-content-between'>
                        <Input labelName={"Type:"}
                            style={{ maxWidth: "30%" }}
                            nameInput={"type"}
                            typeInput={"text"}
                            valueInput={form.type}
                            validate={validate}
                        />
                        <Input labelName={"Author:"}
                            style={{ maxWidth: "30%" }}
                            nameInput={"author"}
                            typeInput={"text"}
                            valueInput={form.author}
                            validate={validate}
                        />
                        <Input labelName={"Public date:"}
                            style={{ maxWidth: "30%" }}
                            nameInput={"publicDate"}
                            typeInput={"text"}
                            valueInput={form.publicDate}
                            validate={validate}
                        />
                    </div>
                    <div className='d-flex w-100 justify-content-between align-items-center'>
                        <Input labelName={"Price:"}
                            style={{ maxWidth: "30%" }}
                            nameInput={"price"}
                            typeInput={"text"}
                            valueInput={form.price}
                            validate={validate}
                        />x
                        <Input labelName={"Quantity:"}
                            style={{ maxWidth: "30%" }}
                            nameInput={"quantity"}
                            typeInput={"text"}
                            valueInput={form.quantity}
                            validate={validate}
                        />=
                        <Input labelName={"Total:"}
                            style={{ maxWidth: "30%" }}
                            nameInput={"total"}
                            typeInput={"text"}
                            valueInput={form.total}
                            validate={validate}
                        />
                    </div>
                    <div className='d-flex w-100'>
                        <button className='btn btn-primary mr-2' onClick={() => true} >Add to cart</button>
                        <button className='btn btn-light border' onClick={() => true}>Cancel</button>
                    </div>
                </div>
                {/* CARDLIST */}
                <div className='border p-3 mt-3'>
                    <div className='h4 border-bottom-1'>Cart-list</div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Book</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Prices</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <div className='d-flex align-content-center'>
                                        <img className="book-image" src={image} />
                                        <div>
                                            <strong>Text Text Text</strong>
                                            <div>Text Text Text</div>
                                        </div>
                                    </div>
                                </th>
                                <td>âsas</td>
                                <th>âsas</th>
                                <td>
                                    <i class="bi bi-trash-fill text-danger"></i>
                                </td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <th>Total</th>
                                <th>Total</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}

export default App;
