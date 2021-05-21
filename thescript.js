async function createWidget() {
  // Create new empty ListWidget instance
  let listwidget = new ListWidget();

    // Set new background color
  listwidget.backgroundColor = new Color("#000000");

  // Add widget heading
  let heading = listwidget.addText("🚀Next🚀");
  heading.centerAlignText();
  heading.font = Font.lightSystemFont(25);
  heading.textColor = new Color("#ffffff");

  // Spacer between heading and launch date
  listwidget.addSpacer(15);
  
  // Fetch next launch date
  let launch = await getNextLaunch();
  let launchDateTime = getLaunchDateTime(launch);
  
  // Return the created widget
  return listwidget;
}

async function getNextLaunch() {
  // Query url
  const url = "https://api.spacexdata.com/v4/launches/next";

  // Initialize new request
  const request = new Request(url);

  // Execute the request and parse the response as json
  const response = await request.loadJSON();

  // Return the returned launch data
  return response;
}

function getLaunchDateTime(launchData) {
  // Parse launch date to new date object
  const launchDateTime = new Date(launchData.date_utc);
  return launchDateTime;
}


let widget = await createWidget();

// Check where the script is running
if (config.runsInWidget) {
  // Runs inside a widget so add it to the homescreen widget
  Script.setWidget(widget);
} else {
  // Show the medium widget inside the app
  widget.presentMedium();
}
Script.complete();
