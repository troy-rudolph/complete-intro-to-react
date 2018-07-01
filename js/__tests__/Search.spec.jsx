import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component).toMatchSnapshot();
});

test('Search with no term yields all cards', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search with term yields correct number of cards', () => {
  const searchWord = 'black';
  const component = shallow(<Search shows={preload.shows} />);
  component.find('input').simulate('change', {target: {value: searchWord}});
  const showCount = preload.shows.filter(show => `${show.title} ${show.description}`.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});

