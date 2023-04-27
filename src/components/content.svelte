<script>
    import supabase from "../utils/supabase";
    import {onMount} from "svelte";
  import Logout from "./logOutBtn.svelte";

  let userLoggedIn = false;

  async function checkUser() {
    const user = await supabase.auth.getUser();
    console.log(user);

    if (user.data.user == null) { 
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
  <h1>This is a protected content</h1>
  <Logout />
{/if}





