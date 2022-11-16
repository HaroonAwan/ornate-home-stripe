<template>
    <div>
        <div class="aboutHeader">
            <h3>Rgb led string room lights decor tree lamp for bedroom</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/homeDecor"> > Home Decor
                    </router-link>
                    <router-link to="/rgb" style="text-decoration: none; color: black;">
                        > Rgb led string room lights decor tree lamp for bedroom
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1" :navigateTo="[this.slideNum]">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/rgb/1.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/rgb/2.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/rgb/3.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/rgb/4.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/rgb/5.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/rgb/6.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/rgb/7.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/rgb/8.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/rgb/9.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/rgb/10.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/rgb/11.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/rgb/12.jpeg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">Rgb led string room lights decor tree lamp for bedroom</h2>
                <h2 style="color: #38872C;">$30.00</h2>
                <p>Number of LED Light: 108LEDS(Fire tree light)/36LEDS(pearl tree light)</p>
                <p>Material: Plastic+Copper wire</p>
                <p>Item name:Christmas Greeting Tree Light</p>
                <p>Power Supply: USB DC5V + Battery 3xAA 1.5V</p>
                <p>Switch:Touch</p>
                <p>Height: 45cm-55cm</p>
                <p>Base Diameter: 12cm</p>
                <p>Color of LED Light: Warm white /white/colorful/pink</p>
                <p>Luminous flux :1000 (LM)</p>
                <h4 style="margin-bottom: 10px;">Select Color: <span
                        style="margin-left: 5px; color: #38872C;">{{ this.color }}</span></h4>
                <div class="size">
                    <div class="size1">
                        <p :class="{ activeSize: warmWhite }" @click="size1()"> <img style="width: 50px"
                                src="../../assets/images/homeDecor/rgb/1.jpeg" alt="image"> </p>
                        <p :class="{ activeSize: coldWhite }" @click="size2()"><img style="width: 50px"
                                src="../../assets/images/homeDecor/rgb/4.jpeg" alt="image"></p>
                        <p :class="{ activeSize: pink }" @click="size3()"><img style="width: 50px"
                                src="../../assets/images/homeDecor/rgb/10.jpeg" alt="image"></p>
                    </div>
                    <div class="size2">
                        <p :class="{ activeSize: red }" @click="size4()"><img style="width: 50px"
                                src="../../assets/images/homeDecor/rgb/10.jpeg" alt="image"></p>
                        <p :class="{ activeSize: purple }" @click="size5()"><img style="width: 50px"
                                src="../../assets/images/homeDecor/rgb/6.jpeg" alt="image"></p>
                        <p :class="{ activeSize: colorful }" @click="size6()"><img style="width: 50px"
                                src="../../assets/images/homeDecor/rgb/9.jpeg" alt="image"></p>
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
            <h4>Product introduction:</h4>
            <p>36leds-Pearl Tree Light/108leds-Copper Tree Light</p>
            <p>Product size:</p>
            <p>base 12cm. 36 heads - the height of the pearl tree is about 45cm, 108 heads - the height of the copper
                tree tree is about 50cm, and the base switch is touch type, which is more high-end atmosphere.</p>
            <p>Product weight:</p>
            <p>320 grams or so</p>
            <p>Packing size: single product 17*4*33cm</p>
            <p>Package Included:</p>
            <p>1x Christmas Tree Light</p>
            <p>1x Cable USB line</p>
            <p>1x Switch Base</p>
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

                    <div @click="wallLamp" class="topBox-3 wallLamp">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>2PCS Solar LED Light Outdoor Wall Lamp Garden Light</h2>
                        <p>$25.00</p>
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
            slideNum: 0,
            count: 1,
            carts: {},
            stripeCarts: [],
            stripeDCarts: [],
            color: 'Warm White',
            warmWhite: true,
            coldWhite: false,
            purple: false,
            red: false,
            pink: false,
            colorful: false,
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
        wallLamp() {
            this.$router.push("/wallLamp")
        },
        pCount() {
            this.count += 1;
        },
        nCount() {
            if (this.count > 1) {
                this.count -= 1;
            }
        },
        size1() {
            this.slideNum = 0
            this.color = 'Warm White'
            this.warmWhite = true
            this.red = false
            this.coldWhite = false
            this.purple = false
            this.pink = false
            this.colorful = false
        },
        size2() {
            this.slideNum = 3
            this.color = 'Pink'
            this.warmWhite = false
            this.red = false
            this.coldWhite = true
            this.purple = false
            this.pink = false
            this.colorful = false
        },
        size3() {
            this.slideNum = 9
            this.color = 'Colorful'
            this.warmWhite = false
            this.red = false
            this.coldWhite = false
            this.purple = false
            this.pink = true
            this.colorful = false
        },
        size4() {
            this.slideNum = 7
            this.color = 'Cold White'
            this.warmWhite = false
            this.red = true
            this.coldWhite = false
            this.purple = false
            this.pink = false
            this.colorful = false
        },
        size5() {
            this.slideNum = 10
            this.color = 'Warm White'
            this.warmWhite = false
            this.red = false
            this.coldWhite = false
            this.purple = true
            this.pink = false
            this.colorful = false
        },
        size6() {
            this.slideNum = 8
            this.color = 'Red'
            this.warmWhite = false
            this.red = false
            this.coldWhite = false
            this.purple = false
            this.pink = false
            this.colorful = true
        },
        addToCart() {
            const product = {
                id: 'rgb',
                productTitle: "Rgb led string room lights decor tree lamp for bedroom",
                price: 30.00,
                quantity: this.count,
                subTotal: (this.count * 30.00),
                color: this.color,
            }

            const stripeProduct = {
                price: 'price_1LXOzoJwluYHHjdabVN3P6uo',
                quantity: this.count
            }

            const stripeDProduct = {
                price: 'price_1LaZLYJwluYHHjdaCke2oFBN',
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