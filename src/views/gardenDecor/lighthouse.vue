<template>
    <div>
        <div class="aboutHeader">
            <h3>Lighthouse Decorative Light Indoor Outdoor Solar Powered</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/gardenDecor"> > Garden Decor
                    </router-link>
                    <router-link to="/lighthouse" style="text-decoration: none; color: black;">
                        > Lighthouse
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1" :navigateTo="[this.slideNum]">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/lighthouse/800-1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/lighthouse/800-2.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/lighthouse/800-3.jpg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">Lighthouse Decorative Light Indoor Outdoor Solar Powered</h2>
                <h2 style="color: #38872C;">$55.00</h2>
                <p>Material: Resin</p>
                <p>Color:Black+White, Red+White</p>
                <p>Size: About 10*27.5 cm/3.9*10.8 inch(D x H)</p>
                <p>Power supply: Solar</p>
                <p>Battery: Rechargeable Battery(Built-in)</p>
                <div class="size">
                    <p :class="{ activeSize: sizeClass }" @click="color1">Black + White</p>
                    <p :class="{ activeSize: !sizeClass }" @click="color2">Red + White</p>
                </div>
                <p style="color: #38872C;">44 in stock</p>
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
            <p>Lighthouse Decorative Light: Simple and unique shape, bright and lively colors, worth collecting.</p>
            <p>Exquisite Workmanship: Crafted, exquisite craftsmanship, no matter where you put it, it is a landscape.
            </p>
            <p>Garden Decoration: Can capture your eyes, but subtle enough to be the perfect decorative accent.</p>
            <p>Wide Use: Suitable for indoor and outdoor, such as home, bedroom, garden, yard, patio, etc.</p>
            <p>Gifts Choice: A perfect gift for Christmas, Thanksgiving, Birthdays, Mother’s Day and more.</p>
            <h2>Note:</h2>
            <p>1. Please fully charge the device under sunlight before first use.</p>
            <p>2. If there is no enough sunlight in 3 months, the battery may run completely flat,</p>
            <p>and will decrease battery life, so please charge in time. Once it’s fully charged,</p>
            <p>unlock the device and lighting system. Otherwise, it won’t work anymore.</p>
            <p>3. If there is no enough sunlight, especial in North countries.</p>
            <p>it may take longer time to fully charge the device.</p>
            <p>This is very normal for solar products.</p>
        </div>

        <div class="deatailsContent2" v-show="deatails2">
            <div class="table">
                <table id="table">
                    <tbody>
                        <tr>
                            <th>COLORS</th>
                            <td>Black+White</td>
                        </tr>
                        <tr>
                            <th>BRAND</th>
                            <td>Unbranded</td>
                        </tr>
                        <tr>
                            <th>TYPE</th>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th>MPN</th>
                            <td>jtabn14523201</td>
                        </tr>
                        <tr>
                            <th>POWER SOURCE</th>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <th>CONTROL STYLE</th>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th>INSTALLATION AREA</th>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <th>LED STRING/STRIP TYPE</th>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <th>LIGHTING TECHNOLOGY</th>
                            <td>NO</td>
                        </tr>
                        <tr>
                            <th>SENSOR TYPE</th>
                            <td>NO</td>
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
                    <div @click="dierya" class="topBox-2 dierya">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>Dierya Outdoor Solar Powered Floating Water Fountain Pump Garden Pond</h2>
                        <p>$30.00</p>
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
            slideNum: "",
            count: 1,
            carts: [],
            stripeCarts: [],
            stripeDCarts: [],
            titleClass: true,
            deatails1: true,
            deatails2: false,
            color: 'Black + White',
            sizeClass: true,
            price: 55,
            items: [
                {
                    src: require('../../assets/images/gardenDecor/lighthouse/800-1.jpg'),
                },
                {
                    src: require('../../assets/images/gardenDecor/lighthouse/800-2.jpg'),
                },
                {
                    src: require('../../assets/images/gardenDecor/lighthouse/800-3.jpg'),
                },
            ],
            error: false,
        }
    },
    methods: {
        dierya() {
            this.$router.push("/dierya")
        },
        owl() {
            this.$router.push("/owl")
        },
        ledSolar() {
            this.$router.push("/ledSolar")
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
        color1() {
            this.color = 'Black + White'
            this.sizeClass = true
            this.slideNum = 0
        },
        color2() {
            this.color = 'Red + White'
            this.sizeClass = false
            this.slideNum = 1
        },
        addToCart() {
            const product = {
                id: 'lighthouse',
                productTitle: "Lighthouse Decorative Light Indoor Outdoor Solar Powered Patio Garden Art Lawn",
                price: this.price,
                quantity: this.count,
                subTotal: (this.count * this.price),
                color: this.color,
            }

            const stripeProduct = {
                price: 'price_1LXP4qJwluYHHjdaaQ7sClih',
                quantity: this.count
            }

            const stripeDProduct = {
                price: 'price_1LaIpBJwluYHHjdaHskxRFiz',
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