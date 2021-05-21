import { createStore } from 'vuex';
import products from "./modules/product";
import cart from "./modules/cart";
const store = createStore({
    modules:{
        prod:products,
        cart:cart,
    },
    state() {
    return {
      isLoggedIn: false,
      
    };
  },

  mutations: {
    login(state) {
        state.isLoggedIn = true;
    },
    logout(state) {
        state.isLoggedIn = false;
    },
  },
  actions:{
    login(context) {
    
        context.commit('login');
    },
    logout(context) {
        context.commit('logout');
    },
  },
  getters:{
    isauth(state){
        return state.isLoggedIn;
    }
  }
});

export default store;
