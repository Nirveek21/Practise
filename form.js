function checkforblank() {

    var c=0

    if (document.getElementById('fna').value == "") {
        document.getElementById('fna').style.borderColor = "red";
        document.getElementById('a').style.display= "block";
        console.log(1);
        c++;
    }


    if (document.getElementById('dob').value == "") {
        document.getElementById('dob').style.borderColor = "red";
        document.getElementById('a1').style.display= "block";
        console.log(2);
        c++;
    }

    if (document.getElementById('ema').value == "") {
        document.getElementById('ema').style.borderColor = "red";
        document.getElementById('a2').style.display= "block";
        console.log(3);
        c++;
    }

    if (document.getElementById('mob').value == "") {
        document.getElementById('mob').style.borderColor = "red";
        document.getElementById('a3').style.display= "block";
        console.log(4);
        c++;
    }
      if (document.getElementById('mob').value.match(/^[0-9]{10}$/) == null) {
        document.getElementById('mob').style.borderColor = "red";
        document.getElementById('a4').style.display= "block";
        console.log(4);
        c++;
    }
    if(c>0){
        return false;
    }
    
}
