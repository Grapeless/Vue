export default {
    install(Vue) {
        console.log('@@')

        Vue.filter('mySlice', function (value) {
            return value.slice(0, 1)
        })

        Vue.directive('f-bind', {
            bind(el, binding) {
                el.value = binding.value
            },
            inserted(el, binding) {
                el.focus()
            },
            update(el, binding) {
                el.value = binding.value
            }
        })

        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })
    }
}