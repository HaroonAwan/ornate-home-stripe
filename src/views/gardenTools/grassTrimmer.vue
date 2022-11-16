<template>
    <div>
        <div class="aboutHeader">
            <h3>Grass Trimmer Head Brush Cutter Steel Garden Tools</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/gardenTools"> > Garden Tools
                    </router-link>
                    <router-link to="/grassTrimmer" style="text-decoration: none; color: black;">
                        > Grass Trimmer Head Brush Cutter Steel Garden Tools
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1" :navigateTo="[this.slideNum]">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/grasstrimmer/800-1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/grasstrimmer/800-2.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/grasstrimmer/800-3.jpg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">Grass Trimmer Head Brush Cutter Steel Garden Tools</h2>
                <h2 style="color: #38872C;">$30.00 - $40.00</h2>
                <p>This is a universal trimmer Head fit with all types of trimmer</p>
                <p>Type: Weed Brush</p>
                <p>Quantity: 1 PC</p>
                <p>Material: Carbon Steel Wire</p>
                <p>Color：As Shown</p>
                <p>Size: 15.0*15.0*4.5cm (L*W*H)</p>
                <p>Net Weight: 565.0g</p>
                <div class="size">
                    <p :class="{ activeSize: sizeClass }" @click="size1(30)">6 INCH</p>
                    <p :class="{ activeSize: !sizeClass }" @click="size2(40)">8 INCH</p>
                </div>
                <p style="color: #38872C; font-size: 30px;">{{ "$" + price }}</p>
                <p style="color: #38872C;">23 in stock</p>
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
            <p>Sharp and Efficient</p>
            <p>The weed brush adopts internal fixed plate structure to ensure consistency and safety.</p>
            <p>More sharp and efficient than other types.</p>
            <p>Long Lifetime and Durable</p>
            <p>The weed brush is made of carbon steel wire, which can work normally when hitting the stone and hard
                block. Service life will be 10 times longer than other trimmer head.</p>
            <p>Suitable and Application</p>
            <p>The weed brush is suitable for most trimmer models and suit for straight-shaft garden pole tools
                products.</p>
            <p>Best Service</p>
            <p>Your satisfaction and positive feedback is very important to us. If you have any problems about the weed
                brush, please do not have any hesitation and call us at first time.</p>
            <p>We are always sincerely waiting for your asking.</p>
        </div>

        <div class="deatailsContent2" v-show="deatails2">
            <div class="table">
                <table id="table">
                    <tbody>
                        <tr>
                            <th>SIZE</th>
                            <td>6 INCH, 8 INCH</td>
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

                    <div @click="sprayNozzle" class="topBox-4 spraNozzle">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>Agriculture Atomizer Nozzles Lawn Water Sprinkler</h2>
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
            count: 1,
            carts: [],
            stripeCarts: [],
            stripeDCarts: [],
            stripePrice: 'price_1LXOwMJwluYHHjda68pPyUpG',
            stripeDPrice: 'price_1LaZWsJwluYHHjda9fmUOM3f',
            titleClass: true,
            deatails1: true,
            deatails2: false,
            price: 30,
            sizeClass: true,
            slideNum: 0,
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
        sprayNozzle() {
            this.$router.push("/sprayNozzle")
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
            this.sizeClass = true
            this.stripePrice = 'price_1LXOwMJwluYHHjda68pPyUpG'
            this.stripeDPrice = 'price_1LaZWsJwluYHHjda9fmUOM3f'
        },
        size2(e) {
            this.price = e
            this.sizeClass = false
            this.stripePrice = 'price_1LY271JwluYHHjdaWx375P4e'
            this.stripeDPrice = 'price_1LaZWlJwluYHHjdagT38l0gF'
        },
        addToCart() {
            const product = {
                id: 'grassTrimmer',
                productTitle: "Grass Trimmer Head Brush Cutter Steel Garden Tools",
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