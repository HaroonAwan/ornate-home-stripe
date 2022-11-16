<template>
    <div>
        <div class="aboutHeader">
            <h2>Garden Tools</h2>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/gardenTools"> > Garden Tools
                    </router-link>
                </p>
            </div>
        </div>

        <div class="headerTitle">
            <h2>Garden <span style="color: #38872C; font-weight: 700;">Tools</span> </h2>

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

                <div class="topContent-1">
                    <div @click="weedRemover" class="topBox-4 weedRemover">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>Garden Weed Remover Tool Portable Gap Weeder</h2>
                        <p>$40.00</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
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
        weedRemover() {
            this.$router.push("/weedRemover")
        }
    }
}
</script>

<style>
.powergarden {
    background-image: url("../../assets/images/gardenTools/powergarden/300-1.jpg");
}

.powergarden:hover {
    background-image: url("../../assets/images/gardenTools/powergarden/300-2.jpg");
}

.teethTrimmer {
    background-image: url("../../assets/images/gardenTools/teethtremer/300-1.jpg");
}

.teethTrimmer:hover {
    background-image: url("../../assets/images/gardenTools/teethtremer/300-2.jpg");
}

.grassTrimmer {
    background-image: url("../../assets/images/gardenTools/grasstrimmer/300-1.jpg");
}

.grassTrimmer:hover {
    background-image: url("../../assets/images/gardenTools/grasstrimmer/300-2.jpg");
}

.spraNozzle {
    background-image: url("../../assets/images/gardenTools/spraynozzle/1.jpg");
}

.spraNozzle:hover {
    background-image: url("../../assets/images/gardenTools/spraynozzle//2.jpeg");
}

.weedRemover {
    background-image: url("../../assets/images/gardenTools/weedRemover/300-1.jpg");
}

.weedRemover:hover {
    background-image: url("../../assets/images/gardenTools/weedRemover/300-2.jpg");
}
</style>