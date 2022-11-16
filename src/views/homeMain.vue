<template>
    <div style="padding-bottom: 50px;">
        <div class="homeHero">
            <!-- <h2>AS WE EVOLVE, <br> OUR HOME SHOULD TOO</h2> -->
        </div>


        <div class="headerTitle">
            <h2>FEATURED <span style="color: #38872C; font-weight: 700;">CATEGORIES</span> </h2>

            <div class="hr">
                <hr style="border: 2px solid green; width: 3px; ">
                <hr style="border: 2px solid green; width: 3px; ">
                <hr style="border: 2px solid green; width: 3px; ">
                <hr style="border: 2px solid green; width: 100px;">
            </div>
        </div>

        <div class="fcategories">
            <div class="fcategories-boxes">
                <div class="fcategories-1">
                    <div class="fcategories-hDecor">
                        <router-link to="/homeDecor">
                            <img src="../assets/images/homeDecor/main.png" alt="image">
                        </router-link>
                        <router-link to="/homeDecor">
                            <h4>Home Decor</h4>
                        </router-link>
                    </div>

                    <div class="fcategories-gTools">
                        <router-link to="/gardenTools">
                            <img src="../assets/images/gardenTools/main.png" alt="image">
                        </router-link>
                        <router-link to="/gardenTools">
                            <h4>Garden Tools</h4>
                        </router-link>
                    </div>
                </div>

                <div class="fcategories-2">
                    <div class="fcategories-gDecor">
                        <router-link to="/gardenDecor">
                            <img src="../assets/images/gardenDecor/main.png" alt="image">
                        </router-link>
                        <router-link to="/gardenDecor">
                            <h4>Garden Decor</h4>
                        </router-link>
                    </div>

                    <div class="fcategories-plants">
                        <router-link to="/plants">
                            <img src="../assets/images/plants/main.png" alt="image">
                        </router-link>
                        <router-link to="/plants">
                            <h4>Plants & Seeds</h4>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="headerTitle">
            <h2>TOP <span style="color: #38872C; font-weight: 700;">INTERESTING</span> </h2>

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
                    <div class="top-01">
                        <div @click="powergarden" class="topBox-1 powergarden">
                            <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                            <h2>Power Garden Spiral Auger Earth Drill Bit Post Hole Digger Tool</h2>
                            <p>$30.00 – $40.00</p>
                        </div>

                        <div @click="teethTrimmer" class="topBox-2 teethTrimmer">
                            <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                            <h2>6 Teeth Trimmer Head Grass Steel Blades Brush Cutter</h2>
                            <p><span>$54.55</span> $44.99</p>
                        </div>
                    </div>

                    <div class="top-02">
                        <div @click="grassTrimmer" class="topBox-3 grassTrimmer">
                            <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                            <h2>Grass Trimmer Head Brush Cutter Steel Garden Tools</h2>
                            <p>$30.00 – $40.00</p>
                        </div>

                        <div @click="nightStar" class="topBox-4 nightStar">
                            <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                            <h2>New LED Night Star Sky Projector Light Lamp</h2>
                            <p> <span>$50.00</span> $30.00 </p>
                        </div>
                    </div>
                </div>

                <div class="topContent-2">
                    <div class="top-03">
                        <div @click="lightHouse" class="topBox-5 lightHouse">
                            <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                            <h2>Lighthouse Decorative Light Indoor Outdoor Solar Powered Patio Garden Art Lawn</h2>
                            <p>$55.00</p>
                        </div>

                        <div @click="dierya" class="topBox-6 dierya">
                            <h4 style="background-color: #38872C; padding-left: 30px;">In Stock</h4>
                            <h2>Dierya Outdoor Solar Powered Floating Bird Bath Water Fountain Pump Garden Pond </h2>
                            <p>$30.00</p>
                        </div>
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
            this.$router.push("/powerGarden")
        },
        teethTrimmer() {
            this.$router.push("/teethTrimmer")
        },
        grassTrimmer() {
            this.$router.push("/grassTrimmer")
        },
        nightStar() {
            this.$router.push("/nightStar")
        },
        lightHouse() {
            this.$router.push("/lightHouse")
        },
        dierya() {
            this.$router.push("/dierya")
        }
    }
}
</script>

<style>
.homeHero {
    display: flex;
    align-items: center;
    width: 100%;
    height: 300px;
    background-attachment: fixed;
    background-size: cover;
    background-image: url("../assets/images/loww.jpg");
}

