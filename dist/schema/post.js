"use strict";
exports.__esModule = true;
exports.Post = void 0;
var schema_1 = require("@nexus/schema");
exports.Post = schema_1.objectType({
    name: 'Post',
    definition: function (t) {
        t.id('id');
        t.string('title');
        t.string('content', { nullable: true });
        t.field('author', { type: 'User', nullable: true });
        t.boolean('published');
    }
});
//# sourceMappingURL=post.js.map