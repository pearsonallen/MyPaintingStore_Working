
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
              <img src="https://i.imgur.com/uVhng9d.jpg" alt="" />
            </div>
            <div class="painting-info">
              <h2>Red Elma</h2>
              <p>Burning with anger, hidden behind a smile, this illustration shows a person that is angry on the inside.</p>
            </div>
            <div class="painting-action">
              <a href="">Order</a>
              <p class="counter"></p>
            </div>
            </div>
        </li>
        <li>
          <div class="painting-container">
            <div class="painting-image">
              <img src="https://i.imgur.com/pxMrzis.jpg" alt="" />
            </div>
            <div class="painting-info">
              <h2>Blue Pete</h2>
              <p>The sorrow Pete feels is palpable.  His sadness exits his pores in a blue hue.</p>
            </div>
            <div class="painting-action">
              <a href="">Order</a>
              <p class="counter"></p>
            </div>
          </div>
        </li>
        <li>
          <div class="painting-container">
            <div class="painting-image">
              <img src="https://i.imgur.com/nhLiK1Q.jpg" alt="" />
            </div>
            <div class="painting-info">
              <h2>Green Bean</h2>
              <p>Bean has turned green from all the vegetables he eats.  It's his attack on the monoculture of food in his country.</p>
            </div>
            <div class="painting-action">
              <a href="">Order</a>
              <p class="counter"></p>
            </div>
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
