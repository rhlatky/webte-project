<template>
    <v-footer app height="auto">
        <v-card class="flex" flat tile>
            <v-card-actions class="blue lighten-3 justify-center">
                <h6>Navštívili ste stránku <strong>{{ numberOfVisits }}</strong> krát</h6>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                numberOfVisits: 0
            }
        },
        mounted: function () {
            this.showVisits()
        },
        methods: {
            showVisits: function showVisits() {

                function setCookie(cname, cvalue, exdays) {
                    var d = new Date();
                    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                    var expires = "expires=" + d.toGMTString();
                    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                }

                function getCookie(cname) {
                    var name = cname + "=";
                    var decodedCookie = decodeURIComponent(document.cookie);
                    var ca = decodedCookie.split(';');
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) === ' ') {
                            c = c.substring(1);
                        }
                        if (c.indexOf(name) === 0) {
                            return c.substring(name.length, c.length);
                        }
                    }
                    return "";
                }

                var numLoads = parseInt(getCookie('pageLoads'));

                if (isNaN(numLoads) || numLoads <= 0) {
                    setCookie('pageLoads', 1);
                } else {
                    setCookie('pageLoads', numLoads + 1);
                }
                this.numberOfVisits = getCookie('pageLoads');
            }
        }
    }
</script>

<style scoped>

</style>
