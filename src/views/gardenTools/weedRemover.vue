<template>
    <div>
        <div class="aboutHeader">
            <h3>Garden Weed Remover Tool Portable Gap Weeder</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/gardenTools"> > Garden Tools
                    </router-link>
                    <router-link to="/weedRemover" style="text-decoration: none; color: black;">
                        Garden Weed Remover Tool Portable Gap Weeder
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1" :navigateTo="[this.slideNum]">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/weedRemover/800-1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/weedRemover/800-2.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/gardenTools/weedRemover/800-3.jpg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">Garden Weed Remover Tool Portable Gap Weeder </h2>
                <h2 style="color: #38872C;"> <span
                        style="color: grey; font-size: 16px; padding: 0px 6px; text-decoration: line-through; text-transform: 100;">$44.55</span>
                    $40.00</h2>
                <p>Detachable Weeding Tool</p>
                <p>Material: iron+pp</p>
                <p>Size: as shown</p>
                <p>Packing List: 1*Weeding Tool</p>
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
            <p>1.Adjustable Connector, Easy to Use and Install.A great garden tool for you to clean up the weeds.Can
                easily connect it to any handle you want.</p>
            <p>2.uick weeding in minutes, saving you more time for other entertainment.Can be used in gardens,
                driveways, sidewalks, terraces and other places.</p>
            <p>3.Easy & simple weeding tool that saves your back & knees long handle.The connectors of weeding
                attachments are adjustable,Just twist the screws to adjust and fix it.</p>
            <h4>Specification:</h4>
            <p>Material: Strong Iron</p>
            <p>Product Size: 7.87 x 3.94 x 2.76 inch</p>
            <p>Wheel Diameter Size: 1.97 inch</p>
            <p>Weight: 375 g</p>
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
            price: 40,
            carousel: "",
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
                id: 'weedRemover',
                productTitle: "Garden Weed Remover Tool Portable Gap Weeder",
                price: this.price,
                quantity: this.count,
                subTotal: (this.count * this.price),
            }

            const stripeProduct = {
                price: 'price_1LZHq3JwluYHHjdaAiNRmaXj',
                quantity: this.count
            }

            const stripeDProduct = {
                price: 'price_1LaIONJwluYHHjdajSSRiN4l',
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