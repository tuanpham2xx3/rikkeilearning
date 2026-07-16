import{shallow}from'enzyme';import Dashboard from'./Dashboard';test('shallow có h1',()=>expect(shallow(<Dashboard/>).find('h1').text()).toBe('Dashboard'));
