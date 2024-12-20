// Create root and chart
var root = am5.Root.new("chartdiv");

root.setThemes([
  am5themes_Animated.new(root)
]);

var data = [{
  "name": "Poker CK",
  "children": [{
    "name": "Rayin",
    "image": "https://safvan.com/favicon.png",
    "children": [{
      "name": "Nasar",
      "value": 88,
      "image": "https://safvan.com/favicon.png",
        "children": [{
          "name": "Rushaid",
          "value": 95
        }]
    }]
  }, {
    "name": "Alavi",
    "children": [{
        "name": "Salam",
        "value": 62
      }, {
        "name": "Rafeeq",
        "value": 4
      }, {
        "name": "Musthafa",
        "value": 4
      }, {
        "name": "Abubakkar",
        "value": 4
      }, {
        "name": "Samad",
        "value": 4
      }]
  }, {
    "name": "Beeran",
    "children": [{
        "name": "Shihab",
        "value": 11,
        "children": [{
          "name": "Shibil",
          "value": 95
        }]
      }, {
        "name": "Adnan",
        "value": 92
      }, {
        "name": "Riyas",
        "value": 17,
        "children": [{
          "name": "Ihsan",
          "value": 95
        }]
      }, {
        "name": "Safvan",
        "value": 17,
        "children": [{
          "name": "Ayash",
          "value": 95,
          "image": "https://safvan.com/favicon.png"
        }]
      }]
  }, {
    "name": "Razak",
    "children": [{
      "name": "Mansoor",
      "value": 95
    }]
  }]
}];


var container = root.container.children.push(
  am5.Container.new(root, {
    width: am5.percent(100),
    height: am5.percent(95),
    layout: root.verticalLayout
  })
);

var series = container.children.push(
  am5hierarchy.Tree.new(root, {
    singleBranchOnly: false,
    downDepth: 1,
    initialDepth: 10,
    topDepth: 0,
    valueField: "value",
    categoryField: "name",
    childDataField: "children",
    orientation: "vertical"
  })
);


series.data.setAll(data);
series.set("selectedDataItem", series.dataItems[0]);

series.nodes.template.setAll({
  draggable: false,
  // y: 300,
  // oversizedBehavior: "none"
});

// series.labels.template.setAll({
//   text: "{category}: [bold]{sum}[/]",
//   fontSize: 14
// });






// Set up labels
series.labels.template.setAll({
  fill: am5.color(0x000000),
  y: 25,
  oversizedBehavior: "none"
});

// // Use adapter to leave central node label centered
// series.labels.template.adapters.add("y", function(y, target) {
//   return target.dataItem.get("depth") == 0 ? 0 : y;
// });
