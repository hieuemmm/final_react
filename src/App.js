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
    note: { value: "", feedback: "" },
    dateNote: { value: "", feedback: "" },
    groupNote: { value: "", feedback: "" },
};
function App() {
    const [books, setBooks] = useState([]);
    //INIT
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
                            <td>
                                <button type="button" className="btn btn-primary mr-2">Edit</button>
                                <button type="button" className="btn btn-danger" onClick={() => true}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='col-5'>
                {/* FORM */}
                <div className='border p-3'>
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
                                <td>
                                    <button type="button" className="btn btn-primary mr-2">Edit</button>
                                    <button type="button" className="btn btn-danger" onClick={() => true}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* CARD LIST */}
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
