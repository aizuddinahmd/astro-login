<script>
    import { createClient } from "@supabase/supabase-js";
    import { navigate } from "svelte-routing";

    const supabase = createClient(
  "https://coesiygadkoukhixobzl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvZXNpeWdhZGtvdWtoaXhvYnpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNTg3MTQsImV4cCI6MTk5NzgzNDcxNH0.7gSQLnoHDTrr9kS6cjOSwWX9O53RUfVS60YsZ3GvILo"
);

async function signOut() {
  const { error } = await supabase.auth.signOut()
  navigate('/')
}
</script>

<section class="showcase">
  <button on:click={signOut}>Log Out</button>
</section>

<style>

  button {
    border-radius: 25px;
    width: 200px;
    padding: 4px;
    background-color: var(--color-primary);
    color: #ccc;
    cursor: pointer;
  }

</style>
