<template>
    <div>
        <div class="aboutHeader">
            <h3>Floating Shelves Wood Stand Home Decor Corner Shelf </h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/homeDecor"> > Home Decor
                    </router-link>
                    <router-link to="/woodStand" style="text-decoration: none; color: black;">
                        > Floating Shelves Wood Stand Home Decor Corner Shelf
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1" :navigateTo="[this.slideNum]">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/woodStand/800-1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/woodStand/800-2.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/woodStand/800-3.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/woodStand/800-4.jpg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">Floating Shelves Wood Stand Home Decor Corner Shelf </h2>
                <h2 style="color: #38872C;">$20.00 - $35.00</h2>
                <h4 style="margin-bottom: 10px;">Select Size:</h4>
                <div class="size">
                    <div class="size1">
                        <p :class="{ activeSize: warmWhite }" @click="size1(20)"> <img style="width: 50px"
                                src="../../assets/images/homeDecor/woodStand/100-1.jpg" alt="image"> </p>
                        <p :class="{ activeSize: coldWhite }" @click="size2(30)"><img style="width: 50px"
                                src="../../assets/images/homeDecor/woodStand/100-2.jpg" alt="image"></p>
                        <p :class="{ activeSize: pink }" @click="size3(35)"><img style="width: 50px"
                                src="../../assets/images/homeDecor/woodStand/100-3.jpg" alt="image"></p>
                    </div>

                </div>

                <p style="color: #38872C; font-size: 30px;">{{ "$" + price }}</p>
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
            <p>The handmade macrame wood hanging shelf is linked by macrame cord woven by local craftsmen carefully,
                wall hanging shelf is made with natural materials to give people a minimalist feeling and create a
                relaxing ambience indoors.which matches any rustic, boho, modern, or minimalist home decor.</p>
            <p>The hanging wooden shelf is made of natural recycled wood, has no odour, has the natural texture of the
                wooden board. Therefore, the overall unique beauty of the hanging shelf rope is added. Each board of the
                hanging shelf is unique, so each shelf is a small surprise. outside the board is protected with coating
                protection for long-term use.</p>
            <p>This macrame wall hanging shelf creates extra space to beautifully display your favorite framed photos,
                collectibles, small plants, reed diffusers, spices, towels or small items. Decorative and practical.
                Place the boho wall decor shelf in your nursery, bedroom, living room, dorm, entrance, counter and more.
            </p>
            <p>ine's Day, Mother's Day, Thanksgiving, Christmas. </p>
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
            price: 20,
            stripePrice: 'price_1LYTYDJwluYHHjda6dPaUCDH',
            stripeDPrice: 'price_1LaIe9JwluYHHjdaYlfmZbAa',
            slideNum: 0,
            count: 1,
            carts: {},
            stripeCarts: [],
            stripeDCarts: [],
            color: 1,
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
        size1(e) {
            this.color = e
            this.price = e
            this.stripePrice = 'price_1LYTYDJwluYHHjda6dPaUCDH'
            this.stripeDPrice = 'price_1LaIe9JwluYHHjdaYlfmZbAa'
            this.slideNum = 0
            this.warmWhite = true
            this.coldWhite = false
            this.pink = false
            this.slideNum = 0
        },
        size2(e) {
            this.color = e
            this.price = e
            this.stripePrice = 'price_1LYTYWJwluYHHjdaGlOOfBsw'
            this.stripeDPrice = 'price_1LaIdzJwluYHHjdajfX0AtJk'
            this.slideNum = 1
            this.warmWhite = false
            this.coldWhite = true
            this.pink = false
            this.slideNum = 1
        },
        size3(e) {
            this.color = e
            this.price = e
            this.stripePrice = 'price_1LYTYhJwluYHHjdaLS2BMfIP'
            this.stripeDPrice = 'price_1LaIdhJwluYHHjdaz81M8uhq'
            this.slideNum = 2
            this.warmWhite = false
            this.coldWhite = false
            this.pink = true
            this.slideNum = 2
        },
        addToCart() {
            const product = {
                id: 'woodstand',
                productTitle: "Floating Shelves Wood Stand Home Decor Corner Shelf",
                price: this.price,
                quantity: this.count,
                subTotal: (this.count * this.price),
                color: this.color,
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