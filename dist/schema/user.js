"use strict";
exports.__esModule = true;
exports.User = void 0;
var schema_1 = require("@nexus/schema");
exports.User = schema_1.objectType({
    name: 'User',
    definition: function (t) {
        t.id('id');
        t.string('email');
        t.string('name', { nullable: true });
        t.list.field('posts', { type: 'Post', nullable: true });
        t.field('profile', { type: 'Profile', nullable: true });
    }
});
//# sourceMappingURL=user.js.map