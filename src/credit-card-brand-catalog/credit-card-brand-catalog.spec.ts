import { CreditCardBrand } from '../credit-card-brand/credit-card-brand';
import { CreditCardBrandCatalog } from './credit-card-brand-catalog';

describe('CreditCardBrandCatalog', () => {
  const catalog = CreditCardBrandCatalog.instance;

  describe('mastercard', () => {
    test('should return brand for 5', () => {
      expect(catalog.getBrand('5')).toBe(CreditCardBrand.mastercard);
    });

    test('should return brand for a full number', () => {
      expect(catalog.getBrand('5320259677346151')).toBe(CreditCardBrand.mastercard);
    });
  });

  describe('visa', () => {
    test('should return brand for 4', () => {
      expect(catalog.getBrand('4')).toBe(CreditCardBrand.visa);
    });

    test('should return brand for full number', () => {
      expect(catalog.getBrand('4012001037141112')).toBe(CreditCardBrand.visa);
    });
  });

  describe('elo', () => {
    test('should return brand for 4011', () => {
      expect(catalog.getBrand('4011')).toBe(CreditCardBrand.elo);
    });

    test('should return brand for full number', () => {
      expect(catalog.getBrand('6362970000457013')).toBe(CreditCardBrand.elo);
    });
  });

  describe('hipercard', () => {
    test('should return brand for 384100', () => {
      expect(catalog.getBrand('384100')).toBe(CreditCardBrand.hipercard);
    });

    test('should return brand for full number', () => {
      expect(catalog.getBrand('6062825624254001')).toBe(CreditCardBrand.hipercard);
    });
  });

  describe('amex', () => {
    test('should return brand for 34', () => {
      expect(catalog.getBrand('34')).toBe(CreditCardBrand.amex);
    });

    test('should return brand for full number', () => {
      expect(catalog.getBrand('376449047333005')).toBe(CreditCardBrand.amex);
    });
  });

  describe('hiper', () => {
    test('should return brand for 637095', () => {
      expect(catalog.getBrand('637095')).toBe(CreditCardBrand.hiper);
    });

    test('should return brand for full number', () => {
      expect(catalog.getBrand('6370950000000005')).toBe(CreditCardBrand.hiper);
    });
  });

  describe('dinners', () => {
    test('should return brand for 301', () => {
      expect(catalog.getBrand('301')).toBe(CreditCardBrand.dinners);
    });

    test('should return brand for full number', () => {
      expect(catalog.getBrand('36490102462661')).toBe(CreditCardBrand.dinners);
    });
  });

  describe('not found', () => {
    test('should return undefined for 3', () => {
      expect(catalog.getBrand('3')).toBeUndefined;
    });

    test('should return undefined for full number', () => {
      expect(catalog.getBrand('3534427148054319')).toBeUndefined;
    });
  });
});
