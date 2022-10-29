function Imprimir1al100(){
    /*Primer segmento
      Valores iniciales a las variables en ese segmento
      Segundo segmento
      Condición o condiciones agrupadas con operadores lógicos
      Tercer segmento
      Operaciones de aumento o disminución
    */
   for (i=1;i<=100;i++){//i=i+2 si se quiere avanzar de 3 en 3
        console.log(i);
   }
}
/*Imprimir los numeros múltiplos de 3*/
function ImprimirMultiplos31(){
    for (i=0;i<=100;i+=3){//i=i+3
    console.log(i);
    }
}
function ImprimirMultiplos32(){
    for(i=1;i<=100;i++){
        if(i%3==0)
            console.log(i);
    }
}
/*Imprimir la suma de los números impares, y la suma de los
números pares menor a 50 */
function Ejercicio3M1(){
    par=0;
    impar=0;
    for(i=1;i<=50;i+=2){
        impar+=i;
        par+=i+1;
    }
    console.log(par);
    console.log(impar);
}
function Ejercicio3M2(){
    par=0;
    impar=0;
    for(i=1;i<=50;i++){
        if(i%2==1)impar+=i;
        else par+=i;
    }
    console.log(par);
    console.log(impar);
}
function Ejercicio3W(){
    par=0;
    impar=0;
    i=1;//Valores iniciales
    while(i<=50){//condicionales
        impar+=i;
        par+=i+1;
        i+=2;//Valor de avance
    }
    console.log(par);
    console.log(impar);
}
/*Ejercicio en clase*/
function Serie1(){
    n=8
    for(x=1,i=1;i<=n;i++,x--){
        console.log(x);
        if(x==0){
            x=2;
        }
    }
}
function Serie2(){
    n=8
    for(x=-1,i=1;i<=n;i++,x*=-1){
        console.log(x);
        if(x==0){
        x=2;
        }
    }
}
function Serie3(){
    n=8
    for(x=1,s=1,i=1;i<=n;i++,x++){
        console.log(s*x);
        if(x==2){
            x=0;
            s*=-1;
        }
    }
}
function Serie4(){
    n=8
    for(x=3,i=1;i<=n;i++,x++){
        console.log(x);
        if(x==5)x=2;
    }
}
