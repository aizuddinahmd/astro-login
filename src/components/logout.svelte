<script>
    import supabase from "../utils/supabase";

async function signOut() {
  const { error } = await supabase.auth.signOut()
  window.location.href = "/";
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
