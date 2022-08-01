var me = prompt("Enter Your Mark");
parseInt(me)

if (80 <= me) {
    document.getElementById("result").innerHTML = "A+";
}

else if (50 <= me) {
    document.getElementById("result").innerHTML = "C";
}
    
else if (33 <= me) {
    document.getElementById("result").innerHTML = "D";
}
else if (32 >= me) {
    document.getElementById("result").innerHTML = "F";
}
    
