<template>
    <div>
        <div class="aboutHeader">
            <h2>Plants & Seeds</h2>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/plants"> > Plants & Seeds
                    </router-link>
                </p>
            </div>
        </div>

        <div class="headerTitle">
            <h2>Plants <span style="color: #38872C; font-weight: 700;">Seeds</span> </h2>

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

                    <div @click="succulents10x" class="topBox-1 succulents10x">
                        <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                        <h2>SUCCULENTS 10 x succulent cuttings, freshly cut – No repeat cuttings</h2>
                        <p> $30.00 </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        succulents() {
            this.$router.push("/succulents")
        },
        succulents10x() {
            this.$router.push("/succulents10x")
        }
    }
}
</script>

<style>
.succulents {
    background-image: url("../../assets/images/plants/succulent/300-1.jpg");
}

.succulents:hover {
    background-image: url("../../assets/images/plants/succulent/300-2.jpg");
}

.succulents10x {
    background-image: url("../../assets/images/plants/succulents10x/300-1.jpg");
}

.succulents10x:hover {
    background-image: url("../../assets/images/plants/succulents10x/300-2.jpg");
}
</style>