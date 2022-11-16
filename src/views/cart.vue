<template>
    <div>
        <div class="aboutHeader">
            <h2>Carts</h2>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/cart"> > Carts
                    </router-link>
                </p>
            </div>
        </div>

        <div v-if="this.carts != null"
            style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <div style=" margin-top: 40px; width: 95%;">
                <v-data-table :headers="headers" :items="cartItems" hide-default-footer class="elevation-1">
                    <template v-slot:item.price="{ item }">
                        <h4>{{ "$" + item.price }}</h4>
                    </template>
                    <template v-slot:item.subTotal="{ item }">
                        <h4>{{ "$" + item.subTotal }}</h4>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <h4 @click="deleteItem(item)" style="cursor: pointer;">Remove <v-icon small color="red">
                                mdi-delete
                            </v-icon>
                        </h4>
                    </template>
                </v-data-table>
            </div>

            <div class="checkout">

                <table id="table" style="width: 100%;">
                    <tbody>
                        <tr>
                            <th>Subtotal</th>
                            <td>{{ "$" + totalprice }}</td>
                        </tr>
                        <tr>
                            <th>Shipping</th>
                            <td>Free Shipping</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>{{ "$" + totalprice }}</td>
                        </tr>
                    </tbody>
                </table>
                <button @click="checkout" class="checkoutBtn"> Proceed to
                    CheckOut</button>
            </div>
        </div>
        <div v-else style="display: flex; justify-content: center; padding: 20px; 0px">
            <v-card style="padding: 20px;">
                <h4>You have not added any cart yet!</h4>
            </v-card>
        </div>
    </div>
</template>

<script>
import { required } from '../utils/validators';

export default {
    data() {
        return {
            copen: null,
            count: 0,
            loaded: false,
            paidfor: false,
            product: {
                price: 1,
                description: "led lights",
            },
            carts: [],
            stripeCarts: [],
            stripeDCarts: [],
            headers: [
                { text: 'Product', value: 'productTitle' },
                { text: 'Price', value: 'price' },
                { text: 'Quantity', value: 'quantity' },
                { text: 'SubTotal', value: 'subTotal' },
                { text: 'Actions', value: 'actions' },
            ]
        }
    },
    computed: {
        cartItems() {
            return Object.values(this.carts)
        },
        totalprice() {
            return this.cartItems.reduce((prev, value) => prev + value['subTotal'], 0).toFixed(2)
        }
    },
    methods: {
        required,

        loadCarts() {
            this.carts = JSON.parse(localStorage.getItem('cart'));
            this.stripeCarts = JSON.parse(localStorage.getItem('stripeCart'));
            this.stripeDCarts = JSON.parse(localStorage.getItem('stripeDCart'));
        },
        deleteItem(item) {
            this.$confirm("Are you sure you want to delete this item?").then(() => {
                delete this.carts[item['id']]
                delete this.stripeCarts[item['id']]
                delete this.stripeDCarts[item['id']]
                localStorage.setItem('cart', JSON.stringify(this.carts))
                localStorage.setItem('stripeCart', JSON.stringify(this.stripeCarts))
                localStorage.setItem('stripeDCart', JSON.stringify(this.stripeDCarts))
                this.loadCarts()
            });
        },
        checkout() {
            if (this.cartItems != '' && this.carts != null) {
                this.$router.push("/payment")
            } else {
                alert("please add any product to cart to proceed")
            }
        },
    },
    mounted() {
        this.loadCarts();
    },
}
</script>

<style scoped>
.form {
    display: flex;
    width: 400px;
}


@media only screen and (max-width: 600px) {
    .form {
        flex-direction: column;
        width: 100%;
    }
}
</style>

<style>
.checkout {
    margin: 40px 0px;
    width: 50%;
}

.checkoutBtn {
    width: 100%;
    background-color: #38872c;
    color: white;
    padding: 12px 0px;
}

@media only screen and (max-width: 620px) {
    .checkoutBtn {
        width: 100%;
        padding: 10px 0px;
    }

    .checkout {
        width: 95%;
    }
}
</style>
