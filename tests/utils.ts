import type { Page } from "@playwright/test";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const prefetch = async () => {
  /* Fetch every page and wait for it to load */
  /* since Next.js first loads are slow */
  // process.stdout.write('\nPrefetching all pages ...');
  await fetch(`${baseURL}/`);
  await fetch(`${baseURL}/auth`);
  await fetch(`${baseURL}/projects`);
  await fetch(`${baseURL}/projects/1`);
  await fetch(`${baseURL}/projects/create`);
  // process.stdout.write('\r\x1b[1A');

  /* Initialize the database for one spec */
};

/* Setup the page before each test */
export const setup = async (page: Page) => {
  /* setup the database for single test */
};
