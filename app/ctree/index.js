// Create root and chart
var root = am5.Root.new("chartdiv");

root.setThemes([
  am5themes_Animated.new(root)
]);

var container = root.container.children.push(
  am5.Container.new(root, {
    width: am5.percent(100),
    height: am5.percent(100),
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
    paddingTop: 30,
    orientation:"vertical"
  })
);

series.set("virtualization", true);

// Set up labels
series.labels.template.setAll({
  fill: am5.color(0x000000),
  y: 25,
  oversizedBehavior: "none",

  // text: "{category}: [bold]{sum}[/]",
  // fontSize: 14
});

series.nodes.template.setAll({
  draggable: true,
  y: 900,
  x: 100,
  oversizedBehavior: "none"
});


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

async function loadData() {
            try {
                // Fetch the JSON data
                const response = await fetch('http://safvan.com/app/ctree/data.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse the JSON data
                const data = await response.json();

                // Example of setting the data into your series object
                if (series && series.data) {
                    series.data.setAll(data); // Assuming `series` is already defined
                    console.log('Data successfully loaded and set.');
                } else {

                    console.log('Series object not initialized.');
                }
            } catch (error) {
                console.error('Error loading data:', error);
            }
        }
        // Load data
        loadData();

// series.set("selectedDataItem", series.dataItems[0]);

 // series.zoomToDataItem(series.dataItems[0],2.5);


