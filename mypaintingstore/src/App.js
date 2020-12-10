import './style.scss';

function App() {
    return (
        <div>
            <div className="container">
              <h1>Chris's Paintings</h1>
                <div className="painting-cart">
                    <div className="customer-info">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="cust-email" />
                    </div>
                    {/* <div class="cart-list">
                          [not implemented yet]
                    </div> */}
                    {/* <div className="cart-actions"><button className="btn submit-order">Order</button></div> */}
                </div>
                    <section className="painting-listing">
                        <ul>
                            <li>
                                <div className="painting-container">
                                    <div className="painting-image">
                                        <img src="https://i.imgur.com/uVhng9d.jpg" alt="" />
                                    </div>
                                    <div className="painting-info">
                                        <h2>Red Elma</h2>
                                        <p>Burning with anger, hidden behind a smile, this illustration shows a person that is angry on the inside.</p>
                                    </div>
                                    <div className="painting-action">
                                        <label>Quantity</label>
                                        <input type="text" className="addQuanitity" />
                                        <button className="btn" >Add</button>
                                        <p className="counter"></p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="painting-container">
                                    <div className="painting-image">
                                        <img src="https://i.imgur.com/pxMrzis.jpg" alt="" />
                                    </div>
                                    <div className="painting-info">
                                        <h2>Blue Pete</h2>
                                        <p>The sorrow Pete feels is palpable.  His sadness exits his pores in a blue hue.</p>
                                    </div>
                                    <div className="painting-action">
                                        <label>Quantity</label>
                                        <input type="text" className="addQuanitity" />
                                        <button className="btn" >Add</button>
                                        <p className="counter"></p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="painting-container">
                                    <div className="painting-image">
                                        <img src="https://i.imgur.com/nhLiK1Q.jpg" alt="" />
                                    </div>
                                    <div className="painting-info">
                                        <h2>Green Bean</h2>
                                        <p>Bean has turned green from all the vegetables he eats.  It's his attack on the monoculture of food in his country.</p>
                                    </div>
                                    <div className="painting-action">
                                        <label>Quantity</label>
                                        <input type="text" className="addQuanitity" />
                                        <button className="btn" >Add</button>
                                        <p className="counter"></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
        </div>
    );
}

export default App;
