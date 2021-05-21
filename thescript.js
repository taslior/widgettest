async function createWidget() {
  // Create new empty ListWidget instance
  let listwidget = new ListWidget();

  // Return the created widget
  return listwidget;
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
