const fs = require('fs');

const readStream = fs.createReadStream('./blogs/blog3.txt', {encoding: 'utf8'});   // first argument takes the file from where we want to read data, to send it down to the stream. 2nd argument by default converts the chunk/buffer data to string format, we don't need to do it explicitly
const writeStream = fs.createWriteStream('./blogs/blog4.txt');      // in which file we want to write the buffer that  is coming along stream

// .on on our readStream --> is an event listener, so you know like in JavaScript where we might have a button and we listen to a click event it's similar to that but this time we're listening to a data event 'on' this 'readStream' and that is basically every time we receive a buffer of data from this stream. 
// readStream.on('data', (chunk)=>{
//     console.log('----NEW CHUNK----\n\n\n');
//     console.log(chunk);
//     writeStream.write('\n---NEW CHUNK---\n');
//     writeStream.write(chunk);
// })


// using piping to read and write
// opening up this read stream reading data and every time we get a chunk under the hood its piping that into the write streams. Doing the same thing as done above, but this is much easier to write
readStream.pipe(writeStream);




// INTRODUCTION TO STREAMS AND BUFFERS
// we've seen how node can read data or files from a computer. But sometimes those files could be very very very large and therefore it would, take a long time to read them and we could end up waiting awhile to do something with the data before it's even been fully read. //Now to combat this we could use something known as streams.
//  So using streams we can start using the data before it's fully been read, so streams work in a similar way to real
// live streams, imagine we had some kind of huge water basin or a source of water
// somewhere and then also imagine we had a pool that needs filling up with water from that basin. Now one option would be
// to get a huge tank fill it up completely with the full amount of water we need to
// fill the pool and then deliver it to the pool and empty all of the water in it at once to fill it, now that means that you
// have to wait a really long time while the tank fills up initially and then
// deliver it to the pool all at once. Now the other option would be to have a
// stream that delivers the water and that way it fills up the pool a little bit at
// a time but we can start using the pool with a bit of water in it, almost straight away so the same logic applies
// with data. So now imagine we have a huge large data source some kind of huge file
// and we want to read it we could wait until all of it's been read and then do something with it,
// but that could take a long time or we could pass the data a bit at a time through a stream and this way small
// chunks of data are packaged up into what's known as a buffer and then sent down the stream every time the buffer
// fills. So every time we get a new chunk of data from the buffer we can start using it. Now you get this in action when
// you're probably streaming something on Netflix or YouTube where little bits of data are sent to the browser a bit at a
// time so you can start watching straight away without having to wait for the whole video to load initially, so that's
// the theory behind streams and buffers.