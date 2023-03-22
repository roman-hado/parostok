const requestType = {
  get: "GET",
  post: "POST",
};

const ROUTES = {
  PRODUCT: (handle) => `/products/${handle}.js`,
  VARIANT: (id) => `/variants/${id}.js`,
  CART: {
    GET_CART: "/cart.js",
    ADD: "/cart/add.js",
    UPDATE: "/cart/update.js",
    CHANGE: "/cart/change.js",
    CLEAR: "/cart/clear.js",
  },
};

export const api = {
  async getProduct(handle) {
    try {
      let response = await fetch(ROUTES.PRODUCT(handle));

      return await response.json();
    } catch (e) {
      console.log(e);
    }
  },
  async getVariant(id) {
    try {
      let response = await fetch(ROUTES.VARIANT(id));

      return await response.json();
    } catch (e) {
      console.log(e);
    }
  },
  cart: {
    async getCart() {
      try {
        const res = await window.fetch(ROUTES.CART.GET_CART);

        const data = await res.json();
        return data;
      } catch (e) {
        console.log(e);
      }
    },
    async addProductToCart(id, quantity, properties = {}) {
      try {
        const res = await window.fetch(ROUTES.CART.ADD, {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json;",
          },
          body: JSON.stringify({ id, quantity, properties }),
        });

        const data = await res.json();
        return data;
      } catch (e) {
        console.log(e);
      }
    },
    async AddProductsToCart(itemsData) {
      try {
        const res = await fetch("/cart/add.js", {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json;",
          },
          body: JSON.stringify(itemsData),
        });

        const data = await res.json();
        return data;
      } catch (e) {
        console.log(e);
      }
    },
    async updateProductInCart(updates) {
      try {
        const res = await window.fetch(ROUTES.CART.UPDATE, {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json;",
          },
          body: JSON.stringify({
            updates,
          }),
        });

        const data = await res.json();
        return data;
      } catch (e) {
        console.log(e);
      }
    },
    async changeProductInCart(id, quantity) {
      try {
        const res = await window.fetch(ROUTES.CART.CHANGE, {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json;",
          },
          body: JSON.stringify({
            quantity: quantity,
            line: id,
          }),
        });

        const data = await res.json();
        return data;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
