import { useState } from 'react'
import BigCardModal from './BigCardModal'
import SmallCellModal from './SmallCellModal'
const Modal = ({ close, addDiv }) => {
    const [input, setInput] = useState()
    return (
        <div className="modal_wrapper">
            <div className="modal">
                <div className="modal_title">
                    <span>Choose a type</span>
                </div>
                <div className="modal_simple_box">
                    <SmallCellModal addSmallCard={addDiv} close={close} />
                    <BigCardModal addBigDiv={addDiv} close={close} />
                </div>
                <div onClick={() => close()} className="modal_close_button">
                    Close
                </div>
            </div>
        </div>
    )
}

export default Modal
