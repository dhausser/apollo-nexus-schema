import { objectType } from '@nexus/schema';

export const User = objectType({
  name: 'User',
  definition: (t) => {
    t.model.id()
    t.model.email()
    t.model.name()
    t.model.posts()
    t.model.profile()
  }
});

// export const User = objectType({
//   name: 'User',
//   definition: (t) => {
//     t.id('id');
//     t.string('email');
//     t.string('name', { nullable: true });
//     t.list.field('posts', { type: 'Post' , nullable: true });
//     t.field('profile', { type: 'Profile' , nullable: true });
//   }
// });
