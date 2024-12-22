// Create root and chart
// var root = am5.Root.new("chartdiv");

// root.setThemes([
//   am5themes_Animated.new(root)
// ]);

// var data = [{
//   "name": "Poker CK",
//   "children": [{
//     "name": "Rayin",
//     "image": "",
//     "children": [{
//       "name": "Nasar",
//       "value": 88,
//       "image": "",
//         "children": [{
//           "name": "Rushaid",
//           "value": 95
//         }]
//     }]
//   }, {
//     "name": "Alavi",
//     "children": [{
//         "name": "Salam",
//         "value": 62
//       }, {
//         "name": "Rafeeq",
//         "value": 4
//       }, {
//         "name": "Musthafa",
//         "value": 4
//       }, {
//         "name": "Abubakkar",
//         "value": 4
//       }, {
//         "name": "Samad",
//         "value": 4
//       }]
//   }, {
//     "name": "Beeran",
//     "children": [{
//         "name": "Shihab",
//         "value": 11,
//         "children": [{
//           "name": "Shibil",
//           "value": 95
//         }]
//       }, {
//         "name": "Adnan",
//         "value": 92
//       }, {
//         "name": "Riyas",
//         "value": 17,
//         "children": [{
//           "name": "Ihsan",
//           "value": 95
//         }]
//       }, {
//         "name": "Safvan",
//         "value": 17,
//         "children": [{
//           "name": "Ayash",
//           "value": 95,
//           "image": "https://safvan.com/favicon.png"
//         }]
//       }]
//   }, {
//     "name": "Razak",
//     "children": [{
//       "name": "Mansoor",
//       "value": 95
//     }]
//   }]
// }];


// var container = root.container.children.push(
//   am5.Container.new(root, {
//     width: am5.percent(100),
//     height: am5.percent(95),
//     layout: root.verticalLayout
//   })
// );

// var series = container.children.push(
//   am5hierarchy.Tree.new(root, {
//     singleBranchOnly: false,
//     downDepth: 1,
//     initialDepth: 10,
//     topDepth: 0,
//     valueField: "value",
//     categoryField: "name",
//     childDataField: "children",
//     orientation: "vertical"
//   })
// );


// series.data.setAll(data);
// series.set("selectedDataItem", series.dataItems[0]);

// series.nodes.template.setAll({
//   draggable: false,
//   // y: 300,
//   // oversizedBehavior: "none"
// });



// series.labels.template.setAll({
//   text: "{category}: [bold]{sum}[/]",
//   fontSize: 8
// });




// series.set("scrollbarX", am5.Scrollbar.new(root, {
//     orientation: "horizontal"
// }));
// series.set("scrollbarY", am5.Scrollbar.new(root, {
//     orientation: "vertical"
// }));




// active
// // Set up labels
// series.labels.template.setAll({
//   fill: am5.color(0x000000),
//   y: 25,
//   oversizedBehavior: "none"
// });



// // Use adapter to leave central node label centered
// series.labels.template.adapters.add("y", function(y, target) {
//   return target.dataItem.get("depth") == 0 ? 0 : y;
// });


 // series.zoomToDataItem(series.dataItems[0]);

// series.set("virtualization", true);
// =======================


// // Disable circles
// series.circles.template.setAll({
//   radius: 40,
//   forceHidden: true
// });

// series.outerCircles.template.setAll({
//   radius: 40,
//   forceHidden: true
// });

// // ... except for central node
// series.circles.template.adapters.add("forceHidden", function(forceHidden, target) {
//   return target.dataItem.get("depth") == 0 ? false : forceHidden;
// });

// // Set up labels
// series.labels.template.setAll({
//   fill: am5.color(0x000000),
//   y: 30,
//   oversizedBehavior: "none"
// });

// // Use adapter to leave central node label centered
// series.labels.template.adapters.add("y", function(y, target) {
//   return target.dataItem.get("depth") == 0 ? 0 : y;
// });

// Use template.setup function to prep up node with an image
// series.nodes.template.setup = function(target) {
//   target.events.on("dataitemchanged", function(ev) {
//     var icon = target.children.push(am5.Picture.new(root, {
//       width: 40,
//       height: 40,
//       centerX: am5.percent(50),
//       centerY: am5.percent(50),
//       src: ev.target.dataItem.dataContext.image
//     }));
//   });
// }

// series.set("selectedDataItem", series.dataItems[0]);

/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root and chart
var root = am5.Root.new("chartdiv");

root.setThemes([
  am5themes_Animated.new(root)
]);

