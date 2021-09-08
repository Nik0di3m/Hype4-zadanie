const Card = ({ text, setDiv, divs, item }) => {
    const deleteHandler = () => {
        setDiv(divs.filter((el) => el.id !== item.id))
    }
    return (
        <div className="card_row">
            <div className="and">
                <span>And</span>
            </div>
            <div className="card_wrapper">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="line"></div>
                    <div className="card">
                        <div className="card_gradient"></div>
                        <div className="card_content">
                            <div>
                                <span>{text}</span>
                            </div>
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
        </div>
    )
}

export default Card
