<script>
   import supabase from "../utils/supabase";
   
    let email = "";
    let password="";

    async function handleSubmit(event) {
    event.preventDefault();

    console.log("clicked")
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error(error);
        alert('Error signing up');
      } else {
        console.log(user);
        alert('Successfully signed up');
        window.location.href = "/";
      }
  }
</script>

<section class="showcase">

  <form class="form" on:submit= {handleSubmit}>
    <h1>Sign Up</h1>
    <input type="email" bind:value={email} placeholder="Email address" />
    <input type="password"  bind:value={password} placeholder="Password" />
    <button type="submit">Sign Up</button>
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
</style>
