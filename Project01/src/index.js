//点击搜索按钮显示搜索框
const searchButton = document.querySelector('header nav div:nth-child(3)')
const searchBox = document.querySelector('.search-items')
searchButton.addEventListener('click', function () {
    //切换按钮选中状态
    searchButton.classList.toggle('active')
    //切换搜索框的显示模式
    searchBox.classList.toggle('active')
    //隐藏筛选菜单
    searchList.classList.remove('active')
})
//点击筛选弹出详细筛选菜单
const button = document.querySelector('.search-items div')
const searchList = document.querySelector('.search-list')
button.addEventListener('click', function () {
    //切换筛选菜单显示模式
    searchList.classList.toggle('active')
})

import './css/index.css'