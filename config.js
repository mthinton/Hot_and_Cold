exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://mthinton:1234Europe!@ds035786.mlab.com:35786/highscores';
exports.PORT = process.env.PORT || 8081;