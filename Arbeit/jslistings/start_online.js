function start(){
    read(); // read the latest changes.
    
    // add listener for a custom event 'add-data' (when the user tries to add new changes)
    addEventListener('add-data', callback);

	callback = function(){
        update();   
	}
}