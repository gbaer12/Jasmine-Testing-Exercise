describe('calculateMonthlyPayment', function(){
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 10000, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});
})


describe('updateMontly', function(){
it("should return a result with 2 decimal places", function() {
  const values = {amount: 22500, years: 10, rate: 6.98};
  expect(calculateMonthlyPayment(values)).toEqual('261.01');
});
})
/// etc
