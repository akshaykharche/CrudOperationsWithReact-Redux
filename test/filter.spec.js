import 'jsdom-global/register';
import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';
import {ShowRecordsWithReact} from '../src/Components/CrudOperationsWithReact/ShowRecordsWithReact';
import { spy } from 'sinon';
describe('Show Records', () => {
    let wrapper;
    const props = {
        records: []
    };
    it('For H1 tag', () => {
         wrapper = shallow(<ShowRecordsWithReact {...props} />);
        expect(wrapper.find('h5').text()).toEqual('Create Contact')
    });
    it('for Grid component',()=>{
        expect(wrapper.find('Grid').length).toBe(1);
    })
    it('for AddRecordsWithReact component',()=>{
        expect(wrapper.find('AddRecordsWithReact').length).toBe(1);
    })
    it('for TableRecordsContainer component',()=>{
        expect(wrapper.find('TableRecordsContainer').length).toBe(1);
    })
    it('for Button component',()=>{
        expect(wrapper.find('Button').length).toBe(2);
    })
    
})


