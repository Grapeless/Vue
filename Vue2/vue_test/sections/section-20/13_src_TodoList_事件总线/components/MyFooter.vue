<template>
    <div class="todo-footer" v-show="all">
        <label>
            <!--<input type="checkbox" @click="setAll" :checked="IsAllCompleted"/>-->
            <input type="checkbox" v-model="IsAllCompleted"/>
        </label>
        <span>
          <span>已完成{{ completed }}</span> / 全部{{ all }}
        </span>
        <button class="btn btn-danger" @click="$emit('deleteCompletedItem')">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: "MyFooter",
    props: ['todoList'],
    computed: {
        completed() {
            return this.todoList.reduce((pre,cur) => pre + (cur.isDone ? 1 : 0), 0)
        },
        all(){
            return this.todoList.length
        },
        IsAllCompleted:{
            get(){
                return this.completed === this.all && this.all > 0
            },
            set(value){
                this.$emit('setItemState',value)
            }
        }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>