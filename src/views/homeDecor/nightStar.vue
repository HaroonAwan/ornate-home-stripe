<template>
    <div>
        <div class="aboutHeader">
            <h3>New LED Night Star Sky Projector Light Lamp</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/homeDecor"> > Home Decor
                    </router-link>
                    <router-link to="/nightStar" style="text-decoration: none; color: black;">
                        > New LED Night Star Sky Projector Light Lamp
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1" :navigateTo="[this.slideNum]">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/nightstar/800-1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/nightstar/800-2.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/nightstar/800-3.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/nightstar/800-4.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/nightstar/800-5.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/nightstar/800-6.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/nightstar/800-7.jpg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">New LED Night Star Sky Projector Light Lamp</h2>
                <h2 style="color: #38872C;">$30.00</h2>
                <p>Color:Blue</p>
                <p>Voltage: DC 5V</p>
                <p>Projector Size: 13 x 13 x 14.5cm</p>
                <p>Weight: 280g</p>
                <p>Switch Type: 3 Push-Button</p>
                <p>USB Cable Length: 3.5ft</p>
                <h4>Size: <span style="margin-left: 5px; color: #38872C;">{{ this.color }}</span></h4>
                <div class="size">
                    <div class="size1">
                        <p :class="{ activeSize: blue }" @click="size1"> <img style="width: 50px"
                                src="../../assets/images/homeDecor/nightstar/100-1.jpg" alt="image"> </p>
                        <p :class="{ activeSize: purple }" @click="size2"><img style="width: 50px"
                                src="../../assets/images/homeDecor/nightstar/100-2.jpg" alt="image"></p>
                        <p :class="{ activeSize: pink }" @click="size3"><img style="width: 50px"
                                src="../../assets/images/homeDecor/nightstar/100-3.jpg" alt="image"></p>
                    </div>
                </div>
                <p style="color: #38872C;">49 in stock</p>
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
            <p :class="{ p1: titleClass }" @click="description1">DESCRIPTION</p>
            <p :class="{ p1: !titleClass }" @click="description2">ADDITIONAL INFORMATION</p>
        </div>

        <div class="deatailsContent1" v-show="deatails1">
            <h2>Features:</h2>
            <p>Battery type: Lithium-ion Rechargeable Battery for PS3</p>
            <p>Color:Pink / Purple /Blue</p>
            <p>Voltage: DC 5V</p>
            <p>Projector Size: 13 x 13 x 14.5cm</p>
            <p>Weight: 280g</p>
            <p>Switch Type: 3 Push-Button</p>
            <p>USB Cable Length: 3.5ft</p>
            <p>Light Source: 4 LED Bulbs (0.8w Warm light, 0.5w blue light, 0.5w Green light, 0.5w Red light)</p>
            <p>Power Requirements: USB Cable(included) / 3 x AA batteries (not Included)</p>
            <p>“Project” the stars and moon spinning on the ceiling and wall, rotates as the stars light up.</p>
            <p>“Non-Project” by putting the cover on and make it a night light or regular lamp.</p>
            <p>Perfect gift for a child’s bedroom or anywhere else you’d like colorful projected stars like decorating
                wedding, birthday and parties.</p>
            <h2>Operation Manual: </h2>
            <p>There are 3 buttons on the front A, B and C.</p>
            <p>1.Button A: Switches on the control for “night light.” This provides a fairly dim, warm lighting that
                would be great for sleeping with. Pressing it once turns it on & pressing it again turns it off.</p>
            <p>2.Button B: Switches through the varying color options. There are a slew of different color options,
                which is great, it allows for a degree of personalization as you can choose the color scheme that you
                like the best.</p>
            <p>3.Button C: Allows you to switch on the rotation, which makes the product more fun.</p>
            <h2>Package Include:</h2>
            <p>1 x Star Light LED Projector</p>
            <p>1 x USB cable</p>
            <p>1 x Manual Instruction</p>
        </div>

        <div class="deatailsContent2" v-show="deatails2" style="margin-bottom: 50px;">
            <div class="table">
                <table id="table">
                    <tbody>
                        <tr>
                            <th>COLOUR</th>
                            <td>Blue</td>
                        </tr>
                        <tr>
                            <th>POWER SOURCE</th>
                            <td>USB</td>
                        </tr>
                        <tr>
                            <th>MPN</th>
                            <td>Does not apply</td>
                        </tr>
                        <tr>
                            <th>LIGHT SOURCE</th>
                            <td>LED</td>
                        </tr>
                        <tr>
                            <th>BRAND</th>
                            <td>Unbranded/Generic</td>
                        </tr>
                        <tr>
                            <th>TYPE</th>
                            <td>Projector</td>
                        </tr>
                        <tr>
                            <th>DEPARTMENT</th>
                            <td>Baby</td>
                        </tr>
                        <tr>
                            <th>PRODUCT TYPE</th>
                            <td>Night Lights</td>
                        </tr>
                        <tr>
                            <th>SENSOR TYPE</th>
                            <td>Light</td>
                        </tr>
                        <tr>
                            <th>AGE GROUP</th>
                            <td>Baby</td>
                        </tr>
                        <tr>
                            <th>THEME</th>
                            <td>Stars & Sky</td>
                        </tr>
                        <tr>
                            <th>FEATURED REFINEMENTS</th>
                            <td>Star Projector</td>
                        </tr>
                        <tr>
                            <th>FEATURES</th>
                            <td>Rotating Head</td>
                        </tr>
                        <tr>
                            <th>ROOM</th>
                            <td>Bedroom</td>
                        </tr>
                        <tr>
                            <th>LIGHTING TECHNOLOGY</th>
                            <td>LED</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
            titleClass: true,
            deatails1: true,
            deatails2: false,
            color: 'Blue',
            blue: true,
            purple: false,
            pink: false,
            error: false,
        }
    },
    methods: {
        bikeStand() {
            this.$router.push("/bikeStand")
        },
        rgb() {
            this.$router.push("/rgb")
        },
        wallLamp() {
            this.$router.push("/wallLamp")
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
        size1() {
            this.color = 'Blue'
            this.slideNum = 4
            this.blue = true
            this.purple = false
            this.pink = false
        },
        size2() {
            this.color = 'Purple'
            this.slideNum = 5
            this.blue = false
            this.purple = true
            this.pink = false
        },
        size3() {
            this.color = 'Pink'
            this.slideNum = 6
            this.blue = false
            this.purple = false
            this.pink = true
        },
        addToCart() {
            const product = {
                id: 'nightStar',
                productTitle: "New LED Night Star Sky Projector Light Lamp",
                price: 30.00,
                quantity: this.count,
                subTotal: (this.count * 30.00),
                color: this.color,
            }

            const stripeProduct = {
                price: 'price_1LXOxxJwluYHHjdaHookhxLr',
                quantity: this.count
            }

            const stripeDProduct = {
                price: 'price_1LaZV9JwluYHHjdaGQgWaxFb',
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
.size1 {
    display: flex;
    margin-top: 10px;
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