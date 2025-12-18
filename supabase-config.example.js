// Copy this file to `supabase-config.js` and fill in your project values.
// IMPORTANT: don't commit `supabase-config.js` to version control — add it to .gitignore

window.SUPABASE_URL = 'https://sojqynzunkacykxqhkgy.supabase.co';
window.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvanF5bnp1bmthY3lreHFoa2d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwNDY5ODksImV4cCI6MjA4MTYyMjk4OX0.6gyYxbsRxoQQ97xVf1ENCtz0Qt1AlLS0NUr5-BDibSk';

// Optionally export a function to validate presence
export function validate() {
  if (!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY) throw new Error('Missing Supabase config');
}


  // const SUPABASE_URL = window.SUPABASE_URL || 'https://sojqynzunkacykxqhkgy.supabase.co';
  // const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvanF5bnp1bmthY3lreHFoa2d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwNDY5ODksImV4cCI6MjA4MTYyMjk4OX0.6gyYxbsRxoQQ97xVf1ENCtz0Qt1AlLS0NUr5-BDibSk';
  // const useSupabase = SUPABASE_URL !== 'https://sojqynzunkacykxqhkgy.supabase.co' && SUPABASE_ANON_KEY !== 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvanF5bnp1bmthY3lreHFoa2d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwNDY5ODksImV4cCI6MjA4MTYyMjk4OX0.6gyYxbsRxoQQ97xVf1ENCtz0Qt1AlLS0NUr5-BDibSk';


  // const SUPABASE_URL = 'https://sojqynzunkacykxqhkgy.supabase.co';
  // const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvanF5bnp1bmthY3lreHFoa2d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwNDY5ODksImV4cCI6MjA4MTYyMjk4OX0.6gyYxbsRxoQQ97xVf1ENCtz0Qt1AlLS0NUr5-BDibSk';