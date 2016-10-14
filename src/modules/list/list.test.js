import {filterList, flattenList} from './index';
import fixture from '../../fixture';
import flatListFixture from './flatListFixture';
import filteredListFixture from './filteredListFixture';

describe('flattenList()', () => {
    it('returns a flattened list without children', () => {
        expect(flattenList(fixture)).toEqual(flatListFixture);        
    });
});

describe('filterList()', () => {
    it('returns an empty array if nothing matches', () => {
        expect(filterList(fixture, 'timsewurst')).toEqual([]);
    });

    it('returns a filtered List containing ', () => {
        expect(filterList(fixture, 'team')).toEqual(filteredListFixture);        
    });
});
