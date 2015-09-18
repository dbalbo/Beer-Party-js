describe ('countUpBy', function(){
	it('counts up by a number to a given number', function(){
		expect(countUpBy(5, 30)).to.eql([5, 10, 15, 20 , 25, 30]);
	});
});