<template>
    <div>
        <div class="aboutHeader">
            <h3>Power Garden Spiral Auger Earth Drill Bit Post Hole Digger Tool</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/gardenTools"> > Garden Tools
                    </router-link>
                    <router-link to="/solarPowered" style="text-decoration: none; color: black;">
                        > Power Garden Spiral Auger
                    </router-link>
                </p>
            </div>
        </div>

        <div v-show="addedToCart" class="addedToCart">
            <div class="addedToCartTitle">
                <v-icon color="green">mdi-check</v-icon>
                <h5>Power Garden Spiral Auger Earth Drill Bit Post Hole Digger Tool</h5>
            </div>
            <div>
                <router-link to="/cart" style="text-decoration: none;">
                    <v-btn class="addedToCartBtn" dark color="green">View Cart</v-btn>
                </router-link>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1" :navigateTo="[this.slideNum]">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/powergarden/800-1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/powergarden/800-2.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/powergarden/800-3.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/powergarden/800-4.jpg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">Power Garden Spiral Auger Earth Drill Bit Post Hole Digger Tool</h2>
                <h2 style="color: #38872C;">$30.00 – $40.00</h2>
                <p>Type: Hole Digger Tools</p>
                <p>Quantity: 1pc</p>
                <p>Material: Carbon Steel</p>
                <p>Color: As shown</p>
                <p>Size:</p>
                <p>8*30cm/3.14*12’’(D*H)</p>
                <p>8*60cm/3.14*24’’(D*H)</p>
                <div class="size">
                    <p :class="{ activeSize: sizeClass }" @click="size1(30)">Φ80mm X 300mm</p>
                    <p :class="{ activeSize: !sizeClass }" @click="size2(40)">Φ80mm X 600mm</p>
                </div>
                <p style="color: #38872C; font-size: 30px;">{{ "$" + price }}</p>
                <p style="color: #38872C;">70 in stock</p>
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
            <p>Garden auger spiral drill bit spiral hole drill</p>
            <p>A:Save time and energy</p>
            <p>No better tool for digging holes in your yard. The hole digger tools make large planting jobs much easier
                and faster making it suitable for professionals and home DIY projects.</p>
            <p>B:Good planting helper</p>
            <p>Perfect bulb planting auger for tulips, iris, bulbs, bedding plants, and seedlings. Also great for
                digging weeds up by the roots.</p>
            <p>C:Durable</p>
            <p>Features high quality metal rod and blades for durability and maximum digging performance. The hole
                digger tool can bring you exceptional quality and value, support to be used for a long time.</p>
            <p>D:Convenient</p>
            <p>Digs holes in all soil types leaving dirt soil around the edge of dug hole for easy packing.</p>
        </div>

        <div class="deatailsContent2" v-show="deatails2">
            <div class="table">
                <table id="table">
                    <tbody>
                        <tr>
                            <th>SIZE</th>
                            <td>Φ80mm X 300mm, Φ80mm X 600mm</td>
                        </tr>
                        <tr>
                            <th>ASSEMBLY REQUIRED</th>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <th>BATTERY INCLUDED</th>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th>BRAND</th>
                            <td>Unbranded</td>
                        </tr>
                        <tr>
                            <th>COLOUR</th>
                            <td>Black</td>
                        </tr>
                        <tr>
                            <th>CUSTOM BUNDLE</th>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th>FEATURES</th>
                            <td>Easy Operation</td>
                        </tr>
                        <tr>
                            <th>ITEM HEIGHT</th>
                            <td>30cm/60cm</td>
                        </tr>
                        <tr>
                            <th>ITEM LENGTH</th>
                            <td>8 cm</td>
                        </tr>
                        <tr>
                            <th>ITEM WIDTH</th>
                            <td>80MM</td>
                        </tr>
                        <tr>
                            <th>MATERIAL</th>
                            <td>Carbon Steel</td>
                        </tr>
                        <tr>
                            <th>MPN</th>
                            <td>Does Not Apply</td>
                        </tr>
                        <tr>
                            <th>TYPE</th>
                            <td>Hole Digger</td>
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
            slideNum: 0,
            addedToCart: false,
            count: 1,
            carts: [],
            stripeCarts: [],
            stripeDCarts: [],
            stripePrice: 'price_1LXP0dJwluYHHjdanqh3HqPF',
            stripeDPrice: 'price_1LaJ1UJwluYHHjdaDViwDMwz',
            titleClass: true,
            deatails1: true,
            deatails2: false,
            price: 30,
            sizeClass: true,
            error: false,
        }
    },
    methods: {
        teethTrimmer() {
            this.$router.push("/teethTrimmer")
        },
        grassTrimmer() {
            this.$router.push("/grassTrimmer")
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
        addToCart() {
            const product = {
                id: 'powergarden',
                productTitle: "Power Garden Spiral Auger Earth Drill Bit Post Hole Digger Tool",
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
        size1(e) {
            this.price = e
            this.sizeClass = true
            this.stripePrice = 'price_1LXP0dJwluYHHjdanqh3HqPF'
            this.stripeDPrice = 'price_1LaJ1UJwluYHHjdaDViwDMwz'
        },
        size2(e) {
            this.price = e
            this.sizeClass = false
            this.stripePrice = 'price_1LY27bJwluYHHjdaRD2LJPH7'
            this.stripeDPrice = 'price_1LaJ1HJwluYHHjdab5gtQF8I'
        },
        handleSlideClick(dataset) {
            console.log(dataset.index, dataset.name)
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
.carousel {
    margin-bottom: 20px;
}

.smallImage {
    display: flex;
    justify-content: center;
}

.smallImage img {
    cursor: pointer;
    margin: 0px 5px;
    border: 1px solid black;
    border-radius: 5px;
    opacity: 0.4;
}

.smallImage img:hover {
    opacity: 2;
}

.size {
    display: flex;
}

.size p {
    margin-right: 15px;
    padding: 3px 6px;
    cursor: pointer;
}

.activeSize {
    border: 2px solid grey;
    color: #38872c;
}

.productMain {
    display: flex;
    margin-top: 50px;
}

.productImage {
    margin-left: 50px;
    width: 40% !important;
}

.productContent {
    width: 50%;
    padding: 0px 50px;
}

.productContent h2 {
    padding: 6px 0px;
}

.productContent button {
    margin-top: 20px;
    background-color: #38872c;
    color: white;
    padding: 10px 30px;
    border-radius: 50px;
    text-transform: uppercase;
}

.deatailsHeader {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    padding: 20px 0px;
}

.deatailsHeader p {
    padding: 0px 20px;
    cursor: pointer;
}

.p1 {
    color: #38872c;
    font-weight: bold;
}

.deatailsContent1 {
    padding: 0px 50px;
}

.deatailsContent1 h2 {
    padding: 10px 0px;
}

.table {
    display: flex;
    justify-content: center;
}

#table {
    border-collapse: collapse;
    width: 90%;
}

#table td,
#table th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

#table tr:nth-child(even) {
    background-color: #f2f2f2;
}

#table tr:hover {
    background-color: #ddd;
}


/* RESPONSIVE */

@media only screen and (max-width: 900px) {
    .productMain {
        flex-direction: column;
        align-items: center;
    }

    .productImage,
    .productContent {
        width: 95% !important;
        margin-left: 0px;
    }
}

@media only screen and (max-width: 500px) {
    .productContent {
        padding: 0px 10px;
    }

    .pTitle {
        font-size: 20px;
        margin: 20px 0px 0px 0px;
    }

    .deatailsHeader {
        flex-direction: column;
        align-items: center;
    }

    .size {
        display: flex;
        flex-direction: column;
    }

    .size p {
        width: 65%;
        margin-right: 0px;
        padding: 4px;
    }

    .productContent button {
        padding: 6px 20px;
        font-size: 16px;
    }

    .deatailsContent1 {
        padding: 25px;
    }
}

@media only screen and (max-width: 350px) {
    .smallImage img {
        width: 80px;
    }
}
</style>