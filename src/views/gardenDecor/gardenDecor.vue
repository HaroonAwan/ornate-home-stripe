<template>
    <div>
        <div class="aboutHeader">
            <h2>Garden Decor</h2>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/gardenDecor"> > Garden decor
                    </router-link>
                </p>
            </div>
        </div>

        <div class="headerTitle">
            <h2>Garden <span style="color: #38872C; font-weight: 700;">Decor</span> </h2>

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

                    <div @click="ledSolar" class="topBox-4 ledOutdoor">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>4X LED Solar Lights Outdoor Garden Decoration Garden/Pathway</h2>
                        <p>$35.00</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
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
        ledSolar() {
            this.$router.push("/ledSolar")
        }
    }
}
</script>

<style>
.lightHouse {
    background-image: url("../../assets/images/gardenDecor/lighthouse/100-1.jpg");
}

.lightHouse:hover {
    background-image: url("../../assets/images/gardenDecor/lighthouse/100-2.jpg");
}

.dierya {
    background-image: url("../../assets/images/gardenDecor/dierya/800-1.jpg");
}

.dierya:hover {
    background-image: url("../../assets/images/gardenDecor/dierya/800-2.jpg");
}

.owl {
    background-image: url("../../assets/images/gardenDecor/owl/100-1.jpg");
}

.owl:hover {
    background-image: url("../../assets/images/gardenDecor//owl/100-2.jpg");
}

.ledOutdoor {
    background-image: url("../../assets/images/gardenDecor/ledSolar/1.jpg");
}

.ledOutdoor:hover {
    background-image: url("../../assets/images/gardenDecor/ledSolar/2.jpeg");
}
</style>