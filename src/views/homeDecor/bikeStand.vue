<template>
    <div>
        <div class="aboutHeader">
            <h3>Bike Stand Bicycle Rack Storage Floor Parking Holder</h3>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/homeDecor"> > Home Decor
                    </router-link>
                    <router-link to="/bikeStand" style="text-decoration: none; color: black;">
                        > Bike Stand Bicycle Rack Storage Floor Parking Holder
                    </router-link>
                </p>
            </div>
        </div>

        <div class="productMain">
            <div class="productImage">
                <carousel :per-page="1">
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/bikestand/800-1.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/bikestand/800-2.jpg" alt="">
                    </slide>
                    <slide>
                        <img style="width: 100%;" src="../../assets/images/homeDecor/bikestand/800-3.jpg" alt="">
                    </slide>
                </carousel>
            </div>

            <div class="productContent">
                <h2 class="pTitle">1-3 Bike Stand Bicycle Rack Storage Floor Parking Holder</h2>
                <h2 style="color: #38872C;">$55.00</h2>
                <p>Material: Steel with powder coating</p>
                <p>Capacity: 1-3 bikes</p>
                <p>Dimensions: 710x280x270mm</p>
                <p>Tube Diameter: 15MM</p>
                <p>Weight: 4.2KG approximately</p>
                <p>Package Contents:</p>
                <p>1x Bike Parking Stand</p>
                <p>1x Assembly Ki</p>
                <p style="color: #38872C;">32 in stock</p>
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
            <h2>Portable Bike Parking Rack- Black</h2>
            <p>The bike parking rack can securely store up to three bikes side by side and is entirely freestanding.
                Additionally, the stand can be reconfigured into any vairation of three and can be installed in numerous
                locations. The bike rack is constructed with high quality powder coated steel with a smooth finish to
                prevent scratches.</p>

            <p style="font-size: 24px; color: black;">Features:</p>
            <p>Separable into different bike stand configuration</p>
            <p>Sturdy steel construction</p>
            <p>Powder coated steel</p>
            <p>Floor screws and plugs</p>
            <p>Smooth finish</p>
            <p>Easy to install</p>

            <p style="font-size: 24px; color: black;">Specifications:</p>
            <p>Material: Steel with powder coating</p>
            <p>Capacity: 1-3 bikes</p>
            <p>Dimensions: 710x280x270mm</p>
            <p>Tube Diameter: 15MM</p>
            <p>Weight: 4.2KG approximately</p>

            <p style="font-size: 24px; color: black;">Package Contents:</p>
            <p>1x Bike Parking Stand</p>
            <p>1x Assembly Kit</p>
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
            count: 1,
            carts: {},
            stripeCarts: [],
            stripeDCarts: [],
            error: false,
        }
    },
    methods: {
        nightStar() {
            this.$router.push("/nightStar")
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
        addToCart() {
            const product = {
                id: 'bikeStand',
                productTitle: "1-3 Bike Stand Bicycle Rack Storage Floor Parking Holder Cycling Portable Stands",
                price: 55.00,
                quantity: this.count,
                subTotal: (this.count * 55.00),
                color: this.color,
            }

            const stripeProduct = {
                price: 'price_1LXOyjJwluYHHjdaneaOKdIi',
                quantity: this.count
            }

            const stripeDProduct = {
                price: 'price_1LaZUGJwluYHHjdajrntDiLn',
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