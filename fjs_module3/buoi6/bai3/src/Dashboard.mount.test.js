import{mount}from'enzyme';import Dashboard from'./Dashboard';test('mount có h1',()=>expect(mount(<Dashboard/>).find('h1').text()).toBe('Dashboard'));
