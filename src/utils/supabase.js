import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://coesiygadkoukhixobzl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvZXNpeWdhZGtvdWtoaXhvYnpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNTg3MTQsImV4cCI6MTk5NzgzNDcxNH0.7gSQLnoHDTrr9kS6cjOSwWX9O53RUfVS60YsZ3GvILo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
