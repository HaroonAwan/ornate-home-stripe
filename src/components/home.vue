<template>
    <div>
        <v-navigation-drawer v-model="drawer" app>
            <img src="../assets/images/logo.png" alt="logo" class="logo" height="100" />
            <v-divider />
            <template v-for="(route, key) in routes">
                <v-list-item v-if="route.isVisible" :key="key" exact dense :to="route.to">
                    <v-list-item-icon>
                        <v-icon v-text="route.icon" />
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="route.title" />
                    </v-list-item-content>
                </v-list-item>
            </template>
            <v-list>
                <v-list-group prepend-icon="mdi-cart">
                    <template v-slot:activator>
                        <v-list-item-title>Shop</v-list-item-title>
                    </template>
                    <v-list-item>
                        <v-list-item-content>
                            <router-link style="text-decoration: none; color: black;" to="/homeDecor">Home Decor
                            </router-link>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <router-link style="text-decoration: none; color: black;" to="/gardenTools">Garden Tools
                            </router-link>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <router-link style="text-decoration: none; color: black;" to="/gardenDecor">Garden Decor
                            </router-link>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <router-link style="text-decoration: none; color: black;" to="/plants">Plants & Seeds
                            </router-link>
                        </v-list-item-content>
                    </v-list-item>

                </v-list-group>
            </v-list>
        </v-navigation-drawer>

        <div class="header">
            <div class="navbar">
                <div class="logo">
                    <router-link to="/">
                        <img width="100px" src="../assets/images/logo.png" alt="logo">
                    </router-link>
                </div>

                <div id="Cart">
                    <router-link to="/cart"> <img width="30px" src="../assets/images/shopping-bag.png" alt="icon">
                    </router-link>
                    <h4 class="cartN">{{ cartN }}</h4>
                </div>

                <v-app-bar-nav-icon id="navIcon" x-large @click="drawer = !drawer" />

                <ul>
                    <li>
                        <router-link style="text-decoration: none; color: black;" to="/">Home</router-link>
                    </li>
                    <li class="dropbtn">
                        <router-link style="text-decoration: none; color: black;" to="">Shop <img
                                style="margin-left: 5px;" width="10px" src="../assets/images/arrow-down.png" alt="icon">
                        </router-link>

                        <div class="dropdown-content">
                            <router-link style="color: inherit;" to="homeDecor">Home Decor</router-link>
                            <router-link style="color: inherit;" to="gardenTools">Garden Tools</router-link>
                            <router-link style="color: inherit;" to="gardenDecor">Garden Decor</router-link>
                            <router-link style="color: inherit;" to="plants">Plants & Seeds</router-link>
                        </div>

                    </li>
                    <li>
                        <router-link style="text-decoration: none; color: black;" to="/aboutUs">About Us</router-link>
                    </li>
                    <li>
                        <router-link style="text-decoration: none; color: black;" to="/contactUs">Contact Us
                        </router-link>
                    </li>
                    <li>
                        <router-link style="text-decoration: none; color: black;" to="trackOrders">Track Orders
                        </router-link>
                    </li>
                    <li class="cartDropBtn">
                        <router-link to="/cart"> <img width="30px" src="../assets/images/shopping-bag.png" alt="icon">
                        </router-link>
                        <h4 class="cartN">{{ cartN }}</h4>

                        <div class="dropdown-cartContent">
                            <div v-if="this.carts != null"
                                style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; background-color: white; top: 68px; right: 50px; position: absolute; width: 300px; min-height: 200px; border-radius: 5px;">
                                <div class="hoverCartTable">
                                    <v-data-table :headers="headers" :items="cartItems" hide-default-footer
                                        class="elevation-1">
                                        <template v-slot:item.actions="{ item }">
                                            <h4 @click="deleteItem(item)" style="cursor: pointer; padding:0px;">
                                                <v-icon small color="red">
                                                    mdi-delete
                                                </v-icon>
                                            </h4>
                                        </template>
                                    </v-data-table>
                                </div>

                                <div style="display: flex; justify-content: space-between; margin: 10px 10px 0px 10px">
                                    <h4>SubTotal</h4>
                                    <p>{{ totalprice }}</p>
                                </div>

                                <div class="hoverCartBtn"
                                    style="display: flex; justify-content: space-between; margin: 0px 10px 10px 10px;">
                                    <router-link to="/cart" style="text-decoration: none;">
                                        <v-btn dark>View Cart</v-btn>
                                    </router-link>
                                    <router-link to="/payment" style="text-decoration: none;">
                                        <v-btn v-if="this.cartItems != ''" dark color="green">Checkout</v-btn>
                                        <p v-else></p>
                                    </router-link>
                                </div>
                            </div>
                            <div v-else
                                style="background-color: white; right: 50px; position: absolute; width: 300px; height: 50px; padding: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                                <h4>No products in the cart.</h4>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- <homeMain /> -->
        <router-view></router-view>

        <!-- <v-footer> -->
        <div class="footer-01">
            <div class="footer-01-box">
                <div class="footer-01-img">
                    <img src="../assets/images/free-delivery.png" alt="image">
                </div>
                <div class="footer-01-content">
                    <h4>Free Shipping</h4>
                    <p>Over 3000 Orders Shipped Free EXPRESS Shipping..</p>
                </div>
            </div>

            <div class="footer-01-box">
                <div class="footer-01-img">
                    <img src="../assets/images/secure-payment.png" alt="image">
                </div>
                <div class="footer-01-content">
                    <h4>Online Payment</h4>
                    <p>Easy, Fast and Secure</p>
                </div>
            </div>

        </div>
        <div class="footer">
            <div class="footer-1">
                <div class="footerLine1">
                    <div class="footerLine1Header">
                        <img height="15px" src="../assets/images/vertical-line.png" alt="icon">
                        <h2>Our Mission</h2>
                    </div>
                    <p>The beauty of an ornate home is that you can find all of your lawn and home decor products needs
                        in one place.</p>
                    <p>Over 3000 Orders Shipped Free EXPRESS Shipping..</p>
                </div>
                <div class="footerLine2">
                    <div class="footerLine2Header">
                        <img height="15px" src="../assets/images/vertical-line.png" alt="icon">
                        <h2>For Customers</h2>
                    </div>
                    <router-link style="text-decoration: none; color: inherit;" to="/">
                        <p>Orders</p>
                    </router-link>

                    <router-link style="text-decoration: none; color: inherit;" to="/contactUs">
                        <p>Apply Refund</p>
                    </router-link>
                    <router-link style="text-decoration: none; color: inherit;" to="/trackOrders">
                        <p>Track Orders</p>
                    </router-link>
                    <router-link style="text-decoration: none; color: inherit;" to="/cart">
                        <p>Cart</p>
                    </router-link>
                </div>
            </div>

            <div class="footer-2">
                <div class="footerLine3">
                    <div class="footerLine3Header">
                        <img height="15px" src="../assets/images/vertical-line.png" alt="icon">
                        <h2>Quick Links</h2>
                    </div>
                    <router-link style="text-decoration: none; color: inherit;" to="/homeDecor">
                        <p>HOME DECOR</p>
                    </router-link>
                    <router-link style="text-decoration: none; color: inherit;" to="/gardenDecor">
                        <p>GARDEN DECOR</p>
                    </router-link>
                    <router-link style="text-decoration: none; color: inherit;" to="/gardenTools">
                        <p>GARDEN TOOLS</p>
                    </router-link>
                    <router-link style="text-decoration: none; color: inherit;" to="/plants">
                        <p>PLANTS & SEEDS</p>
                    </router-link>
                </div>
                <div class="footerLine4">
                    <div class="footerLine4Header">
                        <img height="15px" src="../assets/images/vertical-line.png" alt="icon">
                        <h2>Contact Info</h2>
                    </div>
                    <div class="footerEmail">
                        <img width="25px" height="25px" src="../assets/images/mail.png" alt="icon">
                        <div class="fEmail">
                            <h6>Email:</h6>
                            <p> <a href="mailto: ornatehome1@gmail.com">ornatehome1@gmail.com</a> </p>
                        </div>
                    </div>
                    <div class="footerWebsite">
                        <img width="25px" height="25px" src="../assets/images/link.png" alt="icon">
                        <div class="fWebsite">
                            <h6>Website:</h6>
                            <p>
                                <a href="/">https://ornatehome.org/</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-02">
            <div class="footer-02-box">
                <div class="footer-02-content">
                    <h4>Payment System:</h4>
                </div>

                <div class="footer-02-image">
                    <img src="../assets/images/payment.png" alt="image">
                </div>
            </div>

            <div class="footer-02-box">
                <div class="footer-02-content">
                    <h4>Shipping System:</h4>
                </div>

                <div class="footer-02-image">
                    <img src="../assets/images/shipping.png" alt="image">
                </div>
            </div>

        </div>

        <div class="copyright">
            <p>CopyRight@2022-Ornate Home</p>
        </div>
        <!-- </v-footer> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            cartN: 0,
            headers: [
                { text: 'Product', value: 'productTitle' },
                { text: '', value: 'actions' },
            ],
            carts: [],
            stripeCarts: [],
            stripeDCarts: [],
        }
    },
    methods: {
        loadCarts() {
            this.carts = JSON.parse(localStorage.getItem('cart'));
            this.stripeCarts = JSON.parse(localStorage.getItem('stripeCart'));
            this.stripeDCarts = JSON.parse(localStorage.getItem('stripeDCart'));

            if (this.carts != null) {
                this.cartN = this.cartItems.length
            } else {
                this.cartN = 0
            }
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
    },
    computed: {
        cartItems() {
            return Object.values(this.carts)
        },
        totalprice() {
            return this.cartItems.reduce((prev, value) => prev + value['subTotal'], 0).toFixed(2)
        },
        routes() {
            return [
                {
                    to: '/',
                    title: 'Home',
                    icon: 'mdi-home',
                    isVisible: true
                },
                { isDivider: true },
                {
                    to: '/aboutUs',
                    title: 'About Us',
                    icon: 'mdi-information',
                    isVisible: true
                },
                {
                    to: '/contactUs',
                    title: 'Contact Us',
                    icon: 'mdi-account',
                    isVisible: true
                },
                {
                    to: '/trackOrders',
                    title: 'Track Orders',
                    icon: 'mdi-map-marker',
                    isVisible: true
                },
                {
                    to: '/cart',
                    title: 'Carts',
                    icon: 'mdi-cart-plus',
                    isVisible: true
                },
            ];
        }
    },
    mounted() {
        window.setInterval(() => {
            this.loadCarts();
        }, 1000);
    },
}
</script>

