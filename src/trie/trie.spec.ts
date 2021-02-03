import { Trie } from './trie';

describe('Trie', () => {
  let trie: Trie<string>;

  beforeEach(() => {
    trie = new Trie();
  });

  describe('find', () => {

    test('should return label for a single char without children', () => {
      trie.add('5', 'label');
      expect(trie.find('5')).toBe('label');
    });

    test('should return label for a string', () => {
      trie.add('510', 'label');
      expect(trie.find('510')).toBe('label');
    });

    test('should return label for a single char with children', () => {
      trie.add('5', 'labelA');
      trie.add('510', 'labelB');
      expect(trie.find('5')).toBe('labelA');
    });

    test('should return label for a string node without siblings', () => {
      trie.add('5', 'labelA');
      trie.add('510', 'labelB');
      expect(trie.find('510')).toBe('labelB');
    });

    test('should return label for a string node with siblings', () => {
      trie.add('5', 'labelA');
      trie.add('510', 'labelB');
      trie.add('512', 'labelC');
      expect(trie.find('512')).toBe('labelC');
    });

    test('should return undefined for a single char', () => {
      trie.add('510', 'lableA');
      expect(trie.find('5')).toBeUndefined;
    });

    test('should return undefined for a string', () => {
      trie.add('510', 'label');
      expect(trie.find('51')).toBeUndefined;
    });

    test('should return a label after add a char leaf for a existing node', () => {
      trie.add('501', 'labelA');
      trie.add('5', 'labelB');
      trie.add('502', 'labelC');
      expect(trie.find('5')).toBe('labelB');
    });

    test('should retrun a label after add string leaf for a existing node', () => {
      trie.add('501', 'labelA');
      trie.add('50', 'labelB');
      expect(trie.find('50')).toBe('labelB');
    });

    describe('comlex trie', () => {

      beforeEach(() => {
        trie.add('301', 'labelA');
        trie.add('305', 'labelB');
        trie.add('4', 'labelC');
        trie.add('4011', 'labelD');
        trie.add('501', 'labelE');
        trie.add('5', 'labelF');
        trie.add('502', 'labelG');
      });

      test('should return undefined for 3', () => {
        expect(trie.find('3')).toBeUndefined;
      });

      test('should return labelC for 4', () => {
        expect(trie.find('4')).toBe('labelC');
      });

      test('should return labelD for 4011', () => {
        expect(trie.find('4011')).toBe('labelD');
      });

      test('should return undefined for 401', () => {
        expect(trie.find('401')).toBeUndefined;
      });

      test('should return lebalF for 5', () => {
        expect(trie.find('5')).toBe('labelF');
      });
    });
  });
});