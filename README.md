# node-httptransfer

Efficient File Transfer Module for NodeJS

## Stream support

Download a stream:

```javascript
const { downloadStream } = require('@nui/node-httptransfer');
async main() {
    const stream = fs.createWriteStream('test.png');
    await downloadStream('http://my.server.com/test.png', stream);
}
```

Upload a stream using PUT:

```javascript
const { uploadStream } = require('@nui/node-httptransfer');
async main() {
    const stream = fs.createReadStream('test.png');
    await uploadStream(stream, 'http://my.server.com/test.png');
}
```

Transfer a stream using PUT:

```javascript
const { transferStream } = require('@nui/node-httptransfer');
async main() {
    await transferStream('http://my.server.com/source.png', 'http://my.server.com/target.png');
}
```

## File support

Download a file:

```javascript
const { downloadFile } = require('@nui/node-httptransfer');
async main() {
    await downloadFile('http://my.server.com/test.png', 'test.png');
}
```

Upload a file using PUT:

```javascript
const { uploadFile } = require('@nui/node-httptransfer');
async main() {
    await uploadFile('test.png', 'http://my.server.com/test.png');
}
```

Upload a file to multiple URLs using PUT:

```javascript
const { uploadMultipartFile } = require('@nui/node-httptransfer');
async main() {
    await uploadMultipartFile('test.png', {
        urls: [ "http://my.server.com/test.png.1", "http://my.server.com/test.png.2" ],
        maxPartSize: 1000000
    });
}
```

Assuming `test.png` is 1,800,000 bytes this will upload the first 1,000,000 bytes to `http://my.server.com/test.png.1` and the next 800,000 bytes to `http://my.server.com/test.png.2`.
