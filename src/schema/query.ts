import { objectType } from '@nexus/schema';
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.field('posts', {
      type: 'Post',
      list: true,
      async resolve(_root, _args, _context) {
        const posts = await prisma.post.findMany();
        console.log(posts);
        return posts;
      }
    })
    t.list.field('users', {
      type: 'User',
      async resolve(_root, _args, _context) {
        const users = await prisma.user.findMany();
        console.log(users);
        return users;
      }
    })
    t.list.field('profiles', {
      type: 'Profile',
      async resolve(_root, _args, _context) {
        const profiles = await prisma.profile.findMany();
        console.log(profiles);
        return profiles;
      }
    })
  }
})