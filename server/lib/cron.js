/*SyncedCron.add({
  name: 'New Day',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 24 hours');
  },
  job: function() {
    var numbersCrunched = 5 + 5;
    return numbersCrunched;
  }

});


//TODO At 12am, loop through db to check if commited is true for day event
//

//SyncedCron.start();
