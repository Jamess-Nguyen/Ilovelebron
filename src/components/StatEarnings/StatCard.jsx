const StatCard = (props) => {
    return (
        <>
            <h2>{props.statperval.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h2>
            <p>Per {props.statshortname}</p>
            <hr></hr>
            <p>{props.statdisplayname}: {props.statvalue}</p>
        </>
    )
}

export { StatCard };