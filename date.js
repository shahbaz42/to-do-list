
// console.log(module);

// Module {
//   id: 'C:\\Users\\Shahbaz\\Desktop\\todolist\\date.js',  path: 'C:\\Users\\Shahbaz\\Desktop\\todolist',
//   exports: {},
//   parent: Module {
//     id: '.',
//     path: 'C:\\Users\\Shahbaz\\Desktop\\todolist',
//     exports: {},
//     parent: null,
//     filename: 'C:\\Users\\Shahbaz\\Desktop\\todolist\\app.js',
//     loaded: false,
//     children: [ [Module], [Module], [Circular *1] ],
//     paths: [
//       'C:\\Users\\Shahbaz\\Desktop\\todolist\\node_modules',
//       'C:\\Users\\Shahbaz\\Desktop\\node_modules',
//       'C:\\Users\\Shahbaz\\node_modules',
//       'C:\\Users\\node_modules',
//       'C:\\node_modules'
//     ]
//   },
//   filename: 'C:\\Users\\Shahbaz\\Desktop\\todolist\\date.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'C:\\Users\\Shahbaz\\Desktop\\todolist\\node_modules',
//     'C:\\Users\\Shahbaz\\Desktop\\node_modules',
//     'C:\\Users\\Shahbaz\\node_modules',
//     'C:\\Users\\node_modules',
//     'C:\\node_modules'
//   ]
// }

module.exports.getDate = function(){

  const today = new Date();

  var options = {
    weekday: 'long',
    day: 'numeric',
    month : 'long'
  };

  return formattedDate = today.toLocaleDateString("en-US", options);

}

exports.dateWithMessage = function(message){
  const today = new Date();

  var options = {
    weekday: 'long',
    day: 'numeric',
    month : 'long'
  };

  return formattedDate = message + today.toLocaleDateString("en-US", options);
}

exports.monthName = function(){
  const today = new Date();

  var options = {
    month : 'long'
  };

  return formattedDate = today.toLocaleDateString("en-US", options);
}

// console.log(module);
// Module {
//   id: 'C:\\Users\\Shahbaz\\Desktop\\todolist\\date.js',  path: 'C:\\Users\\Shahbaz\\Desktop\\todolist',
//   exports: {
//     getDate: [Function (anonymous)],
//     dateWithMessage: [Function (anonymous)]
//   },
//   parent: Module {
//     id: '.',
//     path: 'C:\\Users\\Shahbaz\\Desktop\\todolist',
//     exports: {},
//     parent: null,
//     filename: 'C:\\Users\\Shahbaz\\Desktop\\todolist\\app.js',
//     loaded: false,
//     children: [ [Module], [Module], [Circular *1] ],
//     paths: [
//       'C:\\Users\\Shahbaz\\Desktop\\todolist\\node_modules',
//       'C:\\Users\\Shahbaz\\Desktop\\node_modules',
//       'C:\\Users\\Shahbaz\\node_modules',
//       'C:\\Users\\node_modules',
//       'C:\\node_modules'
//     ]
//   },
//   filename: 'C:\\Users\\Shahbaz\\Desktop\\todolist\\date.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'C:\\Users\\Shahbaz\\Desktop\\todolist\\node_modules',
//     'C:\\Users\\Shahbaz\\Desktop\\node_modules',
//     'C:\\Users\\Shahbaz\\node_modules',
//     'C:\\Users\\node_modules',
//     'C:\\node_modules'
//   ]
// }
