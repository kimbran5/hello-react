import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eslchzhqritmhzzcgkmh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzbGNoemhxcml0bWh6emNna21oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNTU3NzEsImV4cCI6MTk5MzczMTc3MX0.R_xZRAZ2-_j1PFu51cKmBfvW77F22PeMLZQ_Niktgl0';

export const supabase = createClient(supabaseUrl, supabaseKey)