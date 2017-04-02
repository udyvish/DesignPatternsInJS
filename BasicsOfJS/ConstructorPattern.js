let Task = function(name) {
    this._name = name;
    this._isComplete = false;
    this.complete = function() {
        // all the objects have a its own copy of this function and data
        console.log(this._name + ' task is completing');
        this._isComplete = true;
    }
}

task1 = new Task('task1');//this works as a constructor
task2 = new Task('task2');
task1.complete();
task2.complete();

/*
new creates a copy of the function
assigns this to the context
returns this
*/
