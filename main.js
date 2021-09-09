var images = ["https://image.pngaaa.com/93/1309093-middle.png","https://www.nicepng.com/png/detail/90-905390_dad-cartoon-dad-png.png", "https://vetstreet.brightspotcdn.com/dims4/default/39ad128/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fea%2F7bba50a33b11e087a80050568d634f%2Ffile%2FJapanese-Bobtail-3-645mk062211.jpg" , "https://media.istockphoto.com/photos/happy-to-be-in-class-picture-id1132025673?k=20&m=1132025673&s=612x612&w=0&h=_J9Bawy3K5ExWNGfXubZh6ih00kawzgh_gVsv2YvGQY="];
var names = ["Fmaily Book","Mom(Mariuska Figueras)", "Dad(Angel Castellanos)", "Cat(Luna)", "Me(Arturo Castellanos)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
