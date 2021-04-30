/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

'use strict';

const { downloadStream, uploadStream, transferStream } = require('./lib/stream');
const { downloadFile, uploadFile } = require('./lib/file');
const { uploadAEMMultipartFile } = require('./lib/aemmultipart');
const { getResourceHeaders } = require('./lib/headers');
const { AEMUpload } = require("./lib/aemupload");

module.exports = {
    downloadStream, uploadStream, transferStream,
    downloadFile, uploadFile,
    uploadAEMMultipartFile,
    getResourceHeaders,
    AEMUpload
};
