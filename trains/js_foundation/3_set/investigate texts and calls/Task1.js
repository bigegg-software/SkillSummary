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
 任务1：
 短信和通话记录中一共有多少电话号码？每个号码只统计一次。
 输出信息：
 "There are <count> different telephone numbers in the records.
 */
