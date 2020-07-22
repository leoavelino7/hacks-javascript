const value = 6432.50;

const real = value.toLocaleString("pt-br",{style: "currency", currency: "BRL", minimumFractionDigits: 2});

console.log(real); // R$ 6.432,50