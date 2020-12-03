
function App() {
  return (
    <div className="App">
      <div class="container"><h1>Chris's Paintings</h1>
        <div class="painting-cart">
          <div class="customer-info">
            <label for="email">Email</label>
            <input type="email" id="cust-email" />
          </div>
          {/* <div class="cart-list">
            [not implemented yet]
      </div> */}
          <div class="cart-actions">
            <button class="btn submit-order">Order</button>
            <div>
            </div>
            <section class="painting-listing">
              <ul>
                <li>
                  <div class="painting-container">
                    <div class="painting-image">
                      <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <div class="painting-info">
                      <h2>Painting Name</h2>
                      <p>painting description</p>
                    </div>
                    <div class="painting-action">
                      <a href="">Add</a>
                      <p class="counter"></p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="painting-container">
                    <div class="painting-image">
                      <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <div class="painting-info">
                      <h2>Painting Name</h2>
                      <p>painting description</p>
                    </div>
                    <div class="painting-action">
                      <a href="">Add</a>
                      <p class="counter"></p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="painting-container">
                    <div class="painting-image">
                      <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <div class="painting-info">
                      <h2>Painting Name</h2>
                      <p>painting description</p>
                    </div>
                    <div class="painting-action">
                      <a href="">Add</a>
                      <p class="counter"></p>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
