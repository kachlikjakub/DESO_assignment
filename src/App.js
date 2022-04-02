import cart from "./cart.png"
import React, { Component } from 'react';
import AvailableProducts from "./constants/AvailableIProducts";
import TopBar from "./components/TopBar";
import PageContent from "./components/PageContent";

let availableProducts = AvailableProducts 

class App extends Component {
    constructor(props) {
        super(props);
        availableProducts.forEach(product => {
            product.inCart = false;
        });
    }
    

    state = { 
        availableWindows : [
            { tag: "Book", name: "Book", image: null },
            { tag: "Magazine", name: "Magazine", image: null },
          ],
        activeWindow : "Book",
        products : availableProducts
     }

    handleWindow = (tag) =>{
this.setState({activeWindow: tag})
    }

    handleSelectedItem = (item, toRemove, amount) =>{
        let currentProducts = [...this.state.products]

        for(var i=0; i < amount; i++){
            let tmp = currentProducts.indexOf(currentProducts.find(thing => thing.code == item.code && thing.inCart == toRemove))
            currentProducts[tmp].inCart = !toRemove
          }

        this.setState({products: currentProducts})
    }
    componentDidMount(){
        console.log(this.state.products)
    }


    render() { 
        return ( 
            <>
            <TopBar onSelect={this.handleWindow} availableWindows={this.state.availableWindows}/>
            <PageContent activeWindow={this.state.activeWindow} availableWindows={this.state.availableWindows} products={this.state.products} onSelect={this.handleSelectedItem}/>
            </>
         );
    }
}
 
export default App;

function App1() {
    if (window.location.pathname === "/cart") {
        return <div>
            <button onClick={() => window.location.href = "/"}>Books</button>
            <button onClick={() => window.location.href = "/"}>Awesome book store</button>
            <button onClick={() => window.location.href = "cart"}><img src={cart}/></button>
            <div>Name</div>
            <div>Amount</div>
            <div>Price</div>
            <div>Black book</div>
            <div>2<button>Remove</button></div>
            <div>598 CZK</div>
            <div>Red book</div>
            <div>1<button>Remove</button></div>
            <div>499 CZK</div>
            <div>White book</div>
            <div>1<button>Remove</button></div>
            <div>299 CZK</div>
            <div>Total</div>
            <div>1396 CZK</div>
        </div>
    }
    return (
        <div>
            <button onClick={() => window.location.href = "/"}>Books</button>
            <button onClick={() => window.location.href = "/"}>Awesome book store</button>
            <button onClick={() => window.location.href = "cart"}><img src={cart}/></button>
            <img src="./book-black.jpg"/>
            <div>Black book</div>
            <div>Awesome book with black cover!</div>
            <div>299 CZK</div>
            <div>5+ in stock</div>
            <input type="number" value={0}/>
            <button>Add to cart</button>
            <img src="./book-blue.jpg"/>
            <div>Blue book</div>
            <div>Literally awesomeness itself with blue cover.</div>
            <div>310 CZK</div>
            <div>3 in stock</div>
            <input type="number" value={0}/>
            <button>Add to cart</button>
            <img src="./book-green.jpg"/>
            <div>Green book</div>
            <div>Great book with cover like grass.</div>
            <div>310 CZK</div>
            <div>Not available</div>
            <input type="number" value={0}/>
            <button>Add to cart</button>
            <img src="./book-red.jpg"/>
            <div>Red book</div>
            <div>A book full of secrets.</div>
            <div>499 CZK</div>
            <div>1 in stock</div>
            <input type="number" value={0}/>
            <button>Add to cart</button>
            <img src="./book-white.jpg"/>
            <div>White book</div>
            <div>A book with white cover - great for personal drawings!</div>
            <div>199 CZK</div>
            <div>5+ in stock</div>
            <input type="number" value={0}/>
            <button>Add to cart</button>
            <img src="./book-green.jpg"/>
            <div>Yellow book</div>
            <div>Very sunny book for you!</div>
            <div>299 CZK</div>
            <div>Not available</div>
            <input type="number" value={0}/>
            <button>Add to cart</button>
        </div>
    );
}