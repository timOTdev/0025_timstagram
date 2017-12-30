const posts = [
  {
    "code":"BdOVAKGlVJrgr9nndPHuRbH3idmErXSpVN-7rE0",
    "caption":"That rag tag road trip to SC!",
    "likes":13,
    "id":"1679372080880374379",
    "display_src":"https://instagram.fric1-2.fna.fbcdn.net/t51.2885-15/e35/25022500_2023878634533023_7354487927910432768_n.jpg"
  },
  {
    "code":"BdAnQr3l6oxeYRtmmYwXKMRGeqjjguVT9SMUJ00",
    "caption":"The gingerbread situation.",
    "likes":10,
    "id":"1675511731810970161",
    "display_src":"https://instagram.fric1-2.fna.fbcdn.net/t51.2885-15/e35/25017454_367182930409271_925717408230932480_n.jpg"
  },
  {
    "code":"Bc_A6HiFeVOoN1wNHWp_O8a69V9ilKVgXSeBf00",
    "caption":"Ramen, strawberry kiwi sake, and red bean french toast ice cream!",
    "likes":9,
    "id":"1675061580222817614",
    "display_src":"https://instagram.fric1-2.fna.fbcdn.net/t51.2885-15/e35/25007728_828116957359752_3453989790087643136_n.jpg"
  },
  {
    "code":"Bc7VS7uFoGqQ1Cg42EnmUkVP2yZxLaCWbSdhpg0",
    "caption":"Hellooo Asheville!",
    "likes":15,
    "id":"1674025346549580202",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/25010979_161959281089189_2538154856791670784_n.jpg"
  },
  {
    "code":"BcfHlQ6FKo-0OFxH8-l_Rum9BiWx2ijTBs7D8Q0",
    "caption":"First legit snow of the season! Throw em up! ❄⛄🎄",
    "likes":16,
    "id":"1666083734250891838",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/25007559_193182971244703_1093048762852442112_n.jpg"
  },
  {
    "code":"BcXfqfXl7QqHdvfxO7NNp_jcbnX858e0IzOAnY0",
    "caption":"Up to no good chemistry. Hahaha",
    "likes":12,
    "id":"1663937846678369322",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/25013958_195333664358119_3279253065739272192_n.jpg"
  },
  {
    "code":"BboyH-WlyVkszU4e2UQDxh7UW-_0cf-H8Rz-5o0",
    "caption":"That night we tried to crash a fundraiser but tickets were pre-sold. Haha. And this winery before that.",
    "likes":11,
    "id":"1650789713744176484",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/23594642_696448060548217_4745364487513571328_n.jpg"
  },
  {
    "code":"Bboxh5ZF22FYLBHQajL4jpTvPOyRNbJjNwGZuo0",
    "caption":"Oh you know, Christmas music and decorations even before Thanksgiving. That's how we do it.",
    "likes":15,
    "id":"1650787097077312901",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/23595725_1866436330313875_6043727294298587136_n.jpg"
  },
  {
    "code":"BZv7kPuDG-oXsmxg__OwEPwtg6un_XjvfZ1Gzs0",
    "caption":"Two apps I have finished recently! Now onto deep JS and ES6! Hopefully have time for React also!",
    "likes":7,
    "id":"1616772766773309352",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/22070860_172757089943212_3149187965524115456_n.jpg"
  },
  {
    "code":"BZbaFDCj9esgt5Tu3BvugiTZ7z47mBV-K4mgyQ0",
    "caption":"Our first FCCA Meet!",
    "likes":8,
    "id":"1610995987785963436",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/21911544_176893076218092_6480440939050434560_n.jpg"
  },
  {
    "code":"BZWnPTij73rz1N47aeEf-Z-9PZkjhx8OTpWK0w0",
    "caption":"Great talk about about CSS grids! Inspired to use more!",
    "likes":5,
    "id":"1609646492418555371",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/21980173_1450947128325896_9095072189673111552_n.jpg"
  },
  {
    "code":"BZJPigWhaOr-fgKhCJcfZvp2fl0lYWZBJEmBf40",
    "caption":"Intro to React workshop yesterday with @jasierragarcia! Good times!",
    "likes":10,
    "id":"1605883084031763371",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/21820180_152053815383947_1542324581354700800_n.jpg"
  },
  {
    "code":"BZIvVJ1B_inT_YA6JDzNLnsxIU8NfUvOX7QxgU0",
    "caption":"In Bello, there's a hill called Quitasol that shows you the north side of town. Beautiful hike with a golden road paved with aged rocks. Wish I had more time to explore all of it!",
    "likes":6,
    "id":"1605741429006006439",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/21689182_509082309426100_5053056558779334656_n.jpg"
  },
  {
    "code":"BZHdUcWhYWPiH4jkOwFH_L9mf7mYQq41aMKJ7I0",
    "caption":"Visiting the biggest mall in city, Santa Fe! Enjoyed Frisby and Cinnabon. Nice mall with lots of stores if you're that shopaholic.",
    "likes":11,
    "id":"1605380740361848207",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/21688822_309363832875830_6620353411432841216_n.jpg"
  },
  {
    "code":"BZCKjx1DrYJyqaHGMamxXBu64oLZsdAepPfPJ40",
    "caption":"Went to this cool little park in Villa Hermosa. Met some little boys who asked me a lot of questions. Had some good ice cream. People flying kites and smoking.",
    "likes":13,
    "id":"1603890856447620617",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/21819667_474027239645205_6785711078257983488_n.jpg"
  },
  {
    "code":"BY1fChFDyDUGwwo2a03XNtuRGB0KaquZ7Z0vFg0",
    "caption":"He cocinado royitos primavera y salsa de pescado con ajo. Son muy frescos y saludables. Fritamos también algunos. Quedó super rico!",
    "likes":11,
    "id":"1600321754999234772",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/21435427_148499742406983_1846605155802284032_n.jpg"
  },
  {
    "code":"BYtRcgmjVBSAjxQl8tX2aTVlBshXEgzDsJO5Ks0",
    "caption":"The day we went to Parque Arvi. Wanted to go to Piedras Blancas but it was late. Instead, we walked around the park, enjoyed the waterfall, and rode the metrocable cars high up on this mountain.",
    "likes":13,
    "id":"1598010168728965202",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/21373447_1748501152119987_4440661666241183744_n.jpg"
  },
  {
    "code":"BYoLrDrDiYfVxSBBl32pNdZWqNu6QdwWJ1inRI0",
    "caption":"Visited the area of Santa Elena and had Sancocho de Gallina. Then went to Mirador for a nice view and hot chocolate!",
    "likes":13,
    "id":"1596577405295535647",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/21373655_1528101993941432_5989061727944179712_n.jpg"
  },
  {
    "code":"BYPILhODv9u94-JnhQ_2xK-z0mP0I1Z1HCc-G80",
    "caption":"One of the hardest climbs in Medellin but the view was all worth it.",
    "likes":13,
    "id":"1589525169440751470",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/21040891_233915227132561_7871328748824428544_n.jpg"
  },
  {
    "code":"BYL6HJ4jQNIIN-2ueCoKXrj4HuWIWGj5OlpMEk0",
    "caption":"Ajiaco is a soup common to Colombia, Cuba and Peru. In Bogotá, the capital of Colombia, the dish is popular and is typically made with chicken, three varieties of potatoes, and the Galinsoga parviflora herb.",
    "likes":7,
    "id":"1588618871924654920",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/21107869_148603512391115_8887904433560616960_n.jpg"
  },
  {
    "code":"BYI4dmJDWwc6WG8BZkXhLIG1z-b9AKJAwbjRU80",
    "caption":"Enjoying the day near university station with a walk in the botanical gardens and obleas!",
    "likes":10,
    "id":"1587767193071610908",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/21041609_490470101334159_1507830981740986368_n.jpg"
  },
  {
    "code":"BX5SaGTjJ3XJF-Nlg3d-rGy9HjB55CPSrrLeD00",
    "caption":"Found almost all the ingredients to make Pho down here. They even got fish sauce. Muahahaha.",
    "likes":14,
    "id":"1583377702311468503",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/20837451_115184175810402_2588524085755510784_n.jpg"
  },
  {
    "code":"BXsg55lDiPgINsLRsjboXT3t1k2TEpCLIhtByU0",
    "caption":"Beautiful city by night.",
    "likes":7,
    "id":"1579782285623698400",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/20837264_807345136057300_8034389376945356800_n.jpg"
  },
  {
    "code":"BXoRm1cDWkTWBCT6g4OxY50iICJgh6sSl7Xvo80",
    "caption":"I don't normally cook but I prefer fresh with color. Plenty of opps here for that. Mango, pineapple, kiwi, water apple with Arequipe and Lecherita.",
    "likes":10,
    "id":"1578589104903121171",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/20686490_1438078982947704_2888771179106009088_n.jpg"
  },
  {
    "code":"BXfjo0FD_4W9glkZOkzYMAPM_G0AsDHTMpGHqM0",
    "caption":"Feria de las flores.",
    "likes":9,
    "id":"1576135130929430038",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/20633361_499855353691134_3159697582993702912_n.jpg"
  },
  {
    "code":"BXYDWN6jXPJSAG-Xe6NSSEy_l8fhWyJbBgZH7g0",
    "caption":"El Salado Parque is a little slice of nature very accesible from Medellin from Envigado metro station and taking a metro bus. If you want a quick place to take a dip in the river without having to go too far, go here!",
    "likes":9,
    "id":"1574022790675002313",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/20582682_1698355123538573_4041078520569397248_n.jpg"
  },
  {
    "code":"BW-Xja2DNgVIBk_qTc6XKB5YzVf-LZGWpV5rPk0",
    "caption":"El mejor Vietnamita restaurante en Medellin! El sabor es tan rico y no otra restaurante compara.",
    "likes":14,
    "id":"1566793309447051285",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/20225910_2010558892497065_7089233913100369920_n.jpg"
  },
  {
    "code":"BW2WmLljxtd5Qxf0FSgr70Nb1TC_kWmR2iYpHU0",
    "caption":"Some really fat buñuelos and a fella who needs a power nap.",
    "likes":8,
    "id":"1564537301362482013",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/20184620_246235752549262_311328817643782144_n.jpg"
  },
  {
    "code":"BWz4NGnDjBjpBwNqkD2Pre0SpnrUud3tTrVkHo0",
    "caption":"It's always sunny in Philadelphia...err...Envigado.",
    "likes":12,
    "id":"1563840686683205731",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/20180502_125748988036914_7934259584602996736_n.jpg"
  },
  {
    "code":"BWxcPp8jBLtSfTopOVl2Wo5vC6xXtcxVxHtt5g0",
    "caption":"Comí una hamburguesa aqui.",
    "likes":7,
    "id":"1563154766807962349",
    "display_src":"https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/20214548_1270372066421986_2385805091127951360_n.jpg"
  },
];


export default posts
