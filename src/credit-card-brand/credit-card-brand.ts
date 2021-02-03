export enum CreditCardBrand {
  mastercard = "mastercard",
  visa = "visa",
  elo = "elo",
  hipercard = "hipercard",
  amex = "amex",
  hiper = "hiper",
  dinners = "dinners"
}

type mapBINPattern = { [key in CreditCardBrand]: string[] }

export const creditCardBrandBINs: mapBINPattern =
{
  mastercard: ['5'],
  visa: ['4'],
  elo: ['4011', '438935', '451416', '4576', '504175', '506699', '5067', '509040', '509040', '509042', '509043', '509045', '509046', '509047', '509048', '509049', '509050', '509051', '509052', '509064', '509066', '509067', '509068', '509069', '509074', '636297', '636368', '636369'],
  hipercard: ['384100', '384140', '384160', '606282'],
  amex: ['34', '37'],
  hiper: ['637095', '637612', '637599', '637609', '637568'],
  dinners: ['301', '305', '36', '38'],
}
  ;

export const maxLengthBIN = 6;