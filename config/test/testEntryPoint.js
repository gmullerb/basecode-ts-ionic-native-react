//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

import './enzyme.conf'

const tsMainContext = require.context('../../src/main/back', true, /\.ts(x?)$/)
tsMainContext.keys().forEach(tsMainContext);

const tsxMainContext = require.context('../../src/main/front', true, /\.tsx$/)
tsxMainContext.keys().forEach(tsxMainContext);

const jsTestsContext = require.context('../../src/test', true, /\.test\.js(x?)$/)
jsTestsContext.keys().forEach(jsTestsContext);
