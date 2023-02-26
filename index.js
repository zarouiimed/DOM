function total(){
    q=document.getElementById("n1").value ;
    q1=document.getElementById("n2").value ;
    q2=document.getElementById("n3").value ;
    q3=document.getElementById("n4").value ;
    p=Number(document.getElementById("t1").value) ;
    p1=Number(document.getElementById("t2").value) ;
    p2=Number(document.getElementById("t3").value) ;
    p3=Number(document.getElementById("t4").value) ;
    tot=0 ;
    if(q<0 || q1<0 || q2<0 || q3<0){
        alert("quantity should be positive!") ;
        return false ;
    }
    else{
        document.getElementById("b1").style.borderColor="green" ;
        tot=(p*q)+(p1*q1)+(p2*q2)+(p3*q3) ;
        document.getElementById("tot").value=tot ;
    }
}

