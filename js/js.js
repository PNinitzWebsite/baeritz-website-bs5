//////////F12 disable code////////////////////////
document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
       //alert('No F-12');
        return false;
    }
    else if (event.keyCode == 17) {
       //alert('No Ctrl');
        return false;}
    else if (event.keyCode == 85) {
       //alert('No U');
        return false;}
}
document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        //alert('No F-keys');
        return false;
    }
    else if (event.keyCode == 17) {
       //alert('No Ctrl');
        return false;}
    else if (event.keyCode == 85) {
       //alert('No U');
        return false;}
}
document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        //alert('No F-keys');
        return false;
    }
    else if (event.keyCode == 17) {
       //alert('No Ctrl');
        return false;}
    else if (event.keyCode == 85) {
       //alert('No U');
        return false;}
}
/////////////////////end///////////////////////