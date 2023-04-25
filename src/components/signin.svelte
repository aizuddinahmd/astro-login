<script>
    import { createClient } from "@supabase/supabase-js";
    import { navigate } from "svelte-routing";

    const supabase = createClient(
  "https://coesiygadkoukhixobzl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvZXNpeWdhZGtvdWtoaXhvYnpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNTg3MTQsImV4cCI6MTk5NzgzNDcxNH0.7gSQLnoHDTrr9kS6cjOSwWX9O53RUfVS60YsZ3GvILo"
);

    let email = "";
    let password="";

    async function handleSubmit(event) {
      event.preventDefault();

      console.log("clicked")

      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error(error);
        alert('Error logging in');
      } else {
        console.log(user);
        alert('Successfully logged in');
        navigate('/dashboard')
      }

    }
</script>

<section class="showcase">

  <form class="form" on:submit= {handleSubmit}>
    <h1>Astro Authentication</h1>
    <input type="email" bind:value={email} placeholder="Email address" />
    <input type="password"  bind:value={password} placeholder="Password" />
    <button type="submit">Log In</button>
    <a href="/signup">Not a member? Sign up</a>
  </form>
</section>

<style>
  .showcase {
    height: 100vh;
    background-color: var(--color-secondary);
    background-image: linear-gradient(
      to bottom,
      var(--color-primary),
      rgb(15 23 42 / 0)
    );
    padding: 30px;
  }

  .form {
    background-color: #fff;
    color: #0a192f;
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 700px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 3em;
    border-radius: 0.6em;
    box-shadow: 0 1.2em 2.4em rgba(111, 85, 0, 0.25);
  }

  .form input {
    border: 0.1rem solid #ccc;
    width: 200px;
    border-radius: 5px;
    font-size: 16px;
    padding: 2px;
    margin: 4px;
  }

  .form button {
    border-radius: 25px;
    width: 200px;
    padding: 4px;
    background-color: var(--color-primary);
    color: #ccc;
    cursor: pointer;
  }

  .form a {

    color: #0a192f;

  }

</style>
