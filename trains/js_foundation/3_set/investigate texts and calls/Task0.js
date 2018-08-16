/**
 下面的文件将会从csv文件中读取读取短信与电话记录，
 你将在以后的课程中了解更多有关读取文件的知识。
 */

var fs = require('fs');
var CsvReadableStream = require('csv-reader');

var inputStream = fs.createReadStream('calls.csv', 'utf8');

inputStream
  .pipe(CsvReadableStream({parseNumbers: true, parseBooleans: true, trim: true}))
  .on('data', function (row) {
    console.log('A row arrived: ', row);
  })
  .on('end', function (data) {
    console.log('No more rows!');
  });

/**
 任务0:
 短信记录的第一条记录是什么？通话记录最后一条记录是什么？
 输出信息:
 "First record of texts, <incoming number> texts <answering number> at time <time>"
 "Last record of calls, <incoming number> calls <answering number> at time <time>, lasting <during> seconds"
 */
