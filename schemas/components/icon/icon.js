import {defineType} from 'sanity'
import { IconInput } from './IconInput'

// We need will extend and import these in the custom input component later
export const ICONS = [
  {
    "title": "",
    "value": ""
  },  
  {
    "title": "001.png",
    "value": "001.png"
  },
  {
    "title": "002.png",
    "value": "002.png"
  },
  {
    "title": "003.gif",
    "value": "003.gif"
  },
  {
    "title": "004.png",
    "value": "004.png"
  },
  {
    "title": "005.gif",
    "value": "005.gif"
  },
  {
    "title": "006.png",
    "value": "006.png"
  },
  {
    "title": "007.png",
    "value": "007.png"
  },
  {
    "title": "008.png",
    "value": "008.png"
  },
  {
    "title": "009.png",
    "value": "009.png"
  },
  {
    "title": "010.png",
    "value": "010.png"
  },
  {
    "title": "011.gif",
    "value": "011.gif"
  },
  {
    "title": "012.png",
    "value": "012.png"
  },
  {
    "title": "013.png",
    "value": "013.png"
  },
  {
    "title": "014.png",
    "value": "014.png"
  },
  {
    "title": "015.png",
    "value": "015.png"
  },
  {
    "title": "016.png",
    "value": "016.png"
  },
  {
    "title": "017.png",
    "value": "017.png"
  },
  {
    "title": "018.png",
    "value": "018.png"
  },
  {
    "title": "019.png",
    "value": "019.png"
  },
  {
    "title": "020.png",
    "value": "020.png"
  },
  {
    "title": "021.png",
    "value": "021.png"
  },
  {
    "title": "022.png",
    "value": "022.png"
  },
  {
    "title": "023.png",
    "value": "023.png"
  },
  {
    "title": "024.png",
    "value": "024.png"
  },
  {
    "title": "025.png",
    "value": "025.png"
  },
  {
    "title": "026.gif",
    "value": "026.gif"
  },
  {
    "title": "027.gif",
    "value": "027.gif"
  },
  {
    "title": "028.png",
    "value": "028.png"
  },
  {
    "title": "029.png",
    "value": "029.png"
  },
  {
    "title": "030.gif",
    "value": "030.gif"
  },
  {
    "title": "031.png",
    "value": "031.png"
  },
  {
    "title": "032.png",
    "value": "032.png"
  },
  {
    "title": "033.png",
    "value": "033.png"
  },
  {
    "title": "034.png",
    "value": "034.png"
  },
  {
    "title": "035.png",
    "value": "035.png"
  },
  {
    "title": "036.png",
    "value": "036.png"
  },
  {
    "title": "037.png",
    "value": "037.png"
  },
  {
    "title": "038.png",
    "value": "038.png"
  },
  {
    "title": "039.png",
    "value": "039.png"
  },
  {
    "title": "040.png",
    "value": "040.png"
  },
  {
    "title": "041.png",
    "value": "041.png"
  },
  {
    "title": "042.png",
    "value": "042.png"
  },
  {
    "title": "043.gif",
    "value": "043.gif"
  },
  {
    "title": "044.png",
    "value": "044.png"
  },
  {
    "title": "045.png",
    "value": "045.png"
  },
  {
    "title": "046.png",
    "value": "046.png"
  },
  {
    "title": "047.png",
    "value": "047.png"
  },
  {
    "title": "048.png",
    "value": "048.png"
  },
  {
    "title": "049.png",
    "value": "049.png"
  },
  {
    "title": "050.png",
    "value": "050.png"
  },
  {
    "title": "051.png",
    "value": "051.png"
  },
  {
    "title": "052.png",
    "value": "052.png"
  },
  {
    "title": "053.png",
    "value": "053.png"
  },
  {
    "title": "054.png",
    "value": "054.png"
  },
  {
    "title": "055.png",
    "value": "055.png"
  },
  {
    "title": "056.png",
    "value": "056.png"
  },
  {
    "title": "057.png",
    "value": "057.png"
  },
  {
    "title": "058.png",
    "value": "058.png"
  },
  {
    "title": "059.png",
    "value": "059.png"
  },
  {
    "title": "060.png",
    "value": "060.png"
  },
  {
    "title": "061.png",
    "value": "061.png"
  },
  {
    "title": "062.png",
    "value": "062.png"
  },
  {
    "title": "063.png",
    "value": "063.png"
  },
  {
    "title": "064.png",
    "value": "064.png"
  },
  {
    "title": "065.png",
    "value": "065.png"
  },
  {
    "title": "066.gif",
    "value": "066.gif"
  },
  {
    "title": "067.png",
    "value": "067.png"
  },
  {
    "title": "068.png",
    "value": "068.png"
  },
  {
    "title": "069.gif",
    "value": "069.gif"
  },
  {
    "title": "070.png",
    "value": "070.png"
  },
  {
    "title": "071.png",
    "value": "071.png"
  },
  {
    "title": "072.gif",
    "value": "072.gif"
  },
  {
    "title": "073.gif",
    "value": "073.gif"
  },
  {
    "title": "074.gif",
    "value": "074.gif"
  },
  {
    "title": "075.gif",
    "value": "075.gif"
  },
  {
    "title": "076.gif",
    "value": "076.gif"
  },
  {
    "title": "077.png",
    "value": "077.png"
  },
  {
    "title": "078.gif",
    "value": "078.gif"
  },
  {
    "title": "079.png",
    "value": "079.png"
  },
  {
    "title": "080.png",
    "value": "080.png"
  },
  {
    "title": "081.png",
    "value": "081.png"
  },
  {
    "title": "082.png",
    "value": "082.png"
  },
  {
    "title": "083.png",
    "value": "083.png"
  },
  {
    "title": "084.png",
    "value": "084.png"
  },
  {
    "title": "085.png",
    "value": "085.png"
  },
  {
    "title": "086.png",
    "value": "086.png"
  },
  {
    "title": "087.png",
    "value": "087.png"
  },
  {
    "title": "088.png",
    "value": "088.png"
  },
  {
    "title": "089.gif",
    "value": "089.gif"
  },
  {
    "title": "090.gif",
    "value": "090.gif"
  },
  {
    "title": "091.gif",
    "value": "091.gif"
  },
  {
    "title": "092.gif",
    "value": "092.gif"
  },
  {
    "title": "093.gif",
    "value": "093.gif"
  },
  {
    "title": "094.gif",
    "value": "094.gif"
  },
  {
    "title": "095.png",
    "value": "095.png"
  },
  {
    "title": "096.png",
    "value": "096.png"
  },
  {
    "title": "097.gif",
    "value": "097.gif"
  },
  {
    "title": "098.png",
    "value": "098.png"
  },
  {
    "title": "099.gif",
    "value": "099.gif"
  },
  {
    "title": "100.png",
    "value": "100.png"
  },
  {
    "title": "101.gif",
    "value": "101.gif"
  },
  {
    "title": "102.png",
    "value": "102.png"
  },
  {
    "title": "103.png",
    "value": "103.png"
  },
  {
    "title": "104.png",
    "value": "104.png"
  },
  {
    "title": "105.gif",
    "value": "105.gif"
  },
  {
    "title": "106.png",
    "value": "106.png"
  }
]

export const icon = defineType({
  name: 'icon',
  title: 'Icon',
  type: 'string',
  options: {
    list: ICONS.map(({title, value}) => ({title, value})),
    layout: 'dropdown',
  },
  components: {input: IconInput},
})