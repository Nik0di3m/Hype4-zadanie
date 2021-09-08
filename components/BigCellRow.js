const BigCellRow = ({ text, bigCardInput, setBigCellRow, item }) => {
    const deleteHandler = () => {
        setBigCellRow(bigCardInput.filter((el) => el.id !== item.id))
    }
    return (
        <div className="card_big_row">
            <div className="or">
                <span>Or</span>
            </div>
            <div className="big_card_wrapper">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div className="line2"></div>
                    <div className="big_card_content_inner">
                        <span className="big_card_content_text">{text}</span>
                        <div
                            className="card_minus_button"
                            onClick={() => deleteHandler()}
                        >
                            <div className="minus"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigCellRow
