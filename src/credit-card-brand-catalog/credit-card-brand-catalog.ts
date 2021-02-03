import { Trie } from '../trie/trie';
import { creditCardBrandBINs, maxLengthBIN } from '../credit-card-brand/credit-card-brand';
import { CreditCardBrand } from '../credit-card-brand/credit-card-brand';

export class CreditCardBrandCatalog {
  private trie: Trie<string>;
  private static myInstance: CreditCardBrandCatalog;

  private constructor() {
    this.trie = new Trie();
    this.buildTrie();
  }

  static get instance(): CreditCardBrandCatalog {
    if (!this.myInstance) {
      this.myInstance = new CreditCardBrandCatalog();
    }
    return this.myInstance;
  }

  private buildTrie() {
    const brands = creditCardBrandBINs;
    for (let brand in brands) {
      const bins = brands[brand as CreditCardBrand];
      bins.forEach((bin: string) => {
        this.trie.add(bin, brand);
      });
    }
  }

  getBrand(value: string): CreditCardBrand | undefined {
    let brand;
    let valueToCompute = value.substr(0, maxLengthBIN);

    for (let i = 0; i < valueToCompute.length; i++) {
      const possibleBrand = this.trie.find(valueToCompute.substr(0, i + 1));
      if (possibleBrand) {
        brand = possibleBrand;
      }
    }

    return brand as CreditCardBrand;
  }
}
