<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader @getItem="getItem"/>
                <MyList :todoList="todoList"/>
                <MyFooter :todoList="todoList"
                          @setItemState="setItemState"
                          @deleteCompletedItem="deleteCompletedItem"/>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
    name: "App",
    components: {MyFooter, MyList, MyHeader},
    data() {
        return {
            todoList: JSON.parse(localStorage.getItem('todoList')) || []
        }
    },
    methods: {
        getItem(item) {
            this.todoList.unshift(item)
        },
        //将item的checked值真正映射到数组中
        setIsDone(id) {
            this.todoList.forEach(value => {
                if (value.id === id) {
                    value.isDone = !value.isDone
                }
            })
        },
        deleteItem(id) {
            this.todoList = this.todoList.filter(value => {
                return value.id !== id
            })
        },
        //通过左下角checkbox控制全部item的状态
        setItemState(status) {
            this.todoList.forEach(value => value.isDone = status)
        },
        deleteCompletedItem() {
            this.todoList = this.todoList.filter(value => !value.isDone)
        }
    },
    watch: {
        todoList: {
            deep: true,
            handler(newValue) {
                localStorage.setItem('todoList', JSON.stringify(newValue))
            }
        }
    },
    mounted() {
        this.$bus.$on('setIsDone', this.setIsDone)
        this.$bus.$on('deleteItem', this.deleteItem)
    },
    beforeDestroy() {
        this.$bus.$off(['setIsDone', 'deleteItem'])
    }
}
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

</style>