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
 
var events = {
    select: function(event) {
        var { nodes, edges } = event;
        console.log(nodes,edges)
    }
}

module.exports = {
    options,
    events,
    optionsgraph
}