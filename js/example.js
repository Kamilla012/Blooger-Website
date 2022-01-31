let circleLenght = (radious) => {
    console.log(2*radious*3.14);
};

/* wpisujemy trzy rzeczy 
1) to stan początkowy pętli
2) to warunek który mówi pętli czy nadal powinna dokonywać dame jej zadanie 
3) kod koncowy który wykona się za każdym razem gdy petla wykona już swoje zadanie */
for(let i = 1; i <= 20; i++) {
    circleLenght(i);
} 