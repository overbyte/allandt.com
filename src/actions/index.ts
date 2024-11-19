'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { db } from '@/db';

interface FormFields {
  title: string | undefined;
  type: string | undefined;
  agency: string | undefined;
  client: string | undefined;
  description: string | undefined;
  summary: string | undefined;
  year: number | undefined;
}

const validateForm = ({
  title,
  type,
  agency,
  client,
  description,
  summary,
  year,
}: FormFields): { message: string } | undefined => {
  if (typeof title !== 'string' || title?.length < 3) {
    return { message: 'Title is too short' };
  }

  if (typeof type !== 'string' || type?.length < 3) {
    return { message: 'Type is too short' };
  }

  if (typeof agency !== 'string' || agency?.length < 3) {
    return { message: 'Agency is too short' };
  }

  if (typeof client !== 'string' || client?.length < 3) {
    return { message: 'Client is too short' };
  }

  if (typeof description !== 'string' || description?.length < 3) {
    return { message: 'Description is too short' };
  }

  if (typeof summary !== 'string' || summary?.length < 3) {
    return { message: 'Summary is too short' };
  }

  if (typeof year !== 'number') {
    return { message: 'Year is not a number' };
  }
};

export const createProject = async (
  formState: { message: string },
  formData: FormData
) => {
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

  const errorMessage = validateForm({
    title,
    type,
    agency,
    client,
    description,
    summary,
    year,
  });
  if (errorMessage) {
    return errorMessage;
  }

  // create new record in the database
  await db.project.create({
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

  // dump existing cache for homepage
  revalidatePath('/');

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
  await db.project.update({
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

  // dump existing cache for homepage
  // we need to do this because title and summary appear on homepage
  revalidatePath('/');

  // redirect to project page
  redirect(`/projects/${id}`);
};

export const deleteProject = async (id: number) => {
  await db.project.delete({ where: { id } });

  // dump existing cache for homepage
  revalidatePath('/');

  // redirect back to route
  redirect('/');
};
