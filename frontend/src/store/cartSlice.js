import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  // data:[
  //   {
  //     uuid: '-l8Mn2pVlRs-p',
  //     symbol: 'XRP',
  //     name: 'XRP',
  //     description: 'XRP is a digital currency and payment network created to provide fast, low-cost international transactions with end-to-end visibility.',
  //     color: '#000000',
  //     iconUrl: 'https://cdn.coinranking.com/B1oPuTyfX/xrp.svg',
  //     websiteUrl: 'https://xrpl.org',
  //     links: [
  //       {
  //         name: 'xrpl.org',
  //         url: 'https://xrpl.org',
  //         type: 'website'
  //       },
  //       {
  //         name: 'xrplf/rippled',
  //         url: 'https://github.com/xrplf/rippled',
  //         type: 'github'
  //       },
  //       {
  //         name: 'r/XRP',
  //         url: 'https://www.reddit.com/r/XRP/',
  //         type: 'reddit'
  //       },
  //       {
  //         name: '@XRPLF',
  //         url: 'https://twitter.com/XRPLF',
  //         type: 'twitter'
  //       },
  //       {
  //         name: 'YouTube',
  //         url: 'https://www.youtube.com/channel/UC6zTJdNCBI-TKMt5ubNc_Gg',
  //         type: 'youtube'
  //       }
  //     ],
  //     supply: {
  //       confirmed: true,
  //       supplyAt: 1704067223,
  //       max: '100000000000',
  //       total: '99988100379',
  //       circulating: '54125149173'
  //     },
  //     numberOfMarkets: 329,
  //     numberOfExchanges: 91,
  //     '24hVolume': '856509095',
  //     marketCap: '33897446085',
  //     fullyDilutedMarketCap: '62627903300',
  //     price: '0.6262790330001552',
  //     btcPrice: '0.000014564572605277',
  //     priceAt: 1704111660,
  //     change: '-0.60',
  //     rank: 6,
  //     sparkline: [
  //       '0.6300242151686543',
  //       '0.6289808762749375',
  //       '0.6282989760237162',
  //       '0.6292539983233371',
  //       '0.6287089147469289',
  //       '0.6282301134793034',
  //       '0.6244408275403648',
  //       '0.6244795467731603',
  //       '0.6243417476905357',
  //       '0.6267247786896927',
  //       '0.6247912502124909',
  //       '0.6206963296130921',
  //       '0.6233803305392783',
  //       '0.6244149174089727',
  //       '0.6237894587222842',
  //       '0.6215101098893772',
  //       '0.618795274457589',
  //       '0.617943933411742',
  //       '0.6174034740511584',
  //       '0.6198397855663996',
  //       '0.6206019614872653',
  //       '0.6219631523454158',
  //       '0.6239007934661894',
  //       '0.6230749513080215'
  //     ],
  //     allTimeHigh: {
  //       price: '3.1592207876597747',
  //       timestamp: 1515369600
  //     },
  //     coinrankingUrl: 'https://coinranking.com/coin/-l8Mn2pVlRs-p+xrp-xrp',
  //     tier: 1,
  //     lowVolume: false,
  //     listedAt: 1421798400,
  //     hasContent: true,
  //     notices: null,
  //     tags: [
  //       'layer-1',
  //       'altcoin'
  //     ],
  //     quantity: 1
  //   },
  //   {
  //     uuid: 'aKzUVe4Hh_CON',
  //     symbol: 'USDC',
  //     name: 'USDC',
  //     description: 'USDC is a US dollar-backed stable coin developed by Circle and Coinbase, enabling mainstream adoption of blockchain technology for payments.',
  //     color: '#7894b4',
  //     iconUrl: 'https://cdn.coinranking.com/jkDf8sQbY/usdc.svg',
  //     websiteUrl: 'https://www.centre.io/usdc',
  //     links: [
  //       {
  //         name: 'www.centre.io',
  //         type: 'website',
  //         url: 'https://www.centre.io/usdc'
  //       },
  //       {
  //         name: 'centrehq/centre-tokens',
  //         url: 'https://github.com/centrehq/centre-tokens',
  //         type: 'github'
  //       },
  //       {
  //         name: 'centre-blog',
  //         url: 'https://medium.com/centre-blog',
  //         type: 'medium'
  //       },
  //       {
  //         name: 'centre_io',
  //         url: 'https://twitter.com/centre_io',
  //         type: 'twitter'
  //       }
  //     ],
  //     supply: {
  //       confirmed: true,
  //       supplyAt: 1704111721,
  //       max: null,
  //       total: '24491240818.562046',
  //       circulating: '24491240818.562046'
  //     },
  //     numberOfMarkets: 1411,
  //     numberOfExchanges: 99,
  //     '24hVolume': '5272697027',
  //     marketCap: '24496976261',
  //     fullyDilutedMarketCap: '24496976261',
  //     price: '1.0002341834291169',
  //     btcPrice: '0.000023261170531363',
  //     priceAt: 1704111660,
  //     change: '-0.27',
  //     rank: 7,
  //     sparkline: [
  //       '1.0023404639086386',
  //       '1.0024999695011865',
  //       '1.002252076076726',
  //       '1.0023916651628024',
  //       '1.0020914105886056',
  //       '1.0018909356129797',
  //       '1.0018702508123494',
  //       '1.0026076245049478',
  //       '1.002737254507815',
  //       '1.0031698174403338',
  //       '1.0041431524055122',
  //       '1.0029150501560677',
  //       '1.0029870390660256',
  //       '1.0025902026040088',
  //       '1.0025107554054022',
  //       '1.002419544869004',
  //       '1.0026090267107979',
  //       '1.0019268525968035',
  //       '1.0022991551499103',
  //       '1.001912656649289',
  //       '1.001363460913748',
  //       '1.0015973571690562',
  //       '1.0022707230004548',
  //       '1.0026404097296393'
  //     ],
  //     allTimeHigh: {
  //       price: '1.2846608162047648',
  //       timestamp: 1605830400
  //     },
  //     coinrankingUrl: 'https://coinranking.com/coin/aKzUVe4Hh_CON+usdc-usdc',
  //     tier: 1,
  //     lowVolume: false,
  //     listedAt: 1539043200,
  //     hasContent: true,
  //     notices: null,
  //     tags: [
  //       'stablecoin',
  //       'altcoin',
  //       'erc-20',
  //       'bep-20',
  //       'trc-20',
  //       'spl'
  //     ],
  //     quantity: 1
  //   }
  // ],
  isLoading:true,
  final_amount:[],
};
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
      addPro(state,actions){
          state.data.push({...actions.payload,"quantity":1})
          localStorage.setItem("cartI",JSON.stringify(state.data))
          // console.log(state.data)
      },
      dltPro(state,actions){
        // const d=actions.payload.uuid;
        // console.log(actions.payload)
        state.data= state.data.filter(item=>item.uuid!=actions.payload.uuid)
        state.final_amount=state.final_amount.filter((el,i)=>i==actions.payload.id?null:el)
      },
      setAmt(state,actions){
        state.final_amount.push(actions.payload);
        // console.log(actions.payload)
      },
      chngAmt(state,actions){
        state.final_amount[actions.payload.id]=actions.payload.value;
        console.log(actions.payload.id)
      },
      setQuant(state,actions){
        state.data.map((el,i)=>{
          if(el.uuid===actions.payload.uuid) el.quantity=actions.payload.qunt
          return el
        })
        console.log(state.data)
      },

    }
})

export default cartSlice.reducer
export const {addPro,dltPro,setAmt,setQuant,chngAmt}=cartSlice.actions