<template>
    <div>
        <div class="aboutHeader">
            <h3>2PCS Solar LED Light Outdoor Wall Lamp Garden Light</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/homeDecor"> > Home Decor
                    </router-link>
                    <router-link to="/wallLamp" style="text-decoration: none; color: black;">
                        > 2PCS Solar LED Light Outdoor Wall Lamp Garden Light
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1" :navigateTo="[this.slideNum]">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/wallLamp/800-1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/wallLamp/800-2.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/wallLamp/800-3.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/wallLamp/800-4.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/wallLamp/800-5.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/wallLamp/800-6.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/wallLamp/800-7.jpg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">2PCS Solar LED Light Outdoor Wall Lamp Garden Light</h2>
                <h2 style="color: #38872C;">$25.00</h2>
                <h4 style="margin-bottom: 10px;">Specifications:</h4>
                <p>Main Material: Plastic PP, Plastic PC</p>
                <p>Battery: NI-MH AA600mA 1.2V (No. 5 Rechargeable Battery)</p>
                <p>Light Source: 1 White LED (White Light and Warm White Light Optional)</p>
                <p>Working Time: 6-8 hours, with 3 monocrystalline silicon solar panels, it takes about 6 hours of full
                    sunshine time (note: turn on the switch when charging)</p>
                <h4 style="margin-bottom: 10px;">Select Color: <span style="margin-left: 5px; color: #38872C;">
                        {{ this.scolor }} </span> </h4>
                <div class="size">
                    <div class="size1">
                        <p :class="{ activeSize: warmWhite }" @click="size1(1)"> <img style="width: 50px"
                                src="../../assets/images/homeDecor/wallLamp/100-1.jpg" alt="image"> </p>
                        <p :class="{ activeSize: coldWhite }" @click="size2(2)"><img style="width: 50px"
                                src="../../assets/images/homeDecor/wallLamp/100-2.jpg" alt="image"></p>
                        <p :class="{ activeSize: pink }" @click="size3(3)"><img style="width: 50px"
                                src="../../assets/images/homeDecor/wallLamp/100-3.jpg" alt="image"></p>
                    </div>

                </div>
                <p style="color: #38872C;">60 in stock</p>
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
            <p>DESCRIPTION</p>
        </div>

        <div class="deatailsContent1">
            <p>[No Wiring or Extra Power Supply] A built-in solar panel on the top as a power source, saving you the
                hassle of complicated wiring, just mount it on a wall or wooden fence with a few screws (included).</p>
            <p>[Smart Lighting] Our wall lamp has built-in sensitive light sensor, automatically turning on at night and
                turning off during the day.</p>
            <p>[Built-In Battery] The rechargeable 600mAh NiMH battery with 3 monocrystalline silicon solar panels
                requires about 6-8 hours of full sunlight and provides up to 6-8 hours of continuous lighting at night.
            </p>
            <p>[IP44 Waterproof] Our LED fence light is IP44 waterproof and heat-resistant. It is also a durable and
                environmentally friendly product.</p>
            <p>[Good Decoration] Elegant hexagonal six-sided transparent lampshade and the lamp body rotates 180 degrees
                cast a very soft light, ideal for outdoor fences, garden paths, landscapes, swimming pools, etc.</p>
            <h4>Package Include:</h4>
            <p>2×Solar LED Wall Lamp</p>
            <p>2×Installation Accessories Set</p>
            <p>1×Packing Box</p>
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
                    <div @click="nightStar" class="topBox-1 nightStar">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>New LED Night Star Sky Projector Light Lamp</h2>
                        <p> <span>$50.00</span> $30.00 </p>
                    </div>

                    <div @click="bikeStand" class="topBox-2 bikeStand">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>1-3 Bike Stand Bicycle Rack Storage Floor Parking Holder</h2>
                        <p>$55.00</p>
                    </div>

                    <div @click="rgb" class="topBox-3 rgb">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>Rgb led string room lights decor tree lamp for bedroom</h2>
                        <p>$30.00</p>
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
            slideNum: "",
            count: 1,
            carts: {},
            stripeCarts: [],
            stripeDCarts: [],
            color: 1,
            scolor: 'Cold white',
            warmWhite: true,
            coldWhite: false,
            pink: false,
            error: false,
        }
    },
    methods: {
        nightStar() {
            this.$router.push("/nightStar")
        },
        bikeStand() {
            this.$router.push("/bikeStand")
        },
        rgb() {
            this.$router.push("/rgb")
        },
        pCount() {
            this.count += 1;
        },
        nCount() {
            if (this.count > 1) {
                this.count -= 1;
            }
        },
        size1(e) {
            this.color = e
            this.scolor = 'Cold white'
            this.slideNum = 4
            this.warmWhite = true
            this.coldWhite = false
            this.pink = false
        },
        size2(e) {
            this.color = e
            this.scolor = 'Yellow'
            this.slideNum = 5
            this.warmWhite = false
            this.coldWhite = true
            this.pink = false
        },
        size3(e) {
            this.color = e
            this.scolor = 'Warm white'
            this.slideNum = 6
            this.warmWhite = false
            this.coldWhite = false
            this.pink = true
        },
        addToCart() {
            const product = {
                id: 'walllamp',
                productTitle: "Solar LED Light Outdoor Wall Lamp Garden Light ",
                price: 25.00,
                quantity: this.count,
                subTotal: (this.count * 25.00),
                color: this.color,
            }

            const stripeProduct = {
                price: 'price_1LY5IDJwluYHHjda69qRx095',
                quantity: this.count
            }

            const stripeDProduct = {
                price: 'price_1LaIhGJwluYHHjdaPOOpiJeI',
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
    computed: {
        currentId() {
            if (this.carousel) {
                return this.items[this.carousel].id
            } else {
                return this.items[0].id
            }
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

<style scoped>
.activeSize {
    border: 2px solid green;
    padding: 1px;
}

.size1,
.size2 {
    display: flex;
}

.size p img {
    margin-bottom: -6px;
}

@media only screen and (max-width: 600px) {
    .size {
        display: flex;
        flex-direction: column;
    }

    .size p {
        margin: 10px 20px;
        width: 17%;
    }
}
</style>