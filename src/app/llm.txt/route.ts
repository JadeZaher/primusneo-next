import { redirect } from 'next/navigation';

// Mirror of /llms.txt under the alternate (non-standard) /llm.txt path.
// Some crawlers and tools probe the singular form — redirect them to the canonical file.
export function GET(): never {
  redirect('/llms.txt');
}