<style>
* {
    font-family: 'Josefin Sans', sans-serif;
    font-family: 'Poppins', sans-serif;
}

#navIcon {
    display: none;
}

#Cart {
    display: none;
}

.cartN {
    position: absolute;
    color: #38872c;
    margin-top: -50px;
    margin-left: 25px;
}

.dropdown-content {
    top: 62px;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 1;
    border-radius: 2px;
}

.dropdown-content a {
    float: none;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content a:hover {
    background-color: #ddd;
}

.dropbtn:hover .dropdown-content {
    display: block;
}

.dropdown-cartContent {
    display: none;
}

.cartDropBtn:hover .dropdown-cartContent {
    display: block;
}

.navbar {
    display: flex;
    align-items: center;
}

.logo {
    padding-left: 60px;
}

.navbar ul {
    padding-left: 40%;
    display: flex;
    align-items: center;
}

.navbar ul li {
    list-style: none;
    padding: 10px 15px;
}

.footer-01 {
    margin-top: 50px;
    background-color: #dddddd;
    padding: 20px 50px;
    display: flex;
}

.footer-01-box {
    width: 50%;
    display: flex;
}

.footer-01-img img {
    width: 80px;
}

.footer-01-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
}

.footer-01-content p {
    font-size: 14px;
}

.footer-02 {
    margin: 2px 0px;
    background-color: #dddddd;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 50px;
}

