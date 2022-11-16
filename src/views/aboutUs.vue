<template>
    <div>
        <div class="aboutHeader">
            <h2>About Us</h2>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/aboutUs"> > About Us</router-link>
                </p>
            </div>
        </div>

        <div class="aboutMain">
            <div class="aboutMain-content">
                <h2>The splendour of an ornate home is that you'll locate all your lawn desires in a single location.
                </h2>
                <p>Australia’s most beautiful lawn and Home decor company and provider of lawn products, Ornate Home
                    leads the way in supporting our clients to create lovely gardens.
                    From our lawn to your door, our easy-to-apply ordering products take all of the fuss out of making
                    plans for your lawn.
                </p>
            </div>
            <div class="aboutMain-img">
                <!-- <img width="100px" src="../assets/images/placeholder.png" alt="image"> -->
            </div>
        </div>
    </div>
</template>


<style>
.aboutHeader {
    display: flex;
    justify-content: space-between;
    padding: 30px 60px;
    background-color: #f5f5f5;
}

.aboutMain {
    display: flex;
    padding: 0px 100px;
}

.aboutMain-content {
    width: 50%;
    padding: 80px 10px;
}

.aboutMain-content h2 {
    font-size: 20px;
}

.aboutMain-content p {
    margin-top: 40px;
}

.aboutMain-img {
    width: 50%;
    padding: 20px 10px;
}

.aboutMain-img img {
    width: 100%;
}


/* RESPONSIVE */
@media only screen and (max-width: 1000px) {
    .aboutMain {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
    }

    .aboutMain-content,
    .aboutMain-img {
        width: 80%;
    }

    .aboutMain-img {
        order: -1;
    }
}

@media only screen and (max-width: 600px) {
    .aboutHeader {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    .aboutHeader-link {
        margin-top: 20px;
    }
}

@media only screen and (max-width: 600px) {

    .aboutMain-content,
    .aboutMain-img {
        width: 90%;
    }

    .aboutMain-content p {
        font-size: 10px;
        margin-top: 10px;
        margin-bottom: -50px;
    }

    .aboutMain-content h2 {
        margin-top: -80px;
        font-size: 15px;
    }
}
</style>