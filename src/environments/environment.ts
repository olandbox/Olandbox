// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  chainName: 'mumbai',
  chainId: '0x13881', // 80001
  rpcUrl: ['https://matic-mumbai.chainstacklabs.com'],


  contractAddress: '0xce3A9A3C8c4199fD73f574a8F0a695F01097e8b5',
  voucherAddress: '0x464DaDD9779C45cb226FBf33C6E3523d2c62b041',
  openseaVoucher: 'https://testnets.opensea.io/collection/olandbox-land-vouchers-test-v3',
  oprensearURI: 'https://testnets.opensea.io/assets/mumbai/',
  polygonscanURI: 'https://mumbai.polygonscan.com/tx/',
  metaURI: 'https://test.metadata.oland.info/oland/',
  microWebsite: 'https://test.oland.info/',

  slip: 1.1, // 滑点

  // chainName: 'matic',
  // chainId: '0x89', //137
  // rpcUrl: ['https://polygon-rpc.com'],


  // contractAddress: '0x8e0564F8Ec6c2f6e636cac9a719927d59cc00624',
  // voucherAddress: '0x1957A4D72BCec91Db7a296B5C11c46Ad7e467e77',
  // oprensearURI: 'https://opensea.io/assets/matic/',
  // polygonscanURI: 'https://polygonscan.com/tx/',
  // metaURI: 'https://metadata.oland.info/oland/',
  // microWebsite: 'https://www.oland.info/',

  // slip: 1.1
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.