import { objectType } from '@nexus/schema';

export const Post = objectType({
  name: 'Post',
  definition: (t) => {
    t.model.id()
    t.model.title()
    t.model.content()
    t.model.author()
    t.model.published()
    t.model.createdAt()
  }
});

// export const Post = objectType({
//   name: 'Post',
//   definition: (t) => {
//     t.id('id');
//     t.string('title');
//     t.string('content', { nullable: true });
//     t.field('author', {
//       type: 'User',
//       nullable: true,
//       args: {
//         authorId: stringArg({ required: true })
//       },
//       async resolve(_root, args, ctx) {
//         return ctx.prisma.user.findOne({
//           where: { id: args.authorId as any }
//         })
//       }
//     });
//     t.boolean('published');
//   }
// });
