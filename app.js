function display()
{
    var result = Math.random()*(999999-100000)+100000
    var otp= Math.floor(result)
    console.log(otp)
    var name=document.getElementById("input").value
    document.getElementById("output").innerHTML="Dear "+name+" your otp is "+otp
}

