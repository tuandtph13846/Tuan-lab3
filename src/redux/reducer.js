const intialValue = {
  cart: [],
  suncart: 0,
};

const rootReducer = (state = intialValue, action) => {

  switch (action.type) {
    case "cart/add":
      const ProductNew = { ...action.payload }
      const checkProduct = state.cart.find((item) => item.id === ProductNew.id)
      let newCart = [...state.cart]
      if (!checkProduct) {
        ProductNew.total = ProductNew.quantity * ProductNew.saleOffPrice;
        newCart = [...state.cart, ProductNew]
      } else {
        checkProduct.quantity += 1;
        checkProduct.total += ProductNew.saleOffPrice;
      }
      return {
        ...state,
        cart: newCart,
        suncart: newCart.reduce((accu, item) => accu + item.total, 0),
      };

      case "cart/increase":
        const productIncreseId = action.payload;
        console.log(productIncreseId);
  
        const product = state.cart.find((item) => item.id === productIncreseId);
        console.log(product);
  
        product.quantity += 1;
        product.total += product.saleOffPrice;
  
        const cartsum = [...state.cart];
  
        return {
          ...state,
          cart: cartsum,
          suncart: cartsum.reduce((accu, item) => accu + item.total, 0),
        };
        
    case "cart/decrease":
      const productDecreseId = action.payload;

      const productt = state.cart.find((item) => item.id === productDecreseId);

      productt.quantity -= 1;
      let cartbarnd;
      productt.total -= productt.saleOffPrice;
      if (productt.quantity < 1) {
        const delePR = state.cart.filter(
          (item) => item.id !== productDecreseId
        );
        cartbarnd = [...delePR];
      } else {
        cartbarnd = [...state.cart];
      }

      return {
        ...state,
        cart: cartbarnd,
        suncart: cartbarnd.reduce((accu, item) => accu + item.total, 0),
      };
    default:
      return state;
  }

};

export default rootReducer;