var container = root.container.children.push(
  am5.Container.new(root, {
    width: am5.percent(100),
    height: 500,//am5.percent(100),
    // layout: root.verticalLayout
  })
);

var series = container.children.push(
  am5hierarchy.Tree.new(root, {
    singleBranchOnly: false,
    downDepth: 1,
    initialDepth: 5,
    topDepth: 0,
    valueField: "value",
    categoryField: "name",
    childDataField: "children",
    paddingBottom: 40,
    paddingTop: 60,
    orientation:"vertical"
  })
);


// Set up labels
series.labels.template.setAll({
  fill: am5.color(0x000000),
  y: 25,
  oversizedBehavior: "none",

  // text: "{category}: [bold]{sum}[/]",
  // fontSize: 14
});




// series.nodes.template.setAll({
//   draggable: true,
//   y: 900,
//   oversizedBehavior: "none"
// });


series.outerCircles.template.setAll({
  radius: 20
});
series.circles.template.setAll({
  radius: 19
});


// Use template.setup function to prep up node with an image
series.nodes.template.setup = function(target) {
  target.events.on("dataitemchanged", function(ev) {
    var icon = target.children.push(am5.Picture.new(root, {
      width: 40,
      height: 40,
      centerX: am5.percent(50),
      centerY: am5.percent(50),
      src: ev.target.dataItem.dataContext.image
    }));
  });
}
var data = [{
  "name": "ഇണ്ണീൻകുട്ടി",
  "image": "",
  "children": [{
    "name": "കുഞ്ഞാലൻ ചോലക്കൽ",
    "image": "",
    "children": [{
      "name": "പോക്കർ",
      "image": "https://safvan.com/app/ctree/assets/pkr.png",
      "children": [{
        "name": "രായിൻ",
        "value": 1,
        "image": "",
        "children": [{
          "name": "നാസർ",
          "value": 1,
          "image": "",
            "children": [{
              "name": "റുഷൈദ്",
              "value": 1
            }]
          }]
        }, {
          "name": "അലവി",
          "value": 1,
          "children": [{
              "name": "സലാം",
              "value": 1
            }, {
              "name": "റഫീഖ്",
              "value": 1
            }, {
              "name": "മുസ്തഫ",
              "value": 1
            }, {
              "name": "അബൂബക്കർ",
              "value": 1
            }, {
              "name": "സമദ്",
              "value": 1
            }]
        }, {
          "name": "ബീരാൻ",
          "value": 1,
          "children": [{
              "name": "ശിഹാബ്",
              "value": 1,
              "children": [{
                "name": "ഷിബിൽ",
                "value": 1
              }]
            }, {
              "name": "അദ്നാൻ",
              "value": 1
            }, {
              "name": "റിയാസ്",
              "value": 1,
              "children": [{
                "name": "ഇഹ്സാൻ",
                "value": 1
              }]
            }, {
              "name": "സഫുവാൻ",
              "value": 1,
              "image": "https://safvan.com/favicon.png",
              "children": [{
                "name": "അയാഷ്",
                "value": 1,
                "image": ""
              }]
            }]
          }, {
            "name": "റസാഖ്",
            "value": 1,
            "children": [{
              "name": "മൻസൂർ",
              "value":1
          }]
        }]
      },{
        "name": "മുഹമ്മദ്",
        "image": "https://safvan.com/app/ctree/assets/mhd.png",
        "children": [{
          "name": "കുഞ്ഞാലൻ",
          "image": "",
          "value":1,
          "children": [{
            "name": "ഷെരീഫ്",
            "value": 1,
            "image": "",
            "children": []
          },{
            "name": "അലവിക്കുട്ടി",
            "value": 1,
            "image": "",
            "children": []
          },{
            "name": "ലത്തീഫ്",
            "value": 1,
            "image": "",
            "children": []
          },{
            "name": "യൂസഫ്",
            "value": 1,
            "image": "",
            "children": []
          }]
        },{
          "name": "മൂസ",
          "image": "",
          "value": 1,
          "children": [{
            "name": "ഫിറോസ്",
            "value": 1,
            "image": "",
            "children": []
          },{
            "name": "നിയാസ്",
            "value": 1,
            "image": "",
            "children": []
          }]
        },{
          "name": "മൊയ്തീൻകുട്ടി",
          "image": "",
          "value":1,
          "children": []
        }]
      }]
    }]
  }];

series.data.setAll(data);

// series.set("selectedDataItem", series.dataItems[0]);

 series.zoomToDataItem(series.dataItems[0],2.5);

// series.set("virtualization", true);
