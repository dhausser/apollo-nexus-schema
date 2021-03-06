import { queryType } from '@nexus/schema';

export const Query = queryType({
  definition(t) {
    t.crud.user()
    t.crud.users()
    t.crud.post()
    t.crud.posts()
    t.crud.profile()
    t.crud.profiles()
  }
})

// export const Query = queryType({
//   definition(t) {
//     t.list.field('posts', {
//       type: 'Post',
//       async resolve(_root, _args, ctx) {
//         return ctx.prisma.post.findMany({
//           include: { author: true }
//         });
//       }
//     })
//     t.list.field('users', {
//       type: 'User',
//       async resolve(_root, _args, ctx) {
//         return ctx.prisma.user.findMany({
//           include: { 
//             posts: true,
//             profile: true,
//           }
//         });
//       }
//     })
//     t.list.field('profiles', {
//       type: 'Profile',
//       async resolve(_root, _args, ctx) {
//         return ctx.prisma.profile.findMany({
//           include: {
//             user: true
//           }
//         });
//       }
//     })
//   }
// })