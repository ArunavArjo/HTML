function changetext() {
    var heading = document.getElementById
        ('heading')
    heading.textContent = "You have clicked the button"
    var items = document.getElementsByTagName
    ('li')
    for (var  i=0; i < items.length; i++){
        items[i].style.color='blue'
}
}