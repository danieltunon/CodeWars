function car(p,n) {
  for(n; n > 0; n--) {
    n <= 2 ? p *= .8 : p *= .9;
  }
  return p.toFixed(2);
}
