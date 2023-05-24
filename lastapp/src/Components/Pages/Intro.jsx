import intro from '../Styles/Intro.css';

function Intro(props) {
    return ( 
        <div  className="main" style={intro}>
            <div className="name-side">
                <img src="wat.png" width={'100px'} height={'100px'} />
                <h6>Hello,I'm Alisher</h6>
            </div>
            <div className="heading">
                <h1>Lorem, ipsum dolor</h1>
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            </div>
        </div>
     );
}

export default Intro;