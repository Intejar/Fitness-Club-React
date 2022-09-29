import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Details.css'
// toast.configure()
const Details = (props) => {
    const notify = () => toast("Congratulations You have successfully fisnished your workout!");
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.time;
    }
    return (
        <div>
            <h3>Excercise Details</h3>
            <div>
                <div className='display-details'>
                    <p>Excercise time</p>
                    <p><span className='total'>{total}</span> <small>sec</small></p>
                </div>
                <div className='display-details'>
                    <p>Break time</p>
                    <p><span id='time-display'>{localStorage.getItem('break')}</span> <small>sec</small></p>
                </div>
                <div>
                    <button onClick={notify}>Activity Completed</button>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </div>
        </div>
    );
};

export default Details;