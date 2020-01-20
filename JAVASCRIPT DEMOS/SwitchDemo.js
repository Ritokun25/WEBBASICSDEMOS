var d= new Date();
var day=d.getDay()
switch(day)
{
    case 5:
    document.write("<b>Friday</b>");
    break;
    case 6:
    document.write("<b>Saturday</b>");
    break;
    case 0:
    document.write("<b>Sunday</b>");
    break;
    default :
    document.write("<b> Default case<b>");

}