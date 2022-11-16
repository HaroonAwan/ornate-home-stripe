<template>
    <div>
        <div class="aboutHeader">
            <h3>Dierya Outdoor Solar Powered Floating Water Fountain Pump Garden Pond</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/gardenDecor"> > Garden Decor
                    </router-link>
                    <router-link to="/dierya" style="text-decoration: none; color: black;">
                        > Dierya Outdoor Solar Powered Floating Water Fountain Pump Garden Pond
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/dierya/800-1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/dierya/800-2.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/dierya/800-3.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/dierya/800-4.jpg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">Dierya Outdoor Solar Powered Floating Water Fountain Pump Garden Pond</h2>
                <h2 style="color: #38872C;">$30.00</h2>
                <p>Solar panel: 7V/1.5W</p>
                <p>Brushless pump input: DC 4.5-10V</p>
                <p>Maximum quantity of flow: 160L/h</p>
                <p>Water spray height: 20-50cm</p>
                <p>DC Brushless Pump Power: 1W</p>
                <p>Solar panel diameter: 6.38″(16.2cm)</p>
                <p>Max water flow height: 18″ / Regular:10~15″</p>
                <p>Max water coverage: 32″(80cm) in diameter</p>
                <p>Max pump flow: 40gallons/H</p>
                <p>Min water depth in fountain: 1 3/4″</p>
                <p>The pump will start automatically in 3 seconds when gain sufficient sunlight without any shadow or
                    cloud</p>
                <p style="color: #38872C;">73 in stock</p>
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
            <h2>Notes:</h2>
            <p>1. The solar fountain is directly driven by the sun. Put the solar panel in the high-intensity sun,
                preferably facing the sun directly. The height of the water depends on the strength of the sun. When the
                sun is weak, the water pump will not work continuously, but will automatically start repeatedly, until
                the sun reaches a certain strength, the water pump will resume continuous work.And you need to be in an
                area of unobstructed sunlight to work best (no shadows or clouds).</p>
            <p>2. Please keep the water clean and clean the water pump regularly to prevent the suction pump of the
                water pump from working normally due to foreign matters. The pool water needs to be completely cleaned.
                If the water quality is not good, the sun plate of the fountain will grow moss, which will also affect
                the absorption of sunlight and water pump.</p>
            <p>3. Dehydration will wear the parts of the pump, The pump must be immersed in water，and the pump cannot be
                dehydrated for a long time, or the service life of the pump will be shortened. When the pump is just
                immersed in water, due to the air pump, it is recommended to insert the water gun into the pump after it
                is normal.</p>
            <p>4. Fast start. When the sun shines on the solar panel, the fountain pump will start automatically within
                3 seconds.</p>
            <p>5. Choose the best nozzle (size and depth) for your bird bath to avoid water gushing out. You need to
                replenish water frequently.</p>
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

                    <div @click="owl" class="topBox-3 owl">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>Solar Waterproof LED Garden Lights Owl</h2>
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
            count: 1,
            carts: [],
            stripeCarts: [],
            stripeDCarts: [],
            stripePrice: 'price_1LXP5XJwluYHHjdaWFMnJAiZ',
            stripeDPrice: 'price_1LaImDJwluYHHjda3wvIzVHM',
            price: 30,
            sizeClass: true,
            error: false,
        }
    },
    methods: {
        lightHouse() {
            this.$router.push("/lightHouse")
        },
        owl() {
            this.$router.push("/owl")
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
                id: 'dierya',
                productTitle: "Dierya Outdoor Solar Powered Floating Bird Bath Water Fountain Pump Garden Pond",
                price: this.price,
                quantity: this.count,
                subTotal: (this.count * this.price),
            }

            const stripeProduct = {
                price: this.stripePrice,
                quantity: this.count
            }

            const stripeDProduct = {
                price: this.stripeDPrice,
                quantity: this.count
            }

            this.carts[product.id] = product
            this.stripeCarts[product.id] = stripeProduct
            this.stripeDCarts[product.id] = stripeDProduct
            localStorage.setItem('cart', JSON.stringify(this.carts))
            localStorage.setItem('stripeCart', JSON.stringify(this.stripeCarts))
            localStorage.setItem('stripeDCart', JSON.stringify(this.stripeDCarts))
            this.error = true
        },
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
.counter {
    display: flex;
}

.nCounter,
.pCounter,
.count {
    border: 1px solid grey;
    margin: 0px 5px;
}

.nCounter,
.pCounter {
    cursor: pointer;
}

.count {
    width: 25px;
    display: flex;
    justify-content: center;
}

.lighthouse {
    background-image: url("../../assets/images/gardenDecor/lighthouse/300-1.jpg");
}

.lighthouse:hover {
    background-image: url("../../assets/images/gardenDecor/lighthouse/300-2.jpg");
}

.ledSolar {
    background-image: url("../../assets/images/gardenDecor/ledSolar/1.jpg");
}

.ledSolar:hover {
    background-image: url("../../assets/images/gardenDecor/ledSolar/2.jpeg");
}

.owl {
    background-image: url("../../assets/images/gardenDecor/owl/300-1.jpg");
}

.owl:hover {
    background-image: url("../../assets/images/gardenDecor/owl/300-2.jpg");
}
</style>