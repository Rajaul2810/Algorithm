function fibonacci_series(n){
  let a=0;
  let b=1;
  let total
  for(let i=1; i<=n;i++){
     console.log(a);
     total = a+b
     a=b;
     b=total;
  }
}
fibonacci_series(100);