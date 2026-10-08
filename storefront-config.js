// Store-specific business settings. Keep separate when syncing the shared UI.
window.STOREFRONT_CONFIG = Object.freeze({
  siteId: 'catalog',
  whatsappNumber: '17253041220',
  shippingLabel: 'Calculated Separately',
  freeShipping: false,
  discountTiers: Object.freeze([
    {min:1,max:10,percent:0},
    {min:11,max:20,percent:0.035},
    {min:21,max:40,percent:0.08},
    {min:41,max:Infinity,percent:0.12},
  ]),
});
