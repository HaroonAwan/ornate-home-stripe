<template>
    <div>
        <div class="aboutHeader">
            <h3>Solar Waterproof LED Garden Lights Owl</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/gardenDecor"> > Garden Decor
                    </router-link>
                    <router-link to="/owl" style="text-decoration: none; color: black;">
                        > Solar Waterproof LED Garden Lights Owl
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/owl/800-1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/owl/800-2.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/owl/800-3.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/owl/800-4.jpg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">Solar Waterproof LED Garden Lights Owl</h2>
                <h2 style="color: #38872C;">$30.00</h2>
                <p>Color: white</p>
                <p>Product accessories; an owl light</p>
                <p>Product size: overall height 40CM</p>
                <p>Eagle size: 14.5CM</p>
                <p>Product material: resin</p>
                <p>Power: Solar</p>
                <p>Light bulb type: LED</p>
                <p style="color: #38872C;">81 in stock</p>
                <div class="counter">
                    <div class="nCounter" @click="nCount">
                        <v-icon> mdi-minus </v-icon>
                    </div>
                    <div class="count">{{ count }}</div>
                    <div class="pCounter" @click="pCount">
                        <v-icon> mdi-plus </v-icon>
                    </div>
                </div>
                <button @click="addToCart">Add to cart</button>
            </div>
        </div>

        <div class="deatailsHeader">
            <p class="p1">DESCRIPTION</p>
        </div>

        <div class="deatailsContent1">
            <p>1. This energy-saving, low-maintenance solar light adds a decorative glow to your garden décor.</p>
            <p>2. Solar photocells generate energy from the sun during the day,</p>
            <p>3. Use the manual on/off switch to automatically illuminate the owl at night.</p>
            <p>4. Made of resin and plastic, non-toxic and long lasting.</p>
            <p>5. Enjoy the exquisite craftsmanship of the statue during the day and enjoy the brilliance of the night
                lights.</p>
            <p>6. From hand-painted decoration to electronic components, everything is attention to detail!</p>
            <p>7. Suitable for gardens, courtyards, courtyards, parks, beaches, cafes, etc.</p>
            <h2>Specifications:</h2>
            <p>Color: white, brown</p>
            <p>Product accessories; an owl light</p>
            <p>Product size: overall height 40CM</p>
            <p>Eagle size: 14.5CM</p>
            <p>Product material: resin</p>
            <p>Power: Solar</p>
            <p>Light bulb type: LED</p>
            <p>Set: 1 light</p>
            <p>Features: dusk to dawn, easy to install, energy saving, low voltage, novel, solar sensor, suitable for a
                variety of occasions, weatherproof / rainproof</p>
            <p>Style: Modern</p>
            <h2>Include:</h2>
            <p>1x Solar owl LED light</p>
        </div>

        <div class="headerTitle">
            <h2>Related <span style="color: #38872C; font-weight: 700;">Products</span> </h2>

            <div class="hr">
                <hr style="border: 2px solid green; width: 3px; ">
                <hr style="border: 2px solid green; width: 3px; ">
                <hr style="border: 2px solid green; width: 3px; ">
                <hr style="border: 2px solid green; width: 100px;">
            </div>
        </div>

        <div class="top">
            <div class="topBoxes">
                <div class="topContent-1">
                    <div @click="lightHouse" class="topBox-1 lightHouse">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>Lighthouse Decorative Light Indoor Outdoor Solar Powered</h2>
                        <p>$55.00</p>
                    </div>

                    <div @click="dierya" class="topBox-2 dierya">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>Dierya Outdoor Solar Powered Floating Water Fountain Pump Garden Pond</h2>
                        <p>$30.00</p>
                    </div>

                    <div @click="ledSolar" class="topBox-4 ledOutdoor">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>4X LED Solar Lights Outdoor Garden Decoration Garden/Pathway</h2>
                        <p>$35.00</p>
                    </div>
                </div>
            </div>
        </div>

        <ErrorDialog v-model="error" />
    </div>
</template>

<script>
import ErrorDialog from '../../components/ErrorDialog.vue';
export default {
    data() {
        return {
            price: 30,
            count: 1,
            carts: [],
            stripeCarts: [],
            stripeDCarts: [],
            items: [
                {
                    src: require('../../assets/images/gardenDecor/owl/800-1.jpg'),
                },
                {
                    src: require('../../assets/images/gardenDecor/owl/800-2.jpg'),
                },
                {
                    src: require('../../assets/images/gardenDecor/owl/800-3.jpg'),
                },
                {
                    src: require('../../assets/images/gardenDecor/owl/800-4.jpg'),
                },
            ],
            error: false,
        }
    },
    methods: {
        lightHouse() {
            this.$router.push("/lightHouse")
        },
        dierya() {
            this.$router.push("/dierya")
        },
        ledSolar() {
            this.$router.push("/ledSolar")
        },
        pCount() {
            this.count += 1;
        },
        nCount() {
            if (this.count > 1) {
                this.count -= 1;
            }
        },
        addToCart() {
            const product = {
                id: 'owl',
                productTitle: "Solar Waterproof LED Garden Lights Owl",
                price: this.price,
                quantity: this.count,
                subTotal: (this.count * this.price),
            }

            const stripeProduct = {
                price: 'price_1LWcsJJwluYHHjdaMX09ztNh',
                quantity: this.count
            }

            const stripeDProduct = {
                price: 'price_1LaIlLJwluYHHjdad9nY7x9I',
                quantity: this.count
            }

            this.carts[product.id] = product
            this.stripeCarts[product.id] = stripeProduct
            this.stripeDCarts[product.id] = stripeDProduct
            localStorage.setItem('cart', JSON.stringify(this.carts))
            localStorage.setItem('stripeCart', JSON.stringify(this.stripeCarts))
            localStorage.setItem('stripeDCart', JSON.stringify(this.stripeDCarts))
            this.error = true
        }
    },
    mounted() {
        this.carts = JSON.parse(localStorage.getItem('cart'));
        this.stripeCarts = JSON.parse(localStorage.getItem('stripeCart'));
        this.stripeDCarts = JSON.parse(localStorage.getItem('stripeDCart'));
        if (!this.carts) this.carts = {}
        if (!this.stripeCarts) this.stripeCarts = {}
        if (!this.stripeDCarts) this.stripeDCarts = {}
    },
    components: { ErrorDialog }
}
</script>

<style>
.lightHouse {
    background-image: url("../../assets/images/gardenDecor/lighthouse/300-1.jpg");
}

.lightHouse:hover {
    background-image: url("../../assets/images/gardenDecor/lighthouse/300-2.jpg");
}

.dierya {
    background-image: url("../../assets/images/gardenDecor/dierya/300-1.jpg");
}

.dierya:hover {
    background-image: url("../../assets/images/gardenDecor/dierya/300-2.jpg");
}
</style>