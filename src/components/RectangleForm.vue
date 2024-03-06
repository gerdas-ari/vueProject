<template>
    <div class="mt15 d-flex wrap container flex-column align-items-center justify-content-center">
            
        <div 
            class="rectangle" 
            :style="{ width: rectWidth + 'px', height: rectHeight + 'px' }"
            ref="rect"
            @click.self="getCoords"
        >
            <TransitionGroup name="list">
                <div
                    v-for="el in items"
                    :key="el"
                    class="that_rect"
                    :style="{ top: el.top + 'px', left: el.left + 'px' }"
                    @click="removeElement(el)"
                >
                </div>
            </TransitionGroup>
        </div>

        <button
            class="delete_btn"
            @click.prevent="deleteBtns"
        >
            удоли
        </button>
        
        <p>По горизонтали: {{ coordX }}</p>
        <p>По вертикали: {{ coordY }}</p>

        <div class="form">
            

            <input type="number" name="width" id="width" placeholder="Ширина" v-model="inputWidth">


            <input type="number" name="height" id="height" placeholder="Высота" v-model="inputHeight">
            <button type="submit" @click="applyChanges()" :disabled="isDisabled" >Применить</button>

            
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                rectWidth: 600,
                rectHeight: 200,
                inputWidth: 0,
                inputHeight: 0,
                coordX: 0,
                coordY: 0,
                items: []
            }
        },
        computed: {
            isDisabled() {  
                // Можно заменить этой одной строчкой
                return this.inputWidth < 0 || this.inputHeight < 0 || !this.inputWidth ^ 0 || !this.inputHeight ^ 0
            },
        },
        methods: {
            applyChanges() {  
                this.rectWidth = this.inputWidth;
                this.rectHeight = this.inputHeight;
            },
            getCoords(event) {
                this.coordX = event.offsetX;
                this.coordY = event.offsetY;

                this.items.push({
                    id: Date.now(),
                    top: this.coordY,
                    left: this.coordX,
                });
            },

            removeElement(element) {
              this.items = this.items.filter((item) => item.id !== element.id)
            },

            deleteBtns() {
                let func = setInterval(() => {
                    if(this.items.length) {
                        this.items = this.items.slice(0, this.items.length - 1);

                    } else {
                        clearInterval(func);
                    }
                }, 500);               
            }
        }
    }
</script>

<style scoped lang="scss">

    .rectangle {
        width: 600px;
        height: 200px;
        background-color: cadetblue;
        margin-bottom: 40px;

        position: relative;
        top: 0;
        left: 0;
    }

    .that_rect {
        width: 30px;
        height: 30px;
        background-color: #fff;
        position: absolute;
        z-index: 2;
        //pointer-events: none;

        &.hidden {
            opacity: 0;
        }
    }

    .delete_btn {
        margin-bottom: 20px;
    }

    .list-enter-active,
    .list-leave-active {
        transition: all .4s;
    }

    
    .list-leave-to {
        border-radius: 50%;
        transform: scale(1.6);
    }

</style>