import cart from '../models/cart.js';


export const getAllCart = async (req, res) => {
    try {
        const carts = await cart.find({});
        return res.status(200).json({ data: carts });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const addToCart = async (req, res) => {
    try {
        const { userId, productId, name, price, img, quantity = 1 } = req.body;
        console.log(name, price, ...img)

        let userCart = await cart.findOne({ userId });

        if (!userCart) {
            userCart = await cart.create({
                userId,
                products: [{ productId, name, price, img, quantity }]
            });
            if (!userCart) {
                return res.status(500).json({ message: 'Error creating cart' });
            }
        } else {
            const existingProduct = userCart.products.find(product => product.productId == productId);
            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                userCart.products.unshift({ productId, name, price, img, quantity });
            }

            userCart = await userCart.save();
            
            if (!userCart) {
                return res.status(500).json({ message: 'Error updating cart' });
            }
        }

        return res.status(200).json({ message: 'Cart added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCartItem = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }

        const product = cart.products.find((item) => item.productId == productId);

        if (!product) {
            return res.status(404).json({ error: "Product not found in cart" });
        }

        product.quantity = quantity;

        const updatedCart = await cart.save();

        res.json(updatedCart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const removeCartItem = async (req, res) => {
    try {
        const { userId, productId, name } = req.body;
        // console.log(name)
        const userCart = await cart.findOne({ userId });

        if (!userCart) {
            return res.status(404).json({ error: "Cart not found" });
        }

        userCart.products = userCart.products.filter((item) => item.name != name);

        const updatedCart = await userCart.save();

        return res.status(200).json({ "deleted": true, updatedCart });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};





