import {onMounted, onUnmounted, ref} from "vue";

export default function () {
    const x = ref()
    const y = ref()

    function getPoint(e) {

        y.value = e.pageY
        x.value = e.pageX
        console.log(x.value, y.value)

    }

    onMounted(() => {
        window.addEventListener('click', getPoint)
        console.log('onMounted')
    })
    onUnmounted(() => {
        window.removeEventListener('click', getPoint)
        console.log('onUnmounted')
    })
    return [x,y]
}
