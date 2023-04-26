<script>
    import supabase from "../utils/supabase";
    import {onMount} from "svelte";
  import Logout from "./logout.svelte";

  let userLoggedIn = false;

  async function checkUser() {
    const user = await supabase.auth.getUser();
    console.log(user);

    if (user.data.user == null) { // Check if running in the browser
      window.location.href = "/";
    } else {
        userLoggedIn = true
    }
  }
  
  onMount(() => {
    checkUser()
  })
</script>

{#if userLoggedIn}
  <h1>Content</h1>
  <Logout />
{/if}





