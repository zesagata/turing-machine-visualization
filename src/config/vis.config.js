 var options = {
    nodes:{
      size:40,
      color:{
        border:'#EFF3FF'
      }
    },
    layout: {
        hierarchical: false,
        randomSeed: 20,
        improvedLayout:true,
    },
    edges: {
      color: {
        color:'#EFF3FF',
        highlight:'#D0CD94',
        hover: '#D0CD94',
        inherit: 'from',
        opacity:1.0
      },
      font: {
        color: '#ffffff',
        size: 14, // px
        face: 'arial',
        background: 'none',
        strokeWidth: 0, // px
        strokeColor: '#ffffff',
        align: 'horizontal',
      }
    },
    physics:{
      enabled:false
    }
};

let optionsgraph = JSON.parse(JSON.stringify(options));
optionsgraph.layout.randomSeed = 25;

let optionsfac = JSON.parse(JSON.stringify(options));
optionsfac.layout.randomSeed = 30;
var events = {
    select: function(event) {
        var { nodes, edges } = event;
        console.log(nodes,edges)
    }
}

let optionsdiv = JSON.parse(JSON.stringify(options));
optionsdiv.layout.randomSeed = 2.5;

module.exports = {
    options,
    events,
    optionsgraph,
    optionsfac,
    optionsdiv
}