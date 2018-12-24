var add = {
  nodes:[
        {id: 0, label: 'Q0',color:'#EFF3FF'},
        {id: 1, label: 'Q1',color:'#EFF3FF'},
        {id: 2, label: 'Q2',color:'#ff4f5d',final:true},
  ],
  edges:[
      {from: 0, to: 1,label:"0 / B,R",input:"0"},
      {from: 1, to: 1,label:"0 / 0,R",input:"0"},
      {from: 1, to: 2,label:"C / 0,R",input:"C"},
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
        {id: 7, label: 'Q7',color:'#ff4f5d',final:true},
    ],
    edges:[
        {from: 0, to: 0,label:"0 / 0,R",input:"0"},
        {from: 0, to: 1,label:"C / C,R",input:"C"},

        {from: 1, to: 1,label:"X / X,R",input:"X"},
        {from: 1, to: 2,label:"0 / X,L",input:"0"},
        
        {from: 2, to: 2,label:"X / X,L",input:"X"},
        {from: 2, to: 3,label:"C / C,L",input:"C"},
        
        {from: 3, to: 3,label:"0 / 0,L",input:"0"},
        {from: 3, to: 4,label:"B / B,R",input:"B"},
        
        {from: 4, to: 0,label:"0 / B,R",input:"0"},
        {from: 4, to: 6,label:"C / B,R",input:"C"},
        
        {from: 6, to: 6,label:"C / B,R  ||  X / B,R",input:"X"},
        {from: 6, to: 6,label:"C / B,R  ||  X / B,R",input:"C"},
        {from: 6, to: 7,label:"B / 0,R"},
        
        {from: 1, to: 5,label:"B / B,L",input:"B"},
        
        {from: 5, to: 5,label:"X / B,L",input:"X"},
        {from: 5, to: 7,label:"C / B,L",input:"C"},
    ] 
}

