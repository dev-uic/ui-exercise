var selectors = {
  sideBar: $('.sidebar'),
  sideBarTrigger: $('.js-sidebar-trigger')  
}

var classes = {
  hide: 'js-hide'
}

selectors.sideBarTrigger.on('click', function () {
  selectors.sideBar.toggleClass(classes.hide);
})