function getTaxlessSalary(salary) {
    const receive = 0.18;
    const war = 0.01;
    const recieveTax = receive * salary;
    const warTax = war * salary;
    return {
      recieveTax,
      warTax,
      tax: recieveTax + warTax
    }
  }
  
  console.log(getTaxlessSalary(1000));