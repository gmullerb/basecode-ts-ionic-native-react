//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

const context = require.context('../../src/e2e', true, /\.e2e\.js$/)

context.keys().map(context)
