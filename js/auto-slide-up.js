 //添加offset类
 let specialTags = document.querySelectorAll('[data-x]')
 for (let i = 0; i < specialTags.length; i++) {
   specialTags[i].classList.add('offset')
 } 

 findClosestAndRemoveOffset()
 window.addEventListener('scroll', function (x) {
 findClosestAndRemoveOffset()
 })

 

 /* 帮助方法 */
 function findClosestAndRemoveOffset(){
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    //找到最小的数
    for (let i = 0; i < specialTags.length; i++) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i
      }
    }
    //minIndex 就是离窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for (let i = 0; i < brothersAndMe.length; i++) {
      brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
  //a标签事件监听


  let liTags = document.querySelectorAll('nav.menu > ul > li')
  //遍历哈希
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      x.currentTarget.classList.add('active')//我们监听的那个元素
      //找兄弟↓
      /*  let brother = li.getElementsByTagName('ul')[0]
         brother.classList.add('active') */
    }
    liTags[i].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active')//我们监听的那个元素
      //找兄弟↓
      /* let brother = li.getElementsByTagName('ul')[0]
      brother.classList.remove('active') */
    }
  }