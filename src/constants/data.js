import images from './images';

const wines = [
  {
    title: 'Dana Brisket',
    price: '86₺',
    tags: 'Kiraz Odunuyla Tütsülenmiş 200 gr. Brisket, Horseradish, Patates, Cole Slaw, Demi Glace Barbekü Sos',
  },
  {
    title: 'Brisket Burger',
    price: '43₺',
    tags: 'Kiraz Odunuyla Tütsülenmiş Brisket, Patates, Cole Slaw, Horseradish Sos, Demi Glace Barbekü Sos',
  },
  {
    title: 'Dana Kaburga',
    price: '92₺',
    tags: 'Kiraz Odunuyla Tütsülenmiş 400 gr. Kemikli Kaburga, Patates, Cole Slaw, Demi Glace Barbekü Sos',
  },
  {
    title: 'Tiftik Burger',
    price: '47₺',
    tags: 'Kiraz Odunuyla Tütsülenmiş Kaburga, Patates, Cole Slaw, Horseradish Sos, Demi Glace Barbekü Sos',
  },
  {
    title: 'Lokma Kaburga',
    price: '95₺',
    tags: 'Kiraz Odunuyla Tütsülenmiş 170 gr. Kaburga, Patates, Cole Slaw, Demi Glace Barbekü Sos',
  },
];

const cocktails = [
  {
    title: 'Cheddarlı Tiftik Burger',
    price: '49₺',
    tags: 'Kiraz Odunuyla Tütsülenmiş Kaburga, Patates, Cole Slaw, Horseradish Sos, Demi Glace Barbekü Sos',
  },
  {
    title: "Tadım Menüsü",
    price: '97₺',
    tags: 'Mini Tiftik ve Brisket Burger, Brisket, Lokma Kaburga, Patates, Cole Slaw, Demi Glace Barbekü Sos',
  },
  {
    title: 'Ikili Mini Burger',
    price: '38₺',
    tags: 'Kiraz Odunuyla Tütsülenmiş Kaburga ve Döş, Patates, Cole Slaw, Horseradish Sos, Demi Glace Barbekü Sos',
  },
  {
    title: 'Just Kombo',
    price: '189₺',
    tags: 'Kiraz Odunuyla Tütsülenmiş Kaburga, Brisket ve Sosis Patates, Cole Slaw, Demi Glace Barbekü Sos',
  },
  {
    title: 'Hot Dog',
    price: '39₺',
    tags: 'Tütsülü Sosis, Patates, Cole Slaw, Horseradish Sos, Demi Glace Barbekü Sos',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
