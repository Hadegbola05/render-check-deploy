import * as Supabase from '@supabase/supabase-js'

const supabaseUrl = 'https://wjoadisvmjvfnnqgrdqz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqb2FkaXN2bWp2Zm5ucWdyZHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyNDQ2ODcsImV4cCI6MjA5ODgyMDY4N30.EjovAbKal1xXffqzcNmfF1zHdQHLnQgp5kNrpZ2PTgA';

export const supabase = Supabase.createClient(supabaseUrl, supabaseAnonKey)
