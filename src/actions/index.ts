'use server';

import { redirect } from 'next/navigation';
import { db } from '@/db';
import { Project } from '@prisma/client';

export const createProject = async (formData: FormData) => {
  // validate input
  const title = formData.get('title') as string;
  const type = formData.get('type') as string;
  const agency = formData.get('agency') as string;
  const client = formData.get('client') as string;
  const description = formData.get('description') as string;
  const summary = formData.get('summary') as string;
  const year = parseInt(formData.get('year') as string);
  // const tags = formData.get('tags').split(',');
  // const newtags = formData
  //   .get('newtags')
  //   .split(',')
  //   .map((tag) => tag.trim());

  // create new record in the database
  const project = await db.project.create({
    data: {
      title,
      type,
      agency,
      client,
      description,
      summary,
      year,
    },
  });

  // redirect back to route
  redirect('/');
};

export const updateProject = async (id: number, formData: FormData) => {
  // validate input
  const title = formData.get('title') as string;
  const type = formData.get('type') as string;
  const agency = formData.get('agency') as string;
  const client = formData.get('client') as string;
  const description = formData.get('description') as string;
  const summary = formData.get('summary') as string;
  const year = parseInt(formData.get('year') as string);
  // const tags = formData.get('tags').split(',');
  // const newtags = formData
  //   .get('newtags')
  //   .split(',')
  //   .map((tag) => tag.trim());

  // update record in the database
  const project = await db.project.update({
    where: { id },
    data: {
      title,
      type,
      agency,
      client,
      description,
      summary,
      year,
    },
  });

  // redirect to project page
  redirect(`/projects/${id}`);
};

export const deleteProject = async (id: number) => {
  await db.project.delete({ where: { id } });

  // redirect back to route
  redirect('/');
};
