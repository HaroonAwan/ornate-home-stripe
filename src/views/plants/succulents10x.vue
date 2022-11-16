<template>
    <div>
        <div class="aboutHeader">
            <h3>SUCCULENTS 10 x succulent cuttings, freshly cut – No repeat cuttings</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/plants"> > plants & Seeds
                    </router-link>
                    <router-link to="/succulents10x" style="text-decoration: none; color: black;">
                        > SUCCULENTS 10 x succulent cuttings, freshly cut – No repeat cuttings
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/plants/succulents10x/800-1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/plants/succulents10x/800-2.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/plants/succulents10x/800-3.jpg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">SUCCULENTS 10 x succulent cuttings, freshly cut – No repeat cuttings</h2>
                <h2 style="color: #38872C;">$30.00</h2>
                <p>MIXED Succulent Cuttings no roots</p>
                <p>Some are full size with roots.</p>
                <p>Some are baby plants.</p>
                <p>Some are freshly cuttings.</p>
                <p>Some cuttings look very similar but they are not repeats.</p>
                <p>Cuttings will grow roots in about one month.</p>
                <p style="color: #38872C;">84 in stock</p>
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
            <p>MIXED Succulent Cuttings no roots</p>
            <p>Some are full size with roots.</p>
            <p>Some are baby plants.</p>
            <p>Some are freshly cuttings.</p>
            <p>Some cuttings look very similar but they are not repeats.</p>
            <p>Cuttings will grow roots in about one month.</p>
            <p>Some of the succulents may looks slightly different to the picture as it is a different season.</p>
            <p>Start a Garden with these excellent cuttings</p>
            <p>There is so much we can do with succulents - small rock garden, hanging basket, pots arrangement,
                Christmas wreath, wall garden and gift ideas etc.</p>
            <p>Some cuttings won't have stems due to the shape of the succulent(push the whole cutting into soil
                while planting).Cuttings show slightly different colors in different seasons.</p>
            <p>All our cuttings grow in outdoor environments so they are a bit of nature imperfections from time to
                time. Over watering or mealybugs can kill succulents. You can kill bugs with alcohol (dab with
                cotton swab) or spray with isopropy (from hardware shops or Bunnings)</p>
            <p>If you are in NT, WA and TAS. please do not purchase as we are unable (due to government regulations)
                to sell to you</p>
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
                    <div @click="succulents" class="topBox-1 succulents">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>SUCCULENTS 20 x succulent cuttings, freshly cut – No repeat cuttings</h2>
                        <p> $40.00 </p>
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
            carousel: "",
            count: 1,
            carts: {},
            stripeCarts: [],
            stripeDCarts: [],
            error: false,
        }
    },
    methods: {
        succulents() {
            this.$router.push("/succulents")
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
                id: 'succulents10x',
                productTitle: "SUCCULENTS 10 x succulent cuttings, freshly cut – No repeat cuttings",
                price: 30.00,
                quantity: this.count,
                subTotal: (this.count * 30.00),
            }

            const stripeProduct = {
                price: 'price_1LY7oAJwluYHHjdaOfMDVfMh',
                quantity: this.count
            }

            const stripeDProduct = {
                price: 'price_1LaIfuJwluYHHjdaTAKlkcGT',
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