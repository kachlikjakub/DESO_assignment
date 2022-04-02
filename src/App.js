import cart from "./cart.png"
import React, { Component } from 'react';
import AvailableProducts from "./constants/AvailableIProducts";
import TopBar from "./components/TopBar";
import PageContent from "./components/PageContent";

let availableProducts = AvailableProducts 

class App extends Component {
    constructor(props) {
        super(props);
        //to all products add inCart=false property
        availableProducts.forEach(product => {
            product.inCart = false;
        });
    }
    

    state = { 
        //to add new item in itemBar, just add new object in availableWindows (image name, if exists)
        availableWindows : [
            { tag: "Book", name: "Book", image: null },
            { tag: "Magazine", name: "Magazine", image: null },
          ],

        //ActiveWindow predefined as Book screen
        activeWindow : "Book",
        products : availableProducts
     }

     //Changing active screen
    handleWindow = (tag) =>{
this.setState({activeWindow: tag})
    }

    //Adding/removing items to/from cart
    //Add => toRemove = false
    //Remove => toRemove = true
    handleSelectedItem = (item, toRemove, amount) =>{
        let currentProducts = [...this.state.products]

        for(var i=0; i < amount; i++){
            let tmp = currentProducts.indexOf(currentProducts.find(thing => thing.code == item.code && thing.inCart == toRemove))
            currentProducts[tmp].inCart = !toRemove
          }

        this.setState({products: currentProducts})
    }


    render() { 
        return ( 
            <>
            <TopBar onSelect={this.handleWindow} availableWindows={this.state.availableWindows}/>
            <PageContent allStates={this.state} onSelect={this.handleSelectedItem}/>
            </>
         );
    }
}
 
export default App;