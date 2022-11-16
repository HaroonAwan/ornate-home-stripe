<template>
    <div>
        <div class="aboutHeader">
            <h3>Pack of 2 Teeth Trimmer Head Grass Steel Blades Brush Cutter</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/gardenTools"> > Garden Tools
                    </router-link>
                    <router-link to="/teethTrimmer" style="text-decoration: none; color: black;">
                        > Teeth Trimmer Head Grass Steel Blades Brush Cutter
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/teethtremer/800-1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/teethtremer/800-2.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/teethtremer/800-3.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/teethtremer/800-4.jpg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">Pack of 2 Teeth Trimmer Head Grass Steel Blades Brush Cutter</h2>
                <h2 style="color: #38872C;"> <span
                        style="color: grey; font-size: 16px; padding: 0px 6px; text-decoration: line-through; text-transform: 100;">$54.55</span>
                    $44.99</h2>
                <p>Material: Manganese Steel</p>
                <p>Color: Red & Black</p>
                <p>Mounting Hole Diameter: Approx. 25.4mm/1inch</p>
                <p>Diameter: Approx. 110mm/4inch</p>
                <p>Height: Approx. 60mm/2.36inch</p>
                <p style="color: #38872C;">53 in stock</p>
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
        </div>

        <div class="deatailsContent1" v-show="deatails1">
            <p>Durable material: 6 teeth steel cutters with nice blades can help you remove grass faster, 65Mn insert
                has durable material with hardness,toughness, abrasion resistant, it is suitable for garden or
                agricultural use and provides a long life service.</p>
            <p>Easy to use and install: you just need to connect the cutter head to the shaft puncher of the lawn mower,
                the blades can be stretched easily when they meet resistance such as stones, it can help you to meet
                your mowing needs and save your time during busy seasons.</p>
            <p>Suitable applications: the center of this trimmer has a 1 inch hole, which fits many straight shaft
                strimmer, it is suitable for Stihl, Homelite and Husqvarna, it is a practical replacement accessory for
                your trimmer.</p>
            <p>Flexible: In the case of resistance such as stones,the blade can be freely stretched, more evenly cut,
                and more thoroughly weeded.</p>
            <p>Practical & Convenient: 65Mn blade is of high hardness, sharper and more durable. A practical replacement
                accessory for your trimmer. Perfect for cutting thick grass and weeds.</p>
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
            count: 1,
            carts: [],
            stripeCarts: [],
            stripeDCarts: [],
            titleClass: true,
            deatails1: true,
            deatails2: false,
            error: false,
        }
    },
    methods: {
        powergarden() {
            this.$router.push("/powergarden")
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
                id: 'teethTrimmer',
                productTitle: "6 Teeth Trimmer Head Grass Steel Blades Brush Cutter",
                price: 44.99,
                quantity: this.count,
                subTotal: (this.count * 44.99),
            }

            const stripeProduct = {
                price: 'price_1LXP1fJwluYHHjdaiddpVUsv',
                quantity: this.count
            }

            const stripeDProduct = {
                price: 'price_1LaIz5JwluYHHjdaodWJ8fqp',
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