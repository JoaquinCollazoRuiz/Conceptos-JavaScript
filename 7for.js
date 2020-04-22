for (var i=1; i<=10; i++){

    if(i==1){
        console.log("***1")
    }else if(i == 3){
        continue;
    }
    else if (i == 5){
        break;
    }
    console.log("Valor de i -> " + i)
}