import CBest from '../Styles/Cbest.css'

function Bests(props) {
    return ( 
        <main id='first' style={CBest}>
            <h5>Best projects</h5>
            <div className="cards">
                
                <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                               <img src="wat.png" className="card-img-top" width={'100px'} height={'100px'}/>
                               <div className="card-body">
                                 <h5 className="card-title">Card 1</h5>
                                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                 <p><a href="">Read more</a></p>
                                 </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                               <img src="wat.png" className="card-img-top" width={'100px'} height={'100px'}/>
                               <div className="card-body">
                                 <h5 className="card-title">Card 2</h5>
                                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                 <p><a href="">Read more</a></p>
                                 </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                               <img src="wat.png" className="card-img-top" width={'100px'} height={'100px'}/>
                               <div className="card-body" >
                                 <h5 className="card-title">Card 3</h5>
                                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                 <p><a href="">Read more</a></p>
                                 </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                               <img src="wat.png" className="card-img-top" width={'100px'} height={'100px'}/>
                               <div className="card-body">
                                 <h5 className="card-title">Card 4</h5>
                                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                 <p><a href="">Read more</a></p>
                                 </div>
                            </div>
                        </div>
                </div>

            </div>
        </main>
     );
};

export default Bests;