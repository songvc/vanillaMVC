$(document).ready(function() {

  var actions = function(str) {
    var $main = $('.main');
    switch (str) {
      case 'red':
        $main.css('background-color', 'red');
        break;
      case 'blue':
        $main.css('background-color', 'blue');
        break;
      case 'green':
        $main.css('background-color', 'green');
        break;
      case 'clear':
        $main.css("background-color", 'clear');
        break;
    }
  }

  var model = {
    undoTask: [],
    redoTask: []
  }

  var controller = {
    paintRed: function() {
      model.undoTask.push('red');
			view.render();
    },
    paintBlue: function() {
      model.undoTask.push('blue');
			view.render();
    },
    paintGreen: function() {
      model.undoTask.push('green');
			view.render();
    },
    paintClear: function() {
      model.undoTask.push('clear');
			view.render();
    },
    getLength: function() {
      return model.undoTask.length;
    }
  }


  var view = {
    init: function() {
      console.log("init");
      var red = $('.red');
      var blue = $('.blue');
      var green = $('.green');
      var clear = $('.clear');
      var undo = $('.undo');
      var redo = $('.redo');

      red.click(function() {
        controller.paintRed();
      });

      blue.click(function() {
        controller.paintBlue();
      });

      green.click(function() {
        controller.paintGreen();
      });

      clear.click(function() {
        controller.paintClear();
      });

      undo.click(function() {
        var currentTask = model.undoTask.pop();
        model.redoTask.push(currentTask);
				console.log(model.undoTask);
      })

      redo.click(function() {
        var currentTask = model.redoTask.pop();
        model.undoTask.push(currentTask);
				console.log(model.undoTask);
      })

      view.render();

    },
    render: function() {
			console.log(model.undoTask);
			actions(model.undoTask[controller.getLength()-1]);
    }
  }

	view.init();

});
