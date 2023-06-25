const Config = {
    start: () => console.log('App has started'),
    update: () => console.log('App has updated'),
  }
  
//   ---making the program singleton by ensuring it is immutable.

  // We freeze the object to prevent new properties being added and existing properties being modified or removed
  Object.freeze(Config)
  
  Config.start() // "App has started"
  Config.update() // "App has updated"
  
  Config.name = "Robert" // We try to add a new key
  console.log(Config.name)