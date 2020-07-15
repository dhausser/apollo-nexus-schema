import { objectType, stringArg } from '@nexus/schema';
import { PrismaClient } from "@prisma/client"
import { resolve } from 'path';

const prisma = new PrismaClient()

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('createPost', {
      type: 'CreatePostResponse',
      args: { 
        title: stringArg({ required: true }),
        content: stringArg({ required: true }),
      },
      async resolve(_root, args, _context) {
        const post = await prisma.post.create({
          data: {
            title: args.title,
            content: args.content,
            author: {
                connect: { email: 'alice@prisma.io' },
            }
          }
        })
        console.log(post);
        // return post;
        const posts = await prisma.post.findMany();
        return { success: !!post, message: post.title, posts };
      }
    });
    t.field('createUser', {
      type: 'CreateUserResponse',
      args: {
        email: stringArg({ required: true }),
        name: stringArg({ required: false }),
      },
      async resolve(_root, args, _context) {
        const user = await prisma.user.create({
          data: {
            email: args.email,
            name: args.name,
          }
        });
        console.log(user);
        return { success: !!user, message: `${user.email} created`, user }
      }
    });
  }
})

export const CreatePostResponse = objectType({
  name: 'CreatePostResponse',
  definition(t) {
    t.boolean('success');
    t.string('message', { nullable: true });
    t.field('posts', { type: 'Post', nullable: true, list: true })
  }
})

export const CreateUserResponse = objectType({
  name: 'CreateUserResponse',
  definition(t) {
    t.boolean('success');
    t.string('message', { nullable: true });
    t.field('users', { type: 'User', nullable: true, list: true })
  }
})
