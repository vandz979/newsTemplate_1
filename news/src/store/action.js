import * as actionType from "./actionType"

export const landingid = () => {

    const api1 = [
        {collectiontype:"home",
        collectionid: "123"},
        {collectiontype:"landing",
        collectionid: "456"}
    ]


    return {
        type: actionType.LANDINGID,
        id: api1
    }
}


export const data = (num) => {

    let api2 = [];
    if(num ==='456'){
        api2 = [
            {title:'Afridi used Sachin\'s bat for 37-ball ton',
            imgurl:'',
            intro:'Back in 1996, a young Shahid Afridi scored a blazing maiden century off 37 balls against Sri Lanka to create a new ODI world record. The former Pakistan blunderbuss reveals that the century was scored using Sachin Tendulkar\'s bat.',
            published:'2h',
            speech:3
        },
        {   title:'What a shocker! Country House wins Kentucky Derby via DQ',
            imgurl:'',
            intro:'Country House won the 145th Kentucky Derby on Saturday after Maximum Security became the first horse to be disqualified in the history of the storied race.',
            published:'1h',
            speech:2
        },
        {   title:'Bigger than Hawaii: $37 flights on sale',
            imgurl:'',
            intro:'',
            published:'2m',
            speech:''
        },
        {   title:'How to stay in Bali for $28 a night',
            imgurl:'',
            intro:'',
            published:'3m',
            speech:''
        }
        ]

    }    

    return {
        type: actionType.DATA,
        data: api2
    }
}