$(function(){
    var json = JSON.parse(decodeURIComponent(location.hash.slice(1)));
    console.log(json);
    $('.RYPP').attr('data-ids', json.playlist.join(','));

    $('.RYPP').rypp( 'AIzaSyDmfdow0Soqa6o_Vg-JG2Hcg11Bzrm2Vgk');
})