var mult = {
    nodes:[
        {id: 0, label: 'Q0',color:'#EFF3FF'},
        {id: 1, label: 'Q1',color:'#EFF3FF'},
        {id: 2, label: 'Q2',color:'#EFF3FF'},
        {id: 3, label: 'Q3',color:'#EFF3FF'},
        {id: 4, label: 'Q4',color:'#ff4f5d',final:true},
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

var fac = {
    nodes:[
        {id: 0, label: 'Q0',color:'#EFF3FF'},
        {id: 1, label: 'Q1',color:'#EFF3FF'},
        {id: 2, label: 'Q2',color:'#EFF3FF'},
        {id: 3, label: 'Q3',color:'#EFF3FF'},
        {id: 4, label: 'Q4',color:'#EFF3FF'},
        {id: 5, label: 'Q5',color:'#EFF3FF'},
        {id: 6, label: 'Q6',color:'#EFF3FF'},
        {id: 7, label: 'Q7',color:'#EFF3FF'},
        {id: 8, label: 'Q8',color:'#EFF3FF'},
        {id: 9, label: 'Q9',color:'#EFF3FF'},
        {id: 10, label: 'Q10',color:'#ff4f5d',final:true},
    ],
    edges:[
        {from: 0, to: 0,label:"0BB/00B,RRN",input:"0BB"},
        {from: 0, to: 1,label:"1BB/BBB,LLN",input:"1BB"},
        {from: 1, to: 2,label:"00B/0BB,NLR",input:"00B"},
        {from: 1, to: 2,label:"BBB/0BB,NNN",input:"BBB"},
        {from: 2, to: 2,label:"00B/000,LNR",input:"00B"},
        {from: 2, to: 2,label:"000/000,LNR",input:"000"},
        {from: 2, to: 3,label:"B0B/B0B,RLN",input:"B0B"},
        {from: 2, to: 7,label:"0BB/0BB,NRN",input:"0BB"},
        {from: 3, to: 3,label:"00B/000,RNR",input:"00B"},
        {from: 3, to: 3,label:"000/000,RNR",input:"000"},
        {from: 3, to: 2,label:"B0B/B0B,LLN",input:"B0B"},
        {from: 3, to: 4,label:"0BB/0BB,NRN",input:"0BB"},
        {from: 4, to: 5,label:"00B/0BB,NRL",input:"00B"},
        {from: 5, to: 5,label:"000/000,RNL",input:"000"},
        {from: 5, to: 5,label:"B00/000,RNL",input:"B00"},
        {from: 5, to: 6,label:"B0B/B0B,LRN",input:"B0B"},
        {from: 5, to: 10,label:"0B0/0B0,NNN",input:"0B0"},
        {from: 6, to: 6,label:"00B/00B,NRN",input:"00B"},
        {from: 6, to: 2,label:"0BB/0BB,NLR",input:"0BB"},
        {from: 7, to: 8,label:"00B/0BB,NRL",input:"00B"},
        {from: 8, to: 8,label:"000/000,LNL",input:"000"},
        {from: 8, to: 8,label:"B00/000,LNL",input:"B00"},
        {from: 8, to: 9,label:"B0B/B0B,RRN",input:"B0B"},
        {from: 8, to: 10,label:"0B0/0B0,NNN",input:"0B0"},
        {from: 9, to: 9,label:"00B/00B,NRN",input:"00B"},
        {from: 9, to: 3,label:"0BB/0BB,NLR",input:"0BB"},
    ] 
}

var div = {
    nodes:[
        {id: 0, label: 'Q0',color:'#EFF3FF'},
        {id: 1, label: 'Q1',color:'#EFF3FF'},
        {id: 2, label: 'Q2',color:'#EFF3FF'},
        {id: 3, label: 'Q3',color:'#EFF3FF'},
        {id: 4, label: 'Q4',color:'#EFF3FF'},
        {id: 5, label: 'Q5',color:'#EFF3FF'},
        {id: 6, label: 'Q6',color:'#EFF3FF'},
        {id: 7, label: 'Q7',color:'#EFF3FF'},
        {id: 8, label: 'Q8',color:'#EFF3FF'},
        {id: 9, label: 'Q9',color:'#EFF3FF'},
        {id: 10, label: 'Q10',color:'#EFF3FF'},
        {id: 11, label: 'Q11',color:'#EFF3FF'},
        {id: 12, label: 'Q12',color:'#ff4f5d',final:true},
    ],
    edges:[
        {from: 0, to: 1,label:"0 / X,R",input:"0"},
        {from: 0, to: 5,label:"1 / 1,R",input:"1"},
        
        {from: 1, to: 1,label:"0 / 0,R",input:"0"},
        {from: 1, to: 2,label:"1 / 1,R",input:"1"},
        
        {from: 2, to: 2,label:"0 / 0,R",input:"0"},
        {from: 2, to: 3,label:"X / X,L || 1 / 1,L",input:"X"},
        {from: 2, to: 3,label:"X / X,L || 1 / 1,L",input:"1"},
        
        {from: 3, to: 4,label:"0 / X,L",input:"0"},
        {from: 3, to: 9,label:"1 / B,L",input:"1"},
        
        {from: 4, to: 4,label:"0 / 0,L || 1 / 1,L",input:"0"},
        {from: 4, to: 4,label:"0 / 0,L || 1 / 1,L",input:"1"},
        {from: 4, to: 0,label:"X / X,R",input:"X"},

        {from: 5, to: 5,label:"X / X,R || 1 / 1,R || 0 / 0,R",input:"0"},
        {from: 5, to: 5,label:"X / X,R || 1 / 1,R || 0 / 0,R",input:"1"},
        {from: 5, to: 5,label:"X / X,R || 1 / 1,R || 0 / 0,R",input:"X"},
        {from: 5, to: 6,label:"B / 0,L",input:"B"},


        {from: 6, to: 6,label:"0 / 0,L",input:"0"},
        {from: 6, to: 7,label:"1 / 1,L",input:"1"},


        {from: 7, to: 7,label:"X / X,L || 0 / 0,L",input:"X"},
        {from: 7, to: 7,label:"X / X,L || 0 / 0,L",input:"0"},
        {from: 7, to: 8,label:"1 / 1,L",input:"1"},


        {from: 8, to: 8,label:"X / 0,L",input:"X"},
        {from: 8, to: 0,label:"B / B,R",input:"B"},


        {from: 9, to: 10,label:"X / B,L || 0 / B,L",input:"0"},
        {from: 9, to: 10,label:"X / B,L || 0 / B,L",input:"X"},

        {from: 10, to: 10,label:"X / B,L || 0 / B,L",input:"X"},
        {from: 10, to: 10,label:"X / B,L || 0 / B,L",input:"0"},
        {from: 10, to: 11,label:"B / B,R",input:"B"},


        {from: 11, to: 11,label:"X / B,R || 0 / B,R || B / B,R",input:"X"},
        {from: 11, to: 11,label:"X / B,R || 0 / B,R || B / B,R",input:"0"},
        {from: 11, to: 11,label:"X / B,R || 0 / B,R || B / B,R",input:"B"},
        {from: 11, to: 12,label:"1 / B,R",input:"1"},
    ] 
}

module.exports = {
    add:add,
    sub:sub,
    mult:mult,
    fac:fac,
    div:div
}