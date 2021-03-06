import AbstractModuleRoute from 'hospitalrun/routes/abstract-module-route';
export default AbstractModuleRoute.extend({
  addCapability: 'add_lab',
  additionalModels: [{
    name: 'labPricingTypes',
    findArgs: ['lookup', 'lab_pricing_types']
  }],
  allowSearch: false,
  moduleName: 'labs',
  newButtonText: '+ new lab',
  sectionTitle: 'Labs',
  subActions: [{
    text: 'Requests',
    linkTo: 'labs.index'
  }, {
    text: 'Completed',
    linkTo: 'labs.completed'
  }]
});