.homeHero h2 {
    font-family: "Caveat", Sans-serif;
    color: white;
    margin-left: 10%;
    font-size: 40px;
    line-height: 40px;
}

.headerTitle {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.headerTitle h2 {
    font-weight: 300;
    font-size: 30px;
}

.hr {
    display: flex;
    margin-top: 15px;
}

.hr hr {
    border-radius: 5px;
    margin: 0px 5px;
}

.fcategories-boxes {
    display: flex;
    justify-content: center;
}

.fcategories-1,
.fcategories-2 {
    display: flex;
}

.fcategories-hDecor,
.fcategories-gTools,
.fcategories-gDecor,
.fcategories-plants {
    position: relative;
    margin: 50px 10px 0px 10px;
    height: 300px;
    background-size: cover;
    cursor: pointer;
    overflow: hidden;
}

.fcategories-hDecor img,
.fcategories-gTools img,
.fcategories-gDecor img,
.fcategories-plants img {
    transition: transform .5s ease;
    width: 100%;
    height: 100%;
}

.fcategories-hDecor:hover img,
.fcategories-gTools:hover img,
.fcategories-gDecor:hover img,
.fcategories-plants:hover img {
    transform: scale(1.5);
}

.fcategories-hDecor h4,
.fcategories-gTools h4,
.fcategories-gDecor h4,
.fcategories-plants h4 {
    position: absolute;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #38872C;
    color: white;
    margin: 0px 14px;
    padding: 4px 0px;
    font-weight: 400;
    margin-top: -70px;
}

.top {
    margin-top: 50px;
}

.topContent-1,
.topContent-2 {
    display: flex;
    justify-content: center;
    margin: 0px 40px;
    margin-top: 15px;
}

.top-01,
.top-02,
.top-03 {
    display: flex;
}

.top-03 {
    margin-top: 30px;
}

.topBox-1,
.topBox-2,
.topBox-3,
.topBox-4,
.topBox-5,
.topBox-6 {
    margin: 0px 10px;
    margin-top: 40px;
    height: 420px;
    cursor: pointer;
    width: 300px;
}

.topBox-1 h2,
.topBox-2 h2,
.topBox-3 h2,
.topBox-4 h2,
.topBox-5 h2,
.topBox-6 h2 {
    text-align: center;
    padding: 0px 10px;
    margin-top: 270px;
    font-size: 14px;
    line-height: 20px;
    color: black;
}

.topBox-1 h4,
.topBox-2 h4,
.topBox-3 h4,
.topBox-4 h4,
.topBox-5 h4,
.topBox-6 h4 {
    margin: 20px;
    color: white;
    width: 40%;
    padding: 3px 0px;
}

.topBox-1 h6,
.topBox-2 h6,
.topBox-3 h6,
.topBox-4 h6,
.topBox-5 h6,
.topBox-6 h6 {
    display: none;
}

.topBox-1:hover h6,
.topBox-2:hover h6,
.topBox-3:hover h6,
.topBox-4:hover h6,
.topBox-5:hover h6,
.topBox-6:hover h6 {
    position: absolute;
    display: block;
    font-size: 15px;
    margin-top: 201px;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 6px 70px;
    color: white;
    margin-left: 40px;
    text-align: center;
}

.topBox-1 h6:hover,
.topBox-2 h6:hover,
.topBox-3 h6:hover,
.topBox-4 h6:hover,
.topBox-5 h6:hover,
.topBox-6 h6:hover {
    background-color: black;
}

.topBox-1 p,
.topBox-2 p,
.topBox-3 p,
.topBox-4 p,
.topBox-5 p,
.topBox-6 p {
    margin-top: 20px;
    text-align: center;
    color: #44c4ac;
}

.topBox-1 p span,
.topBox-2 p span,
.topBox-3 p span,
.topBox-4 p span,
.topBox-5 p span,
.topBox-6 p span {
    color: #666;
    font-size: 13px;
    text-decoration: line-through;
}


/* RESPONSIVE */

@media only screen and (max-width: 1200px) {

    .topContent-1,
    .topContent-2 {
        flex-direction: column;
        align-items: center;
    }

}

@media only screen and (max-width: 900px) {

    .fcategories-1,
    .fcategories-2 {
        flex-direction: column;
    }
}

@media only screen and (max-width: 730px) {
    .fcategories-boxes {
        flex-direction: column;
        align-items: center;
    }

    .top-01,
    .top-02,
    .top-03 {
        flex-direction: column;
    }
}

@media only screen and (max-width: 390px) {

    .headerTitle h2 {
        font-size: 20px;
    }

}
</style>