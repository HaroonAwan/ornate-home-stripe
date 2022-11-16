<template>
    <div>
        <div class="aboutHeader">
            <h3>4X LED Solar Lights Outdoor Garden Decoration Garden/Pathway</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/gardenDecor"> > Garden Decor
                    </router-link>
                    <router-link to="/ledSolar" style="text-decoration: none; color: black;">
                        > 4X LED Solar Lights Outdoor Garden Decoration Garden/Pathway
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/ledSolar/v1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/ledSolar/v2.jpeg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenDecor/ledSolar/v3.jpeg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">4X LED Solar Lights Outdoor Garden Decoration Garden/Pathway</h2>
                <h2 style="color: #38872C;">$35.00</h2>
                <p>Material: Plastic</p>
                <p>Power: Solar</p>
                <p>Light Color: warm white/cool white</p>
                <p>Rechargeable Battery: AAA Ni-MH battery</p>
                <p>Dimensions: 2.32×2.32×11 inches (L x W x H)</p>
                <p>Charging Time: 6-8 hours (when getting enough sunlight)</p>
                <p>Working Time: 8-10 hours</p>
                <h4>Color:</h4>
                <div class="size">
                    <p :class="{ activeSize: sizeClass }" @click="color1()">Cold White</p>
                    <p :class="{ activeSize: !sizeClass }" @click="color2()">Warm White</p>
                </div>
                <p style="color: #38872C;">28 in stock</p>
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
            <p>Material: Plastic</p>
            <p>Power: Solar</p>
            <p>Light Color: warm white/cool white</p>
            <p>Rechargeable Battery: AAA Ni-MH battery</p>
            <p>Dimensions: 2.32×2.32×11 inches (L x W x H)</p>
            <p>Charging Time: 6-8 hours (when getting enough sunlight)</p>
            <p>Working Time: 8-10 hours</p>

            <h2>Note :</h2>
            <p>1. Please noted that as a solar powered product, the working time is weather sensitive.</p>
            <p>2. Please make sure to turn on the switch before use.</p>
            <p>3. Install the solar light in a location with full, direct sunlight.</p>

            <h2>Packing list:</h2>
            <p>Package Included: 4x Solar Garden Lights</p>
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
            price: 35,
            color: 'cold white',
            sizeClass: true,
            count: 1,
            carts: [],
            stripeCarts: [],
            stripeDCarts: [],
            error: false,
        }
    },
    methods: {
        lightHouse() {
            this.$router.push("/lightHouse")
        },
        dierya() {
            this.$router.push("/dierya")
        },
        owl() {
            this.$router.push("/owl")
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
                id: 'ledSolar',
                productTitle: "4X LED Solar Lights Outdoor Garden Decoration Garden/Pathway",
                price: this.price,
                color: this.color,
                quantity: this.count,
                subTotal: (this.count * this.price),
            }

            const stripeProduct = {
                price: 'price_1LXP9qJwluYHHjdaVGmXk65X',
                quantity: this.count
            }

            const stripeDProduct = {
                price: 'price_1LaIkIJwluYHHjdaKbhfFXXU',
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
        color1() {
            this.color = 'cold white'
            this.sizeClass = true
        },
        color2() {
            this.color = 'warm white'
            this.sizeClass = false
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