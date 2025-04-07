import './Header.css'

const Header = () => {
    return (
        <>
            <h1 className='header-title'>ILoveLebron.xyz</h1>
            <hr></hr>
            <div className='header-credits'>
                <p>Created by James</p>
                <div className="live-indicator">
                    <span>Live</span>
                    <span className="live-dot"></span>
                </div>
            </div>
        </>
    )
};

export { Header };
