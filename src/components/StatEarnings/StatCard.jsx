import './StatCard.css';

const StatCard = (props) => {
    return (
        <div className="statcard">
            <h1>{props.statperval.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1>
            <p>per {props.statshortname}</p>
            <hr />
            <p>{props.statdisplayname}: {props.statvalue}</p>
        </div>
    );
};

export { StatCard };
