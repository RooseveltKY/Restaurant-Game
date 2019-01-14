var xmlhttp= new XMLHttpRequest();

xmlhttp.onreadystatechange= function() {
  if (this.readyState==4 && this.status== 200) {
    var mydata= JSON.parse(this.responseText);
  }
};

xmlhttp.open("GET", "sample.json",true);
xmlhttp.send();