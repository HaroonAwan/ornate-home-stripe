<template>
    <div>
        <div class="aboutHeader">
            <h2>Track Orders</h2>
            <div class="aboutHeader-link">
                <p>
                    <router-link style="text-decoration: none;" to="/">
                        <v-icon style="margin-top: -4px;"> mdi-home </v-icon>
                    </router-link>
                    <router-link style="text-decoration: none; color: black;" to="/trackOrders"> > Track Orders
                    </router-link>
                </p>
            </div>
        </div>

        <p class="tOrder">To track your order please enter your Order ID in the box below and
            press the "Track"
            button. This was given
            to you on your receipt and in the confirmation email you should have received.</p>


        <div>
            <v-card class="mx-auto pa-10" max-width="1000">

                <div class="headerTitle" style="margin-top: -10px; padding-bottom: 25px;">
                    <h2>Track <span style="color: #38872C; font-weight: 700;">Order</span> </h2>

                    <div class="hr">
                        <hr style="border: 2px solid green; width: 3px; ">
                        <hr style="border: 2px solid green; width: 3px; ">
                        <hr style="border: 2px solid green; width: 3px; ">
                        <hr style="border: 2px solid green; width: 100px;">
                    </div>
                </div>

                <v-form lazy-validation ref="form" @submit.prevent="track">
                    <v-col>
                        <v-text-field :rules="[required()]" label="Order Id" v-model="orderId" required outlined>
                        </v-text-field>
                    </v-col>

                    <v-col>
                        <v-text-field :rules="[required(), email()]" label="Billing Email" v-model="orderEmail" required
                            outlined>
                        </v-text-field>
                    </v-col>

                    <v-col>
                        <v-btn dark style="background-color: #38872C;" type="submit">Track</v-btn>
                    </v-col>
                </v-form>
            </v-card>
        </div>

    </div>
</template>

<script>
import { required, email } from '@/utils/validators';

export default {
    data() {
        return {
            orderId: null,
            orderEmail: null
        }
    },
    methods: {
        email,
        required,

        track() {
            if (this.$refs.form.validate()) {
                console.log("track")
            }
        }

    }
}
</script>

<style>
.tOrder {
    padding: 50px;
}

@media only screen and (max-width: 450px) {
    .tOrder {
        padding: 20px;
    }
}
</style>