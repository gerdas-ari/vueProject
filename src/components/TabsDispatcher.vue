    <template>
        <div class="mt15 wrap container flex-column align-items-center justify-content-center">
            
            <div class="tabs d-flex justify-content-between">
                <button v-for="tab in tabs" class="col tabs__btn" :class="{ 'is-active': currentTab === tab }" @click="currentTab = tab">{{ tab.name }}</button>
            </div>
            <div class="content">
                <div class="content__wrap d-flex" :style=" {'margin-left': '-' + (100 * (currentTab?.id - 1)) + '%' }">
                    <div class="content__info d-flex align-items-center justify-content-center" v-for="tab in tabs" :class="{ 'is-active': currentTab === tab }">

                        {{ tab.tabInfo }}
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
        export default {
            data() {
                return {
                    tabs: [
                        {id: 1, name: 'Пункт 1', tabInfo: 'Содержимое 1'},
                        {id: 2, name: 'Пункт 2', tabInfo: 'Содержимое 2'},
                        {id: 3, name: 'Пункт 3', tabInfo: 'Содержимое 3'},
                        {id: 4, name: 'Пункт 4', tabInfo: 'Содержимое 4'},
                        {id: 5, name: 'Пункт 5', tabInfo: 'Содержимое 5'}
                    ],
                    currentTab: null,
                    currentInfo: null,
                }
            },
            mounted() {
                this.currentTab = this.tabs[0]

            },
            methods: {
            }
        }
    </script>

    <style scoped>

    .tabs__btn {
        border: 1px solid #eee;
        background-color: #eee;
    }
    .tabs__btn.is-active {
        border: 1px solid royalblue;
    }

    .tabs {
        width: 600px;
    }

    .content {
        width: 600px;
        overflow: hidden;
        
    }
    
    .content__wrap {
        transition: all .3s;
    }
    .content__info {
        width: 600px;
        flex: none;

        background-color: aquamarine;
        
    }

    </style>