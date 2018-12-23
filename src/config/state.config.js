// var additional = {
//     nodes: [
//         {id: 0, label: 'Q0',color:'#EFF3FF'},
//         {id: 1, label: 'Q1',color:'#EFF3FF'},
//         {id: 2, label: 'Q2',color:'#EFF3FF'},
//         {id: 3, label: 'Q3',color:'#EFF3FF'},
//         {id: 4, label: 'Q4',color:'#EFF3FF'},
//         {id: 5, label: 'Q5',color:'#EFF3FF'},
//       ],
//     edges: [
//       {from: 0, to: 1,label:"0 / X,R"},
//       {from: 1, to: 1,label:"0 / 0,R"},
//       {from: 1, to: 2,label:"C / C,R"},
//       {from: 2, to: 2,label:"0 / 0,R"},
//       {from: 2, to: 3,label:"B / 0,L"},
//       {from: 3, to: 3,label:"0 / 0,L"},
//       {from: 3, to: 4,label:"C / C,L"},
//       {from: 4, to: 4,label:"0 / 0,L"},
//       {from: 4, to: 0,label:"X / X,R"},
//       {from: 0, to: 5,label:"C / X,R"},
//       ]
// };
var add = {
  nodes:[
        {id: 0, label: 'Q0',color:'#EFF3FF'},
        {id: 1, label: 'Q1',color:'#EFF3FF'},
        {id: 2, label: 'Q2',color:'#EFF3FF'},
  ],
  edges:[
      {from: 0, to: 1,label:"0 / B,R"},
      {from: 1, to: 1,label:"0 / 0,R"},
      {from: 1, to: 2,label:"C / 0,R"},
  ]
}

var sub = {
    nodes:[
        {id: 0, label: 'Q0',color:'#EFF3FF'},
        {id: 1, label: 'Q1',color:'#EFF3FF'},
        {id: 2, label: 'Q2',color:'#EFF3FF'},
        {id: 3, label: 'Q3',color:'#EFF3FF'},
        {id: 4, label: 'Q4',color:'#EFF3FF'},
        {id: 5, label: 'Q5',color:'#EFF3FF'},
        {id: 6, label: 'Q6',color:'#EFF3FF'},
        {id: 7, label: 'Q7',color:'#EFF3FF'},
    ],
    edges:[
        {from: 0, to: 0,label:"0 / 0,R"},
        {from: 0, to: 1,label:"C / C,R"},
        {from: 1, to: 1,label:"X / X,R"},
        {from: 1, to: 2,label:"0 / X,L"},
        {from: 2, to: 2,label:"X / X,L"},
        {from: 2, to: 3,label:"C / C,L"},
        {from: 3, to: 3,label:"0 / 0,L"},
        {from: 3, to: 4,label:"B / B,R"},
        {from: 4, to: 0,label:"0 / B,R"},
        {from: 4, to: 6,label:"C / B,R"},
        {from: 6, to: 6,label:"C / B,R  ||  X / B,R"},
        {from: 6, to: 7,label:"B / 0,R"},
        {from: 1, to: 5,label:"B / B,L"},
        {from: 5, to: 5,label:"X / B,L"},
        {from: 5, to: 7,label:"C / B,L"},
    ] 
}

var mult = {
    nodes:[
        {id: 0, label: 'Q0',color:'#EFF3FF'},
        {id: 1, label: 'Q1',color:'#EFF3FF'},
        {id: 2, label: 'Q2',color:'#EFF3FF'},
        {id: 3, label: 'Q3',color:'#EFF3FF'},
        {id: 4, label: 'Q4',color:'#EFF3FF'},
    ],
    edges:[
        {from: 0, to: 0,label:"0BB/B0B,RRN",input:"0BB"},
        {from: 0, to: 1,label:"1BB/BBB,RNN",input:"1BB"},
        {from: 1, to: 2,label:"0BB/0BB,NLN",input:"0BB"},
        {from: 1, to: 4,label:"BBB/BBB,NNN",input:"BBB"},
        {from: 2, to: 2,label:"00B/00B,NLN",input:"00B"},
        {from: 2, to: 3,label:"OBB/0BB,NRN",input:"0BB"},
        {from: 3, to: 1,label:"OBB/BBB,RNN",input:"0BB"},
        {from: 3, to: 3,label:"00B/000,NRR",input:"00B"},
    ] 
}


module.exports = {
    add:add,
    sub:sub,
    mult:mult,
}