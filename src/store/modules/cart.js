export default {
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  getters: {
    cart(state) {
      return state.cart;
    },
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.cart.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.cart.items.push(newItem);
      }
      state.cart.qty++;
      state.cart.total += productData.price;
    },

    removeProductFromCart(state, payload) {
      const productInCartIndex = state.cart.items.findIndex(
        (cartItem) => cartItem.productId === payload.prodId
      );
      const prodData = state.cart.items[productInCartIndex];
      state.cart.items.splice(productInCartIndex, 1);
      state.cart.qty -= prodData.qty;
      state.cart.total -= prodData.price * prodData.qty;
    },
  },
  actions:{
    addProductToCart(context, payload){
      const prod = context.rootGetters['prod/products'].find(
        (prodItem) => prodItem.id === payload.id
      );
      context.commit('addProductToCart',prod);
    },
    removeProductFromCart(context, payload){
      context.commit('removeProductFromCart',payload);
    }
  }
};
