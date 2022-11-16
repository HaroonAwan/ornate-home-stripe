<template>
    <div>
        <div class="aboutHeader">
            <h3>Agriculture Atomizer Nozzles Lawn Water Sprinkler</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/gardenTools"> > Garden Tools
                    </router-link>
                    <router-link to="/sprayNozzle" style="text-decoration: none; color: black;">
                        > Agriculture Atomizer Nozzles Lawn Water Sprinkler
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1" :navigateTo="[this.slideNum]">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/spraynozzle/v1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/spraynozzle/2.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/spraynozzle/s1.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/spraynozzle/s2.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/spraynozzle/s3.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/spraynozzle/s4.jpeg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">Agriculture Atomizer Nozzles Lawn Water Sprinkler</h2>
                <h2 style="color: #38872C;">$15.00 - $30.00</h2>
                <h2>Specification:</h2>
                <p>Model Number: Agriculture Atomizer Nozzles</p>
                <p>Material: ABS</p>
                <p>Colour: As Shown</p>
                <h2>Size:</h2>
                <div class="size">
                    <p :class="{ activeSize: size01 }" @click="size1(15)">Three-head (23 /30 MM)Size: 200*275 MM</p>
                    <p :class="{ activeSize: size02 }" @click="size2(20)">Four-head(23 /30 MM)Size: 275*275 MM</p>
                    <p :class="{ activeSize: size03 }" @click="size3(25)">Five-head (23 /30 MM)Size: 345*275 MM</p>
                    <p :class="{ activeSize: size04 }" @click="size4(30)">Six-head(23 /30 MM)Size: 345*275 MM</p>
                </div>
                <p style="color: #38872C; font-size: 30px;">{{ "$" + price }}</p>
                <p style="color: #38872C;">87 in stock</p>
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

        <div class="deatailsContent1" v-show="deatails1">
            <p>1.Brand new and high quality.</p>
            <p>2.Large flow atomization, does not hurt seedlings.</p>
            <p>3.Can be used for landscaping, agricultural drought resistance, greenhouse watering, and watering
                vegetables.</p>
            <p>4.A water pipe, easy to water, can make planting and watering plants more convenient.</p>
            <p>5.The nozzle has 6 holes designed for a uniform water outlet, and the water output can be adjusted by
                rotating the nozzle.</p>
            <p>6.The greater the water pressure, the stronger the atomization, large areas of plants with water pumps
                will be better.</p>
            <p>7.It is a practical gift for your families and friends, or those people who like gardening.</p>
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
                    <div @click="powergarden" class="topBox-1 powergarden">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>Power Garden Spiral Auger Earth Drill Bit Post Hole Digger Tool</h2>
                        <p> $30.00 – $40.00</p>
                    </div>

                    <div @click="teethTrimmer" class="topBox-2 teethTrimmer">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>Pack of 2 Teeth Trimmer Head Grass Steel Blades Brush Cutter</h2>
                        <p><span>$54.55</span> $44.99</p>
                    </div>

                    <div @click="grassTrimmer" class="topBox-3 grassTrimmer">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>Grass Trimmer Head Brush Cutter Steel Garden Tools</h2>
                        <p>$30.00 – $40.00</p>
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
            price: 15,
            slideNum: 0,
            count: 1,
            carts: [],
            stripeCarts: [],
            stripeDCarts: [],
            stripePrice: 'price_1LXP2ZJwluYHHjdaQ5xcCtOw',
            stripeDPrice: 'price_1LaIxUJwluYHHjdae5X88HKJ',
            titleClass: true,
            size01: true,
            size02: false,
            size03: false,
            size04: false,
            deatails1: true,
            deatails2: false,
            error: false,
        }
    },
    methods: {
        powergarden() {
            this.$router.push("/powergarden")
        },
        teethTrimmer() {
            this.$router.push("/teethTrimmer")
        },
        grassTrimmer() {
            this.$router.push("/grassTrimmer")
        },
        description1() {
            this.deatails1 = true
            this.deatails2 = false
            this.titleClass = true
        },
        description2() {
            this.deatails1 = false
            this.deatails2 = true
            this.titleClass = false
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
            this.price = e
            this.size01 = true
            this.size02 = false
            this.size03 = false
            this.size04 = false
            this.stripePrice = 'price_1LXP2ZJwluYHHjdaQ5xcCtOw'
            this.stripeDPrice = 'price_1LaIxUJwluYHHjdae5X88HKJ'
            this.slideNum = 2
        },
        size2(e) {
            this.price = e
            this.size01 = false
            this.size02 = true
            this.size03 = false
            this.size04 = false
            this.stripePrice = 'price_1LY27yJwluYHHjda21cW4Y0O'
            this.stripeDPrice = 'price_1LaIxHJwluYHHjda9cX2xkpY'
            this.slideNum = 3
        },
        size3(e) {
            this.price = e
            this.size01 = false
            this.size02 = false
            this.size03 = true
            this.size04 = false
            this.stripePrice = 'price_1LY28DJwluYHHjdaclYSkac5'
            this.stripeDPrice = 'price_1LaIwxJwluYHHjdaDSjWAukV'
            this.slideNum = 4
        },
        size4(e) {
            this.price = e
            this.size01 = false
            this.size02 = false
            this.size03 = false
            this.size04 = true
            this.stripePrice = 'price_1LY28QJwluYHHjda3zcldemp'
            this.stripeDPrice = 'price_1LaIwgJwluYHHjdaWqSR6ZET'
            this.slideNum = 5
        },
        addToCart() {
            const product = {
                id: 'sprayNozzle',
                productTitle: "Agriculture Atomizer Nozzles Lawn Water Sprinkler",
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

        }
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
.size {
    display: flex;
    flex-direction: column;
}

.size P {
    width: 65%;
}


@media only screen and (max-width: 600px) {
    .size p {
        font-size: 14px;
        width: 100%;
    }
}
</style>