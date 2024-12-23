<template>
    <transition appear
                name="animate__animated animate__bounce"
                enter-active-class="animate__backInDown"
                leave-active-class="animate__backOutDown"
                >
        <li>
            <label>
                <input type="checkbox"
                       :checked="todoItem.isDone"
                       @change="$bus.$emit('setIsDone',todoItem.id)"
                >
                <span v-show="!todoItem.isEditable">{{ todoItem.content }}</span>
                <input type="text"
                       v-show="todoItem.isEditable"
                       @blur="setContent($event)"
                       :value="todoItem.content"
                       ref="contentInp">
            </label>
            <button class="btn btn-danger" @click="$bus.$emit('deleteItem',todoItem.id)">删除</button>
            <button class="btn btn-edit" @click="makeEditable" v-show="!todoItem.isEditable">编辑</button>
        </li>
    </transition>
</template>

<script>
import 'animate.css'
export default {
    name: "MyItem",
    props: ['todoItem'],
    methods: {
        //失去焦点时提交数据
        setContent(e) {
            //退出编辑
            this.$bus.$emit('makeReadable', this.todoItem.id)
            //设置内容
            if (e.target.value) {
                this.$bus.$emit('setContent', this.todoItem.id, e.target.value)
            } else {
                return alert('输入内容不能为空！')
            }
        },
        makeEditable() {
            //启用编辑
            this.$bus.$emit('makeEditable', this.todoItem.id)
            //启用编辑成功后(输入框显示后)才获取焦点
            // let a, b
            this.$nextTick(() => {
                // a = this
                this.$refs.contentInp.focus()
            })
            /*this.$nextTick(function () {
                b = this
                this.$refs.contentInp.focus()
            })
            console.log(a === b)*/
        }
    }
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}


</style>