<template>  
    
    <div class="mt15 row wrap__row justify-content-center">
        <button class="col-12 col-md-4" @click="minus">-</button>
        <div class="number col-auto ">{{ initNum }}</div>
        <button class="col-12 col-md-4" @click="plus">+</button>
    </div>

</template>

<script>
    
    export default {
        data() {
            return {
                initNum: 0
            }
        },
        methods: {
            minus() {
                if (this.initNum == 0) {
                    return
                } else {
                    this.initNum--;
                }
            },
            plus() {
                
                this.initNum++;
                
            }
        }
    }
</script>


<style scoped>
    .wrap {
        display: flex;
        width: 100vw;
        min-height: 30vh;
    }

    .wrap__row {
        min-width: 20em;
    }

    .number {
        font-weight: 400;
        font-size: 20px;

        margin: 0 1em;
    }
</style>

