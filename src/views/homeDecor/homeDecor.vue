<template>
    <div>
        <div class="aboutHeader">
            <h2>Home Decor</h2>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/homeDecor"> > Home decor
                    </router-link>
                </p>
            </div>
        </div>

        <div class="headerTitle">
            <h2>Home <span style="color: #38872C; font-weight: 700;">Decor</span> </h2>

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

                <div class="topContent-1">
                    <div @click="woodStand" class="topBox-3 woodStand">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>2PCS Solar LED Light Outdoor Wall Lamp Garden Light</h2>
                        <p>$20.00 - $35.00</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
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
        woodStand() {
            this.$router.push("/woodStand")
        },
    }
}
</script>

<style>
.nightStar {
    background-image: url("../../assets/images/homeDecor/nightstar/300-1.jpg");
}

.nightStar:hover {
    background-image: url("../../assets/images/homeDecor/nightstar/300-2.jpg");
}

.bikeStand {
    background-image: url("../../assets/images/homeDecor/bikestand/300-1.jpg");
}

.bikeStand:hover {
    background-image: url("../../assets/images/homeDecor/bikestand/300-2.jpg");
}

.rgb {
    background-image: url("../../assets/images/homeDecor/rgb/01.jpeg");
}

.rgb:hover {
    background-image: url("../../assets/images/homeDecor/rgb/02.jpeg");
}

.wallLamp {
    background-image: url("../../assets/images/homeDecor/wallLamp/300-1.jpg");
}

.wallLamp:hover {
    background-image: url("../../assets/images/homeDecor/wallLamp/300-2.jpg");
}

.woodStand {
    background-image: url("../../assets/images/homeDecor/woodStand/300-1.jpg");
}

.woodStand:hover {
    background-image: url("../../assets/images/homeDecor/woodStand/300-2.jpg");
}
</style>