.footer-02-box {
    width: 50%;
}

.footer-02-image {
    margin-top: 14px;
}

.footer {
    display: flex;
    padding: 20px 40px;
    background-color: #dddddd;
    margin-top: 2px;
}

.footer-1,
.footer-2 {
    display: flex;
    width: 50%;
}

.footerLine1,
.footerLine2,
.footerLine3,
.footerLine4 {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0px 10px;
}

.footerLine1Header,
.footerLine2Header,
.footerLine3Header,
.footerLine4Header {
    display: flex;
    align-items: center;
    font-size: 10px;
    margin-bottom: 20px;
}

.footerEmail,
.footerWebsite {
    display: flex;
}

.footerEmail p a,
.footerWebsite p a {
    text-decoration: none;
    color: black;
}

.footerEmail {
    width: 100%;
}

.footerEmail img,
.footerWebsite img {
    margin-top: 8px;
}

.fEmail,
.fWebsite {
    padding: 0px 20px;
}

.copyright {
    background-color: #1B1B1B;
    padding: 12px 0px 0px 0px;
    display: flex;
    justify-content: center;
}

.copyright p {
    color: white;
    font-size: 12px;
}



/* RESPONSIVE */

@media only screen and (max-width: 1230px) {
    .navbar ul {
        padding-left: 30%;
    }
}

@media only screen and (max-width: 1060px) {
    .navbar ul {
        padding-left: 20%;
    }
}

@media only screen and (max-width: 925px) {
    .navbar ul {
        display: none;
    }

    #navIcon {
        display: block;
        margin-left: 30px;
    }

    #Cart {
        display: block;
        margin-left: 70%;
    }

    .logo {
        padding-left: 2%;
    }

    .footer-01 {
        flex-direction: column;
        padding: 10px 20px;
    }

    .footer-01-box {
        width: 100%;
        padding: 10px 0px;
    }

    .footer-01-img img {
        width: 60px;
    }

    .footer-02 {
        flex-direction: column;
        padding: 10px 0px;
    }

    .footer-02-box {
        width: 100%;
        padding: 10px 20px;
    }

}

@media only screen and (max-width: 800px) {
    .footer {
        flex-direction: column;
    }

    .footer-1,
    .footer-2 {
        width: 100%;
    }

    #Cart {
        margin-left: 60%;
    }
}

@media only screen and (max-width: 600px) {
    #Cart {
        margin-left: 50%;
    }

    .footer {
        padding: 20px 10px;
    }
}

@media only screen and (max-width: 480px) {

    .footer-1,
    .footer-2 {
        flex-direction: column;
    }

    .footerLine1,
    .footerLine2,
    .footerLine3,
    .footerLine4 {
        width: 100%;
    }

    #navIcon {
        margin-left: 10px;
    }

    #Cart {
        margin-left: 40%;
    }
}

@media only screen and (max-width: 340px) {
    #Cart {
        margin-left: 20%;
    }
}
</style>