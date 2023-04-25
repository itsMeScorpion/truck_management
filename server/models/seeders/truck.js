const Brand = require('../brand');
const TruckModel = require('../truckModal');
const Variant = require('../varient');

const brandsData = [
  { bId: 1, name: 'Ashok Leyland' },
  { bId: 2, name: 'BharatBenz' },
  { bId: 3, name: 'Force Motors ' },
];

const modelsData = [
  { mId: 1, name: 'Dost', bId: 1 },
  { mId: 2, name: 'Partner', bId: 1 },
  { mId: 3, name: 'Ecomet', bId: 1 },
  { mId: 4, name: '1015R', bId: 2 },
  { mId: 5, name: '1217C', bId: 2 },
  { mId: 6, name: '1617C', bId: 2 },
  { mId: 7, name: 'Traveller', bId: 3 },
  { mId: 8, name: 'Gurkha', bId: 3 },
  { mId: 9, name: 'Trax', bId: 3 },
];

const variantsData = [
  { name: 'Dost LS', mId: 1 },
  { name: 'Dost LX', mId: 1 },
  { name: 'Partner 4 Tyre', mId: 2 },
  { name: 'Partner 6 Tyre', mId: 2 },
  { name: 'Ecomet 1015 HE', mId: 3 },
  { name: 'Ecomet 1214 HE', mId: 3 },
  { name: '1015R FE', mId: 4 },
  { name: '1015R HE', mId: 4 },
  { name: '1217C FE', mId: 5 },
  { name: '1217C HE', mId: 5 },
  { name: '1617C FE', mId: 6 },
  { name: '1617C HE', mId: 6 },
  { name: 'Traveller 26', mId: 7 },
  { name: 'Traveller 26 Luxury', mId: 7 },
  { name: 'Gurkha Xplorer', mId: 8 },
  { name: 'Gurkha Xtreme', mId: 8 },
  { name: 'Trax Cruiser', mId: 9 },
  { name: 'Trax Toofan', mId: 9 },
];
Brand.bulkCreate(brandsData)
  .then(() => {
    console.log('Brands created successfully');
  })
  .catch((err) => {
    console.error('Error creating brands:', err);
  });
TruckModel.bulkCreate(modelsData)
  .then(() => {
    console.log('model created successfully');
  })
  .catch((err) => {
    console.error('Error creating models:', err);
  });
Variant.bulkCreate(variantsData)
  .then(() => {
    console.log('varient created successfully');
  })
  .catch((err) => {
    console.error('Error creating varients:', err);
  });
